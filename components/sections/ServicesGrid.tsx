import { Globe, Layers, Smartphone, Sparkles, Wrench } from "lucide-react";

const SERVICES = [
  {
    n: "01",
    icon: Globe,
    title: "Websites",
    body: "Marketing sites, portfolios, landing pages. Fast, content-managed, easy to update. We design with your audience in mind, not a portfolio panel.",
    deliverables: [
      "Custom design + build",
      "Content management",
      "SEO + analytics",
      "Performance budget enforced",
    ],
    tags: ["Next.js", "Tailwind", "Vercel", "Sanity / MDX"],
  },
  {
    n: "02",
    icon: Layers,
    title: "Web Applications",
    body: "Custom SaaS, internal tools, dashboards, marketplaces. End-to-end with auth, billing, roles and the boring infrastructure done correctly the first time.",
    deliverables: [
      "Database schema + migrations",
      "Auth, roles, billing",
      "Admin tooling",
      "Production-grade observability",
    ],
    tags: ["TypeScript", "Postgres", "Stripe", "Supabase"],
  },
  {
    n: "03",
    icon: Smartphone,
    title: "Mobile Apps",
    body: "iOS and Android apps using React Native + Expo. The same TypeScript codebase ships to web, App Store and Play Store &mdash; one team, one stack, three platforms.",
    deliverables: [
      "Cross-platform with React Native + Expo",
      "Native modules where they&rsquo;re actually needed",
      "Push notifications, offline-first",
      "App Store + Play Store deploys",
    ],
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    n: "04",
    icon: Sparkles,
    title: "AI Integration",
    body: "Practical AI inside the workflows you already run &mdash; chat assistants, document analysis, transcription, automation. We keep the human in the loop where it matters.",
    deliverables: [
      "RAG over your documents",
      "Chat / WhatsApp / email assistants",
      "Workflow automations",
      "Evaluation + guardrails",
    ],
    tags: ["OpenAI", "Claude", "Vector DB", "RAG"],
  },
  {
    n: "05",
    icon: Wrench,
    title: "Maintenance & Care",
    body: "Monthly retainers for hosting, monitoring, security patches and feature work. The opposite of the agency that disappears after launch.",
    deliverables: [
      "Uptime monitoring + alerts",
      "Backups + disaster recovery",
      "Security patches",
      "Iterative feature work",
    ],
    tags: ["Monitoring", "Backups", "SLAs", "Reporting"],
  },
] as const;

export default function ServicesGrid() {
  return (
    <section className="container-page py-20 sm:py-24">
      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map(({ n, icon: Icon, title, body, deliverables, tags }) => (
          <article
            key={n}
            className="group relative flex flex-col gap-6 rounded-3xl border border-edge-soft bg-canvas-elevated p-8 transition-colors hover:bg-canvas-subtle sm:p-10"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-canvas-base ring-soft">
                <Icon className="h-5 w-5 text-accent-teal" />
              </div>
              <span className="font-mono text-xs tracking-[0.18em] text-ink-tertiary">
                {n}
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-medium tracking-tight text-ink-primary sm:text-3xl">
                {title}
              </h3>
              <p
                className="mt-3 text-base leading-relaxed text-ink-secondary"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>

            <ul className="space-y-2 border-t border-edge-soft pt-5 text-sm text-ink-secondary">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-gold" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-edge-soft bg-canvas-base/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
