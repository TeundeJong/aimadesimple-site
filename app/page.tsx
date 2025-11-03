'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, FileText, Zap, Check } from "lucide-react";
import Image from "next/image";


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
  <div className="absolute inset-0 bg-grid-slate dark:opacity-60 opacity-40" />
  <div className="absolute inset-0 bg-radial-fade dark:opacity-70 opacity-60" />
  <div className="container-narrow py-20 relative grid md:grid-cols-2 gap-10 items-center">
    {/* Tekstkolom (ongewijzigd) */}
    <div>
      {/* ... laat je bestaande Badge, h1, p en buttons hier staan ... */}
    </div>

    {/* Illustratiekolom */}
    <div className="hidden md:block">
      <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-slate-200/70 dark:ring-slate-800/70 shadow-sm bg-white/70 dark:bg-slate-900/50">
        {/* Simpele “cards & nodes” illustratie met pure divs */}
        <div className="h-full w-full p-6 grid grid-cols-3 gap-4">
          <div className="col-span-2 rounded-2xl bg-slate-100 dark:bg-slate-800" />
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800" />
          <div className="rounded-2xl bg-slate-100 dark:bg-slate-800" />
          <div className="col-span-2 rounded-2xl bg-slate-100 dark:bg-slate-800" />
          <div className="col-span-3 mt-auto flex items-center justify-between">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            <span className="h-2 w-2 rounded-full bg-violet-500" />
          </div>
        </div>
      </div>
      <p className="muted text-xs mt-3">Demo-visual: data → inzichten → acties.</p>
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
