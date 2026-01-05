// app/api/stripe/checkout/route.ts
import { NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) return new Response("Stripe not configured", { status: 400 });

  const { recurringPriceId, setupPriceId } = await req.json();

  const success = `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=1`;
  const cancel = `${process.env.NEXT_PUBLIC_APP_URL}/products?canceled=1`;

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    { price: recurringPriceId, quantity: 1 },
  ];
  if (setupPriceId) line_items.push({ price: setupPriceId, quantity: 1 });

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items,
    success_url: success,
    cancel_url: cancel,
    automatic_tax: { enabled: true },
    allow_promotion_codes: true,
  });

  return Response.json({ url: session.url });
}

// Types import (keep at bottom to avoid ESM complaints)
import type Stripe from "stripe";
