import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "€299",
    period: "setup",
    features: ["1 AI widget", "Tot 10 bronnen", "1 basis workflow", "E-mail support"],
    href: "/contact",
  },
  {
    name: "Pro",
    price: "€1.490",
    period: "project",
    features: ["Volledige bot + integraties", "Document Analyzer", "2 weken optimalisatie", "Slack support"],
    href: "/contact",
    highlight: true,
  },
  {
    name: "White-Label",
    price: "€990",
    period: "one-off",
    features: ["Eigen branding & domein", "Meerdere tenants", "Reseller opties", "Voorbeeldcontract"],
    href: "/contact",
  },
];

export default function PricingPage() {
  return (
    <main className="container-narrow py-16">
      <h1 className="text-3xl">Pricing</h1>
      <p className="muted mt-3 max-w-2xl">Vaste pakketten — upgrade of breid uit wanneer je wilt.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {tiers.map((t) => (
          <Card key={t.name} className={`rounded-2xl ${t.highlight ? "ring-2 ring-slate-900 dark:ring-white" : ""}`}>
            <CardHeader>
              <CardTitle className="text-lg">{t.name}</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-bold">{t.price}</span>
                <span className="muted ml-1">/{t.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5" /> <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" asChild>
                <a href={t.href}>Start</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-xs muted mt-4">* Hosting en API-usage maandelijks. Vraag naar MRR-opties.</p>
    </main>
  );
}
