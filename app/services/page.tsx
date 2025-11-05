"use client";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export default function ServicesPage() {
  const { t } = useLang();
  const CARDS = [
    { id: "bot",  icon: "🤖" },
    { id: "doc",  icon: "📄" },
    { id: "auto", icon: "⚡" },
  ] as const;

  return (
    <main>
      <Section title={t("services.title")} subtitle={t("hero.subtitle")}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ id, icon }) => (
            <Card key={id} className="p-6 hover:shadow-md transition">
              <div className="text-2xl">{icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{t(`services.cards.${id}.title`)}</h3>
              <p className="mt-2 text-sm text-slate-600">{t(`services.cards.${id}.desc`)}</p>
              <div className="mt-4">
                <Link href="/contact"><Button size="sm">{t("cta.plan_intake")}</Button></Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
