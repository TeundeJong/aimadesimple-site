import { Award } from "lucide-react";

const CERTS = [
  {
    label: "Google IT Support Certificate",
    issuer: "Google / Coursera",
    note: "Multi-course program covering networking, security, system administration, and IT troubleshooting fundamentals.",
  },
  {
    label: "Carpentry diploma",
    issuer: "Vocational, Netherlands",
    note: "Three-year apprenticeship in residential and commercial carpentry.",
  },
  {
    label: "White Card",
    issuer: "Australia",
    note: "Construction induction (CPCCWHS1001).",
  },
  {
    label: "Working at Heights",
    issuer: "Australia",
    note: "Certified for working safely at heights on Australian sites.",
  },
] as const;

export default function Certifications() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-gold" />
            Certifications
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Trade qualifications,{" "}
            <span className="text-ink-secondary">still current.</span>
          </h2>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CERTS.map((c) => (
          <div
            key={c.label}
            className="flex gap-4 rounded-2xl border border-edge-soft bg-canvas-elevated/60 p-6"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-canvas-base ring-soft">
              <Award className="h-5 w-5 text-accent-gold" />
            </div>
            <div>
              <div className="font-display text-base font-medium text-ink-primary">
                {c.label}
              </div>
              <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
                {c.issuer}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {c.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
