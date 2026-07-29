import Link from "next/link";
import { Building2, Factory, ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function B2bSection() {
  return (
    <section className="py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Column Text */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <span>Commercial & Industrial Solar Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Power Your Enterprise with B2B Solar Solutions
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            Reduce operational energy costs for factories, warehouses, commercial offices, and educational institutions. Access direct bulk pricing, Tier-1 hardware sourcing, and dedicated account managers.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Bulk Sourcing Rates on Mono PERC & Bifacial Panels</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Turnkey EPC Execution with 15-Year Performance Guarantees</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Accelerated Depreciation Tax Benefits & Custom Financing</span>
            </div>
          </div>

          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-[#007b99] hover:bg-[#005266] text-white font-extrabold rounded-full px-8 h-13 text-sm shadow-xl flex items-center gap-2">
                <span>Request B2B Corporate Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Column Highlights */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          <div className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-xl space-y-2">
            <div className="flex items-center gap-3 text-amber-400 font-bold text-base">
              <Factory className="w-5 h-5" />
              <span>Factories & Warehouses</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              High-capacity MW rooftop systems designed to offset heavy machinery loads and grid peak tariffs.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-xl space-y-2">
            <div className="flex items-center gap-3 text-cyan-400 font-bold text-base">
              <Building2 className="w-5 h-5" />
              <span>Commercial Offices & Tech Parks</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hybrid solar storage integration ensuring uninterrupted business operations with 0% downtime.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-xl space-y-2">
            <div className="flex items-center gap-3 text-emerald-400 font-bold text-base">
              <ShieldAlert className="w-5 h-5" />
              <span>Dedicated Vendor Portal</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Register as a certified seller to list equipment, process bulk B2B purchase orders, and get verified leads.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
