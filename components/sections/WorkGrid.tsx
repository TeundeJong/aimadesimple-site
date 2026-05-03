"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, type CaseStudyCategory } from "@/lib/case-studies";
import ProjectVisual from "@/components/ui/ProjectVisual";
import { cn } from "@/lib/utils";

const FILTERS: ("All" | CaseStudyCategory)[] = [
  "All",
  "Website",
  "SaaS",
  "AI",
  "Hardware",
];

const STATUS_STYLES = {
  Live: "border-success/30 bg-success/10 text-success",
  "In development": "border-warn/30 bg-warn/10 text-warn",
  Concept: "border-ink-tertiary/40 bg-canvas-subtle text-ink-secondary",
} as const;

export default function WorkGrid() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return CASE_STUDIES;
    return CASE_STUDIES.filter((c) => c.category.includes(active));
  }, [active]);

  return (
    <section className="container-page py-16 sm:py-20">
      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter projects"
        className="flex flex-wrap items-center gap-1.5"
      >
        {FILTERS.map((f) => {
          const isActive = active === f;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
                isActive
                  ? "border-accent-teal/40 bg-accent-teal/10 text-accent-teal"
                  : "border-edge-soft bg-canvas-elevated/40 text-ink-secondary hover:border-edge-strong hover:text-ink-primary"
              )}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-edge-soft bg-canvas-elevated/40 p-12 text-center">
          <div className="font-display text-2xl font-medium tracking-tight text-ink-primary">
            Nothing here yet
          </div>
          <p className="mt-2 text-sm text-ink-secondary">
            We don&apos;t have a {active} case study live yet. Try another
            filter.
          </p>
        </div>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
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
      )}
    </section>
  );
}
