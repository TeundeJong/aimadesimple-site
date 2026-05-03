// lib/stripe.ts
import Stripe from "stripe";

/**
 * Stripe can be configured in two ways:
 * 1) Legacy single-account env var: STRIPE_SECRET_KEY
 * 2) Multi-account env vars (preferred): STRIPE_EU_SECRET_KEY + STRIPE_AU_SECRET_KEY
 *
 * We keep this helper backwards-compatible so existing deployments won't break.
 */

const cache = new Map<string, Stripe>();

export type SupportedCurrency = "EUR" | "AUD";

function pickStripeSecretKey(currency?: SupportedCurrency | null): string | null {
  // Backwards-compatible: if a single key is provided, use it.
  const legacy = process.env.STRIPE_SECRET_KEY;
  if (legacy) return legacy;

  // Multi-account setup: select key by currency.
  if (currency === "AUD") return process.env.STRIPE_AU_SECRET_KEY || null;
  if (currency === "EUR") return process.env.STRIPE_EU_SECRET_KEY || null;

  // Fallback: prefer EU if present (keeps behavior predictable).
  return process.env.STRIPE_EU_SECRET_KEY || process.env.STRIPE_AU_SECRET_KEY || null;
}

export function getStripe(currency?: SupportedCurrency | null) {
  const key = pickStripeSecretKey(currency);
  if (!key) return null;

  const existing = cache.get(key);
  if (existing) return existing;

  const client = new Stripe(key, { apiVersion: "2024-06-20" });
  cache.set(key, client);
  return client;
}
