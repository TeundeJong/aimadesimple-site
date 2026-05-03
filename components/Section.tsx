import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6", className)}>{children}</div>;
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 h-px w-16 rounded-full bg-gradient-to-r from-teal-500 to-sky-500" />
      {subtitle && <p className="mt-3 max-w-3xl text-sm md:text-base text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default function Section({
  title,
  subtitle,
  className,
  children,
}: React.PropsWithChildren<{ title?: string; subtitle?: string; className?: string }>) {
  return (
    <section className={cn("py-14 md:py-20", className)}>
      <Container>
        {title && <SectionTitle title={title} subtitle={subtitle} />}
        {children}
      </Container>
    </section>
  );
}
