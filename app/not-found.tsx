"use client";
import Link from "next/link";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLang();
  return (
    <main>
      <Section>
        <Card className="mx-auto max-w-xl p-8 text-center">
          <h1 className="text-2xl font-semibold">{t("notFound.title")}</h1>
          <p className="mt-2 text-slate-600">{t("notFound.body")}</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/"><Button>Home</Button></Link>
            <Link href="/contact"><Button variant="outline">Contact</Button></Link>
          </div>
        </Card>
      </Section>
    </main>
  );
}
