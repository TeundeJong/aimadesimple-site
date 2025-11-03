import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Bot, FileText, Zap, Shield, ArrowRight, Sparkles, Building2, Globe } from "lucide-react";

/**
 * CivicAI Solutions — Landing Page (Slate Look)
 * Tagline: "Where insight becomes action."
 *
 * Notes
 * - Copy supports NL/EN via simple toggle
 * - Stripe Checkout links are placeholders: replace with your live URLs
 * - Demo widget box in hero: paste your <script> or <iframe> from your bot provider
 * - Requires Tailwind + shadcn/ui + lucide-react + framer-motion in your project
 */

// ---- Theme tokens (calm slate look) ----
const theme = {
  bg: "bg-slate-50 dark:bg-slate-950",
  card: "bg-white/90 dark:bg-slate-900/80 backdrop-blur",
  text: "text-slate-800 dark:text-slate-100",
  subtext: "text-slate-600 dark:text-slate-300",
  accent: "from-slate-900 via-slate-800 to-slate-900",
  ring: "ring-1 ring-slate-200 dark:ring-slate-800",
  brandAccent: "bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200",
};

// ---- Copy (NL/EN) ----
const copy = {
  nl: {
    brand: "CivicAI Solutions",
    tagline: "Where insight becomes action.",
    badge: "Production‑ready AI, zonder frictie",
    heroTitle: "Professionele AI‑oplossingen voor moderne organisaties",
    heroSub:
      "We vertalen complexe data naar duidelijke beslissingen met praktische AI‑integraties en slimme automatisering.",
    ctaPrimary: "Bekijk prijzen",
    ctaSecondary: "Contact",
    wlNote: "Binnen dagen live • Privacy‑first • Enterprise‑ready",
    socialLabels: ["MKB & Agencies", "E‑commerce", "SaaS & Startups", "Consulting"],
    servicesTitle: "Wat we leveren",
    servicesSub: "Drie duidelijke producten die direct inzetbaar zijn.",
    service1: {
      t: "AI Support‑Bot",
      d: "Train op je content, beantwoordt 24/7 en voert acties uit via API's (bestellingen, tickets, CRM‑leads). Embedbaar en schaalbaar.",
    },
    service2: {
      t: "Document Analyzer",
      d: "Upload contracten, handleidingen of offertes — krijg direct risico's, samenvattingen en actiepunten. Exporteer naar PDF/CSV.",
    },
    service3: {
      t: "Automations & Integraties",
      d: "Koppel Zapier/Make, Slack, e‑mail, WhatsApp of je CMS. Stroomlijn sales, support en onboarding.",
    },
    val1: { t: "Privacy & Control", d: "Jouw data blijft van jou. Regionale opslag en optionele on‑prem modellen." },
    val2: { t: "Enterprise‑ready", d: "SSO, audit logs, rollen/rechten en SLA’s voor serieuze teams." },
    val3: { t: "Snelle implementatie", d: "In dagen live, niet maanden. Heldere vaste prijzen, geen lock‑in." },
    pricingTitle: "Prijzen",
    pricingSub: "Vaste pakketten. Uitbreiden kan altijd.",
    tier1: { name: "Starter", price: "€299", period: "setup", cta: "Bestel Starter" },
    tier2: { name: "Pro", price: "€1.490", period: "project", cta: "Ga voor Pro" },
    tier3: { name: "White‑Label add‑on", price: "€990", period: "eenmalig", cta: "Activeer White‑Label" },
    priceFoot: "* Maandelijkse hosting/usage via jouw of onze accounts. MRR‑modellen in overleg.",
    processTitle: "Zo werken we",
    processSub: "Transparant, snel en zonder ruis.",
    steps: [
      { n: 1, t: "Intake", d: "Doelen, KPI’s en content verzamelen (URL’s, PDF’s)." },
      { n: 2, t: "Build", d: "Model‑setup, prompt‑architectuur en integraties." },
      { n: 3, t: "Launch", d: "Embedden, testen, finetunen en live." },
      { n: 4, t: "Scale", d: "Dashboards, A/B en uitrollen naar teams/sites." },
    ],
    faqTitle: "Veelgestelde vragen",
    faq: [
      {
        q: "Werkt dit met mijn bestaande site/stack?",
        a: "Ja. We leveren een 1‑regelige embed‑snippet of een React component. Integraties via REST/GraphQL, Zapier/Make of webhooks.",
      },
      {
        q: "Hoe zit het met privacy en data?",
        a: "Je behoudt eigendom. Gegevens worden niet gebruikt voor modeltraining buiten je project. Optioneel regionaal hosten of self‑hosten.",
      },
      {
        q: "Wat is de doorlooptijd?",
        a: "Starter: 3–5 dagen. Pro: 1–2 weken afhankelijk van integraties en contentkwaliteit.",
      },
      {
        q: "Kunnen we whitelabelen en resellen?",
        a: "Ja. Met de add‑on krijg je branding, sub‑tenancy en voorbeeldcontracten om direct te verkopen.",
      },
    ],
    demoCta: "Bestel nu",
    demoIntake: "Plan intake",
    demoTitle: "Klaar om te starten?",
    demoSub: "Bestel een pakket of plan een korte intake. Je ontvangt direct je intake‑formulier.",
    footerLinks: ["Diensten", "Prijzen", "Privacy"],
    emailPlaceholder: "Jouw e‑mail voor demo",
    emailSend: "Verstuur",
  },
  en: {
    brand: "CivicAI Solutions",
    tagline: "Where insight becomes action.",
    badge: "Production‑ready AI, without friction",
    heroTitle: "Professional AI Solutions for Modern Organizations",
    heroSub:
      "We turn complex data into clear decisions with practical AI integrations and smart automation.",
    ctaPrimary: "View pricing",
    ctaSecondary: "Contact",
    wlNote: "Live in days • Privacy‑first • Enterprise‑ready",
    socialLabels: ["SMBs & Agencies", "E‑commerce", "SaaS & Startups", "Consulting"],
    servicesTitle: "What we deliver",
    servicesSub: "Three clear products you can deploy today.",
    service1: {
      t: "AI Support Bot",
      d: "Train on your content, answers 24/7 and executes actions via APIs (orders, tickets, CRM leads). Embeddable and scalable.",
    },
    service2: {
      t: "Document Analyzer",
      d: "Upload contracts, manuals or quotes — get risks, summaries and action items instantly. Export to PDF/CSV.",
    },
    service3: {
      t: "Automations & Integrations",
      d: "Connect Zapier/Make, Slack, email, WhatsApp or your CMS. Streamline sales, support and onboarding.",
    },
    val1: { t: "Privacy & Control", d: "Your data stays yours. Regional storage and optional on‑prem models." },
    val2: { t: "Enterprise‑ready", d: "SSO, audit logs, role-based access and SLAs for serious teams." },
    val3: { t: "Fast implementation", d: "Live in days, not months. Transparent pricing, no vendor lock‑in." },
    pricingTitle: "Pricing",
    pricingSub: "Fixed packages. Expand anytime.",
    tier1: { name: "Starter", price: "€299", period: "setup", cta: "Buy Starter" },
    tier2: { name: "Pro", price: "€1,490", period: "project", cta: "Choose Pro" },
    tier3: { name: "White‑Label add‑on", price: "€990", period: "one‑off", cta: "Enable White‑Label" },
    priceFoot: "* Monthly hosting/usage via your or our accounts. MRR models on request.",
    processTitle: "How we work",
    processSub: "Transparent, fast and no noise.",
    steps: [
      { n: 1, t: "Intake", d: "Goals, KPIs and content collection (URLs, PDFs)." },
      { n: 2, t: "Build", d: "Model setup, prompt architecture and integrations." },
      { n: 3, t: "Launch", d: "Embed, test, fine‑tune and go live." },
      { n: 4, t: "Scale", d: "Dashboards, A/B and expansion to teams/sites." },
    ],
    faqTitle: "FAQ",
    faq: [
      {
        q: "Does it work with my current site/stack?",
        a: "Yes. We provide a 1‑line embed snippet or a React component. Integrations via REST/GraphQL, Zapier/Make or webhooks.",
      },
      {
        q: "What about privacy and data?",
        a: "You retain ownership. Data is not used for model training beyond your project. Optional regional hosting or self‑hosting.",
      },
      {
        q: "Typical lead time?",
        a: "Starter: 3–5 days. Pro: 1–2 weeks depending on integrations and content quality.",
      },
      {
        q: "Can we white‑label and resell?",
        a: "Yes. Add‑on includes branding, sub‑tenancy and sample contracts to sell immediately.",
      },
    ],
    demoCta: "Buy now",
    demoIntake: "Book intake",
    demoTitle: "Ready to start?",
    demoSub: "Buy a package or book a short intake. You'll receive your intake form immediately.",
    footerLinks: ["Services", "Pricing", "Privacy"],
    emailPlaceholder: "Your email for demo",
    emailSend: "Send",
  },
};

