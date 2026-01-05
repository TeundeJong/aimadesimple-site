// app/api/stripe/webhook/route.ts
import { NextRequest } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
  // 1) Read raw body (required for Stripe signature verification)
  const rawBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return new Response("Missing signature or webhook secret", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
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

        // If you want: send email, or write to Supabase "orders" table, etc.
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
