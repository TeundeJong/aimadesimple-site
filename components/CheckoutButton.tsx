"use client";

import { useState } from "react";
import Button from "@/components/ui/button";

type Props = {
  currency: "EUR" | "AUD";
  className?: string;
};

/**
 * Minimal, safe checkout trigger.
 * - Uses existing /api/stripe/checkout route.
 * - Does NOT introduce a new pricing config system.
 */
export default function CheckoutButton({ currency, className }: Props) {
  const [loading, setLoading] = useState(false);

  async function startCheckout() {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productType: "whatsapp_assistant", currency }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || "Checkout failed");
      }

      const data = (await res.json()) as { url?: string };
      if (!data?.url) throw new Error("Missing checkout URL");
      window.location.href = data.url;
    } catch (err) {
      // Keep UX minimal and safe. Do not leak internal details.
      alert("Could not start checkout. Please try again or contact us.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      className={className}
      size="lg"
      onClick={startCheckout}
      disabled={loading}
      aria-busy={loading}
    >
      {loading ? "Redirecting…" : "Pay & start onboarding"}
    </Button>
  );
}
