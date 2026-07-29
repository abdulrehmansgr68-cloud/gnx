import Link from "next/link";
import { Activity, Search, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SolutionsOmAudit() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            Long-Term Reliability & Expert Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Operations & Maintenance + <span className="text-[#039BC5] dark:text-cyan-400">Smart Audit</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            We ensure your solar investment delivers peak energy generation for 25+ years with proactive plant maintenance and expert ROI analysis.
          </p>
        </div>

        {/* 2 Main Cards: O&M (7) and Consultation (8) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: 7. Operations & Maintenance (O&M) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <Wrench className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400">
                  Service Highlight
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Operations & Maintenance (O&M)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our support doesn&apos;t end after installation. We offer continuous system monitoring, preventive maintenance, performance upgrades, and prompt repair services to keep your solar plant running at peak yield for decades.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                  What O&M Includes:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>24/7 IoT System Monitoring:</strong> Real-time tracking of generation & automatic fault alert dispatch.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Preventive Panel Cleaning & Inspection:</strong> Scheduled washing, thermographic heat scan & cable checks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Prompt On-Site Repairs:</strong> SLA-backed response team for swift inverter and electrical servicing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Annual AMC Packages:</strong> Hassle-free annual maintenance contracts for residential & commercial solar plants.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/contact" className="pt-4 border-t border-slate-100 dark:border-slate-900">
              <Button className="w-full rounded-full cursor-pointer px-6 bg-[#039BC5] hover:bg-[#027ea1] text-white font-bold text-sm shadow-md transition-all hover:scale-105">
                Book O&M Maintenance Contract
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Card 2: Smart Energy Consultation & Feasibility Audit */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="p-3.5 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-[#039BC5] dark:text-cyan-400">
                  <Search className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-[#039BC5] dark:text-cyan-400">
                  Service Highlight
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  Smart Energy Consultation & Feasibility Audit
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Not sure where to start? Our solar experts analyze your historical energy usage, roof space, and budget to recommend the most cost-effective solar model, ensuring maximum return on your investment (ROI).
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">
                  Audit Deliverables:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
                    <span><strong>Historical Consumption Analysis:</strong> Auditing 12 months of utility power bills for load profiling.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
                    <span><strong>Drone 3D Roof & Shade Survey:</strong> Precise azimuth, tilt, and shadow mapping for peak sunlight capture.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
                    <span><strong>Financial ROI & Payback Report:</strong> Clear breakdown of savings, tax benefits, and net payback schedule.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
                    <span><strong>Subsidy & Approval Roadmap:</strong> Detailed guide to state DISCOM policies and government subsidies.</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link href="/contact" className="pt-4 border-t border-slate-100 dark:border-slate-900">
              <Button className="w-full rounded-full cursor-pointer px-6 bg-[#039BC5] hover:bg-[#027ea1] text-white font-bold text-sm shadow-md transition-all hover:scale-105">
                Schedule Free Feasibility Audit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