const Feature = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <Card className={`${theme.card} ${theme.ring} shadow-sm rounded-2xl`}>
    <CardHeader className="flex flex-row items-center gap-3">
      <div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100 dark:bg-slate-800">
        <Icon className="h-5 w-5" />
      </div>
      <CardTitle className="text-base font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent className={`${theme.subtext} text-sm leading-relaxed`}>{children}</CardContent>
  </Card>
);

const Tier = ({
  name,
  price,
  period,
  features,
  cta,
  href,
}: {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  href: string;
}) => (
  <Card className={`${theme.card} ${theme.ring} rounded-2xl shadow-sm h-full flex flex-col`}>
    <CardHeader>
      <CardTitle className="text-lg font-semibold">{name}</CardTitle>
      <div className="mt-2">
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        <span className={`${theme.subtext} ml-1`}>/{period}</span>
      </div>
    </CardHeader>
    <CardContent className="flex-1">
      <ul className="space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check className="h-4 w-4 mt-0.5" />
            <span className="leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>
      <Button className={`mt-6 w-full ${theme.brandAccent}`} asChild>
        {/* Replace with real Stripe Checkout link */}
        <a href={href} target="_blank" rel="noreferrer">
          {cta}
        </a>
      </Button>
    </CardContent>
  </Card>
);

