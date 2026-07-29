import {
  Sun,
  TrendingUp,
  Zap,
  Gauge,
  Home,
  BatteryCharging,
  CreditCard,
  FileSearch,
  Building2,
  Sparkles
} from "lucide-react";

const SERVICES = [
  {
    icon: <Sun className="w-7 h-7 text-[#0096c7]" />,
    title: "On-Grid and Off-Grid Solar Plant Kits",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-emerald-500" />,
    title: "Solar Business Enablement Programs",
  },
  {
    icon: <Zap className="w-7 h-7 text-amber-500" />,
    title: "Energy Efficiency Solutions for every need",
  },
  {
    icon: <Gauge className="w-7 h-7 text-indigo-500" />,
    title: "Smart Metering and Analytics Solutions",
  },
  {
    icon: <Home className="w-7 h-7 text-[#f26522]" />,
    title: "Rooftop Solar Solutions All Sizes",
  },
  {
    icon: <BatteryCharging className="w-7 h-7 text-emerald-600" />,
    title: "EV Chargers & Charging Infrastructure",
  },
  {
    icon: <CreditCard className="w-7 h-7 text-cyan-600" />,
    title: "Subscription Plans for service providers",
  },
  {
    icon: <FileSearch className="w-7 h-7 text-[#0096c7]" />,
    title: "Energy Consultancy Services",
  },
  {
    icon: <Building2 className="w-7 h-7 text-amber-600" />,
    title: "Tailored Energy Solutions for all Sectors",
  },
  {
    icon: <Sparkles className="w-7 h-7 text-[#f26522]" />,
    title: "Solar Cleaning Services",
    subtitle: "(All Sizes)",
  },
];

export function AboutServices() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-[#039BC5] text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-medium">
            Power Solution connects consumers with a wide range of solutions in the clean energy space, including:
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white text-slate-900 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1.5 flex flex-col justify-between space-y-4 min-h-[170px]"
            >
              <div className="p-3 rounded-2xl bg-slate-50 w-fit shadow-xs border border-slate-100">
                {service.icon}
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-xs text-slate-500 font-semibold mt-1">
                    {service.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
