"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Building2, Factory, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SECTORS = [
  {
    id: "residential",
    number: "1",
    title: "Residential Solar Solutions",
    badge: "For Homes & Villas",
    icon: Home,
    color: "from-cyan-500 to-blue-600",
    lightBg: "bg-cyan-100 dark:bg-cyan-950/30",
    borderColor: "border-cyan-200 dark:border-cyan-800",
    accentColor: "text-[#039BC5] dark:text-cyan-400",
    description:
      "Take control of your electricity bills and embrace clean energy. We design and install custom rooftop solar power systems that fit your home's unique energy needs—providing uninterrupted power, lower utility bills, and boosting your property’s value.",
    highlights: [
      { label: "Recommended System Size", value: "3 kW – 15 kW Rooftop" },
      { label: "Average Bill Reduction", value: "80% to 90% Monthly Savings" },
      { label: "Payback Period", value: "3 to 4 Years (25+ Yr Warranty)" },
      { label: "Government Subsidy", value: "Eligible for PM Surya Ghar Subsidy" },
    ],
    features: [
      "Custom 3D rooftop design tailored to your home's roof space & shading.",
      "Uninterrupted power backup with smart hybrid or off-grid battery storage.",
      "Net-metering setup to sell surplus electricity back to the local grid.",
      "Increases overall market resale & appraisal value of your property.",
      "Zero-hassle documentation and full government subsidy claim assistance.",
    ],
    idealFor: "Independent Houses, Row Villas, Apartments, Gated Societies",
  },
  {
    id: "commercial",
    number: "2",
    title: "Commercial Solar Solutions",
    badge: "For Businesses & Establishments",
    icon: Building2,
    color: "from-amber-500 to-orange-600",
    lightBg: "bg-amber-100 dark:bg-amber-950/30",
    borderColor: "border-amber-200 dark:border-amber-800",
    accentColor: "text-amber-600 dark:text-amber-400",
    description:
      "Cut down operational expenses and make your business eco-friendly. Our high-output commercial solar installations are tailored for office buildings, retail spaces, educational institutions, healthcare facilities, and hospitality venues.",
    highlights: [
      { label: "Recommended System Size", value: "15 kW – 100 kW Rooftop" },
      { label: "Operational Cost Reduction", value: "30% to 60% Overhead Cut" },
      { label: "Tax Benefits", value: "Accelerated Depreciation (40%)" },
      { label: "Green Building Cert", value: "IGBC & LEED Points Boost" },
    ],
    features: [
      "High-output solar panels optimized for commercial daytime power usage.",
      "Tailored for Office Complexes, Schools, Colleges, Malls, Hospitals & Hotels.",
      "Substantial tax benefits via 40% accelerated depreciation in Year 1.",
      "Demonstrate ESG leadership and corporate environmental responsibility.",
      "Real-time central energy analytics dashboard for facility managers.",
    ],
    idealFor: "Offices, Retail Malls, Schools, Hospitals, Hotels & Resorts",
  },
  {
    id: "industrial",
    number: "3",
    title: "Industrial Solar Solutions",
    badge: "For Heavy Power Consumers",
    icon: Factory,
    color: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-100 dark:bg-emerald-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    accentColor: "text-emerald-600 dark:text-emerald-400",
    description:
      "Designed for heavy energy consumers, our industrial-grade solar solutions enhance operational cost-efficiency at scale. We provide reliable, high-capacity installations that significantly reduce grid dependency and help you achieve key sustainability targets.",
    highlights: [
      { label: "Recommended System Size", value: "100 kW to Multi-MW Plant" },
      { label: "Grid Dependency Cut", value: "Up to 75% Grid Relief" },
      { label: "Financial Models", value: "CAPEX & OPEX / PPA Available" },
      { label: "Plant Lifespan", value: "25+ Years High Yield" },
    ],
    features: [
      "MW-scale rooftop & ground-mounted solar installations for factories & warehouses.",
      "Significant reduction in high peak-hour industrial tariffs and peak demand charges.",
      "Robust heavy-duty mounting structures built for extreme weather & industrial conditions.",
      "Helps meet mandatory Renewable Purchase Obligations (RPO) and Net Zero targets.",
      "Custom financing options: Direct CAPEX purchase or Zero-Investment OPEX/PPA models.",
    ],
    idealFor: "Manufacturing Plants, Cold Storage, Warehouses, Textile Mills, Chemical Hubs",
  },
];

export function SolutionsSectorGrid() {
  const [activeSector, setActiveSector] = useState(SECTORS[0].id);
  const current = SECTORS.find((s) => s.id === activeSector) || SECTORS[0];

  return (
    <section id="sectors" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center space-y-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-800 text-[#039BC5] dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Tailored Solar Energy Systems
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Solar Solutions for Every <span className="text-[#039BC5] dark:text-cyan-400">Scale & Sector</span>
          </h2>
          <p className="text-base sm:text-lg mt-3 text-slate-600 dark:text-slate-400">
            Whether you want to eliminate residential light bills or power a heavy manufacturing facility, GNX provides precision-engineered solar infrastructure.
          </p>
        </div>

        {/* Sector Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 p-2 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md max-w-3xl mx-auto">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            const isActive = activeSector === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex-1 sm:flex-initial justify-center ${isActive
                  ? "bg-[#039BC5] text-white shadow-md shadow-cyan-500/20 scale-[1.02]"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span>{sector.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Sector Detailed View */}
        <div className="bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 lg:p-12 shadow-xl space-y-8">

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            {/* Left Content */}
            <div className="space-y-6 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${current.lightBg} ${current.accentColor} border ${current.borderColor}`}>
                  Option 0{current.number}
                </span>
                <Badge variant="outline" className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold">
                  {current.badge}
                </Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
                {current.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white font-bold">Ideal Facilities:</strong> {current.idealFor}
              </div>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  Key System Advantages:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${current.accentColor}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Highlights Specs Card */}
            <div className="w-full lg:w-[380px] shrink-0 bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-inner">
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${current.color} text-white shadow-md`}>
                  <current.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Key Performance Metrics</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">GNX Guaranteed Standard</p>
                </div>
              </div>

              <div className="space-y-4">
                {current.highlights.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.label}</div>
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <Link href="/contact" className="w-full">
                  <Button className="w-full rounded-full cursor-pointer px-6 font-bold shadow-md bg-[#039BC5] hover:bg-[#027ea1] text-white transition-all hover:scale-105">
                    Request {current.title.split(" ")[0]} Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Sector Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`p-6 rounded-2xl bg-white dark:bg-slate-950 border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${activeSector === sector.id
                  ? "border-[#039BC5] dark:border-cyan-400 shadow-xl ring-2 ring-[#039BC5]/20"
                  : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md"
                  }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${sector.lightBg} ${sector.accentColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">0{sector.number}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {sector.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
