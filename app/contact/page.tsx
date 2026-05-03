import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import HeroPage from "@/components/sections/HeroPage";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send a brief and we'll come back with a written proposal within 48 hours. Business inquiries only.",
};

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "teun@civicai-solutions.com",
    href: "mailto:teun@civicai-solutions.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us directly",
    href: "https://wa.me/61000000000",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <HeroPage
        eyebrow="Contact"
        title={
          <>
            Tell us what you&apos;re building.{" "}
            <span className="text-gradient-gold">We&apos;ll handle the rest.</span>
          </>
        }
        description="A short brief is enough. We respond within 48 hours with a written proposal &mdash; no sales call required."
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl border border-edge-soft bg-canvas-elevated/40 p-6 sm:p-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
                <span className="h-px w-6 bg-accent-teal" />
                Send a brief
              </div>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
                A few questions, one message.
              </h2>
            </div>
            <ContactForm />
          </div>

          {/* Side panel */}
          <aside className="space-y-6">
            {/* Direct channels */}
            <div className="rounded-3xl border border-edge-soft bg-canvas-elevated/40 p-6 sm:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
                Direct channels
              </div>
              <ul className="mt-5 space-y-4">
                {CHANNELS.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-3 text-ink-primary"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-canvas-base ring-soft">
                        <c.icon className="h-4 w-4 text-accent-teal" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
                          {c.label}
                        </span>
                        <span className="block text-sm transition-colors group-hover:text-accent-teal">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div className="rounded-3xl border border-edge-soft bg-canvas-elevated/40 p-6 sm:p-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
                Locations
              </div>
              <ul className="mt-5 space-y-4 text-sm text-ink-secondary">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                  <span>
                    <span className="block text-ink-primary">Coffs Harbour, AU</span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
                      Primary studio
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                  <span>
                    <span className="block text-ink-primary">Netherlands</span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
                      EU presence
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Response time */}
            <div className="rounded-3xl border border-edge-soft bg-canvas-elevated/40 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-canvas-base ring-soft">
                  <Clock className="h-4 w-4 text-accent-teal" />
                </span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
                    Response time
                  </div>
                  <div className="text-sm text-ink-primary">
                    Within 48 hours, weekdays
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink-tertiary">
                Business inquiries only. We don&apos;t respond to cold sales,
                SEO offers, or recruitment outreach.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
