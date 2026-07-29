import { ShieldCheck, ShoppingBag, Wrench, Sparkles } from "lucide-react";

export function AboutSummary() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Executive Summary Header Badge */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-[#039BC5] dark:text-cyan-400 text-xs sm:text-sm font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4" />
            Executive Summary
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Powering a Sustainable Future with{" "}
            <span className="text-[#039BC5] dark:text-cyan-400">Smart Solar Solutions</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal pt-2">
            <strong className="font-extrabold text-slate-900 dark:text-white">GNX Power Solution</strong> is a trusted solar energy company and a comprehensive digital e-commerce platform dedicated to making clean, affordable, and renewable energy accessible across India.
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We bridge the gap between quality manufacturing and end-users by offering a complete range of solar products alongside end-to-end solar solutions for <span className="font-semibold text-slate-800 dark:text-slate-200">Residential, Commercial, and Industrial sectors</span>. From online purchasing to professional rooftop installation and lifelong support, GNX Power Solution is your one-stop destination for all solar needs.
          </p>
        </div>

        {/* 3 Core Highlight Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-950/80 text-[#039BC5] flex items-center justify-center mb-5 border border-cyan-200/60 dark:border-cyan-800">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              E-Commerce Solar Marketplace
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore, compare, and buy certified solar panels, inverters, batteries, and accessories online with nationwide shipping.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 flex items-center justify-center mb-5 border border-amber-200/60 dark:border-amber-800">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Turnkey EPC Solar Projects
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Complete design, engineering, procurement, and rooftop installation for homes, businesses, and industrial plants.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-200/60 dark:border-emerald-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Lifelong Support & Service
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Dedicated technical assistance, net-metering help, warranty management, and routine maintenance nationwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
