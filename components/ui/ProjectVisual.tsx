import {
  Activity,
  Heart,
  Leaf,
  Home as HomeIcon,
  Boxes,
  Sparkles,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = {
  icon: LucideIcon;
  primary: string;
  secondary: string;
  pattern: "grid" | "rings" | "diagonal";
  glyph?: string;
};

const VARIANTS: Record<string, Variant> = {
  // Case studies
  "civicai-assistant": {
    icon: Sparkles,
    primary: "rgba(94,234,212,0.28)",
    secondary: "rgba(94,234,212,0.10)",
    pattern: "rings",
    glyph: "AI",
  },
  "contractguard-ai": {
    icon: ShieldCheck,
    primary: "rgba(212,165,116,0.28)",
    secondary: "rgba(94,234,212,0.10)",
    pattern: "diagonal",
    glyph: "CG",
  },
  virex: {
    icon: Boxes,
    primary: "rgba(94,234,212,0.22)",
    secondary: "rgba(212,165,116,0.18)",
    pattern: "grid",
    glyph: "VX",
  },

  // Future products
  "healthhub-pods": {
    icon: Heart,
    primary: "rgba(248,113,113,0.20)",
    secondary: "rgba(212,165,116,0.12)",
    pattern: "rings",
  },
  "medisphere-care": {
    icon: Activity,
    primary: "rgba(94,234,212,0.24)",
    secondary: "rgba(248,113,113,0.10)",
    pattern: "diagonal",
  },
  hydrohive: {
    icon: Leaf,
    primary: "rgba(74,222,128,0.22)",
    secondary: "rgba(94,234,212,0.10)",
    pattern: "grid",
  },
  "ecopod-living": {
    icon: HomeIcon,
    primary: "rgba(212,165,116,0.22)",
    secondary: "rgba(74,222,128,0.10)",
    pattern: "diagonal",
  },
};

const FALLBACK: Variant = {
  icon: Boxes,
  primary: "rgba(94,234,212,0.20)",
  secondary: "rgba(212,165,116,0.16)",
  pattern: "grid",
};

type Props = {
  slug: string;
  className?: string;
  showIcon?: boolean;
  showName?: boolean;
  name?: string;
};

export default function ProjectVisual({
  slug,
  className,
  showIcon = true,
  showName = false,
  name,
}: Props) {
  const v = VARIANTS[slug] ?? FALLBACK;
  const Icon = v.icon;

  const patternBg =
    v.pattern === "rings"
      ? "radial-gradient(circle at 50% 50%, transparent 35%, rgba(255,255,255,0.04) 35.5%, transparent 36.5%, transparent 50%, rgba(255,255,255,0.04) 50.5%, transparent 51.5%, transparent 65%, rgba(255,255,255,0.04) 65.5%, transparent 66.5%)"
      : v.pattern === "diagonal"
        ? "repeating-linear-gradient(45deg, transparent 0 32px, rgba(255,255,255,0.03) 32px 33px)"
        : "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)";

  const patternSize =
    v.pattern === "rings" ? "100% 100%" : v.pattern === "diagonal" ? "auto" : "32px 32px";

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-canvas-base",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 25% 20%, ${v.primary}, transparent 55%), radial-gradient(ellipse at 80% 80%, ${v.secondary}, transparent 60%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{ backgroundImage: patternBg, backgroundSize: patternSize }}
      />

      {v.glyph && (
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-6 -right-4 select-none font-display text-[180px] font-medium leading-none tracking-tight text-ink-primary/[0.04] sm:text-[220px]"
        >
          {v.glyph}
        </div>
      )}

      {(showIcon || showName) && (
        <div className="relative flex h-full flex-col items-center justify-center gap-4">
          {showIcon && (
            <Icon
              className="h-12 w-12 text-ink-primary/70 sm:h-16 sm:w-16"
              strokeWidth={1.25}
            />
          )}
          {showName && name && (
            <div className="font-display text-2xl font-medium tracking-tight text-ink-primary sm:text-3xl">
              {name}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
