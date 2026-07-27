import Link from "next/link";
import { UserCheck, Store, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutOpportunities() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            🤝 Partner With Us
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Business <span className="text-[#039BC5] dark:text-cyan-400">Opportunities</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
            We actively invite partnerships to strengthen India’s green energy landscape:
          </p>
        </div>

        {/* 3 Opportunity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Customers */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6 group hover:border-[#039BC5]/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950 text-[#039BC5] dark:text-cyan-400 w-fit">
                <UserCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                For Customers
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Hassle-free rooftop solar transition for your home, commercial building, or industrial plant. Enjoy maximum savings and grid support.
              </p>
            </div>
            <Button className="w-full bg-[#039BC5] hover:bg-[#0284a8] text-white font-bold rounded-2xl h-11">
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full h-full">
                Get Solar Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* For Sellers / Manufacturers */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6 group hover:border-amber-500/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 w-fit">
                <Store className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                For Sellers / Manufacturers
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                A booming digital platform to sell your solar panels, inverters, and accessories nationwide and expand your brand footprint.
              </p>
            </div>
            <Button variant="outline" className="w-full border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/60 font-bold rounded-2xl h-11">
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full h-full">
                Sell With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* For Dealers & Distributors */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6 group hover:border-emerald-500/50 transition-all duration-300">
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 w-fit">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                For Dealers & Distributors
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Profitable partnership and expansion opportunities to distribute premium solar components with dedicated support.
              </p>
            </div>
            <Button variant="outline" className="w-full border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/60 font-bold rounded-2xl h-11">
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full h-full">
                Partner Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Tagline Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#039BC5] text-white shadow-2xl text-center space-y-3 mt-12">
          <p className="text-lg sm:text-xl md:text-2xl font-extrabold leading-snug">
            GNX Power Solution — Empowering homes, businesses, and communities with sustainable, cost-effective energy for a greener tomorrow.
          </p>
        </div>
      </div>
    </section>
  );
}
