import Link from "next/link";
import { ArrowUpRight, Activity, Leaf, Heart } from "lucide-react";

const ITEMS = [
  {
    icon: Heart,
    name: "HealthHub Pods",
    summary:
      "Modular health stations bringing primary care into communities that have outgrown their local clinic.",
    status: "Concept",
  },
  {
    icon: Activity,
    name: "MediSphere Care",
    summary:
      "Mobile medical pods aimed at NGO and government deployment in remote areas. In active development.",
    status: "In development",
  },
  {
    icon: Leaf,
    name: "HydroHive",
    summary:
      "Off-grid greenhouse with atmospheric water generation. Food security as a piece of hardware.",
    status: "Concept",
  },
] as const;

export default function FutureTeaser() {
  return (
    <section className="container-page py-24 sm:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            <span className="h-px w-6 bg-accent-teal" />
            What we&apos;re building toward
          </div>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Beyond software.{" "}
            <span className="text-ink-secondary">Pods, hardware, real-world systems.</span>
          </h2>
        </div>
        <Link
          href="/future"
          className="group inline-flex items-center gap-2 rounded-xl border border-edge-strong bg-canvas-elevated/40 px-5 py-2.5 text-sm font-medium text-ink-primary transition-colors hover:bg-canvas-subtle"
        >
          See the vision
          <ArrowUpRight className="h-4 w-4 text-ink-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-edge-soft bg-edge-soft md:grid-cols-3">
        {ITEMS.map(({ icon: Icon, name, summary, status }) => (
          <div
            key={name}
            className="group relative flex flex-col gap-5 bg-canvas-base p-8 transition-colors hover:bg-canvas-elevated"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-canvas-elevated ring-soft">
                <Icon className="h-5 w-5 text-accent-teal" />
              </div>
              <span className="rounded-full border border-edge-soft bg-canvas-elevated px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-tertiary">
                {status}
              </span>
            </div>
            <h3 className="font-display text-xl font-medium tracking-tight text-ink-primary">
              {name}
            </h3>
            <p className="text-sm leading-relaxed text-ink-secondary">{summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
