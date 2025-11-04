"use client";

import Link from "next/link";
import Image from "next/image";
import Section, { Container, SectionTitle } from "@/components/Section";
import Button from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useLang();

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* HERO */}
      <Section className="pt-8 sm:pt-12 lg:pt-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Text */}
            <div>
              {/* badges */}
              <div className="flex flex-wrap gap-2">
                {[t("badges.fast_live"), t("badges.privacy_ready"), t("badges.api_sla")].map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200/80 backdrop-blur dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-800/80"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                {t("hero.title")}
              </h1>
              <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{t("hero.subtitle")}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button variant="primary" size="md">{t("cta.plan_intake")}</Button>
                </Link>
                <Link href="/services">
                  <Button variant="ghost" size="md">{t("cta.view_services")}</Button>
                </Link>
              </div>

              <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">{t("claim")}</p>
            </div>

            {/* Image */}
            <div className="hidden md:block">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-200/70 dark:ring-slate-800/70">
                <Image
                  src="/hero.jpg"
                  alt={t("misc.banner_caption")}
                  fill
                  sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{t("misc.banner_caption")}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section id="services">
        <SectionTitle title={t("services.title")} />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { k: "bot", icon: "🤖", href: "/services#bot" },
            { k: "doc", icon: "📄", href: "/services#doc" },
            { k: "auto", icon: "⚡", href: "/services#auto" }
          ].map(({ k, icon, href }) => (
            <Link key={k} href={href} className="group">
              <div className="h-full rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200/70 transition hover:shadow-md dark:bg-slate-900/60 dark:ring-slate-800/70">
                <div className="text-2xl">{icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {t(`services.cards.${k}.title`)}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {t(`services.cards.${k}.desc`)}
                </p>
                <div className="mt-4">
                  <Button variant="ghost" size="sm">{t(`services.cards.${k}.cta`)}</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* PRICING TEASER */}
      <Section className="pb-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white/80 p-8 text-center shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-900/60 dark:ring-slate-800/70">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{t("pricing.title")}</h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">{t("pricing.subtitle")}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/pricing">
              <Button variant="primary">{t("cta.view_pricing")}</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost">{t("cta.contact_us")}</Button>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
