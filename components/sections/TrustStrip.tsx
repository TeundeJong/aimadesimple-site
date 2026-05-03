const ITEMS = [
  { value: "10+", label: "Years in trades & tech" },
  { value: "End-to-end", label: "From design to deploy" },
  { value: "99.9%", label: "Maintenance uptime target" },
  { value: "1%", label: "Revenue to climate action" },
] as const;

export default function TrustStrip() {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-edge-soft bg-edge-soft sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="bg-canvas-base p-6 transition-colors hover:bg-canvas-elevated sm:p-8"
          >
            <div className="font-display text-3xl font-medium tracking-tight text-ink-primary sm:text-4xl">
              {item.value}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
