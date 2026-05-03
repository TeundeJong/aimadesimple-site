// components/PricingSection.tsx
"use client";

import React from "react";
import { prices } from "@/lib/stripePrices";

export type Variant = "chatbot" | "support" | "docs" | "automate";

type PlanKey =
  | "starter"
  | "growth"
  | "scale"
  | "pro"
  | "business";

type DisplayPlan = {
  key: PlanKey;
  name: string;
  monthly: string;   // pretty label for UI
  yearly: string;    // pretty label for UI
  setup: string;     // pretty label for UI
  features: string[];
  highlight?: boolean;
};

const catalog: Record<Variant, { title: string; subtitle: string; plans: DisplayPlan[] }> = {
  chatbot: {
    title: "White-Label Chatbot",
    subtitle: "Fair, scalable pricing — with a 15% discount on yearly billing.",
    plans: [
      {
        key: "starter",
        name: "Starter",
        monthly: "€39/mo",
        yearly: "€397.80/yr (15% off)",
        setup: "€199 setup",
        features: [
          "1 AI source (RAG)",
          "Up to 3,000 messages/month",
          "Basic analytics",
          "Remove branding (upgrade)",
        ],
      },
      {
        key: "growth",
        name: "Growth",
        monthly: "€99/mo",
        yearly: "€1,009.80/yr (15% off)",
        setup: "€399 setup",
        features: [
          "5 AI sources",
          "Up to 15,000 messages/month",
          "Remove branding",
          "Webhooks/API integrations",
          "Extended analytics",
        ],
        highlight: true,
      },
      {
        key: "scale",
        name: "Scale / White-Label",
        monthly: "€249/mo",
        yearly: "€2,538.60/yr (15% off)",
        setup: "€999 setup",
        features: [
          "Full white-label (logo, domain)",
          "Unlimited bots (multi-tenant)",
          "Custom integrations",
          "SSO + SLA",
        ],
      },
    ],
  },

  support: {
    title: "CivicAI Support",
    subtitle: "AI helpdesk with ticketing — yearly plan saves 15%.",
    plans: [
      {
        key: "starter",
        name: "Starter",
        monthly: "€49/mo",
        yearly: "€499.80/yr (15% off)",
        setup: "€249 setup",
        features: ["FAQ flow + email hand-off", "1 channel (widget)", "Basic analytics"],
      },
      {
        key: "growth",
        name: "Growth",
        monthly: "€129/mo",
        yearly: "€1,317.60/yr (15% off)",
        setup: "€399 setup",
        features: ["Multi-channel", "Agent hand-off + ticketing", "Integrations", "Advanced analytics"],
        highlight: true,
      },
      {
        key: "scale",
        name: "Scale",
        monthly: "€299/mo",
        yearly: "€3,046.20/yr (15% off)",
        setup: "€999 setup",
        features: ["Omnichannel + CRM", "Workflows & auto-routing", "SSO", "SLA"],
      },
    ],
  },

  docs: {
    title: "CivicAI Docs",
    subtitle: "Contract & manual analysis — yearly plan saves 15%.",
    plans: [
      {
        key: "starter",
        name: "Starter",
        monthly: "€29/mo",
        yearly: "€295.80/yr (15% off)",
        setup: "€149 setup",
        features: ["Up to 3 docs/month", "Clause & risk extraction", "PDF export"],
      },
      {
        key: "pro",
        name: "Pro",
        monthly: "€79/mo",
        yearly: "€805.80/yr (15% off)",
        setup: "€249 setup",
        features: ["Up to 40 docs/month", "Detailed scoring", "Webhooks", "CSV/JSON exports"],
        highlight: true,
      },
      {
        key: "business",
        name: "Business",
        monthly: "€199/mo",
        yearly: "€2,029.80/yr (15% off)",
        setup: "€599 setup",
        features: ["Up to 200 docs/month", "Team workflows & review", "Integrations (Drive/SharePoint)", "SSO + audit log"],
      },
    ],
  },

  automate: {
    title: "CivicAI Automate",
    subtitle: "Workflow automation & integrations — yearly plan saves 15%.",
    plans: [
      {
        key: "starter",
        name: "Starter",
        monthly: "€79/mo",
        yearly: "€805.80/yr (15% off)",
        setup: "€299 setup",
        features: ["2 automations", "Webhook actions", "Basic scheduler"],
      },
      {
        key: "growth",
        name: "Growth",
        monthly: "€149/mo",
        yearly: "€1,519.80/yr (15% off)",
        setup: "€499 setup",
        features: ["10 automations", "Zapier/Make", "Scheduler + retries", "Remove branding"],
        highlight: true,
      },
      {
        key: "scale",
        name: "Scale",
        monthly: "€349/mo",
        yearly: "€3,553.80/yr (15% off)",
        setup: "€1,499 setup",
        features: ["Unlimited automations", "Direct API integrations", "Monitoring/queues", "SSO + RBAC"],
      },
    ],
  },
};

async function goCheckout(recurringPriceId: string, setupPriceId?: string) {
  const res = await fetch("/api/stripe/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ recurringPriceId, setupPriceId }),
  });
  const data = await res.json();
  if (data.url) window.location.href = data.url;
  else alert("Checkout error");
}

export default function PricingSection({ variant = "chatbot" as Variant }) {
  const [yearly, setYearly] = React.useState(false);
  const data = catalog[variant];

  // Helper to resolve price IDs from config
  function idsFor(planKey: PlanKey) {
    const set = (prices as any)[variant][planKey];
    if (!set) return null;
    return { recurring: yearly ? set.year : set.month, setup: set.setup };
    // monthly -> set.month, yearly -> set.year
  }

  return (
    <section className="py-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">{data.title}</h2>
        <p className="text-gray-600 mt-2">{data.subtitle}</p>

        {/* Toggle */}
        <div className="inline-flex mt-5 items-center gap-2 rounded-xl border px-2 py-1">
          <button
            className={`px-3 py-1 rounded-lg text-sm ${!yearly ? "bg-black text-white" : "hover:bg-gray-100"}`}
            onClick={() => setYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-3 py-1 rounded-lg text-sm ${yearly ? "bg-black text-white" : "hover:bg-gray-100"}`}
            onClick={() => setYearly(true)}
          >
            Yearly <span className="ml-1 text-xs opacity-80">(15% off)</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {data.plans.map((p) => {
          const ids = idsFor(p.key);
          const priceLabel = yearly ? p.yearly : p.monthly;
          return (
            <div
              key={p.key}
              className={`rounded-2xl border shadow-sm p-6 bg-white flex flex-col ${p.highlight ? "ring-2 ring-black" : ""}`}
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="flex items-baseline gap-2 mt-2 mb-2">
                <span className="text-3xl font-bold">{priceLabel}</span>
              </div>
              <div className="text-gray-700 mb-4">{p.setup}</div>
              <ul className="space-y-2 mb-5 text-gray-700">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto w-full rounded-xl px-4 py-2 font-medium border ${p.highlight ? "bg-black text-white border-black" : "bg-white hover:bg-gray-50"}`}
                onClick={() => {
                  if (!ids) return alert("Stripe price IDs not configured yet.");
                  goCheckout(ids.recurring, ids.setup);
                }}
              >
                Subscribe {yearly ? "Yearly" : "Monthly"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
