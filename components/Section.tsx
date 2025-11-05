// components/Section.tsx
import React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto max-w-7xl px-6", className)}>{children}</div>;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
}: { title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div className={cn(centered ? "text-center" : "")}>
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default function Section({
  className,
  title,
  subtitle,
  children,
  centeredTitle = false,
}: {
  className?: string;
  title?: string;
  subtitle?: string;
  centeredTitle?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <Container>
        {title && <SectionTitle title={title} subtitle={subtitle} centered={centeredTitle} />}
        <div className={title ? "mt-8" : ""}>{children}</div>
      </Container>
    </section>
  );
}
