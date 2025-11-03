'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Bot, FileText, Zap } from "lucide-react";

const theme = {
  card: "bg-white/90 dark:bg-slate-900/80 backdrop-blur",
  subtext: "text-slate-600 dark:text-slate-300",
  ring: "ring-1 ring-slate-200 dark:ring-slate-800",
  accent: "from-slate-900 via-slate-800 to-slate-900",
};

export default function Page() {
  const [lang, setLang] = useState<"nl" | "en">("nl");

  const t = {
    badge: lang === "nl" ? "Production-ready AI, zonder frictie" : "Production-ready AI, without friction",
    heroTitle: lang === "nl" ? "Professionele AI-oplossingen voor moderne organisaties" : "Professional AI Solutions for Modern Organizations",
    heroSub: lang === "nl"
      ? "We vertalen complexe data naar duidelijke beslissingen met praktische AI-integraties en slimme automatisering."
      : "We turn complex data into clear decisions with practical AI integrations and smart automation.",
    ctaPrimary: lang === "nl" ? "Bekijk prijzen" : "View pricing",
    ctaSecondary: lang === "nl" ? "Contact" : "Contact",
    wlNote: lang === "nl" ? "Binnen dagen live • Privacy-first • Enterprise-ready" : "Live in days • Privacy-first • Enterprise-ready",
  };

  return (
    <main>
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.accent} opacity-5`} />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
              <Sparkles className="h-3 w-3" />
              {t.badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">{t.heroTitle}</h1>
            <p className={`${theme.subtext} mt-5 text-base md:text-lg max-w-2xl`}>{t.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild><Link href="/pricing">{t.ctaPrimary}</Link></Button>
              <Button variant="outline" asChild><Link href="/contact">{t.ctaSecondary}</Link></Button>
              <button
                onClick={() => setLang((p) => (p === "nl" ? "en" : "nl"))}
                className="ml-1 px-3 py-2 rounded-xl text-xs border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {lang === "nl" ? "English" : "Nederlands"}
              </button>
            </div>
            <p className={`${theme.subtext} mt-4 text-sm`}>{t.wlNote}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
          <Card className={`${theme.card} ${theme.ring} rounded-2xl shadow-sm`}>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100 dark:bg-slate-800">
                <Bot className="h-5 w-5" />
              </div>
              <CardTitle className="text-base font-semibold">AI Support Bot</CardTitle>
            </CardHeader>
            <CardContent className={`${theme.subtext} text-sm`}>
              Train op je content, 24/7 antwoorden, voert acties uit via API’s (tickets, orders, CRM).
            </CardContent>
          </Card>

          <Card className={`${theme.card} ${theme.ring} rounded-2xl shadow-sm`}>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100 dark:bg-slate-800">
                <FileText className="h-5 w-5" />
              </div>
              <CardTitle className="text-base font-semibold">Document Analyzer</CardTitle>
            </CardHeader>
            <CardContent className={`${theme.subtext} text-sm`}>
              Upload contracten/handleidingen — krijg direct risico’s, samenvattingen en actiepunten.
            </CardContent>
          </Card>

          <Card className={`${theme.card} ${theme.ring} rounded-2xl shadow-sm`}>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100 dark:bg-slate-800">
                <Zap className="h-5 w-5" />
              </div>
              <CardTitle className="text-base font-semibold">Automations & Integraties</CardTitle>
            </CardHeader>
            <CardContent className={`${theme.subtext} text-sm`}>
              Koppel Zapier/Make, Slack, e-mail of je CMS. Stroomlijn sales, support en onboarding.
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
<div className="p-6 bg-slate-900 text-white rounded-xl">Tailwind test</div>
