const TECH = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Node.js",
  "Supabase",
  "Stripe",
  "Framer Motion",
  "Vercel",
  "OpenAI",
  "Claude",
  "Postgres",
  "Prisma",
  "Cloudflare",
] as const;

function Dot() {
  return (
    <span
      aria-hidden
      className="mx-6 inline-block h-1 w-1 rounded-full bg-accent-teal/60 sm:mx-10"
    />
  );
}

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {TECH.map((name, i) => (
        <span key={`${name}-${i}`} className="flex shrink-0 items-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-secondary sm:text-xs">
            {name}
          </span>
          <Dot />
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section
      aria-label="Tech stack"
      className="relative border-b border-edge-soft bg-canvas-base"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee py-3.5 will-change-transform">
          <Track />
          <Track ariaHidden />
        </div>
      </div>
    </section>
  );
}
