import { Metadata } from "next";
import { SolutionsHero } from "@/components/solutions/solutions-hero";
import { SolutionsSectorGrid } from "@/components/solutions/solutions-sector-grid";
import { SolutionsTurnkeyEpc } from "@/components/solutions/solutions-turnkey-epc";
import { SolutionsEcommerceStorefront } from "@/components/solutions/solutions-ecommerce-storefront";
import { SolutionsOmAudit } from "@/components/solutions/solutions-om-audit";
import { SolutionsWhyGnxCta } from "@/components/solutions/solutions-why-gnx-cta";

export const metadata: Metadata = {
  title: "Intelligent Solar Energy Solutions | GNX Power Solution",
  description:
    "Empowering homes, businesses, and industrial facilities with smart, high-efficiency solar energy systems. Discover Residential, Commercial, Industrial, Turnkey Rooftop Solar, E-Commerce Storefront, End-to-End EPC, O&M, and Smart Energy Consultation.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Intelligent Solar Energy Solutions | GNX Power Solution",
    description:
      "Turnkey solar rooftop EPC, residential, commercial & industrial solar solutions, e-commerce component sourcing, and O&M services.",
    url: "https://gnxpowersolution.com/solutions",
    siteName: "GNX Power Solution",
    locale: "en_IN",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <main className="flex-1">
      {/* 1. Hero Banner */}
      <SolutionsHero />

      {/* 2. Sector-Wise Solutions (Residential, Commercial, Industrial) */}
      <SolutionsSectorGrid />

      {/* 3. Turnkey Rooftop Solar Installation & End-to-End EPC Services */}
      <SolutionsTurnkeyEpc />

      {/* 4. Solar E-Commerce Store & Direct Component Sourcing */}
      <SolutionsEcommerceStorefront />

      {/* 5. Operations & Maintenance (O&M) & Smart Energy Consultation */}
      <SolutionsOmAudit />

      {/* 6. Why Choose GNX & Conversion CTA Banner */}
      <SolutionsWhyGnxCta />
    </main>
  );
}
