import Link from "next/link";
import { Sun, Cpu, BatteryCharging, Shield, Home, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  {
    icon: <Sun className="w-7 h-7 text-amber-500" />,
    name: "Solar Panels",
    types: "Monocrystalline, Polycrystalline, Bifacial High-Efficiency Panels",
  },
  {
    icon: <Cpu className="w-7 h-7 text-[#007b99]" />,
    name: "Inverters",
    types: "On-grid, Off-grid, Hybrid Inverter Systems",
  },
  {
    icon: <BatteryCharging className="w-7 h-7 text-emerald-500" />,
    name: "Batteries & Storage",
    types: "Lithium-ion (LFP) & Tubular Solar Storage Batteries",
  },
  {
    icon: <Shield className="w-7 h-7 text-indigo-500" />,
    name: "Mounting Structures",
    types: "Elevated Rooftop, HD Galvanized Steel & Ground Mount Structures",
  },
  {
    icon: <Home className="w-7 h-7 text-[#f26522]" />,
    name: "Complete Rooftop Kits",
    types: "Residential (3kW-10kW), Commercial & Industrial Ready Kits",
  },
  {
    icon: <Wrench className="w-7 h-7 text-cyan-600" />,
    name: "Accessories & Spares",
    types: "Solar Cables, DCDB/ACDB Boxes, MC4 Connectors & Lightning Arrestors",
  },
];

export function CategoryShopSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#007b99] dark:text-cyan-400 uppercase tracking-widest">
              PRODUCT CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Shop Solar by Category
            </h2>
          </div>

          <Link href="/contact">
            <Button variant="outline" className="rounded-full border-slate-300 dark:border-slate-700 text-xs font-bold gap-2">
              <span>View All Categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <Link key={idx} href="/contact" className="group">
              <div className="p-6 rounded-3xl bg-slate-50/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all hover:scale-[1.02] hover:border-[#007b99]/40 hover:shadow-lg flex flex-col justify-between h-full">
                <div>
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 w-fit mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#007b99] dark:group-hover:text-cyan-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed font-normal">
                    {cat.types}
                  </p>
                </div>
                
                <div className="pt-4 flex items-center gap-1.5 text-xs font-extrabold text-[#007b99] dark:text-cyan-400">
                  <span>Explore Products</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
