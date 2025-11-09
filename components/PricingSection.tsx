import React from "react";
import { Check, X, Sparkles } from "lucide-react";

/**
 * PricingSection – reusable pricing table for multiple product variants.
 * Usage:
 *   <PricingSection variant="chatbot" />
 *   <PricingSection variant="support" />
 *   <PricingSection variant="docs" />
 *   <PricingSection variant="automate" />
 */

export type Variant = "chatbot" | "support" | "docs" | "automate";

const catalog: Record<Variant, {
  title: string;
  subtitle: string;
  disclaimer?: string;
  plans: Array<{
    name: string;
    price: string;
    period: string;
    highlight?: boolean;
    setup?: string;
    features: Array<string | { label: string; ok: boolean }>
  }>;
}> = {
  /** White‑label Chatbot (je eerdere prijzen) */
  chatbot: {
    title: "White‑Label Chatbot",
    subtitle: "Niet de goedkoopste of duurste — gewoon fair, schaalbaar en aantrekkelijk.",
    disclaimer: "Jaarlijks afnemen? 15% korting. Overage: $0.75/100 AI‑berichten of $0.90 per succesvolle AI‑resolutie.",
    plans: [
      {
        name: "Starter",
        price: "$39",
        period: "/mo",
        setup: "$199 setup",
        features: [
          { label: "1 kennisbron (RAG)", ok: true },
          { label: "3.000 AI‑berichten / maand", ok: true },
          { label: "Branding verwijderen", ok: false },
          { label: "Meerdere sites/bots", ok: false },
          "Basis analytics",
          { label: "SSO (SAML/OIDC)", ok: false },
          "E‑mail support",
        ],
      },
      {
        name: "Growth",
        price: "$99",
        period: "/mo",
        highlight: true,
        setup: "$399 setup",
        features: [
          { label: "5 kennisbronnen", ok: true },
          { label: "15.000 AI‑berichten / maand", ok: true },
          { label: "Branding verwijderen", ok: true },
          { label: "Meerdere bots", ok: true },
          "Uitgebreide analytics + exports",
          { label: "SSO (SAML/OIDC)", ok: false },
          "E‑mail + chat support",
        ],
      },
      {
        name: "Scale / White‑Label",
        price: "$249",
        period: "/mo",
        setup: "$999 setup",
        features: [
          { label: "Volledig whitelabel (logo, domein)", ok: true },
          { label: "20 kennisbronnen", ok: true },
          { label: "50.000 AI‑berichten / maand", ok: true },
          { label: "Onbeperkt sites/bots (multi‑tenant)", ok: true },
          "Aangepaste integraties & webhooks",
          { label: "SSO (SAML/OIDC)", ok: true },
          "SLA / prioriteitssupport",
        ],
      },
    ],
  },

  /** CivicAI Support – supportbot + ticketing focus (iets hoger geprijsd) */
  support: {
    title: "CivicAI Support",
    subtitle: "Conversational AI voor klantenservice, met hand‑off en tickets.",
    plans: [
      {
        name: "Starter",
        price: "$49",
        period: "/mo",
        setup: "$249 setup",
        features: [
          { label: "FAQ‑flow + hand‑off e‑mail", ok: true },
          { label: "1 kanaal (widget)", ok: true },
          { label: "Branding verwijderen", ok: false },
          { label: "Ticketing", ok: false },
          "Basis analytics",
          { label: "SSO", ok: false },
        ],
      },
      {
        name: "Growth",
        price: "$129",
        period: "/mo",
        highlight: true,
        setup: "$399 setup",
        features: [
          { label: "Meerdere kanalen (widget + e‑mail)", ok: true },
          { label: "Agent hand‑off + eenvoudige tickets", ok: true },
          { label: "Branding verwijderen", ok: true },
          { label: "Integraties (Zapier/Webhooks)", ok: true },
          "Uitgebreide analytics",
          { label: "SSO", ok: false },
        ],
      },
      {
        name: "Scale",
        price: "$299",
        period: "/mo",
        setup: "$999 setup",
        features: [
          { label: "Volledige ticketing + SLA", ok: true },
          { label: "Omnichannel (widget, e‑mail, WhatsApp)", ok: true },
          { label: "Workflows & auto‑routing", ok: true },
          { label: "Integraties (CRM/HubSpot/Zendesk)", ok: true },
          { label: "SSO (SAML/OIDC)", ok: true },
        ],
      },
    ],
  },

  /** CivicAI Docs – document/contract analyse */
  docs: {
    title: "CivicAI Docs",
    subtitle: "Contract‑ & handleiding‑analyse met risico’s en actiepunten.",
    plans: [
      {
        name: "Starter",
        price: "$29",
        period: "/mo",
        setup: "$149 setup",
        features: [
          { label: "Tot 3 documenten / maand", ok: true },
          { label: "Basis extracties (clausules/risico’s)", ok: true },
          { label: "Branding verwijderen", ok: false },
          "Basis exports (PDF)",
        ],
      },
      {
        name: "Pro",
        price: "$79",
        period: "/mo",
        highlight: true,
        setup: "$249 setup",
        features: [
          { label: "Tot 40 documenten / maand", ok: true },
          { label: "Uitgebreide extracties + scores", ok: true },
          { label: "Branding verwijderen", ok: true },
          "CSV/JSON exports + webhooks",
        ],
      },
      {
        name: "Business",
        price: "$199",
        period: "/mo",
        setup: "$599 setup",
        features: [
          { label: "Tot 200 documenten / maand", ok: true },
          { label: "Team‑workflows & review", ok: true },
          { label: "Integraties (Drive/SharePoint)", ok: true },
          { label: "SSO + auditlog", ok: true },
        ],
      },
    ],
  },

  /** CivicAI Automate – workflow‑automation & actions */
  automate: {
    title: "CivicAI Automate",
    subtitle: "Workflow‑automatisering en integraties op basis van AI‑acties.",
    plans: [
      {
        name: "Starter",
        price: "$79",
        period: "/mo",
        setup: "$299 setup",
        features: [
          { label: "2 automatiseringen", ok: true },
          { label: "Webhook‑acties", ok: true },
          { label: "Branding verwijderen", ok: false },
          { label: "Scheduler/cron", ok: false },
        ],
      },
      {
        name: "Growth",
        price: "$149",
        period: "/mo",
        highlight: true,
        setup: "$499 setup",
        features: [
          { label: "10 automatiseringen", ok: true },
          { label: "Integraties (Zapier/Make)", ok: true },
          { label: "Branding verwijderen", ok: true },
          { label: "Scheduler/cron + retries", ok: true },
        ],
      },
      {
        name: "Scale",
        price: "$349",
        period: "/mo",
        setup: "$1.499 setup",
        features: [
          { label: "Onbeperkt automatiseringen", ok: true },
          { label: "Directe API‑integraties (CRM/ERP)", ok: true },
          { label: "Queue & monitoring", ok: true },
          { label: "SSO + RBAC", ok: true },
        ],
      },
    ],
  },
};

