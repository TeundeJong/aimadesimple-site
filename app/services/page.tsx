// app/services/page.tsx
"use client";

import Link from "next/link";
import Section, { SectionTitle } from "@/components/Section";
import Button from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export default function ServicesPage() {
  const { t } = useLang();

  const CARDS = [
    { id: "bot", icon: "🤖" },
    { id: "doc", icon: "📄" },
    { id: "auto", icon: "⚡" },
  ] as const;

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      <Section>
        <SectionTitle title={t("services.title")} subtitle={t("hero.subtitle")} />
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ id, icon }) => (
            <div key={id} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <div className="text-2xl">{icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{t(`services.cards.${id}.title`)}</h3>
              <p className="mt-2 text-sm text-slate-600">{t(`services.cards.${id}.desc`)}</p>
              <div className="mt-4">
                <Link href="/contact">
                  <Button variant="primary" size="sm">{t("cta.plan_intake")}</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
