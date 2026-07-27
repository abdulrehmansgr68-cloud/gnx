import { ShieldCheck, Wrench, BadgePercent, Headphones, CheckCircle2 } from "lucide-react";

const PROPOSITIONS = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#007b99]" />,
    title: "Genuine Leads, Best ACOS",
    description:
      "End users leads, Panels, inverters, batteries, and mounting structures from top-tier, certified manufacturers — sourced directly, priced transparently.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-emerald-500" />,
    title: "End-to-End Installation Services - Pan India Base",
    description:
      "Our vetted, trained technicians handle everything across Pan India Base: site assessment, design, permits, installation, and grid connection.",
  },
  {
    icon: <BadgePercent className="w-6 h-6 text-amber-500" />,
    title: "Maximum Savings, Minimum Hassle",
    description:
      "Calculate your PM Surya Ghar subsidy eligibility, compare financing options, and track your ROI — all before you buy.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-[#f26522]" />,
    title: "Support That Doesn't End at Checkout",
    description:
      "Dedicated after-sales service, annual maintenance plans (AMC), and performance monitoring for the life of your solar system.",
  },
];

export function ValuePropSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/60 px-4 sm:px-6 lg:px-8 border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#007b99]/10 text-[#007b99] dark:text-cyan-400 font-bold text-xs uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Why Go Solar With Us?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            The Ultimate Solar Advantage
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            We simplify solar energy adoption with certified hardware, Pan India Base installation, and complete government subsidy assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROPOSITIONS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/50 w-fit mb-5 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
