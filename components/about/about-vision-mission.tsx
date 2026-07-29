import { Target, Compass } from "lucide-react";

export function AboutVisionMission() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Vision & <span className="text-[#039BC5] dark:text-cyan-400">Mission</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Guiding India’s transition to clean, dependable, and cost-effective solar energy.
          </p>
        </div>

        {/* Vision & Mission Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group hover:border-[#039BC5]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#039BC5]/10 rounded-full blur-2xl group-hover:bg-[#039BC5]/20 transition-all" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950 text-[#039BC5] dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Our Vision
              </h3>
            </div>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              To become India’s most trusted digital solar marketplace by making renewable energy affordable, accessible, and convenient for every home and business.
            </p>
          </div>

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </h3>
            </div>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              To accelerate the adoption of clean energy by offering high-quality solar products, seamless online shopping, expert installation, and dependable technical support under one integrated platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
