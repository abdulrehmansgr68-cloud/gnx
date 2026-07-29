import Link from "next/link";
import { UserCheck, ShoppingBag, CalendarCheck, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Register or Login",
    description: "Register your company (for B2B) or Login (for B2C).",
    icon: <UserCheck className="h-5 w-5 text-green-700 dark:text-green-400" />,
    iconBg: "bg-green-100 dark:bg-green-950/60",

  },
  {
    number: "2",
    title: "Choose Your Requirement",
    description: "Browse panels, inverters, and battery storage options tailored to your home or business needs.",
    icon: <ShoppingBag className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    iconBg: "bg-amber-100 dark:bg-amber-950/60",

  },
  {
    number: "3",
    title: "Schedule Consultation",
    description: "Schedule expert consultation and site assessment.",
    icon: <CalendarCheck className="h-5 w-5 text-orange-600 dark:text-orange-400" />,
    iconBg: "bg-orange-100 dark:bg-orange-950/60",

  },
  {
    number: "4",
    title: "Enter Clean Energy World",
    description: "Get into the process for entering into clean energy world with end-to-end execution.",
    icon: <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
    iconBg: "bg-blue-100 dark:bg-blue-950/60",

  },
];

export function ProcessSection() {
  return (
    <section className="py-20 text-center px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors bg-gradient-to-br from-[#007b99]/10 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 dark:text-white mb-6">
          How It Works
          <br />
          <span className="text-[#039BC5] dark:text-cyan-400 text-2xl md:text-3xl font-medium">Simple 4-Step Process</span>

        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          From your first click to full power, we make going solar simple and transparent.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-0">
        {/* Horizontal Connector Line for Desktop */}
        <div className="hidden lg:block absolute top-[28px] left-[12%] right-[12%] h-1 bg-gradient-to-r from-[#007b99] via-cyan-400 to-amber-400 -z-10 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md dark:shadow-slate-950/50 transition-all hover:scale-[1.02]">
              {/* Number Circle */}
              <div className="w-14 h-14 rounded-full bg-[#007b99] flex items-center justify-center text-white text-xl font-bold border-4 border-white dark:border-slate-900 shadow-md mb-6 transition-transform group-hover:scale-110">
                {step.number}
              </div>

              {/* Icon Circle */}
              <div className={`${step.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1`}>
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Link href="/contact">
          <Button size="lg" className="bg-[#007b99] hover:bg-[#005266] text-white font-bold rounded-full px-8 h-13 text-sm shadow-lg transition-transform hover:scale-105">
            <span>Start Solar Process Now</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

