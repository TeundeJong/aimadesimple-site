import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "€299",
    period: "setup",
    features: [
      "1 AI widget",
      "Up to 10 sources",
      "Basic workflow (1 action)",
      "Email support",
    ],
    href: "/checkout/starter",
  },
  {
    name: "Pro",
    price: "€1,490",
    period: "project",
    features: [
      "Full bot + integrations",
      "Document Analyzer",
      "2 weeks optimization",
      "Slack support",
    ],
    href: "/checkout/pro",
  },
  {
    name: "White-Label Add-on",
    price: "€990",
    period: "one-off",
    features: [
      "Branding & domain",
      "Multiple tenants/clients",
      "Reseller billing options",
      "Sample reseller contract",
    ],
    href: "/checkout/whitelabel",
  },
];

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Pricing</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl">
        Fixed packages — upgrade or expand anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/80"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{tier.name}</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                <span className="text-slate-600 dark:text-slate-300 ml-1">
                  /{tier.period}
                </span>
              </div>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-6 w-full" asChild>
                <a href={tier.href} target="_blank" rel="noreferrer">
                  Buy
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 mt-4">
        * Monthly hosting and API usage billed separately. Ask for recurring MRR options.
      </p>
    </main>
  );
}
