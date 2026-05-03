import Link from "next/link";
import { ArrowUpRight, Globe, Layers, Sparkles, Wrench } from "lucide-react";

const SERVICES = [
  {
    n: "01",
    icon: Globe,
    title: "Websites",
    body: "Marketing sites and portfolios that load fast, convert clearly, and stay easy to update.",
    tags: ["Next.js", "Tailwind", "Vercel"],
  },
  {
    n: "02",
    icon: Layers,
    title: "Web & Mobile Apps",
    body: "Custom SaaS, internal tools, and native iOS / Android apps. Same stack across web and mobile, shipped end-to-end.",
    tags: ["TypeScript", "React Native", "Stripe"],
  },
  {
    n: "03",
    icon: Sparkles,
    title: "AI Integration",
    body: "Practical AI inside your existing workflow &mdash; chat assistants, document analysis, automation.",
    tags: ["OpenAI", "Claude", "RAG"],
  },
  {
    n: "04",
    icon: Wrench,
    title: "Maintenance",
    body: "Monthly retainers for hosting, monitoring, security patches and feature work. No ghosting after launch.",
    tags: ["Monitoring", "Backups", "SLAs"],
  },
] as const;

export default function ServicesPreview() {
  return (
    <section id="services" className="container-page py-24 sm:py-32">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-teal" />
            What we do
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Four services. <span className="text-ink-secondary">No buzzwords, no churn.</span>
          </h2>
        </div>
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 rounded-xl border border-edge-strong bg-canvas-elevated/40 px-5 py-2.5 text-sm font-medium text-ink-primary transition-colors hover:bg-canvas-subtle"
        >
          All services
          <ArrowUpRight className="h-4 w-4 text-ink-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-edge-soft bg-edge-soft sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ n, icon: Icon, title, body, tags }) => (
          <article
            key={n}
            className="group relative flex flex-col gap-6 bg-canvas-base p-8 transition-colors hover:bg-canvas-elevated"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas-elevated ring-soft transition-colors group-hover:bg-canvas-subtle">
                <Icon className="h-5 w-5 text-accent-teal" />
              </div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-ink-tertiary">
                {n}
              </span>
            </div>

            <div className="flex-1">
              <h3 className="font-display text-xl font-medium tracking-tight text-ink-primary">
                {title}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-ink-secondary"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-edge-soft bg-canvas-elevated/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
