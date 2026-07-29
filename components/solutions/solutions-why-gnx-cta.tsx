import Link from "next/link";
import { ShieldCheck, Award, Zap, HeartHandshake, Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHY_GNX_ITEMS = [
  {
    icon: Award,
    title: "Tier-1 ALMM Technology",
    desc: "We only source certified Mono PERC & Bifacial panels from ALMM-listed top tier manufacturers with proven 25-year performance warranties.",
  },
  {
    icon: Zap,
    title: "Direct E-Commerce Pricing",
    desc: "Eliminating middleman markups by offering direct-to-customer e-commerce pricing for solar panels, inverters, batteries, and turnkey kits.",
  },
  {
    icon: ShieldCheck,
    title: "Certified EPC Engineers",
    desc: "In-house team of certified electrical and solar structural engineers ensuring safety compliance, optimal tilt angles, and zero roof leakage.",
  },
  {
    icon: HeartHandshake,
    title: "Subsidy & Net-Metering Filing",
    desc: "We handle 100% of the paperwork, DISCOM approval liaisoning, bi-directional net meter installation, and central government subsidy claims.",
  },
];

export function SolutionsWhyGnxCta() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center space-y-4 max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-300 dark:border-cyan-800 text-[#039BC5] dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            The GNX Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Why Choose GNX for Your <span className="text-[#039BC5] dark:text-cyan-400">Solar Transformation</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-6">
            Uncompromising quality, transparent pricing, and decades of reliable clean energy generation.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_GNX_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-4 hover:border-[#039BC5] transition-all"
              >
                <div className="p-3.5 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-[#039BC5] dark:text-cyan-400 w-fit">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Final Conversion CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#02438A] via-[#027ea1] to-[#029FC8] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="space-y-4 max-w-2xl text-center lg:text-left z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Switch to Smart Solar Energy?
            </h3>
            <p className="text-slate-100 text-base sm:text-lg leading-relaxed">
              Book a free site feasibility audit today. Our solar experts will evaluate your rooftop, calculate your exact ROI, and guide you through subsidies & financing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10 shrink-0">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full cursor-pointer px-8 py-6 bg-white text-[#02438A] hover:bg-slate-100 font-extrabold text-base shadow-xl transition-transform hover:scale-105">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+919871305921" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full cursor-pointer px-8 py-6 border-white/40 bg-white/10 hover:bg-white/20 text-white font-bold text-base backdrop-blur-md transition-transform hover:scale-105">
                <Phone className="mr-2 w-4 h-4" />
                Call +91-9871305921
              </Button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
