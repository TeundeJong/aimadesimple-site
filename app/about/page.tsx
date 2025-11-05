// app/about/page.tsx
"use client";

import Section, { Container, SectionTitle } from "@/components/Section";
import { useLang } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white">
      <Section>
        <SectionTitle title={t("about.title")} />
        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-slate-700">
          <p>{t("about.intro")}</p>
          <p>{t("about.who")}</p>
          <p>{t("about.what")}</p>
        </div>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">{t("about.vision")}</h3>
              <p className="mt-2 text-slate-600">{t("about.vision_text")}</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">{t("about.roadmap")}</h3>
              <p className="mt-2 text-slate-600">{t("about.roadmap_text")}</p>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
