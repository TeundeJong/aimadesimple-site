// app/api/stripe/checkout/route.ts
import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getPricingCurrencyFromRequestHeaders } from "@/lib/geo";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const recurringPriceId = typeof body?.recurringPriceId === "string" ? body.recurringPriceId : "";
  const setupPriceId = typeof body?.setupPriceId === "string" ? body.setupPriceId : "";
  const productType = typeof body?.productType === "string" ? body.productType : "";
  const requestedCurrency = body?.currency === "EUR" || body?.currency === "AUD" ? (body.currency as "EUR" | "AUD") : null;

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin;
  const success = `${baseUrl}/dashboard?success=1`;
  const cancel = `${baseUrl}/products?canceled=1`;

  // Backwards-compatible behavior: if the caller passes price IDs, use them as-is.
  // (Keeps existing flows stable.)
  let resolvedRecurringPriceId = recurringPriceId;
  let resolvedSetupPriceId = setupPriceId;

  // New minimal path: WhatsApp Assistant checkout without hardcoding price IDs.
  // We resolve the active recurring monthly price using Stripe product metadata.
  // Decide currency early so we can select the correct Stripe account.
  const inferredCurrency = requestedCurrency ?? (await getPricingCurrencyFromRequestHeaders());

  const stripe = getStripe(inferredCurrency);
  if (!stripe) return new Response("Stripe not configured", { status: 400 });

  if (!resolvedRecurringPriceId && productType === "whatsapp_assistant") {
    const currency = inferredCurrency;
    const region = currency === "AUD" ? "au" : "eu";

    // Prefer the most specific search possible based on existing Stripe metadata.
    // NOTE: Stripe search syntax is strict; keep query simple and safe.
    const query = `active:'true' AND metadata['product_type']:'whatsapp_assistant' AND metadata['region']:'${region}'`;
    const products = await stripe.products.search({ query, limit: 1 });
    const product = products.data?.[0];

    if (!product) {
      return new Response("Product not found in Stripe (whatsapp_assistant)", { status: 400 });
    }

    // If default_price exists and matches our needs, use it.
    if (typeof product.default_price === "string" && product.default_price) {
      const dp = await stripe.prices.retrieve(product.default_price);
      const okCurrency = (dp.currency || "").toLowerCase() === currency.toLowerCase();
      const okRecurring = !!dp.recurring && dp.recurring.interval === "month";
      if (okCurrency && okRecurring) {
        resolvedRecurringPriceId = dp.id;
      }
    }

    // Otherwise, pick the best recurring monthly price for the product.
    if (!resolvedRecurringPriceId) {
      const priceList = await stripe.prices.list({ product: product.id, active: true, limit: 20 });
      const candidates = priceList.data
        .filter((p) => !!p.recurring && p.recurring?.interval === "month")
        .filter((p) => (p.currency || "").toLowerCase() === currency.toLowerCase());

      // Choose the lowest monthly price in that currency (stable, defensive choice).
      candidates.sort((a, b) => (a.unit_amount ?? 0) - (b.unit_amount ?? 0));
      const picked = candidates[0];
      if (!picked) {
        return new Response("Recurring monthly price not found in Stripe for this region", { status: 400 });
      }
      resolvedRecurringPriceId = picked.id;
    }
  }

  if (!resolvedRecurringPriceId) {
    return new Response("Missing recurringPriceId", { status: 400 });
  }

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [{ price: resolvedRecurringPriceId, quantity: 1 }];
  if (resolvedSetupPriceId) line_items.push({ price: resolvedSetupPriceId, quantity: 1 });

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items,
    success_url: success,
    cancel_url: cancel,
    automatic_tax: { enabled: true },
    allow_promotion_codes: true,
    metadata: {
      ...(productType ? { product_type: productType } : {}),
      ...(requestedCurrency ? { requested_currency: requestedCurrency } : {}),
    },
  });

  return Response.json({ url: session.url });
}

// Types import (keep at bottom to avoid ESM complaints)
import type Stripe from "stripe";
