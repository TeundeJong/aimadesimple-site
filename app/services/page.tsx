import type { Metadata } from "next";
import HeroPage from "@/components/sections/HeroPage";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Packages from "@/components/sections/Packages";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import CTABlock from "@/components/sections/CTABlock";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, web apps, AI integrations and maintenance — built end-to-end and maintained for the long run.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroPage
        eyebrow="Services"
        title={
          <>
            Practical software.{" "}
            <span className="text-gradient-gold">Delivered properly.</span>
          </>
        }
        description="A focused set of core services. We pick what fits the job, propose a fixed scope, and ship it without drama."
      />
      <ServicesGrid />
      <Packages />
      <Process />
      <TechStack />
      <CTABlock
        eyebrow="Ready to begin?"
        title="Send a brief. Get a written proposal in 48 hours."
        primaryHref="/contact"
        primaryLabel="Start a project"
        secondaryHref="/work"
        secondaryLabel="See work"
      />
    </>
  );
}
