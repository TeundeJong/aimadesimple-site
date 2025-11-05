"use client";

import Link from "next/link";
import Section, { SectionTitle } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { useLang, tList } from "@/lib/i18n";


export default function PricingPage() {
const { t, locale } = useLang();


  const plans = [
    { key: "starter", featured: false },
    { key: "pro", featured: true },
    { key: "enterprise", featured: false }
    
  ];

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Section>
        <SectionTitle title={t("pricing.title")} subtitle={t("pricing.subtitle")} />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map(({ key, featured }) => (
            <div
              key={key}
              className={`rounded-2xl p-6 shadow-sm ring-1 transition ${
                featured
                  ? "bg-white text-slate-900 ring-slate-200/90 shadow-md dark:bg-slate-900 dark:text-white dark:ring-slate-800/90"
                  : "bg-white/80 text-slate-900 ring-slate-200/70 hover:shadow-md dark:bg-slate-900/60 dark:text-white dark:ring-slate-800/70"
              }`}
            >
              <h3 className="text-lg font-semibold">{t(`pricing.plans.${key}.name`)}</h3>
              <p className="mt-2 text-3xl font-semibold">{t(`pricing.plans.${key}.price`)}</p>

              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {tList(locale, `pricing.plans.${key}.items`).map((it, i) => (

                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              {t(`pricing.plans.${key}.disclaimer`) && (
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{t(`pricing.plans.${key}.disclaimer`)}</p>
              )}

              <div className="mt-6">
                <Link href={key === "enterprise" ? "/contact" : "/contact"}>
                  <Button variant={featured ? "primary" : "ghost"} className="w-full">
                    {t(`pricing.plans.${key}.cta`)}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-slate-500 dark:text-slate-400">
          {t("pricing.note")}
        </p>
      </Section>
    </main>
  );
}
