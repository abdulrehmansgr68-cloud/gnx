import { ShoppingBag, Sun, Zap, Battery, Layers, CheckCircle2, Shield, Truck, Tag, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PRODUCT_CATEGORIES = [
  {
    title: "High-Efficiency Solar Panels",
    icon: Sun,
    badge: "540W - 670W Bifacial & Mono PERC",
    desc: "Top-tier ALMM approved panels engineered for maximum light absorption, minimal degradation, and extreme weather resilience.",
    specs: ["Tier-1 Brand Assurance", "25-Year Performance Warranty", "Bifacial & TopCon Tech"],
    tag: "Top Seller",
  },
  {
    title: "Smart Solar Inverters",
    icon: Zap,
    badge: "On-Grid, Off-Grid & Hybrid (3kW - 100kW)",
    desc: "Next-gen intelligent string & hybrid inverters equipped with built-in Wi-Fi monitoring, dual MPPT trackers, and rapid shutdown safety.",
    specs: ["98.6% Peak Efficiency", "Mobile App Monitoring", "Net-Metering Certified"],
    tag: "Smart Tech",
  },
  {
    title: "Deep-Cycle & Storage Batteries",
    icon: Battery,
    badge: "Lithium LiFePO4 & C10 Tubular",
    desc: "Long-lifespan energy storage systems providing reliable backup during grid power outages with ultra-fast charging capabilities.",
    specs: ["6000+ Cycles (Lithium)", "Zero Maintenance Required", "Built-in Smart BMS"],
    tag: "High Storage",
  },
  {
    title: "Mounting Hardware & Accessories",
    icon: Layers,
    badge: "HDG Steel, DC Cables & Safety Boxes",
    desc: "Heavy-duty hot-dip galvanized mounting structures, UV-resistant DC solar cables, AC/DC distribution boxes, and lightning arresters.",
    specs: ["150 km/h Wind Resistance", "IP65 Waterproof Ratings", "Complete Installation Kits"],
    tag: "Essential",
  },
];

export function SolutionsEcommerceStorefront() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-900 text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            Digital Storefront
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Solar E-Commerce Store <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Direct Component Sourcing
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Browse and source high-performance solar components with ease. Our digital storefront offers top-rated solar panels, smart inverters, deep-cycle batteries, mounting hardware, and accessories—giving you a quick and transparent buying experience.
          </p>
        </div>

        {/* E-Commerce Guarantee Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-cyan-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-white">100% Genuine Components</div>
              <div className="text-slate-400">Direct Factory Sourced</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-white">Nationwide Shipping</div>
              <div className="text-slate-400">Insured Safe Logistics</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Tag className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-white">Transparent Pricing</div>
              <div className="text-slate-400">No Hidden Costs</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
            <div className="text-xs">
              <div className="font-bold text-white">B2B Wholesale Discount</div>
              <div className="text-slate-400">For Installers & Dealers</div>
            </div>
          </div>
        </div>

        {/* 4 E-Commerce Product Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCT_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/90 shadow-xl flex flex-col justify-between space-y-6 hover:border-cyan-400 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="border-cyan-500/40 text-cyan-300 text-[10px] font-bold uppercase">
                      {cat.tag}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400">
                      {cat.badge}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-700/80">
                    {cat.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
