import * as React from "react";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/10 transition-shadow hover:shadow-md hover:shadow-slate-900/10",
        className
      )}
    >
      {children}
    </div>
  );
}
