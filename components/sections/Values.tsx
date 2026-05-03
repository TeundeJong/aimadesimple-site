import { Compass, Hammer, Eye, Clock } from "lucide-react";

const VALUES = [
  {
    icon: Hammer,
    title: "Practical",
    body: "Software that solves the actual problem you described. No invented features, no buzzwords, no platform lock-in for its own sake.",
  },
  {
    icon: Compass,
    title: "Reliable",
    body: "If we say two weeks, we mean two weeks. If something slips, you hear it from us first. Trust is built one promise at a time.",
  },
  {
    icon: Eye,
    title: "Transparent",
    body: "Fixed scope, fixed price (or capped hours), private staging URL from day one. You see progress as it happens, not at handover.",
  },
  {
    icon: Clock,
    title: "Long-term",
    body: "We build to maintain. Modern stack, sensible defaults, written documentation. The agency you can still call in three years.",
  },
] as const;

export default function Values() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-gold" />
            Values
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Four ways{" "}
            <span className="text-ink-secondary">we work.</span>
          </h2>
        </div>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-edge-soft bg-edge-soft md:grid-cols-2 lg:grid-cols-4">
        {VALUES.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="group flex flex-col gap-5 bg-canvas-base p-8 transition-colors hover:bg-canvas-elevated"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas-elevated ring-soft">
              <Icon className="h-5 w-5 text-accent-gold" />
            </div>
            <h3 className="font-display text-xl font-medium tracking-tight text-ink-primary">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-secondary">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