function FeatureItem({ f }: { f: string | { label: string; ok: boolean } }) {
  if (typeof f === "string") {
    return (
      <li className="flex items-start gap-2 text-gray-700">
        <Check className="mt-0.5" size={16} /> {f}
      </li>
    );
  }
  return (
    <li className="flex items-start gap-2 text-gray-700">
      {f.ok ? (
        <Check className="mt-0.5 text-green-700" size={16} />
      ) : (
        <X className="mt-0.5 text-gray-400" size={16} />
      )}
      <span>{f.label}</span>
    </li>
  );
}

function PlanCard({ p }: { p: (typeof catalog)[Variant]["plans"][number] }) {
  return (
    <div className={`rounded-2xl border shadow-sm p-6 bg-white flex flex-col ${p.highlight ? "ring-2 ring-black" : ""}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold">{p.name}</h3>
        {p.highlight && (
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-black text-white"><Sparkles size={14}/> Most popular</span>
        )}
      </div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-3xl font-bold">{p.price}</span>
        <span className="text-gray-600">{p.period}</span>
      </div>
      {p.setup && <div className="text-gray-700 mb-3">{p.setup}</div>}
      <ul className="space-y-2 mb-5">
        {p.features.map((f, i) => (
          <FeatureItem key={i} f={f} />
        ))}
      </ul>
      <button
        className={`mt-auto w-full rounded-xl px-4 py-2 font-medium border ${p.highlight ? "bg-black text-white border-black" : "bg-white hover:bg-gray-50"}`}
        onClick={() => alert(`TODO: link Stripe Checkout for ${p.name}`)}
      >
        Kies {p.name}
      </button>
    </div>
  );
}

export default function PricingSection({ variant = "chatbot" as Variant }) {
  const data = catalog[variant];
  return (
    <section className="py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">{data.title}</h2>
        <p className="text-gray-600 mt-2">{data.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {data.plans.map((p) => (
          <PlanCard key={p.name} p={p} />
        ))}
      </div>

      {data.disclaimer && (
        <p className="text-sm text-gray-500 mt-4 text-center">* {data.disclaimer}</p>
      )}
    </section>
  );
}