export default function Page() {
  const [lang, setLang] = useState<"nl" | "en">("nl");
  const t = copy[lang];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text}`}>
      {/* Top bar: brand + language toggle */}
      <div className="container mx-auto px-4 pt-4 flex items-center justify-between">
        <div>
          <h1 className="text-sm md:text-base font-semibold tracking-tight">{t.brand}</h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mt-0.5 italic">{t.tagline}</p>
        </div>
        <button
          className={`inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full ${theme.ring} bg-white/80 dark:bg-slate-900/60`}
          onClick={() => setLang((p) => (p === "nl" ? "en" : "nl"))}
          aria-label="Toggle language"
        >
          <Globe className="h-3.5 w-3.5" /> {lang === "nl" ? "English" : "Nederlands"}
        </button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.accent} opacity-5`} />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                <Sparkles className="h-3 w-3" />
                {t.badge}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">{t.heroTitle}</h2>
              <p className={`${theme.subtext} mt-5 text-base md:text-lg max-w-xl`}>{t.heroSub}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button className={`${theme.brandAccent}`} asChild>
                  <a href="#pricing">{t.ctaPrimary}</a>
                </Button>
                <Button variant="outline" className="border-slate-300 dark:border-slate-700" asChild>
                  <a href="#contact">{t.ctaSecondary}</a>
                </Button>
              </div>
              <p className={`${theme.subtext} mt-4 text-sm`}>{t.wlNote}</p>
            </motion.div>

            {/* Demo widget embed card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <div className={`${theme.card} ${theme.ring} rounded-2xl p-6 shadow-sm`}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-100 dark:bg-slate-800">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{lang === "nl" ? "AI Support‑Bot (Demo)" : "AI Support Bot (Demo)"}</p>
                    <p className={`text-xs ${theme.subtext}`}>
                      {lang === "nl" ? "Verlaag tickets 30–50% met een 24/7 assistent" : "Cut tickets 30–50% with a 24/7 assistant"}
                    </p>
                  </div>
                </div>
                {/* Embed Area */}
                <div className="mt-4">
                  <div className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-4">
                    <div className={`aspect-[4/3] w-full grid place-items-center text-xs ${theme.subtext}`}>
                      <div className="text-center">
                        <p className="font-medium mb-1">{lang === "nl" ? "Embed hier je widget" : "Embed your widget here"}</p>
                        <p>{lang === "nl" ? "Plak het script of iframe van je bot‑provider" : "Paste the script or iframe from your bot provider"}</p>
                      </div>
                    </div>
                  </div>
                  {/* Example: paste your script here
                    <script src="https://your-bot-cdn/widget.js" data-site="XYZ" async></script>
                    <div id="cg-ai-widget" />
                  */}
                </div>
                <div className="mt-6 flex gap-2">
                  <Input placeholder={t.emailPlaceholder} className="text-sm" />
                  <Button className={`${theme.brandAccent}`}>{t.emailSend}</Button>
                </div>
                <p className={`text-[11px] ${theme.subtext} mt-2`}>{lang === "nl" ? "We sturen één demo‑link. Geen spam." : "We'll send one demo link. No spam."}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center opacity-70">
            {t.socialLabels.map((l) => (
              <div key={l} className="text-center text-sm font-medium">
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{t.servicesTitle}</h3>
            <p className={`${theme.subtext} mt-3`}>{t.servicesSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Feature icon={Bot} title={t.service1.t}>
              {t.service1.d}
            </Feature>
            <Feature icon={FileText} title={t.service2.t}>
              {t.service2.d}
            </Feature>
            <Feature icon={Zap} title={t.service3.t}>
              {t.service3.d}
            </Feature>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Feature icon={Shield} title={t.val1.t}>
              {t.val1.d}
            </Feature>
            <Feature icon={Building2} title={t.val2.t}>
              {t.val2.d}
            </Feature>
            <Feature icon={Sparkles} title={t.val3.t}>
              {t.val3.d}
            </Feature>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{t.pricingTitle}</h3>
            <p className={`${theme.subtext} mt-3`}>{t.pricingSub}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            <Tier
              name={t.tier1.name}
              price={t.tier1.price}
              period={t.tier1.period}
              features={[
                lang === "nl" ? "1 AI‑widget (support of FAQ)" : "1 AI widget (support or FAQ)",
                lang === "nl" ? "Training op max. 10 bronnen" : "Training on up to 10 sources",
                lang === "nl" ? "Basis‑workflow (1 actie)" : "Basic workflow (1 action)",
                lang === "nl" ? "E‑mail support" : "Email support",
              ]}
              cta={t.tier1.cta}
              href="/checkout/starter" // TODO: replace with Stripe link
            />
            <Tier
              name={t.tier2.name}
              price={t.tier2.price}
              period={t.tier2.period}
              features={[
                lang === "nl" ? "Volledige bot + integraties" : "Full bot + integrations",
                lang === "nl" ? "Document Analyzer (contracten)" : "Document Analyzer (contracts)",
                lang === "nl" ? "2 weken optimalisatie" : "2 weeks of optimization",
                lang === "nl" ? "Slack support" : "Slack support",
              ]}
              cta={t.tier2.cta}
              href="/checkout/pro" // TODO: replace with Stripe link
            />
            <Tier
              name={t.tier3.name}
              price={t.tier3.price}
              period={t.tier3.period}
              features={[
                lang === "nl" ? "Eigen branding & domein" : "Own branding & domain",
                lang === "nl" ? "Meerdere tenants/klanten" : "Multiple tenants/clients",
                lang === "nl" ? "Whitelabel facturatie opties" : "Whitelabel billing options",
                lang === "nl" ? "Reseller sample contract" : "Reseller sample contract",
              ]}
              cta={t.tier3.cta}
              href="/checkout/whitelabel" // TODO: replace with Stripe link
            />
          </div>
          <p className={`${theme.subtext} text-xs mt-3`}>{t.priceFoot}</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{t.processTitle}</h3>
            <p className={`${theme.subtext} mt-3`}>{t.processSub}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {t.steps.map((s) => (
              <Card key={s.n} className={`${theme.card} ${theme.ring} rounded-2xl shadow-sm`}>
                <CardContent className="p-6">
                  <div className="h-9 w-9 grid place-items-center rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-bold">{s.n}</div>
                  <p className="mt-3 font-semibold">{s.t}</p>
                  <p className={`${theme.subtext} text-sm mt-1`}>{s.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{t.faqTitle}</h3>
            <div className="mt-6 grid gap-6">
              {t.faq.map((item, i) => (
                <Card key={i} className={`${theme.card} ${theme.ring} rounded-2xl`}>
                  <CardHeader>
                    <CardTitle className="text-base">{item.q}</CardTitle>
                  </CardHeader>
                  <CardContent className={`${theme.subtext} text-sm leading-relaxed`}>{item.a}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div
            className={`${theme.card} ${theme.ring} rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 justify-between`}
          >
            <div>
              <h4 className="text-xl md:text-2xl font-bold">{t.demoTitle}</h4>
              <p className={`${theme.subtext} mt-1`}>{t.demoSub}</p>
            </div>
            <div className="flex gap-3">
              <Button className={`${theme.brandAccent}`} asChild>
                <a href="#pricing" className="flex items-center gap-1">
                  {t.demoCta} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" className="border-slate-300 dark:border-slate-700" asChild>
                <a href="mailto:hello@civicaisolutions.io">{t.demoIntake}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200/60 dark:border-slate-800/60">
        <div
          className={`container mx-auto px-4 text-sm ${theme.subtext} flex flex-col md:flex-row items-center justify-between gap-3`}
        >
          <p>© {new Date().getFullYear()} CivicAI Solutions</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:underline">
              {t.footerLinks[0]}
            </a>
            <a href="#pricing" className="hover:underline">
              {t.footerLinks[1]}
            </a>
            <a href="/privacy" className="hover:underline">
              {t.footerLinks[2]}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
