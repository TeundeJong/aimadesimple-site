import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BackgroundGrid from "@/components/ui/BackgroundGrid";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
};

export default function CTABlock({
  eyebrow,
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Start a project",
  secondaryHref,
  secondaryLabel,
  className,
}: Props) {
  return (
    <section className={cn("container-page py-24 sm:py-32", className)}>
      <div className="relative overflow-hidden rounded-3xl bg-canvas-elevated ring-strong">
        <BackgroundGrid fade="radial" size={48} />
        <GradientOrbs variant="soft" />

        <div className="relative grid gap-8 px-6 py-16 sm:px-12 sm:py-20 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-edge-strong bg-canvas-subtle/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
                {eyebrow}
              </div>
            )}
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-xl text-base text-ink-secondary sm:text-lg">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <Link
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent-gold px-6 py-3.5 text-sm font-medium text-canvas-base transition-all duration-200 hover:bg-accent-gold-hi hover:shadow-[0_0_0_4px_rgba(212,165,116,0.12)]"
            >
              {primaryLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            {secondaryHref && secondaryLabel && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-edge-strong bg-transparent px-6 py-3.5 text-sm font-medium text-ink-primary transition-colors hover:bg-canvas-subtle"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
