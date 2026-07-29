import { HeroSection } from "@/components/hero/hero-section";
import { MissionVisionSection } from "@/components/about/mission-vision-section";
import { TeamSection } from "@/components/about/team-section";
import { ValuePropSection } from "@/components/home-sections/value-prop-section";
import { ProcessSection } from "@/components/process/process-section";
import { TrustCredibilitySection } from "@/components/home-sections/trust-credibility-section";
import { FinancingSubsidiesSection } from "@/components/home-sections/financing-subsidies-section";
import { B2bSection } from "@/components/home-sections/b2b-section";
import { FaqSection } from "@/components/faq/faq-section";
import { CtaSection } from "@/components/cta/cta-section";

export default function Home() {
  return (
    <div className="flex-1">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Mission & Vision Statements */}
      <MissionVisionSection />

      {/* 3. Leadership & Team Section */}
      <TeamSection />

      {/* 4. Value Proposition Section */}
      <ValuePropSection />

      {/* 5. How It Works (4-Step Process) */}
      <ProcessSection />

      {/* 6. Why Choose Us (Trust & Credibility) */}
      <TrustCredibilitySection />

      {/* 7. Financing & Subsidies */}
      <FinancingSubsidiesSection />

      {/* 8. For Businesses (B2B Section) */}
      <B2bSection />

      {/* 9. FAQ Section */}
      <FaqSection />

      {/* 10. Call to Action Banner */}
      <CtaSection />
    </div>
  );
}
