"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, Home, Building2, Factory, Zap, PiggyBank, Leaf, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SolutionsCalculatorWidget() {
  const [sector, setSector] = useState<"residential" | "commercial" | "industrial">("residential");
  const [monthlyBill, setMonthlyBill] = useState<number>(6000);

  // Calculations based on tariff averages (~₹8/unit residential, ~₹10/unit commercial, ~₹9/unit industrial)
  const tariffPerUnit = sector === "residential" ? 8 : sector === "commercial" ? 10 : 9;
  const unitsConsumedPerMonth = Math.round(monthlyBill / tariffPerUnit);

  // Average daily generation per kW in India is ~4 units/day => 120 units/month per kW
  const recommendedKw = Math.max(1, Math.ceil(unitsConsumedPerMonth / 120));
  const estimatedMonthlySavings = Math.round(monthlyBill * 0.88); // ~88% savings
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;

  // Average payback 3.5 years residential (with subsidy), 3.2 years commercial/industrial (with tax depreciation)
  const paybackYears = sector === "residential" ? 3.5 : 3.2;
  const co2ReducedTons = (recommendedKw * 1.3).toFixed(1); // ~1.3 tons CO2 per kW per year

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Interactive E-Commerce Tool
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Instant Solar Savings & <span className="text-[#039BC5] dark:text-cyan-400">ROI Calculator</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Estimate your required system capacity, monthly bill reduction, and payback timeline in seconds.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">

          {/* Step 1: Select Sector */}
          <div className="space-y-3">
            <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              1. Select Your Property / Facility Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setSector("residential")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all border ${sector === "residential"
                    ? "bg-[#039BC5] text-white border-[#039BC5] shadow-md"
                    : "bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                  }`}
              >
                <Home className="w-4 h-4" />
                <span>Residential</span>
              </button>

              <button
                onClick={() => setSector("commercial")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all border ${sector === "commercial"
                    ? "bg-[#039BC5] text-white border-[#039BC5] shadow-md"
                    : "bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                  }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Commercial</span>
              </button>

              <button
                onClick={() => setSector("industrial")}
                className={`flex flex-col sm:flex-row items-center justify-center gap-2 p-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all border ${sector === "industrial"
                    ? "bg-[#039BC5] text-white border-[#039BC5] shadow-md"
                    : "bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300"
                  }`}
              >
                <Factory className="w-4 h-4" />
                <span>Industrial</span>
              </button>
            </div>
          </div>

          {/* Step 2: Monthly Electricity Bill Slider */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                2. Average Monthly Electricity Bill (₹)
              </label>
              <div className="text-xl sm:text-2xl font-bold text-[#039BC5] dark:text-cyan-400">
                ₹{monthlyBill.toLocaleString("en-IN")} <span className="text-xs font-semibold text-slate-500">/ month</span>
              </div>
            </div>

            <input
              type="range"
              min={1500}
              max={150000}
              step={500}
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#039BC5]"
            />

            <div className="flex justify-between text-xs text-slate-400">
              <span>₹1,500</span>
              <span>₹50,000</span>
              <span>₹1,50,000+</span>
            </div>
          </div>

          {/* Dynamic Calculation Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-lg">

            {/* Stat 1: Recommended System */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>System Size</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {recommendedKw} <span className="text-sm font-bold text-[#039BC5]">kW</span>
              </div>
              <div className="text-[11px] text-slate-500">Estimated solar plant</div>
            </div>

            {/* Stat 2: Monthly Savings */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <PiggyBank className="w-3.5 h-3.5 text-emerald-500" />
                <span>Est. Monthly Savings</span>
              </div>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                ₹{estimatedMonthlySavings.toLocaleString("en-IN")}
              </div>
              <div className="text-[11px] text-slate-500">₹{(estimatedAnnualSavings / 100000).toFixed(2)} Lakhs/year</div>
            </div>

            {/* Stat 3: Payback Period */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                <span>Payback Horizon</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {paybackYears} <span className="text-sm font-bold text-slate-500">Years</span>
              </div>
              <div className="text-[11px] text-slate-500">21+ years free electricity</div>
            </div>

            {/* Stat 4: CO2 Offset */}
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <Leaf className="w-3.5 h-3.5 text-green-600" />
                <span>CO2 Offset</span>
              </div>
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {co2ReducedTons} <span className="text-sm font-bold text-slate-500">Tons/yr</span>
              </div>
              <div className="text-[11px] text-slate-500">Clean green impact</div>
            </div>

          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              * Calculations are indicative based on standard solar irradiance and discom net-metering policies.
            </div>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 bg-[#039BC5] hover:bg-[#027ea1] text-white font-bold text-sm shadow-md">
                Get Customized {recommendedKw} kW Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
