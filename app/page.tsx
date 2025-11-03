'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, FileText, Zap, Check } from "lucide-react";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
    {children}
  </span>
);

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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(15,23,42,0.08),transparent)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(148,163,184,0.08),transparent)]" />
        <div className="container-narrow py-20 relative">
          <div className="max-w-3xl">
            <Badge>{t.badge}</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl">{t.heroTitle}</h1>
            <p className="muted mt-5 text-base md:text-lg max-w-2xl">{t.heroSub}</p>
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
            <p className="muted mt-4 text-sm">{t.wlNote}</p>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-200/70 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/40 backdrop-blur">
        <div className="container-narrow py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs muted">
          <div className="flex items-center gap-2"><Check className="h-4 w-4" /> GDPR-ready</div>
          <div className="flex items-center gap-2"><Check className="h-4 w-4" /> API-integraties</div>
          <div className="flex items-center gap-2"><Check className="h-4 w-4" /> Snelle implementatie</div>
          <div className="flex items-center gap-2"><Check className="h-4 w-4" /> Support SLA</div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14">
        <div className="container-narrow grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100 dark:bg-slate-800"><Bot className="h-5 w-5" /></div>
              <CardTitle className="text-base font-semibold">AI Support Bot</CardTitle>
            </CardHeader>
            <CardContent className="muted text-sm">
              Train op je content, 24/7 antwoorden, en acties via API’s (tickets, orders, CRM).
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100 dark:bg-slate-800"><FileText className="h-5 w-5" /></div>
              <CardTitle className="text-base font-semibold">Document Analyzer</CardTitle>
            </CardHeader>
            <CardContent className="muted text-sm">
              Upload contracten/handleidingen — direct risico’s, samenvattingen en actiepunten.
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100 dark:bg-slate-800"><Zap className="h-5 w-5" /></div>
              <CardTitle className="text-base font-semibold">Automations & Integraties</CardTitle>
            </CardHeader>
            <CardContent className="muted text-sm">
              Koppel Zapier/Make, Slack, e-mail of je CMS. Stroomlijn sales, support en onboarding.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="container-narrow">
          <Card className="rounded-2xl">
            <CardContent className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl">Where insight becomes action.</h2>
                <p className="muted mt-2">Plan een korte intake — we mappen in 15 min. jouw beste AI-kansen.</p>
              </div>
              <div className="flex gap-3">
                <Button asChild><Link href="/contact">Plan intake</Link></Button>
                <Button variant="outline" asChild><Link href="/pricing">Prijzen</Link></Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
