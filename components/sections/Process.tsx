const STEPS = [
  {
    n: "01",
    title: "Intake",
    body: "We talk through what you're trying to do, what's already working, and where it hurts. Free, no commitment, usually 30 minutes.",
    duration: "Day 0",
  },
  {
    n: "02",
    title: "Proposal",
    body: "Written proposal with scope, timeline, milestones and fixed price (or hourly cap). You get it within 48 hours of intake.",
    duration: "Day 1–2",
  },
  {
    n: "03",
    title: "Build",
    body: "We build in weekly cycles with a private staging URL from day one. You see progress live, give feedback, and we iterate.",
    duration: "2–8 weeks",
  },
  {
    n: "04",
    title: "Deliver & care",
    body: "Production deploy, handover docs, training session if needed. Then maintenance kicks in &mdash; we don't disappear after launch.",
    duration: "Ongoing",
  },
] as const;

export default function Process() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-teal" />
            How we work
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Four steps. <span className="text-ink-secondary">No surprises.</span>
          </h2>
        </div>
      </div>

      <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-edge-soft bg-edge-soft md:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className="group relative flex flex-col gap-4 bg-canvas-base p-8 transition-colors hover:bg-canvas-elevated"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.18em] text-ink-tertiary">
                {s.n}
              </span>
              <span className="rounded-full border border-edge-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
                {s.duration}
              </span>
            </div>
            <h3 className="font-display text-xl font-medium tracking-tight text-ink-primary">
              {s.title}
            </h3>
            <p
              className="text-sm leading-relaxed text-ink-secondary"
              dangerouslySetInnerHTML={{ __html: s.body }}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
