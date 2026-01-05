import Link from "next/link";
import { Check, Calendar, Shield, MessageCircle, ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { getPricingCurrencyFromRequestHeaders } from "@/lib/geo";

const features = [
  "Replies in the same language as the customer",
  "Consistent tone and business-safe guardrails",
  "Only responds to inbound messages (no spam)",
  "Conversation handoff support (human takeover when needed)",
  "Message logging for operational visibility",
  "Commercial-ready onboarding and ongoing support included",
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
        title="WhatsApp AI Assistant"
        subtitle="A paid WhatsApp automation platform for service businesses and professionals. Reduce missed leads, reply faster, and keep customer communication consistent—without turning your business into a chatbot agency."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
              <Shield className="h-3.5 w-3.5 text-teal-700" />
              Platform-grade, business-safe automation
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Turn WhatsApp into a reliable, always-on response channel.
            </h2>
            <p className="mt-3 text-slate-600">
              Built for SMBs who depend on WhatsApp for inbound leads, customer questions, quotes, and bookings. CivicAI
              provides onboarding, configuration, and ongoing support as part of the subscription.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mt-0.5 rounded-lg bg-teal-600/10 p-1">
                    <Check className="h-4 w-4 text-teal-700" />
                  </div>
                  <div className="text-sm text-slate-700">{f}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-teal-700" />
                <div className="font-semibold">Who it is for</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Service businesses, trades, professional services, clinics, real estate, and any team that receives high
                volumes of WhatsApp messages and needs fast, consistent responses.
              </p>
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

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
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

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
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
                Calendar add-ons
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Calendar Read</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Calendar Write</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5">•</span><span>Read + Write</span></li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Add-ons are activated per deployment based on your use case and permissions required.
              </p>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button className="w-full" size="lg">
                  Start a business inquiry
                </Button>
              </Link>
              <p className="mt-3 text-xs text-slate-500">
                Final invoicing currency can be aligned during onboarding when required.
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
