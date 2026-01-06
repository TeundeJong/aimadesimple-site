import Link from "next/link";
import { Check, Calendar, BadgeCheck, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import CheckoutButton from "@/components/CheckoutButton";
import { getPricingCurrencyFromRequestHeaders } from "@/lib/geo";

const features = [
  "Route inbound messages by workflow (enquiries, quotes, bookings)",
  "Consistent tone + guardrails (no spam, no hallucinated promises)",
  "Built-in handover path when a human should take over",
  "Follow-ups and reminders handled automatically",
  "Conversation logging for operational visibility",
  "Managed onboarding, configuration, monitoring, and support",
];

type Price = {
  currency: "EUR" | "AUD";
  amount: string;
  suffix: string;
};

async function getPrice(): Promise<Price> {
  const currency = await getPricingCurrencyFromRequestHeaders();
  if (currency === "AUD") {
    return { currency, amount: "$499", suffix: "AUD / month" };
  }
  return { currency, amount: "€399", suffix: "per month" };
}

export default async function WhatsAppAIAssistantPage() {
  const price = await getPrice();

  return (
    <main>
      <Section
        title="CivicAI Assistant"
        subtitle="A managed WhatsApp-based operational system for service businesses and professionals. Automate business communication around your workflow—enquiries, bookings, follow-ups, and handovers—without turning your business into a ‘chatbot project’."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900">
              <BadgeCheck className="h-4 w-4 text-emerald-700" />
              Platform-grade, business-safe automation
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Automated business communication—built around your workflow.
            </h2>
            <p className="mt-3 text-slate-600">
              CivicAI Assistant is not a generic chatbot. It is a managed operational system that uses WhatsApp as the
              channel—configured to your business logic, tone, and handover rules. It reduces manual back-and-forth while
              keeping customer conversations structured and predictable.
            </p>
            <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-700 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
              <span className="font-semibold text-slate-900">Managed system</span> — not a self-serve chatbot. We onboard,
              configure, and monitor the deployment with clear guardrails.
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.9),rgba(240,253,250,0.55))] p-4 shadow-md shadow-slate-900/10 ring-1 ring-white/60"
                >
                  <div className="mt-0.5 rounded-lg bg-emerald-600/12 p-1.5 ring-1 ring-emerald-600/10">
                    <Check className="h-4 w-4 text-emerald-700" />
                  </div>
                  <div className="text-sm text-slate-800">{f}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-teal-700" />
                <div className="font-semibold">Who it is for</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Service businesses, trades, professional services, clinics, real estate, and any team that receives high
                volumes of WhatsApp messages and needs structured responses, reliable follow-ups, and clean handovers.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-teal-700" />
                <div className="text-sm font-semibold">Not a generic chatbot</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                This is a managed assistant system: configured per business, monitored in production, and designed to keep
                conversations structured.
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Configured flows (enquiry → booking → follow-up)</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Guardrails + handover to a human when needed</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Operational visibility (message logging)</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Managed onboarding and ongoing support</span></li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button size="lg">
                  Request onboarding <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline">
                  Back to products
                </Button>
              </Link>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-6">
            <div className="text-xs text-teal-700">Pricing</div>
            <h3 className="mt-2 text-xl font-semibold">Simple, subscription-based</h3>
            <p className="mt-2 text-sm text-slate-600">
              One platform subscription with included onboarding, configuration, and support.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
              <div className="text-sm font-semibold">Your region</div>
              <div className="mt-1 text-3xl font-semibold tracking-tight">
                {price.amount}
                <span className="ml-2 text-base font-medium text-slate-600">{price.suffix}</span>
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Pricing is selected automatically based on request headers.
              </div>
              <div className="mt-2">
                <Link href="/contact" className="text-xs font-medium text-teal-700 hover:underline">
                  Seeing the wrong currency? Contact us.
                </Link>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
              <div className="text-sm font-semibold">Commitment</div>
              <p className="mt-2 text-sm text-slate-600">
                Minimum commitment: <span className="text-slate-900 font-medium">3 months</span>.
                <br />
                No one-time setup fee.
                <br />
                <span className="text-slate-900 font-medium">Onboarding, configuration and support are included.</span>
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Calendar className="h-4 w-4 text-teal-700" />
                Calendar scheduling (included)
              </div>
              <div className="mt-3 rounded-2xl border border-slate-200/70 bg-slate-50 p-4 text-sm text-slate-700 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
                <div className="grid gap-2">
                  <div><span className="font-semibold">Calendar Read</span>: the assistant can read availability to propose times.</div>
                  <div><span className="font-semibold">Calendar Write</span>: the assistant can create/update bookings (with permission).</div>
                  <div><span className="font-semibold">Read + Write</span>: full scheduling flow end-to-end.</div>
                </div>
                <div className="mt-3 text-xs text-slate-500">
                  Included in the subscription. Enabled during onboarding based on your use-case and required permissions.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-md shadow-slate-900/10 ring-1 ring-white/60">
              <div className="text-xs font-semibold text-slate-700">Secure billing</div>
              <div className="mt-1 text-sm text-slate-600">Payments are processed securely via Stripe.</div>
            </div>

            <div className="mt-8 space-y-3">
              <CheckoutButton currency={price.currency} className="w-full" />
              <Link href="/contact">
                <Button className="w-full" size="lg" variant="outline">
                  Start a business inquiry
                </Button>
              </Link>
              <p className="text-xs text-slate-500">
                After purchase, we will contact you to schedule onboarding and enable the right options for your business.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
