import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function ContractGuardPage() {
  return (
    <main>
      <Section
        title="ContractGuard AI"
        subtitle="ContractGuard AI is a dedicated SaaS product from CivicAI. It helps teams scan contracts faster, surface risks, and understand key clauses with practical decision support."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
              <ShieldCheck className="h-3.5 w-3.5 text-teal-700" />
              Dedicated product
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Fast contract scanning, built for real work.
            </h2>
            <p className="mt-3 text-slate-600">
              ContractGuard AI is designed to reduce manual review time, improve clarity, and help teams move faster.
              The full experience lives on its own product site and app.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {["Summaries and key clause extraction", "Risk flags and practical explanations", "Built for teams and repeat use", "Designed for speed and clarity"].map(
                (item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                    {item}
                  </div>
                )
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="https://app.contractguardhq.com" target="_blank" rel="noreferrer">
                <Button size="lg">
                  Open ContractGuard AI <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline">
                  Back to products
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-xs text-teal-700">Note</div>
            <h3 className="mt-2 text-xl font-semibold">No duplicate sales copy here</h3>
            <p className="mt-2 text-sm text-slate-600">
              CivicAI keeps the holding-company site high-level. ContractGuard AI has its own product positioning,
              onboarding, and subscription experience.
            </p>
            <div className="mt-6">
              <Link href="https://app.contractguardhq.com" target="_blank" rel="noreferrer">
                <Button className="w-full" variant="outline">
                  Go to ContractGuard AI
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
