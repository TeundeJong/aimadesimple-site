import type { Metadata } from "next";
import HeroPage from "@/components/sections/HeroPage";
import WorkGrid from "@/components/sections/WorkGrid";
import CTABlock from "@/components/sections/CTABlock";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects from CivicAI Solutions — websites, web apps and AI products built end-to-end.",
};

export default function WorkPage() {
  return (
    <>
      <HeroPage
        eyebrow="Work"
        title={
          <>
            Selected projects.{" "}
            <span className="text-gradient-gold">Built end-to-end.</span>
          </>
        }
        description="A small set of projects, each one shipping or in active development. Pick a category to filter."
      />
      <WorkGrid />
      <CTABlock
        eyebrow="Want yours here?"
        title="Tell us what you're building."
        description="A short brief is enough to start. Written proposal in 48 hours."
        primaryHref="/contact"
        primaryLabel="Start a project"
        secondaryHref="/services"
        secondaryLabel="See services"
      />
    </>
  );
}
