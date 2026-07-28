import Link from "next/link";
import { CreditCard, FileCheck, ArrowRight, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinancingSubsidiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#007b99]/10 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-4 sm:px-6 lg:px-8 border-y border-cyan-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold text-[#007b99] dark:text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            FINANCING & SUBSIDIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mt-3 tracking-tight">
            Make Solar Affordable With Zero Hassle
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Take advantage of government subsidies and flexible bank financing options tailored for residential and business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-500 w-fit mb-4">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Easy EMI Options</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Flexible financing solutions and customized installment plans tailored to fit your energy budget.
              </p>
            </div>
            {/* <Link href="/contact" className="pt-2 block">
              <span className="text-xs font-bold text-[#007b99] dark:text-cyan-400 flex items-center gap-1">
                Check EMI Options <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link> */}
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="p-3.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 text-[#007b99] dark:text-cyan-400 w-fit mb-4">
                <Percent className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Govt Subsidy Assistance</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Complete assistance with Central PM Surya Ghar & state government subsidy applications.
              </p>
            </div>
            {/* <Link href="/contact" className="pt-2 block">
              <span className="text-xs font-bold text-[#007b99] dark:text-cyan-400 flex items-center gap-1">
                Calculate Subsidy <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link> */}
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4 flex flex-col justify-between">
            <div>
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 w-fit mb-4">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Net Metering Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Our technicians handle complete discom paperwork, bi-directional meter installation, and grid synchronization compliance.
              </p>
            </div>
            {/* <Link href="/contact" className="pt-2 block">
              <span className="text-xs font-bold text-[#007b99] dark:text-cyan-400 flex items-center gap-1">
                Get Process Details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link> */}
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <Button size="lg" className="bg-[#007b99] hover:bg-[#005266] text-white font-extrabold rounded-full px-8 h-13 text-sm shadow-xl">
              <span>Apply for Solar Financing & Subsidy Survey</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
