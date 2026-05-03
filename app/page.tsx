import HeroHome from "@/components/sections/HeroHome";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesPreview from "@/components/sections/ServicesPreview";
import FeaturedWork from "@/components/sections/FeaturedWork";
import FounderStrip from "@/components/sections/FounderStrip";
import FutureTeaser from "@/components/sections/FutureTeaser";
import CTABlock from "@/components/sections/CTABlock";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <TrustStrip />
      <ServicesPreview />
      <FeaturedWork />
      <FounderStrip />
      <FutureTeaser />
      <CTABlock
        eyebrow="Have something to build?"
        title="Tell us what you need. We'll tell you what it takes."
        description="No sales call required. Send a brief and we'll come back with a written proposal within 48 hours."
        primaryHref="/contact"
        primaryLabel="Start a project"
        secondaryHref="/services"
        secondaryLabel="See services"
      />
    </>
  );
}
