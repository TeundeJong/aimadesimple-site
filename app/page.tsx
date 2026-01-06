import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, MessageCircle, Blocks } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <Section className="pt-10 md:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            {/* Brand lockup inside hero (not only navbar) */}
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white shadow-sm">
                <Image
                  src="/civicai-icon.png"
                  alt="CivicAI Solutions"
                  fill
                  sizes="44px"
                  className="object-contain p-1.5"
                  quality={100}
                  priority
                />
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight">CivicAI Solutions</div>
                <div className="text-sm text-slate-600">Pty Ltd · Operational software systems</div>
              </div>
            </div>

            <h1 className="mt-7 text-3xl font-semibold tracking-tight sm:text-5xl">
              We remove friction from everyday business operations.
            </h1>

            <p className="mt-5 max-w-xl text-base text-slate-600">
              CivicAI Solutions builds and operates focused software systems that automate repetitive work, streamline
              communication, and make daily operations simpler and more predictable.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/products">
                <Button size="lg">
                  View products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact
                </Button>
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
                <div className="text-sm font-semibold">Practical</div>
                <div className="mt-1 text-sm text-slate-600">Built for daily workflows.</div>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
                <div className="text-sm font-semibold">Secure-by-design</div>
                <div className="mt-1 text-sm text-slate-600">Controlled systems, clear guardrails.</div>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
                <div className="text-sm font-semibold">Reliable</div>
                <div className="mt-1 text-sm text-slate-600">Built to run and be maintained.</div>
              </div>
            </div>
          </div>

                    <div className="relative">
            <Card className="overflow-hidden">
              {/* Abstract branded hero visual (enterprise style) */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(45,212,191,0.35),transparent_58%),radial-gradient(circle_at_82%_62%,rgba(59,130,246,0.28),transparent_60%),linear-gradient(to_bottom_right,#071427,#071a2e,#050f1c)]" />
                <div className="absolute inset-0 opacity-35 bg-[linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:44px_44px]" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.10),transparent_60%)]" />
                <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute -right-16 bottom-[-40px] h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

                <div className="relative flex h-full w-full items-center justify-center p-10">
                  <div className="relative">
                    <div className="absolute -inset-10 rounded-full bg-white/5 blur-2xl" />
                    <div className="relative h-44 w-44 md:h-48 md:w-48 overflow-hidden rounded-[32px] bg-white/5 ring-1 ring-white/10 shadow-lg shadow-black/55 backdrop-blur">
                      <Image
                        src="/civicai-icon.png"
                        alt="CivicAI Solutions"
                        fill
                        sizes="200px"
                        className="object-contain p-6"
                        quality={100}
                        priority
                      />
                    </div>
                    <div className="pointer-events-none absolute -right-16 -top-10 h-40 w-40 rounded-full bg-teal-400/10 blur-2xl" />
                  </div>
                </div>
              </div>

              {/* Single, clean supporting block (no nested cards) */}
              <div className="relative p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-teal-50/40" />
                <div className="relative">
                  <div className="text-sm font-semibold">Business systems for day-to-day operations.</div>
                  <p className="mt-2 text-sm text-slate-600">
                    We design and run practical systems that save time, reduce manual work, and bring structure to everyday
                    business processes.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* What we do */}
      <Section
        title="What we build"
        subtitle="Focused systems that reduce manual work, improve communication quality, and create predictable operating outcomes."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <MessageCircle className="h-5 w-5 text-teal-700" />
            <h3 className="mt-4 text-lg font-semibold">Customer communication</h3>
            <p className="mt-2 text-sm text-slate-600">
              Systems that standardise replies, reduce missed messages, and improve response reliability across channels.
            </p>
          </Card>
          <Card className="p-6">
            <Shield className="h-5 w-5 text-teal-700" />
            <h3 className="mt-4 text-lg font-semibold">Risk-aware workflows</h3>
            <p className="mt-2 text-sm text-slate-600">
              Tools that help teams understand documents, surface key risks, and move forward with clear guardrails.
            </p>
          </Card>
          <Card className="p-6">
            <Blocks className="h-5 w-5 text-teal-700" />
            <h3 className="mt-4 text-lg font-semibold">Operational automation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Practical automation modules that integrate with existing tools and simplify repeated operational tasks.
            </p>
          </Card>
        </div>
      </Section>

      {/* Products overview */}
      <Section
        title="Products"
        subtitle="CivicAI Solutions is the holding company for a small set of focused platforms. Each product has its own positioning and delivery model."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <div className="text-xs text-teal-700">Product</div>
            <h3 className="mt-2 text-lg font-semibold">CivicAI Assistant</h3>
            <p className="mt-2 text-sm text-slate-600">
              Managed business communication on WhatsApp—built around your workflows, with consistent handling of enquiries,
              bookings, and handovers.
            </p>
            <div className="mt-5">
              <Link href="/products/whatsapp-ai-assistant">
                <Button variant="outline">View product</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-xs text-teal-700">Product</div>
            <h3 className="mt-2 text-lg font-semibold">ContractGuard AI</h3>
            <p className="mt-2 text-sm text-slate-600">
              Contract analysis and risk scanning—built for speed, clarity, and practical decision support.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/products/contractguard-ai">
                <Button variant="outline">Overview</Button>
              </Link>
              <Link href="https://app.contractguardhq.com" target="_blank" rel="noreferrer">
                <Button>Open SaaS</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-xs text-teal-700">Holding company</div>
            <h3 className="mt-2 text-lg font-semibold">Portfolio approach</h3>
            <p className="mt-2 text-sm text-slate-600">
              We operate products long-term: reliability, updates, monitoring, and continuous improvements based on real
              usage.
            </p>
            <div className="mt-5">
              <Link href="/about">
                <Button variant="outline">How we operate</Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* Closing CTA (dark section allowed) */}
      <Section className="pb-24">
        <div className="rounded-2xl bg-slate-950 px-8 py-10 text-slate-100 shadow-sm md:px-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Talk to CivicAI</h2>
              <p className="mt-3 text-slate-300">
                If you want a reliable system for inbound communication or operational automation, share your use case.
                We will reply with the most practical next step.
              </p>
            </div>
            <div className="md:text-right">
              <Link href="/contact">
                <Button size="lg">Contact us</Button>
              </Link>
              <div className="mt-3 text-xs text-slate-400">Business inquiries only. No cold outreach.</div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
