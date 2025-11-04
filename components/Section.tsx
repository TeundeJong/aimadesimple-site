// components/Section.tsx
import React from "react";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export default function Section({
  children,
  className = "",
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-14 sm:py-16 lg:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600 dark:text-slate-300">{subtitle}</p>}
    </div>
  );
}
