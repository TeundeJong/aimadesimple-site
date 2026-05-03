import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import GradientOrbs from "@/components/ui/GradientOrbs";
import ProjectVisual from "@/components/ui/ProjectVisual";
import type { CaseStudy as CaseStudyT } from "@/lib/case-studies";

const STATUS_STYLES: Record<CaseStudyT["status"], string> = {
  Live: "border-success/30 bg-success/10 text-success",
  "In development": "border-warn/30 bg-warn/10 text-warn",
  Concept: "border-ink-tertiary/40 bg-canvas-subtle text-ink-secondary",
};

type Props = {
  data: CaseStudyT;
  next?: { slug: string; name: string };
};

export default function CaseStudy({ data, next }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-edge-soft">
        <GradientOrbs variant="soft" />
        <BackgroundGrid fade="bottom" size={56} />

        <div className="container-page relative pt-20 pb-20 sm:pt-24 sm:pb-24">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary transition-colors hover:text-ink-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
              {data.eyebrow}
            </span>
            <span className="text-ink-tertiary">&middot;</span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
              {data.year}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${STATUS_STYLES[data.status]}`}
            >
              <span className="h-1 w-1 rounded-full bg-current" />
              {data.status}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {data.name}
          </h1>

          <p
            className="mt-6 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg"
            dangerouslySetInnerHTML={{ __html: data.tagline }}
          />

          {data.externalHref && (
            <Link
              href={data.externalHref}
              target={data.externalHref.startsWith("http") ? "_blank" : undefined}
              rel={
                data.externalHref.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group mt-10 inline-flex items-center gap-2 rounded-xl border border-edge-strong bg-canvas-elevated/40 px-5 py-2.5 text-sm font-medium text-ink-primary backdrop-blur-sm transition-colors hover:bg-canvas-subtle"
            >
              {data.externalLabel ?? "Visit product page"}
              <ArrowUpRight className="h-4 w-4 text-ink-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </section>

      {/* Meta strip */}
      <section className="container-page py-12">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-edge-soft bg-edge-soft md:grid-cols-3">
          {[
            { label: "Role", value: data.meta.role },
            { label: "Timeline", value: data.meta.timeline },
            { label: "Client", value: data.meta.client },
          ].map((m) => (
            <div key={m.label} className="min-w-0 bg-canvas-base p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary">
                {m.label}
              </div>
              <div className="mt-2 break-words text-base text-ink-primary">{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Visuals */}
      <section className="container-page py-12">
        {data.images && data.images.length > 0 ? (
          <div
            className={`grid gap-4 sm:gap-6 ${
              data.images.length > 1 ? "md:grid-cols-2" : ""
            }`}
          >
            {data.images.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-edge-soft bg-canvas-elevated"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-edge-soft">
            <ProjectVisual slug={data.slug} showIcon={false} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-5xl font-medium tracking-tight text-ink-primary sm:text-6xl">
                  {data.name}
                </div>
                <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
                  {data.eyebrow}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Problem */}
      <section className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
              <span className="h-px w-6 bg-accent-gold" />
              The problem
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              What needed solving.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-ink-secondary md:text-xl">
            {data.problem}
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
              <span className="h-px w-6 bg-accent-teal" />
              The approach
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              How we built it.
            </h2>
          </div>
          <ol className="space-y-px overflow-hidden rounded-3xl border border-edge-soft bg-edge-soft">
            {data.approach.map((step, i) => (
              <li
                key={step.title}
                className="bg-canvas-base p-8 transition-colors hover:bg-canvas-elevated"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-ink-tertiary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-medium tracking-tight text-ink-primary">
                    {step.title}
                  </h3>
                </div>
                <p
                  className="mt-3 ml-12 text-base leading-relaxed text-ink-secondary"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcome */}
      <section className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
              <span className="h-px w-6 bg-accent-gold" />
              Outcome
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              What it does today.
            </h2>
          </div>
          <div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-edge-soft bg-edge-soft sm:grid-cols-3">
              {data.outcome.map((o) => {
                const isLong = o.value.length > 9;
                return (
                  <div key={o.label} className="min-w-0 bg-canvas-base p-6 sm:p-8">
                    <div
                      className={`font-display font-medium tracking-tight text-ink-primary break-words ${
                        isLong ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
                      }`}
                    >
                      {o.value}
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-secondary">
                      {o.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <ul className="mt-8 space-y-2.5 text-base text-ink-secondary">
              {data.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-teal" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div className="md:sticky md:top-28 md:self-start">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
              <span className="h-px w-6 bg-accent-teal" />
              Stack
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight sm:text-4xl">
              What it&apos;s built on.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-edge-soft bg-canvas-elevated/60 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next + back */}
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/work"
            className="group flex flex-col gap-3 rounded-3xl border border-edge-soft bg-canvas-elevated/40 p-8 transition-colors hover:bg-canvas-subtle"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
              All projects
            </div>
            <div className="flex items-center justify-between">
              <span className="font-display text-2xl font-medium tracking-tight text-ink-primary">
                Back to work index
              </span>
              <ArrowLeft className="h-5 w-5 text-ink-secondary transition-transform group-hover:-translate-x-0.5" />
            </div>
          </Link>

          {next && (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col gap-3 rounded-3xl border border-edge-soft bg-canvas-elevated/40 p-8 transition-colors hover:bg-canvas-subtle"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
                Next case
              </div>
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-medium tracking-tight text-ink-primary">
                  {next.name}
                </span>
                <ArrowUpRight className="h-5 w-5 text-ink-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
