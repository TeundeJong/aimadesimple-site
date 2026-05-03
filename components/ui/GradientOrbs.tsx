import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "hero" | "soft" | "split";
};

export default function GradientOrbs({ className, variant = "hero" }: Props) {
  if (variant === "soft") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className
        )}
      >
        <div className="absolute -top-40 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-accent-teal/[0.10] blur-3xl animate-orb-float" />
        <div
          className="absolute -bottom-32 right-1/3 h-[380px] w-[380px] rounded-full bg-accent-gold/[0.10] blur-3xl animate-orb-float"
          style={{ animationDelay: "-8s" }}
        />
      </div>
    );
  }

  if (variant === "split") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className
        )}
      >
        <div className="absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-accent-teal/[0.12] blur-3xl" />
        <div className="absolute -right-32 top-2/3 h-[380px] w-[380px] rounded-full bg-accent-gold/[0.12] blur-3xl" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <div className="absolute -top-32 left-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent-teal/[0.14] blur-3xl animate-orb-float" />
      <div
        className="absolute -top-20 right-0 h-[440px] w-[440px] translate-x-1/4 rounded-full bg-accent-gold/[0.12] blur-3xl animate-orb-float"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 translate-y-1/3 rounded-full bg-accent-teal/[0.08] blur-3xl animate-orb-float"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}
