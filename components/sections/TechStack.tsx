const GROUPS = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Postgres", "Supabase", "Prisma", "Stripe", "Cloudflare"],
  },
  {
    label: "AI",
    items: ["OpenAI", "Anthropic / Claude", "Vector DB (pgvector)", "RAG pipelines", "OCR / Vision"],
  },
  {
    label: "Tooling",
    items: ["Vercel", "GitHub Actions", "Sentry", "Plausible", "Linear", "Figma"],
  },
] as const;

export default function TechStack() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-gold" />
            The stack
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Boring tools.{" "}
            <span className="text-ink-secondary">Chosen for longevity.</span>
          </h2>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((g) => (
          <div
            key={g.label}
            className="rounded-2xl border border-edge-soft bg-canvas-elevated/60 p-6"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
              {g.label}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-ink-secondary">
              {g.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-accent-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
