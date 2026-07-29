import { ShoppingCart, Building, Handshake, CheckCircle } from "lucide-react";

export function AboutWhatWeDo() {
  return (
    <section className="py-12 md:py-14 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
            ⚡ What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            An Integrated Ecosystem for <span className="text-[#039BC5] dark:text-cyan-400">Solar Energy</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We provide an integrated ecosystem for buying, selling, and executing solar energy projects across India.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Digital Solar Marketplace */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-[#039BC5] dark:text-cyan-400 w-fit">
                <ShoppingCart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                1. Digital Solar Marketplace (B2C & B2B)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Explore, compare, and order genuine solar products online with secure payment options and nationwide delivery.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Solar Panels:</strong> High-efficiency Mono PERC, Bifacial, & Polycrystalline panels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Inverters:</strong> On-grid, Off-grid, & Hybrid solar inverters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Energy Storage:</strong> Solar batteries (Lithium-ion & Tubular).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Accessories:</strong> Mounting structures, DC cables, junction boxes & safety gear.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 2: End-to-End Solar EPC Services */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 w-fit">
                <Building className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                2. End-to-End Solar EPC Services
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Complete turnkey solar projects for residential homes, commercial complexes, educational institutes, and manufacturing plants.
              </p>

              <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">On-Grid Systems:</strong> Reduce monthly electricity bills with net-metering support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Off-Grid Systems:</strong> Complete energy independence with robust battery storage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900 dark:text-white">Hybrid Systems:</strong> Best of both worlds — uninterrupted power with grid tie-in.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pillar 3: Vendor & Partner Ecosystem */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 w-fit">
                <Handshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                3. Vendor & Partner Ecosystem (Sell With Us)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We empower solar manufacturers, dealers, and suppliers by listing their products on our platform, helping them reach a wider customer base across India and expand their business footprint.
              </p>

              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-300 font-medium leading-relaxed mt-4">
                Partner with GNX Power Solution to list products nationwide and leverage our tech & delivery logistics network.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
