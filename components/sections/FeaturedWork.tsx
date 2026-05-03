import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { CASE_STUDIES, type CaseStudyStatus } from "@/lib/case-studies";

const STATUS_STYLES: Record<CaseStudyStatus, string> = {
  Live: "border-success/30 bg-success/10 text-success",
  "In development": "border-warn/30 bg-warn/10 text-warn",
  Concept: "border-ink-tertiary/40 bg-canvas-subtle text-ink-secondary",
};

export default function FeaturedWork() {
  const featured = CASE_STUDIES.slice(0, 3);

  return (
    <section id="work" className="container-page py-24 sm:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-gold" />
            Selected work
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Three projects. <span className="text-ink-secondary">Each one shipping.</span>
          </h2>
        </div>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 rounded-xl border border-edge-strong bg-canvas-elevated/40 px-5 py-2.5 text-sm font-medium text-ink-primary transition-colors hover:bg-canvas-subtle"
        >
          All projects
          <ArrowUpRight className="h-4 w-4 text-ink-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {featured.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-edge-soft bg-canvas-elevated transition-all duration-300 hover:border-edge-strong hover:bg-canvas-subtle"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-b border-edge-soft">
              <ProjectVisual slug={p.slug} showIcon={false} />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
                  {p.eyebrow}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${STATUS_STYLES[p.status]}`}
                >
                  <span className="h-1 w-1 rounded-full bg-current" />
                  {p.status}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-display text-2xl font-medium tracking-tight text-ink-primary sm:text-3xl">
                  {p.name}
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-5 p-6">
              <p
                className="text-sm leading-relaxed text-ink-secondary"
                dangerouslySetInnerHTML={{ __html: p.tagline }}
              />

              <div className="flex flex-wrap gap-1.5">
                {p.category.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-edge-soft bg-canvas-base/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-edge-soft pt-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
                  {p.year}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-ink-primary transition-all group-hover:gap-2.5">
                  View case study
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
