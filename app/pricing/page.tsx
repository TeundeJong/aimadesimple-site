"use client";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export default function PricingPage() {
  const { t } = useLang();
  const plans = [
    { key: "starter", featured: false },
    { key: "pro", featured: true },
    { key: "enterprise", featured: false },
  ] as const;

  function tArray(t: any, key: string): string[] {
  const val = t(key);
  if (Array.isArray(val)) return val;
  if (typeof val === "string") return val.split(";").map((s) => s.trim());
  return [];
}

  return (
    <main>
      <Section title={t("pricing.title")} subtitle={t("pricing.subtitle")}>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map(({ key, featured }) => (
            <Card
              key={key}
              className={`p-6 transition hover:shadow-md ${featured ? "ring-2 ring-slate-300" : ""}`}
            >
              <h3 className="text-lg font-semibold">{t(`pricing.plans.${key}.name`)}</h3>
              <p className="mt-2 text-3xl font-semibold">{t(`pricing.plans.${key}.price`)}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
     {tArray(t, `pricing.plans.${key}.items`).map((it, i) => (
  <li key={i} className="flex items-start gap-2">
    <span className="mt-0.5">•</span>
    <span>{it}</span>
  </li>
))}
              </ul>

              {!!t(`pricing.plans.${key}.disclaimer`) &&
                t(`pricing.plans.${key}.disclaimer`) !== `pricing.plans.${key}.disclaimer` && (
                <p className="mt-2 text-xs text-slate-500">{t(`pricing.plans.${key}.disclaimer`)}</p>
              )}

              <div className="mt-6">
                <Link href="/contact">
                  <Button variant={featured ? "primary" : "outline"} className="w-full">
                    {t(`pricing.plans.${key}.cta`)}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-500">
          {t("pricing.note")}
        </p>
      </Section>
    </main>
  );
}
