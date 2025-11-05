import React from "react";
import { cn } from "@/lib/utils";

/* ========== Container ========== */
export function Container({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>{children}</div>;
}

/* ========== SectionTitle ========== */
export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

/* ========== Section Wrapper ========== */
export default function Section({
  title,
  subtitle,
  className,
  children,
}: React.PropsWithChildren<{
  title?: string;
  subtitle?: string;
  className?: string;
}>) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <Container>
        {title && <SectionTitle title={title} subtitle={subtitle} />}
        {children}
      </Container>
    </section>
  );
}
