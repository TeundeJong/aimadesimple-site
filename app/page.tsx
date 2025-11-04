import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAV BAR (optioneel; haal weg als je al een Navbar gebruikt) */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            CivicAI <span className="text-blue-600">Solutions</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            <Link href="/pricing">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Start nu</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          {/* Tekst */}
          <div>
            <p className="text-sm font-medium text-blue-700">GDPR-ready • Snel live</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Professionele AI-oplossingen
              <span className="block text-blue-600">voor moderne organisaties</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We vertalen complexe data naar duidelijke beslissingen met praktische AI-integraties,
              support-bots en slimme automatisering. Enterprise-ready en privacy-first.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/pricing">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base">
                  Plan intake
                </Button>
              </Link>
              <Link
                href="/services"
                className="px-6 py-4 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium"
              >
                Bekijk services
              </Link>
            </div>
            <p className="mt-3 text-sm text-slate-500">“Where insight becomes action.”</p>
          </div>

          {/* Visual */}
          <div className="hidden md:block">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-200">
              <Image
                src="/hero.jpg"
                alt="CivicAI — dashboard & automatisering"
                fill
                sizes="(min-width:768px) 600px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / USP STRIP */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 grid sm:grid-cols-3 gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-slate-700">Binnen dagen live</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
            <span className="text-slate-700">Privacy-first & GDPR-ready</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
            <span className="text-slate-700">API-integraties & SLA</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>AI Support Bot</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              Train op je content; 24/7 antwoorden; voert acties uit via API’s (tickets, orders, CRM).
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Document Analyzer</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              Upload contracten/handleidingen — krijg direct risico’s, samenvattingen en actiepunten.
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-slate-200 shadow-sm">
            <CardHeader>
              <CardTitle>Automations & Integraties</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              Koppel Zapier/Make, Slack, e-mail of je CMS. Stroomlijn sales, support en onboarding.
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Link href="/services">
            <Button variant="outline" className="px-6 py-5 text-base">
              Bekijk alle services
            </Button>
          </Link>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="bg-white border-t border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Eenvoudige prijzen</h2>
          <p className="mt-2 text-slate-600">Transparant, maandelijk opzegbaar. Enterprise op aanvraag.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle>Starter</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-3">
                <p className="text-3xl font-bold">€29 <span className="text-base font-normal text-slate-500">/m</span></p>
                <ul className="list-disc pl-4">
                  <li>Basic AI-bot</li>
                  <li>100 documenten/maand</li>
                  <li>E-mail support</li>
                </ul>
                <Link href="/pricing">
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">Kies Starter</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-slate-200 shadow-sm ring-2 ring-blue-600/10">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-3">
                <p className="text-3xl font-bold">€59 <span className="text-base font-normal text-slate-500">/m</span></p>
                <ul className="list-disc pl-4">
                  <li>Geavanceerde bot + acties</li>
                  <li>Onbeperkt documenten</li>
                  <li>Integraties & webhooks</li>
                </ul>
                <Link href="/pricing">
                  <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">Kies Pro</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 space-y-3">
                <p className="text-3xl font-bold">Op aanvraag</p>
                <ul className="list-disc pl-4">
                  <li>SLA & SSO</li>
                  <li>Dedicated support</li>
                  <li>Custom security</li>
                </ul>
                <Link href="/contact">
                  <Button variant="outline" className="mt-4 w-full">Contact sales</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Klaar om te starten?</h3>
          <p className="mt-2 text-slate-600">
            Plan een korte intake — in 15 minuten mappen we jouw beste AI-kansen.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 text-base">
                Plan intake
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold">CivicAI Solutions</div>
            <p className="mt-2 text-slate-600">Privacy-first AI-integraties en automatisering.</p>
          </div>
          <div>
            <div className="font-medium">Product</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Legal</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/privacy" className="hover:text-blue-600">Privacy</Link></li>
              <li><span className="text-slate-400">Terms (binnenkort)</span></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-10 text-xs text-slate-500">
          © {new Date().getFullYear()} CivicAI Solutions. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
