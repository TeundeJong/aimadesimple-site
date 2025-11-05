import React from "react";
import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn(
      "rounded-2xl bg-white shadow-sm ring-1 ring-slate-200",
      className
    )}>
      {children}
    </div>
  );
}
