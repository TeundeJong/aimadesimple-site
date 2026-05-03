// app/api/stripe/webhook/route.ts
import { NextRequest } from "next/server";
import Stripe from "stripe";

import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// NOTE: We intentionally do NOT initialize Stripe at module load.
// This route may receive webhooks from either the EU or AU Stripe account.
// We determine which webhook secret matches, then instantiate Stripe with the corresponding secret key.

async function sendPostmarkEmail(params: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  textBody: string;
  replyTo?: string;
}) {
  const res = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": params.apiKey,
    },
    body: JSON.stringify({
      From: params.from,
      To: params.to,
      Subject: params.subject,
      TextBody: params.textBody,
      ReplyTo: params.replyTo,
      MessageStream: "outbound",
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Postmark request failed (${res.status}): ${text}`);
  }
}

export async function POST(req: NextRequest) {
  // 1) Read raw body (required for Stripe signature verification)
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  if (!sig) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  // Support both legacy single-secret and per-region secrets.
  // We try each configured secret until one verifies the signature.
  const secretCandidates: Array<{ secret: string | undefined; currency: "EUR" | "AUD" | null }> = [
    { secret: process.env.STRIPE_WEBHOOK_SECRET, currency: null },
    { secret: process.env.STRIPE_EU_WEBHOOK_SECRET, currency: "EUR" },
    { secret: process.env.STRIPE_AU_WEBHOOK_SECRET, currency: "AUD" },
  ];

  let event: Stripe.Event | null = null;
  let stripe = null as ReturnType<typeof getStripe>;

  for (const cand of secretCandidates) {
    if (!cand.secret) continue;
    const client = getStripe(cand.currency);
    if (!client) continue;
    try {
      event = client.webhooks.constructEvent(rawBody, sig, cand.secret);
      stripe = client;
      break;
    } catch {
      // Try next secret
    }
  }

  if (!event || !stripe) {
    console.error("❌ Webhook signature verification failed (no matching secret)");
    return new Response("Webhook Error: signature verification failed", { status: 400 });
  }

  // 2) Handle the events you care about on the website
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        // Example: read some fields (useful for CRM/leads/email receipts)
        const customerEmail =
          (session.customer_details?.email as string | undefined) ??
          (session.customer_email as string | undefined);
        const amountTotal = session.amount_total; // in cents
        const currency = session.currency;

        console.log("✅ Checkout completed", {
          customerEmail,
          amountTotal,
          currency,
          mode: session.mode,
          subscription: session.subscription,
        });

        // Owner notification (best-effort): send an internal email so onboarding can be scheduled immediately.
        // IMPORTANT: Never fail the webhook if email sending fails; Stripe expects a 2xx response.
        try {
          const apiKey = process.env.POSTMARK_API_KEY;
          const fromContact = process.env.POSTMARK_FROM_CONTACT;
          const businessInbox = process.env.POSTMARK_FROM_AUTH || process.env.POSTMARK_FROM_CONTACT;

          if (apiKey && fromContact && businessInbox) {
            // Optional: fetch line items to include product name/price details
            let lineSummary = "";
            try {
              const items = await stripe.checkout.sessions.listLineItems(session.id, { limit: 10 });
              const parts = items.data
                .map((li) => {
                  const desc = li.description || "Line item";
                  const qty = li.quantity || 1;
                  return `${qty}× ${desc}`;
                })
                .filter(Boolean);
              if (parts.length) lineSummary = parts.join("\n");
            } catch {
              // Ignore – line items are not required for the notification.
            }

            const createdAt = session.created ? new Date(session.created * 1000).toISOString() : new Date().toISOString();
            const internalSubject = `New purchase — CivicAI Solutions (${(session.metadata?.product_type as string) || "subscription"})`;
            const internalText = [
              "New purchase completed on the website:",
              customerEmail ? `Customer email: ${customerEmail}` : "Customer email: (not provided)",
              session.customer_details?.name ? `Name: ${session.customer_details.name}` : undefined,
              `Currency: ${currency || ""}`,
              typeof amountTotal === "number" ? `Amount total: ${amountTotal} (minor units)` : undefined,
              lineSummary ? "" : undefined,
              lineSummary ? `Items:\n${lineSummary}` : undefined,
              "",
              `When: ${createdAt}`,
              "",
              "ACTION: Book onboarding / contact them now.",
            ]
              .filter(Boolean)
              .join("\n");

            await sendPostmarkEmail({
              apiKey,
              from: fromContact,
              to: businessInbox,
              subject: internalSubject,
              textBody: internalText,
              replyTo: customerEmail || undefined,
            });
          }
        } catch (err) {
          console.error("⚠️ Purchase notification email failed:", err);
        }
        break;
      }

      case "invoice.paid":
      case "invoice.payment_failed":
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        // For the website you may not need deeper handling.
        // Logging is often enough.
        console.log(`ℹ️ Website webhook: ${event.type}`);
        break;
      }

      default:
        // Ignore other events
        break;
    }

    return new Response("OK", { status: 200 });
  } catch (err: any) {
    console.error("⚠️ Webhook handler error:", err);
    return new Response("Handler error", { status: 500 });
  }
}
