// app/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import React from "react";

// app/page.tsx (boven in het bestand)

type BadgeKey = "fast_live" | "privacy_ready" | "api_sla";

const BADGES: { key: BadgeKey; icon: React.ReactNode }[] = [
  { key: "fast_live",     icon: "⚡" },
  { key: "privacy_ready", icon: "🔒" },
  { key: "api_sla",       icon: "🔌" },
] as const;

// Als je service-kaarten ook op de homepage hebt:
const HERO_CARDS: { id: "bot" | "doc" | "auto"; icon: React.ReactNode }[] = [
  { id: "bot",  icon: "🤖" },
  { id: "doc",  icon: "📄" },
  { id: "auto", icon: "⚡" },
] as const;


export default function HomePage() {
  const { t, tList } = useLang();

  return (
    <main className="py-10 md:py-14">
      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm text-slate-600">
            {t("badges.fast_live")} • {t("badges.privacy_ready")} • {t("badges.api_sla")}
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            {t("hero.title")}
          </h1>
          <p className="mt-4 text-slate-600">{t("hero.subtitle")}</p>
          <div className="mt-6 flex items-center gap-3">
            <Link href="/contact"><Button>{t("cta.plan_intake")}</Button></Link>
            <Link href="/services"><Button variant="outline">{t("cta.view_services")}</Button></Link>
          </div>
        </div>

{/* badges */}
<div className="flex flex-wrap gap-2">
  {BADGES.map(({ key, icon }) => (
    <span key={key} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm shadow-sm border border-slate-200">
      <span>{icon}</span>
      {t(`badges.${key}`)}
    </span>
  ))}
</div>

{/* cards */}
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
  {HERO_CARDS.map(({ id, icon }) => (
    <div key={id} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-3 text-lg font-semibold">{t(`services.cards.${id}.title`)}</h3>
      <p className="mt-2 text-sm text-slate-600">{t(`services.cards.${id}.desc`)}</p>
    </div>
  ))}
</div>

        <div className="hidden md:block">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <Image
              src="/hero.jpg"
              alt="CivicAI — van data naar actie"
              fill
              sizes="(min-width: 768px) 640px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs text-slate-500 mt-3">{t("misc.banner_caption")}</p>
        </div>
      </section>
{/* SERVICES */}
<Section title={t("services.title")}>
  <div className="grid md:grid-cols-3 gap-6">
    {([["bot","🤖"],["doc","📄"],["auto","⚡"]] as const).map(([k, icon]) => (
      <Card key={k} className="p-6">
        <div className="text-2xl">{icon}</div>
        <h3 className="mt-2 text-lg font-semibold">{t(`services.cards.${k}.title`)}</h3>
        <p className="mt-2 text-slate-600">{t(`services.cards.${k}.desc`)}</p>
        <div className="mt-4">
          <Link href="/services">
            <Button variant="link">{t(`services.cards.${k}.cta`)}</Button>
          </Link>
        </div>
      </Card>
    ))}
  </div>
</Section>

      {/* PRICING */}
      <Section title={t("pricing.title")} subtitle={t("pricing.subtitle")}>
        <div className="grid md:grid-cols-3 gap-6">
          {(["starter","pro","enterprise"] as const).map((key) => {
            const items = tList(`pricing.plans.${key}.items`);
            return (
              <Card key={key} className="p-6">
                <h3 className="text-lg font-semibold">{t(`pricing.plans.${key}.name`)}</h3>
                <p className="mt-1 text-slate-600">{t(`pricing.plans.${key}.price`)}</p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {items.map((it, i) => (<li key={i}>• {it}</li>))}
                </ul>
                {t(`pricing.plans.${key}.disclaimer`) !== `pricing.plans.${key}.disclaimer` && (
                  <p className="mt-3 text-xs text-slate-500">{t(`pricing.plans.${key}.disclaimer`)}</p>
                )}
                <div className="mt-6">
                  <Button className="w-full">{t(`pricing.plans.${key}.cta`)}</Button>
                </div>
              </Card>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-slate-500">{t("pricing.note")}</p>
      </Section>
    </main>
  );
}
