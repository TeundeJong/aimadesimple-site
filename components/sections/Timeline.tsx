const ENTRIES = [
  {
    range: "2015–2019",
    title: "Carpenter & business owner, Netherlands",
    body: "Trained as a carpenter, then ran my own carpentry business in NL. Residential and commercial work &mdash; quoting, scheduling, finishing the job. Started teaching myself to code in parallel.",
    location: "NL",
  },
  {
    range: "2019–2022",
    title: "Moved to Australia",
    body: "Relocated to Australia and kept the same pattern: trade work by day, building apps and SaaS by night. Real stacks, real users, end-to-end. The side projects kept getting more serious.",
    location: "AU",
  },
  {
    range: "2022–2023",
    title: "Google IT Support certificate, transition",
    body: "Completed the Google IT Support certificate, formalising what I&rsquo;d been doing for years on my own. First paid software projects landed. Quit the trades.",
    location: "AU",
  },
  {
    range: "2023–Now",
    title: "Founder, CivicAI Solutions",
    body: "Registered CivicAI Solutions Pty Ltd. Built ContractGuard AI (live SaaS), the Integrated AI Assistant, started VIREX. Building software the way I learned to build &mdash; properly, with mobile apps now part of the toolkit.",
    location: "AU",
  },
] as const;

export default function Timeline() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-teal" />
            Timeline
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Ten years building things.{" "}
            <span className="text-ink-secondary">In wood, then in code.</span>
          </h2>
        </div>
      </div>

      <ol className="mt-12 space-y-px overflow-hidden rounded-3xl border border-edge-soft bg-edge-soft">
        {ENTRIES.map((e, i) => (
          <li
            key={e.range}
            className="group relative flex flex-col gap-4 bg-canvas-base p-6 transition-colors hover:bg-canvas-elevated sm:grid sm:grid-cols-[160px_1fr_60px] sm:items-start sm:gap-8 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-canvas-elevated font-mono text-[11px] tracking-[0.14em] text-ink-secondary ring-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-secondary">
                {e.range}
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl font-medium tracking-tight text-ink-primary sm:text-2xl">
                {e.title}
              </h3>
              <p
                className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-secondary sm:text-base"
                dangerouslySetInnerHTML={{ __html: e.body }}
              />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-tertiary sm:text-right">
              {e.location}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
