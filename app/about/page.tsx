"use client";
import Section, { Container, SectionTitle } from "@/components/Section";
import { useLang } from "@/lib/i18n";
import Card from "@/components/ui/card";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <main>
      <Section>
        <SectionTitle title={t("about.title")} />
        <Container>
          <p className="max-w-3xl text-slate-700">{t("about.intro")}</p>
          <p className="mt-3 max-w-3xl text-slate-700">{t("about.who")}</p>
          <p className="mt-3 max-w-3xl text-slate-700">{t("about.what")}</p>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-lg font-semibold">{t("about.vision")}</h3>
              <p className="mt-2 text-slate-600">{t("about.vision_text")}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold">{t("about.roadmap")}</h3>
              <p className="mt-2 text-slate-600">{t("about.roadmap_text")}</p>
            </Card>
          </div>
        </Container>
      </Section>
    </main>
  );
}
