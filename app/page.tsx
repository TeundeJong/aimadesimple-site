// app/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { useLang, tList } from "@/lib/i18n";

type BadgeKey = "fast_live" | "privacy_ready" | "api_sla";

const BADGES: { key: BadgeKey; icon: string }[] = [
  { key: "fast_live", icon: "⚡" },
  { key: "privacy_ready", icon: "🔒" },
  { key: "api_sla", icon: "🔌" },
];

const HERO_CARDS = [
  { id: "bot", icon: "🤖" },
  { id: "doc", icon: "📄" },
  { id: "auto", icon: "⚡" },
] as const;

export default function HomePage() {
  const { t, locale } = useLang();

  return (
    <main>
      {/* HERO */}
      <Section className="pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div>
            <p className="text-sm text-slate-600">
              {t("badges.fast_live")} • {t("badges.privacy_ready")} • {t("badges.api_sla")}
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              {t("hero.title")}
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">{t("hero.subtitle")}</p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/contact">
                <Button size="lg">{t("cta.plan_intake")}</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  {t("cta.view_services")}
                </Button>
              </Link>
            </div>

            {/* badges / chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {BADGES.map(({ key, icon }) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm shadow-sm ring-1 ring-slate-200"
                >
                  <span>{icon}</span>
                  {t(`badges.${key}`)}
                </span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="hidden md:block">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-sm">
              <Image
                src="/hero.jpg"
                alt="CivicAI — van data naar actie"
                fill
                sizes="(min-width: 768px) 640px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-xs text-slate-500">{t("misc.banner_caption")}</p>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section title={t("services.title")}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HERO_CARDS.map(({ id, icon }) => (
            <Card key={id} className="p-6 transition hover:shadow-md">
              <div className="text-2xl">{icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{t(`services.cards.${id}.title`)}</h3>
              <p className="mt-2 text-sm text-slate-600">{t(`services.cards.${id}.desc`)}</p>
              <div className="mt-4">
                <Link href="/services">
                  <Button variant="link">{t("cta.view_services")}</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* PRICING (teaser) */}
      <Section title={t("pricing.title")} subtitle={t("pricing.subtitle")}>
        <div className="grid gap-6 md:grid-cols-3">
          {(["starter", "pro", "enterprise"] as const).map((key) => (
            <Card key={key} className="p-6 transition hover:shadow-md">
              <h3 className="text-lg font-semibold">{t(`pricing.plans.${key}.name`)}</h3>
              <p className="mt-1 text-slate-600">{t(`pricing.plans.${key}.price`)}</p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {tList(locale, `pricing.plans.${key}.items`).map((it, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              {(() => {
                const d = t(`pricing.plans.${key}.disclaimer`);
                return d && d !== `pricing.plans.${key}.disclaimer` ? (
                  <p className="mt-3 text-xs text-slate-500">{d}</p>
                ) : null;
              })()}

              <div className="mt-6">
                <Link href="/pricing">
                  <Button className="w-full">{t(`pricing.plans.${key}.cta`)}</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <p className="mt-6 text-sm text-slate-500">{t("pricing.note")}</p>
      </Section>
    </main>
  );
}
