import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  fade?: "top" | "bottom" | "radial" | "none";
  size?: number;
};

const fadeMap: Record<NonNullable<Props["fade"]>, string> = {
  top: "[mask-image:linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)]",
  bottom:
    "[mask-image:linear-gradient(to_top,#000_0%,#000_60%,transparent_100%)]",
  radial:
    "[mask-image:radial-gradient(ellipse_at_center,#000_0%,#000_55%,transparent_85%)]",
  none: "",
};

export default function BackgroundGrid({
  className,
  fade = "radial",
  size = 56,
}: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-grid-soft opacity-[0.55]",
        fadeMap[fade],
        className
      )}
      style={{ backgroundSize: `${size}px ${size}px` }}
    />
  );
}
