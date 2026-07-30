import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "GNX Power Solution | Solar Products, EPC & Vendor Platform",
  description:
    "Buy certified Tier-1 solar products online & sell as a verified vendor. End-to-end solar rooftop EPC, inverters, batteries, and turn-key solar energy solutions across India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GNX Power Solution | Solar Products & Rooftop EPC Platform",
    description:
      "Buy certified Tier-1 solar panels, hybrid inverters, lithium batteries, and access turnkey solar rooftop EPC solutions across India.",
    url: "https://gnxpowersolution.com",
    siteName: "GNX Power Solution",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/a48f81da641c9fd51bd6eb1f3d33c5e14f5c7087.png",
        width: 1200,
        height: 630,
        alt: "GNX Power Solution Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GNX Power Solution | Solar Products & Rooftop EPC Platform",
    description:
      "Certified solar panels, hybrid inverters, lithium batteries, and EPC rooftop solar solutions across India.",
    images: ["/a48f81da641c9fd51bd6eb1f3d33c5e14f5c7087.png"],
  },
};

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
