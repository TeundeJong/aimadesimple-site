import type { Metadata } from "next";
import HeroPage from "@/components/sections/HeroPage";
import CTABlock from "@/components/sections/CTABlock";
import ProjectVisual from "@/components/ui/ProjectVisual";

export const metadata: Metadata = {
  title: "Future",
  description:
    "What CivicAI Solutions is building toward — health pods, off-grid food, modular living. The longer-term vision behind the agency work.",
};

type Status = "Concept" | "In development" | "Pilot" | "Live";

const PRODUCTS: {
  slug: string;
  name: string;
  status: Status;
  pitch: string;
  detail: string;
  tags: string[];
}[] = [
  {
    slug: "healthhub-pods",
    name: "HealthHub Pods",
    status: "Concept",
    pitch:
      "Modular health stations bringing primary care into communities that have outgrown their local clinic.",
    detail:
      "Self-contained pods designed for waiting-room overflow, regional GPs, and remote sites. Onboard equipment for routine examinations, integrated with the practitioner's existing systems. Less a building, more a deployable extension of an existing practice.",
    tags: ["Hardware", "Healthcare", "Modular"],
  },
  {
    slug: "medisphere-care",
    name: "MediSphere Care",
    status: "In development",
    pitch:
      "Mobile medical pods aimed at NGO and government deployment in remote areas.",
    detail:
      "A larger sibling to HealthHub Pods, designed for outreach and disaster response. Self-powered, transportable, configurable for triage, vaccination, or maternal health depending on the brief. Targeting NGO partnerships and government health-equity programmes.",
    tags: ["Hardware", "NGO / Gov", "Outreach"],
  },
  {
    slug: "hydrohive",
    name: "HydroHive",
    status: "Concept",
    pitch:
      "Off-grid greenhouse with atmospheric water generation. Food security as a piece of hardware.",
    detail:
      "A closed-loop growing system that pulls water from the air, recycles nutrients, and runs on solar. Built for households and small communities where municipal water and food supply chains are unreliable. The point isn't novelty &mdash; it's resilience.",
    tags: ["Hardware", "Off-grid", "Food security"],
  },
  {
    slug: "ecopod-living",
    name: "EcoPod Living",
    status: "Concept",
    pitch:
      "Modular off-grid smart living pods. Compact homes built around the same principles as our health and food work.",
    detail:
      "Single- and two-pod configurations with integrated power, water, and connectivity. Aimed at remote sites, secondary dwellings, and people who want a working home without the development cost of a full build. Same modular language as HealthHub and MediSphere.",
    tags: ["Hardware", "Housing", "Off-grid"],
  },
];

const STATUS_STYLES: Record<Status, string> = {
  Live: "border-success/30 bg-success/10 text-success",
  Pilot: "border-success/30 bg-success/10 text-success",
  "In development": "border-warn/30 bg-warn/10 text-warn",
  Concept: "border-ink-tertiary/40 bg-canvas-subtle text-ink-secondary",
};

export default function FuturePage() {
  return (
    <>
      <HeroPage
        eyebrow="Future"
        title={
          <>
            What we&apos;re{" "}
            <span className="text-gradient-teal">building toward.</span>
          </>
        }
        description={
          <>
            CivicAI Solutions started as a software agency. The longer plan is a
            small holding company &mdash; software, then health, then off-grid
            systems &mdash; sharing the same engineering culture and the same
            1% climate pledge.
          </>
        }
      />

      {/* Vision intro */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
              <span className="h-px w-6 bg-accent-gold" />
              The vision
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              From software to hardware.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-secondary md:text-xl">
            <p>
              The agency funds the longer-term work. Each project we ship for a
              client is also operational practice for what we&apos;re building
              behind the scenes &mdash; a holding company that designs and
              operates real-world systems where they&apos;re needed most.
            </p>
            <p>
              We&apos;re not pitching a tech utopia. We&apos;re engineering
              against three problems we keep seeing: people who can&apos;t reach
              a doctor, communities running out of clean water and food, and
              housing built for the wrong century.
            </p>
            <p>
              The products on this page are at different stages. Some are
              concept dossiers. One is in active prototyping. None of them are
              vapourware &mdash; they&apos;ll ship when they&apos;re built
              properly, not before.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container-page py-12">
        <div className="space-y-6">
          {PRODUCTS.map(({ slug, name, status, pitch, detail, tags }, i) => (
            <article
              key={slug}
              className="group relative grid gap-8 overflow-hidden rounded-3xl border border-edge-soft bg-canvas-elevated p-8 transition-colors hover:bg-canvas-subtle md:grid-cols-[1fr_2fr] md:p-12"
            >
              {/* Visual */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge-soft md:aspect-auto">
                <ProjectVisual slug={slug} showIcon />
                <div className="absolute right-4 top-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${STATUS_STYLES[status]}`}
                  >
                    <span className="h-1 w-1 rounded-full bg-current" />
                    {status}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col">
                <div className="font-mono text-[11px] tracking-[0.18em] text-ink-tertiary">
                  {String(i + 1).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
                </div>
                <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-ink-primary sm:text-4xl">
                  {name}
                </h3>
                <p className="mt-4 text-base font-medium text-ink-primary sm:text-lg">
                  {pitch}
                </p>
                <p
                  className="mt-3 text-sm leading-relaxed text-ink-secondary sm:text-base"
                  dangerouslySetInnerHTML={{ __html: detail }}
                />
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-edge-soft bg-canvas-base/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABlock
        eyebrow="Investor or partner?"
        title="If any of this matters to you, tell us."
        description="We're at the stage where introductions, partners, and pilot sites are more useful than capital. If you can help, get in touch."
        primaryHref="/contact"
        primaryLabel="Get in touch"
        secondaryHref="/work"
        secondaryLabel="See current work"
      />
    </>
  );
}
