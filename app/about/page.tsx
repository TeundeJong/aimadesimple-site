import type { Metadata } from "next";
import HeroPage from "@/components/sections/HeroPage";
import FounderStory from "@/components/sections/FounderStory";
import Timeline from "@/components/sections/Timeline";
import Values from "@/components/sections/Values";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import CTABlock from "@/components/sections/CTABlock";

export const metadata: Metadata = {
  title: "About",
  description:
    "Teun de Jong founded CivicAI Solutions after careers as a carpenter in the Netherlands and a self-employed builder in Australia.",
};

export default function AboutPage() {
  return (
    <>
      <HeroPage
        eyebrow="About"
        title={
          <>
            From carpenter to founder.{" "}
            <span className="text-gradient-gold">Same standards.</span>
          </>
        }
        description="CivicAI Solutions is a one-person agency &mdash; small on purpose, so the work stays good."
      />
      <FounderStory />
      <Timeline />
      <Values />
      <Skills />
      <Certifications />
      <CTABlock
        eyebrow="Want to work together?"
        title="I take on a small number of projects each quarter."
        description="If you have something to build, send a brief and we'll talk."
        primaryHref="/contact"
        primaryLabel="Start a project"
        secondaryHref="/services"
        secondaryLabel="See services"
      />
    </>
  );
}
