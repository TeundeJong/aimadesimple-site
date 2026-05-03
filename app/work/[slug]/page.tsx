import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/sections/CaseStudy";
import CTABlock from "@/components/sections/CTABlock";
import { CASE_STUDIES, getAllSlugs, getCaseStudy } from "@/lib/case-studies";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const data = getCaseStudy(params.slug);
  if (!data) return { title: "Case study not found" };
  return {
    title: data.name,
    description: data.tagline.replace(/<[^>]+>/g, ""),
  };
}

export default function WorkSlugPage({ params }: Params) {
  const data = getCaseStudy(params.slug);
  if (!data) notFound();

  const idx = CASE_STUDIES.findIndex((c) => c.slug === params.slug);
  const nextItem = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
  const next =
    nextItem && nextItem.slug !== data.slug
      ? { slug: nextItem.slug, name: nextItem.name }
      : undefined;

  return (
    <>
      <CaseStudy data={data} next={next} />
      <CTABlock
        eyebrow="Want one of these?"
        title="Let's build yours."
        description="Send a brief and we'll come back with a written proposal in 48 hours."
        primaryHref="/contact"
        primaryLabel="Start a project"
        secondaryHref="/services"
        secondaryLabel="See services"
      />
    </>
  );
}
