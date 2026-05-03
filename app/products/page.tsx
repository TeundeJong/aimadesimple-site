import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, Clock } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <main>
      <Section
        title="Products"
        subtitle="CivicAI is a holding company building focused AI platforms. Each product is designed for reliability, commercial scalability, and measurable operational impact."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <MessageCircle className="h-5 w-5 text-teal-700" />
            <h3 className="mt-4 text-lg font-semibold">CivicAI Assistant</h3>
            <p className="mt-2 text-sm text-slate-600">
              A managed WhatsApp-based operational system that handles enquiries, bookings, follow-ups and handovers
              automatically—built around your workflow (not a generic chatbot).
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Responds in the same language as the customer</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Guardrails to prevent spam and keep replies on-policy</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Calendar scheduling (read/write) included — enabled during onboarding</span></li>
            </ul>
            <div className="mt-6">
              <Link href="/products/whatsapp-ai-assistant">
                <Button size="md">
                  View details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <ShieldCheck className="h-5 w-5 text-teal-700" />
            <h3 className="mt-4 text-lg font-semibold">ContractGuard AI</h3>
            <p className="mt-2 text-sm text-slate-600">
              Contract analysis and risk scanning for teams—built for speed, clarity, and practical decision support.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Quick contract summaries and risk detection</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Designed for busy professionals and teams</span></li>
              <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Dedicated product site & app experience</span></li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products/contractguard-ai">
                <Button variant="outline">Overview</Button>
              </Link>
              <Link href="https://app.contractguardhq.com" target="_blank" rel="noreferrer">
                <Button>Open SaaS</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <Clock className="h-5 w-5 text-teal-700" />
            <h3 className="mt-4 text-lg font-semibold">Future platforms</h3>
            <p className="mt-2 text-sm text-slate-600">
              CivicAI is building additional AI modules and products, including email automation, SaaS tooling, and
              industry-specific AI platforms.
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="rounded-xl border border-slate-200/70 bg-white p-3 shadow-md shadow-slate-900/10 ring-1 ring-white/60">Email automation (in development)</div>
              <div className="rounded-xl border border-slate-200/70 bg-white p-3 shadow-md shadow-slate-900/10 ring-1 ring-white/60">SaaS builder systems (planned)</div>
              <div className="rounded-xl border border-slate-200/70 bg-white p-3 shadow-md shadow-slate-900/10 ring-1 ring-white/60">Construction AI & vertical modules (planned)</div>
            </div>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="outline">Discuss a use case</Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
