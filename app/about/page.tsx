import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutSummary } from "@/components/about/about-summary";
import { AboutVisionMission } from "@/components/about/about-vision-mission";
import { AboutWhatWeDo } from "@/components/about/about-what-we-do";
import { AboutProcess } from "@/components/about/about-process";
import { AboutWhyChoose } from "@/components/about/about-why-choose";
import { AboutOpportunities } from "@/components/about/about-opportunities";

export const metadata: Metadata = {
  title: "About Us | GNX Power Solution",
  description:
    "GNX Power Solution is a trusted solar energy company and digital e-commerce platform offering certified solar panels, inverters, batteries, and end-to-end EPC solar solutions across India.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | GNX Power Solution",
    description:
      "Learn about GNX Power Solution, India's leading digital platform for solar equipment e-commerce and turnkey rooftop EPC projects.",
    url: "https://gnxpowersolution.com/about",
    siteName: "GNX Power Solution",
    locale: "en_IN",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* 1. Hero Section */}
      <AboutHero />

      {/* 2. Executive Summary */}
      <AboutSummary />

      {/* 3. Vision & Mission */}
      <AboutVisionMission />

      {/* 4. What We Do (Integrated Ecosystem) */}
      <AboutWhatWeDo />

      {/* 5. End-to-End Execution Process */}
      <AboutProcess />

      {/* 6. Why Choose GNX Power Solution */}
      <AboutWhyChoose />

      {/* 7. Business Opportunities & Partner Paths */}
      <AboutOpportunities />
    </main>
  );
}
