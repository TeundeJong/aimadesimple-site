import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PACKAGES = [
  {
    name: "Starter",
    pitch: "Marketing site or simple booking flow",
    features: [
      "Up to 6 pages",
      "Custom design within design system",
      "Basic SEO + analytics",
      "Contact form / Calendly",
      "1 round of revisions",
      "30 days of bug-fix support",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    pitch: "Full website + light backend",
    features: [
      "Up to 15 pages or templates",
      "Custom design + content modeling",
      "Stripe checkout / payments",
      "Auth (sign-in, magic link or OAuth)",
      "Admin dashboard",
      "90 days of support",
    ],
    highlight: true,
  },
  {
    name: "Custom",
    pitch: "Web app, SaaS, or AI integration",
    features: [
      "Full discovery + scoping",
      "Custom architecture",
      "Multi-tenant, roles, billing",
      "AI / automation layer",
      "Ongoing iteration cycles",
      "Maintenance retainer included",
    ],
    highlight: false,
  },
] as const;

export default function Packages() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
          <span className="h-px w-6 bg-accent-gold" />
          Packages
          <span className="h-px w-6 bg-accent-gold" />
        </div>
        <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
          Three tiers. <span className="text-ink-secondary">Priced per project.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-ink-secondary">
          We don&apos;t list fixed prices because every project is different.
          Pick the tier that matches your scope &mdash; we&apos;ll come back
          with a written quote within 48 hours.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {PACKAGES.map((pkg) => (
          <article
            key={pkg.name}
            className={cn(
              "relative flex flex-col gap-6 rounded-3xl border p-8 sm:p-10",
              pkg.highlight
                ? "border-accent-gold/40 bg-canvas-elevated shadow-[0_0_0_1px_rgba(212,165,116,0.18),0_30px_60px_-30px_rgba(212,165,116,0.35)]"
                : "border-edge-soft bg-canvas-elevated/60"
            )}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-accent-gold/40 bg-canvas-base px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-gold">
                Most chosen
              </div>
            )}

            <div>
              <div className="font-display text-2xl font-medium tracking-tight text-ink-primary">
                {pkg.name}
              </div>
              <div className="mt-2 text-sm text-ink-secondary">{pkg.pitch}</div>
            </div>

            <div className="border-y border-edge-soft py-6">
              <div className="font-display text-3xl font-medium tracking-tight text-ink-primary">
                Contact for quote
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
                Written proposal in 48h
              </div>
            </div>

            <ul className="flex-1 space-y-2.5 text-sm text-ink-secondary">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-teal" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={cn(
                "group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200",
                pkg.highlight
                  ? "bg-accent-gold text-canvas-base hover:bg-accent-gold-hi hover:shadow-[0_0_0_4px_rgba(212,165,116,0.12)]"
                  : "border border-edge-strong bg-canvas-base text-ink-primary hover:bg-canvas-subtle"
              )}
            >
              Request a quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
