import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: Variant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, variant = "default", ...props }, ref) => {
    const Comp: any = asChild ? "a" : "button";
    const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition";
    const variants: Record<Variant, string> = {
      default: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200",
      outline: "bg-transparent border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800",
    };
    return <Comp ref={ref as any} className={cn(base, variants[variant], className)} {...props} />;
  }
);
Button.displayName = "Button";
