import * as React from "react";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        // Slightly deeper default card treatment (enterprise feel).
        // Keep it subtle: depth comes from layered shadows + soft border tint, not heavy UI chrome.
        "rounded-2xl border border-slate-200/70 bg-white shadow-md shadow-slate-900/10 ring-1 ring-white/60 transition-shadow hover:shadow-lg hover:shadow-slate-900/15",
        className
      )}
    >
      {children}
    </div>
  );
}
