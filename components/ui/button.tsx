"use client";
import React from "react";
import { cn } from "@/lib/utils"; // of vervang met eigen merge util

type Variant = "primary" | "secondary" | "ghost" | "link" | "outline";
type Size = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center rounded-xl font-medium transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400/50 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-900",
  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200 active:bg-slate-100",
  outline:
    "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  ghost:
    "bg-white/70 text-slate-900 hover:bg-white",
  link:
    "bg-transparent text-slate-900 underline-offset-4 hover:underline shadow-none",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
export default Button; // zowel default als named export beschikbaar
