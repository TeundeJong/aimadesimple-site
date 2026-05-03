const GROUPS = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React + Next.js (App Router)",
      "Tailwind CSS",
      "Framer Motion",
      "Component design systems",
      "Accessibility & responsive UI",
    ],
  },
  {
    label: "Mobile",
    items: [
      "React Native + Expo",
      "iOS & Android builds",
      "Native modules (when needed)",
      "Push notifications",
      "App Store / Play Store deploys",
      "Offline-first patterns",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js + Express / Hono",
      "Postgres + SQL",
      "Supabase + Prisma",
      "REST + tRPC",
      "Stripe (subscriptions, checkout)",
      "Auth, roles, multi-tenant",
    ],
  },
  {
    label: "AI",
    items: [
      "OpenAI + Anthropic APIs",
      "Tool use & function calling",
      "Retrieval-augmented generation",
      "Vector DBs (pgvector, Pinecone)",
      "WhatsApp / Twilio / Postmark",
      "Evaluation & guardrails",
    ],
  },
  {
    label: "Tools",
    items: [
      "Vercel + Cloudflare",
      "GitHub Actions",
      "Sentry + Plausible",
      "Linear + Figma",
      "Docker basics",
      "Git workflow",
    ],
  },
] as const;

export default function Skills() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-teal" />
            Skills
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Self-taught.{" "}
            <span className="text-ink-secondary">Production-grade.</span>
          </h2>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-teal" />
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
