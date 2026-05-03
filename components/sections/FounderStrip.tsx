import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FounderStrip() {
  return (
    <section className="container-page py-24 sm:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-edge-soft bg-canvas-elevated">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 85% 50%, rgba(212,165,116,0.18), transparent 55%)",
          }}
        />
        <div className="relative grid gap-10 p-8 sm:p-12 md:grid-cols-[2fr_3fr] md:items-center md:p-16">
          {/* Portrait */}
          <div className="relative h-64 overflow-hidden rounded-2xl border border-edge-soft bg-canvas-base sm:h-80 md:h-[420px]">
            <Image
              src="/tj-portrait-2.png"
              alt="Teun de Jong, founder of CivicAI Solutions"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Body */}
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
              <span className="h-px w-6 bg-accent-gold" />
              The founder
            </div>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Built things with my{" "}
              <span className="text-gradient-gold">hands</span>.
              <br />
              Now I build them in code.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-secondary sm:text-lg">
              Teun de Jong trained as a carpenter and ran his own carpentry
              business in the Netherlands. For roughly a decade he built apps
              and SaaS in his evenings &mdash; until the side work outgrew the
              day job. CivicAI Solutions is what that combination produced.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-edge-strong bg-canvas-base/60 px-5 py-2.5 text-sm font-medium text-ink-primary transition-colors hover:bg-canvas-subtle"
            >
              Read TJ&apos;s story
              <ArrowUpRight className="h-4 w-4 text-ink-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
