import Link from "next/link";
import { ArrowUpRight, Home } from "lucide-react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import GradientOrbs from "@/components/ui/GradientOrbs";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden">
      <GradientOrbs variant="soft" />
      <BackgroundGrid fade="radial" size={64} />

      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-tertiary">
            Error 404
          </div>
          <div className="mt-4 font-display text-7xl font-medium tracking-tight text-ink-primary sm:text-8xl">
            <span className="text-gradient-gold">404</span>
          </div>
          <h1 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink-primary sm:text-4xl">
            We measured twice. The page still isn&apos;t here.
          </h1>
          <p className="mt-4 text-base text-ink-secondary sm:text-lg">
            The URL you followed doesn&apos;t lead anywhere on this site. It
            might have moved, or it may never have existed.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent-gold px-6 py-3.5 text-sm font-medium text-canvas-base transition-all duration-200 hover:bg-accent-gold-hi hover:shadow-[0_0_0_4px_rgba(212,165,116,0.12)]"
            >
              <Home className="h-4 w-4" />
              Back to home
            </Link>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-xl border border-edge-strong bg-canvas-elevated/40 px-6 py-3.5 text-sm font-medium text-ink-primary transition-colors hover:bg-canvas-subtle"
            >
              See work
              <ArrowUpRight className="h-4 w-4 text-ink-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
