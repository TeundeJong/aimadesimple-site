// app/pricing/page.tsx
"use client";

import Link from "next/link";
import Section, { SectionTitle } from "@/components/Section";
import Button from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export default function PricingPage() {
  const { t, tList } = useLang();

  const plans = [
    { key: "starter", featured: false },
    { key: "pro", featured: true },
    { key: "enterprise", featured: false },
  ] as const;

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      <Section>
        <SectionTitle title={t("pricing.title")} subtitle={t("pricing.subtitle")} />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map(({ key, featured }) => (
            <div
              key={key}
              className={`rounded-2xl p-6 shadow-sm border transition ${
                featured
                  ? "bg-white border-slate-200 shadow-md"
                  : "bg-white border-slate-200 hover:shadow-md"
              }`}
            >
              <h3 className="text-lg font-semibold">{t(`pricing.plans.${key}.name`)}</h3>
              <p className="mt-2 text-3xl font-semibold">{t(`pricing.plans.${key}.price`)}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {tList(`pricing.plans.${key}.items`).map((it, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              {t(`pricing.plans.${key}.disclaimer`) !== `pricing.plans.${key}.disclaimer` && (
                <p className="mt-2 text-xs text-slate-500">{t(`pricing.plans.${key}.disclaimer`)}</p>
              )}

              <div className="mt-6">
                <Link href="/contact">
                  <Button variant={featured ? "primary" : "ghost"} className="w-full">
                    {t(`pricing.plans.${key}.cta`)}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-500">
          {t("pricing.note")}
        </p>
      </Section>
    </main>
  );
}
