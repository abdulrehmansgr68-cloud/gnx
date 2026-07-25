import { Sun, BatteryCharging, Sliders, Award } from "lucide-react";

const metrics = [
  {
    icon: <Sun className="h-5 w-5 text-[#007b99] dark:text-cyan-400" />,
    value: "50MW+",
    label: "Solar Panels Installed",
    iconBg: "bg-cyan-50 dark:bg-cyan-950/60",
  },
  {
    icon: <BatteryCharging className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    value: "20MWh+",
    label: "Energy Stored Daily",
    iconBg: "bg-amber-50 dark:bg-amber-950/60",
  },
  {
    icon: <Sliders className="h-5 w-5 text-orange-600 dark:text-orange-400" />,
    value: "Smart",
    label: "Hybrid Inverter Tech",
    iconBg: "bg-orange-50 dark:bg-orange-950/60",
  },
  {
    icon: <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />,
    value: "Tier 1",
    label: "Certified Quality",
    iconBg: "bg-yellow-50 dark:bg-yellow-950/60",
  },
];

export function HeroBottomBanner() {
  return (
    <div className="w-full pt-2 pb-1 z-20">
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-100 dark:border-slate-800/80 shadow-xl shadow-slate-200/50 dark:shadow-black/50 rounded-2xl lg:rounded-3xl p-3.5 sm:p-4 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100 dark:divide-slate-800/80">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center ${
                index !== 0 ? "lg:pl-4 pt-2 lg:pt-0" : ""
              }`}
            >
              <div
                className={`${metric.iconBg} p-2 rounded-xl flex items-center justify-center mb-1.5 shadow-sm`}
              >
                {metric.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {metric.value}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

