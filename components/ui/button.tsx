// components/ui/button.tsx
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        primary: "bg-slate-900 text-white hover:bg-slate-800",
        outline: "bg-white border border-slate-300 text-slate-900 hover:bg-slate-50",
        ghost: "bg-transparent text-slate-900 hover:bg-slate-100", // zachte subtiele variant
        link: "bg-transparent text-slate-900 hover:underline",
      },
      size: { sm: "px-3 py-2", md: "px-4 py-2.5" },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export default function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(button({ variant, size }), className)} {...props} />;
}
