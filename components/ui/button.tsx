import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, ...props }, ref) => {
    const Comp: any = asChild ? "a" : "button";
    return (
      <Comp
        ref={ref as any}
        className={cn(
          "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition",
          "bg-slate-900 text-white hover:bg-slate-800",
          "dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
