import BackgroundGrid from "@/components/ui/BackgroundGrid";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
};

export default function HeroPage({
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className,
}: Props) {
  return (
    <section
      className={cn("relative isolate overflow-hidden border-b border-edge-soft", className)}
    >
      <GradientOrbs variant="soft" />
      <BackgroundGrid fade="bottom" size={56} />

      <div
        className={cn(
          "container-page relative pt-20 pb-20 sm:pt-24 sm:pb-24 lg:pt-28 lg:pb-28",
          align === "center" && "text-center"
        )}
      >
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-edge-strong bg-canvas-elevated/60 px-3 py-1 backdrop-blur-sm",
            align === "center" && "mx-auto"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary">
            {eyebrow}
          </span>
        </div>

        <h1
          className={cn(
            "mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
            align === "center" && "mx-auto"
          )}
        >
          {title}
        </h1>

        {description && (
          <div
            className={cn(
              "mt-6 max-w-2xl text-base leading-relaxed text-ink-secondary sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </div>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
