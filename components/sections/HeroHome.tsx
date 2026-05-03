import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import GradientOrbs from "@/components/ui/GradientOrbs";

export default function HeroHome() {
  return (
    <section className="relative isolate overflow-hidden">
      <GradientOrbs variant="hero" />
      <BackgroundGrid fade="bottom" size={64} />

      <div className="container-page relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-40">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-edge-strong bg-canvas-elevated/60 px-3 py-1 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-teal" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            Now taking projects for Q3 / Q4
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 max-w-[18ch] font-display text-[42px] font-medium leading-[1.05] tracking-tight sm:text-[64px] md:text-[76px] lg:text-[88px]">
          We build practical{" "}
          <span className="text-gradient-gold">software systems</span>{" "}
          for businesses that need to move.
        </h1>

        {/* Subhead */}
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
          CivicAI Solutions is a small Australian agency designing websites,
          web apps and AI integrations &mdash; built end-to-end, owned by you,
          maintained for the long run.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3.5 text-sm font-medium text-canvas-base transition-all duration-200 hover:bg-accent-gold-hi hover:shadow-[0_0_0_4px_rgba(212,165,116,0.12)]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-xl border border-edge-strong bg-canvas-elevated/40 px-6 py-3.5 text-sm font-medium text-ink-primary backdrop-blur-sm transition-colors hover:bg-canvas-subtle"
          >
            View work
            <ArrowUpRight className="h-4 w-4 text-ink-secondary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-primary" />
          </Link>
        </div>

        {/* Floor strip */}
        <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-edge-soft pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-accent-teal" />
            Coffs Harbour, AU
          </span>
          <span>Available globally</span>
          <span>EN &middot; NL</span>
          <span>1% climate pledge</span>
        </div>
      </div>
    </section>
  );
}
