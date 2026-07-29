import {
  BarChart,
  Layers,
  CheckSquare,
  Wrench,
  Activity,
  LifeBuoy
} from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Energy Assessment & Audit",
    description: "Analyzing current power usage to recommend optimal system size.",
    icon: <BarChart className="w-6 h-6 text-[#039BC5]" />,
  },
  {
    step: "02",
    title: "System Design & Engineering",
    description: "Customized layouts for maximum solar energy yield.",
    icon: <Layers className="w-6 h-6 text-amber-500" />,
  },
  {
    step: "03",
    title: "Product Selection",
    description: "Choosing the right combination of panels, inverters, and components.",
    icon: <CheckSquare className="w-6 h-6 text-emerald-500" />,
  },
  {
    step: "04",
    title: "Professional Installation",
    description: "Safe, durable, and standard-compliant physical setup.",
    icon: <Wrench className="w-6 h-6 text-cyan-600" />,
  },
  {
    step: "05",
    title: "Testing & Commissioning",
    description: "Rigorous quality checks before grid connection/activation.",
    icon: <Activity className="w-6 h-6 text-indigo-500" />,
  },
  {
    step: "06",
    title: "Maintenance & Support",
    description: "Long-term technical support and after-sales service.",
    icon: <LifeBuoy className="w-6 h-6 text-rose-500" />,
  },
];

export function AboutProcess() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Our End-to-End <span className="text-[#039BC5] dark:text-cyan-400">Execution Process</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
            To ensure maximum efficiency and performance, our technical experts manage every step of your solar journey:
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-bold text-slate-200 dark:text-slate-800 group-hover:text-[#039BC5]/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
