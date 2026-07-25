import { Eye, Target, Sparkles, ShieldCheck, Zap, HeartHandshake, Leaf, Cpu } from "lucide-react";

export function MissionVisionSection() {
  const visionPillars = [
    { icon: Leaf, label: "Cleaner & Greener Future" },
    { icon: Zap, label: "Innovative Solar Power" },
    { icon: ShieldCheck, label: "Affordable & Sustainable" },
  ];

  const missionPillars = [
    { icon: Cpu, label: "Advanced Technology" },
    { icon: Sparkles, label: "Expert Engineering" },
    { icon: HeartHandshake, label: "Exceptional Service" },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#039BC5]/10 dark:bg-[#039BC5]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#039BC5]/10 text-[#039BC5] dark:bg-[#039BC5]/20 dark:text-cyan-400 font-semibold text-xs tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Driving Renewable Purpose
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Guiding Our Journey Towards <span className="text-[#039BC5]">Clean Energy</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Our vision and mission define who we are, driving our continuous commitment to sustainable innovation and customer satisfaction nationwide.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Vision Card */}
          <div className="relative group rounded-3xl p-8 sm:p-12 bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#039BC5] to-cyan-400" />

            {/* Background Watermark Icon */}
            <div className="absolute -bottom-8 -right-8 opacity-[0.03] dark:opacity-[0.06] group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
              <Eye className="w-72 h-72 text-[#039BC5]" />
            </div>

            <div>
              {/* Icon & Label Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#039BC5]/10 to-cyan-500/10 dark:from-[#039BC5]/20 dark:to-cyan-500/20 flex items-center justify-center border border-[#039BC5]/20 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-[#039BC5] dark:text-cyan-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  Long-term Focus
                </span>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-5 group-hover:text-[#039BC5] transition-colors">
                Our Vision
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-medium">
                To be the leading digital gateway to solar adoption, where every customer can discover, purchase, and install renewable energy solutions with confidence, transparency, and ease — accelerating the shift toward a sustainable, self-reliant energy future.
              </p>
            </div>

            {/* Key Pillars Chips */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                Core Aspirations
              </p>
              <div className="flex flex-wrap gap-2.5">
                {visionPillars.map((pillar, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    <pillar.icon className="w-3.5 h-3.5 text-[#039BC5]" />
                    {pillar.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative group rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#014E78] via-[#039BC5] to-[#017DA3] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
            {/* Top Accent Light Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-300 to-amber-400" />

            {/* Background Watermark Icon */}
            <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
              <Target className="w-72 h-72 text-white" />
            </div>

            <div>
              {/* Icon & Label Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-cyan-100 border border-white/10">
                  Daily Commitment
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-5">
                Our Mission
              </h3>

              <p className="text-cyan-50 text-base sm:text-lg leading-relaxed mb-8 font-medium">
                To empower homes and businesses to embrace clean, affordable energy by facilitating solar panels, components, and professional installation accessible through a single, trusted online platform — simplifying the journey from browsing to a fully powered rooftop.
              </p>

            </div>

            {/* Key Pillars Chips */}
            <div className="pt-6 border-t border-white/15">
              <p className="text-xs font-semibold text-cyan-200/80 uppercase tracking-wider mb-3">
                Strategic Foundation
              </p>
              <div className="flex flex-wrap gap-2.5">
                {missionPillars.map((pillar, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-white"
                  >
                    <pillar.icon className="w-3.5 h-3.5 text-yellow-300" />
                    {pillar.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
