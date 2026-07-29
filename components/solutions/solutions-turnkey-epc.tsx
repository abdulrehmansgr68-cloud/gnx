import Link from "next/link";
import { CheckCircle2, Cpu, Wrench, FileCheck, ShieldCheck, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Feasibility & Energy Audit",
    icon: FileCheck,
    desc: "Detailed site survey, shadow analysis, structural load test, and historical bill auditing to calculate exact solar capacity required.",
    details: "Roof shading map & 3D solar layout design",
  },
  {
    step: "02",
    title: "Engineering & Custom Design",
    icon: Cpu,
    desc: "PVSyst simulation modeling, string sizing, electrical single-line diagrams (SLD), and structural drawing creation by certified engineers.",
    details: "Optimal tilt angle & generation yield estimation",
  },
  {
    step: "03",
    title: "Transparent Procurement",
    icon: Layers,
    desc: "Sourcing Tier-1 high-efficiency ALMM-certified solar panels, smart inverters, and galvanized mounting structures directly from manufacturers.",
    details: "100% genuine components with serial trace warranties",
  },
  {
    step: "04",
    title: "Certified Installation",
    icon: Wrench,
    desc: "Professional rooftop mounting, cable management, earthing pit setup, surge protection (SPD), and lightning arrester (LA) placement.",
    details: "Strict compliance with MNRE & IS safety standards",
  },
  {
    step: "05",
    title: "Grid Commissioning & Net Metering",
    icon: ShieldCheck,
    desc: "CEIG electrical inspection, Discom liaisoning, bi-directional net-meter installation, and final plant grid synchronisation.",
    details: "Seamless net-metering & Govt subsidy dispatch",
  },
];

export function SolutionsTurnkeyEpc() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[#02438A] dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
              ⚡ Complete Lifecycle Management
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Turnkey Rooftop Solar & <br className="hidden sm:inline" />
              <span className="text-[#039BC5] dark:text-cyan-400">End-to-End EPC Services</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              From initial site feasibility checks and engineering design to transparent procurement, setup, and grid commissioning—our certified engineers handle every detail with zero compromise on safety or quality.
            </p>
          </div>

          <div className="shrink-0">
            <Link href="/contact">
              <Button size="lg" className="rounded-full cursor-pointer px-7 bg-[#02438A] hover:bg-[#013268] text-white font-bold text-sm shadow-md transition-all hover:scale-105">
                Get Free EPC Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* 2 Key Service Pillars Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1: Turnkey Installation */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#039BC5]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase">Service Highlight</span>
              <h3 className="text-2xl font-bold text-white">Turnkey Rooftop Solar Installation</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                From initial site feasibility checks and design to final setup and grid commissioning, our certified engineers handle everything. We ensure seamless execution with zero compromise on safety, quality, or compliance.
              </p>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Zero structural roof damage guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Heavy-duty wind resistant galvanised structures</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Complete safety & EARTHING grid testing</span>
              </li>
            </ul>
          </div>

          {/* Box 2: End-to-End EPC */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#02315e] to-slate-900 text-white border border-cyan-900/50 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">Service Highlight</span>
              <h3 className="text-2xl font-bold text-white">End-to-End EPC Services (Engineering, Procurement & Execution)</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We manage the entire lifecycle of your solar project. Our EPC team takes care of energy auditing, component selection, transparent procurement, professional installation, and strict testing for complete peace of mind.
              </p>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Single point of accountability & dedicated project manager</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Transparent procurement with tier-1 direct factory pricing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Turnkey grid connection & DISCOM meter approval</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lifecycle Execution 5-Step Process */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              The 5-Step GNX Execution Roadmap
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              How we take your solar project from concept to live power grid commissioning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((stepItem, idx) => {
              const Icon = stepItem.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-4 relative flex flex-col justify-between hover:border-[#039BC5] transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-[#039BC5] dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950 px-2.5 py-1 rounded-full">
                        {stepItem.step}
                      </span>
                      <Icon className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {stepItem.title}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                    💡 {stepItem.details}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
