import {
  Package,
  Truck,
  Tag,
  Users,
  Award,
  Headphones
} from "lucide-react";

const WHY_CHOOSE_GNX = [
  {
    icon: <Package className="w-6 h-6 text-[#039BC5]" />,
    title: "One-Stop Destination",
    description: "Everything from individual components to complete EPC project execution.",
  },
  {
    icon: <Truck className="w-6 h-6 text-emerald-500" />,
    title: "Pan-India Delivery",
    description: "Fast and reliable product shipping to all locations across India.",
  },
  {
    icon: <Tag className="w-6 h-6 text-amber-500" />,
    title: "Transparent Pricing",
    description: "Competitive rates with zero hidden charges or surprise costs.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#039BC5]" />,
    title: "Expert Technical Team",
    description: "Certified professionals with rich experience in solar installations.",
  },
  {
    icon: <Award className="w-6 h-6 text-indigo-500" />,
    title: "Quality & Trust",
    description: "100% genuine and certified products from top tier manufacturers.",
  },
  {
    icon: <Headphones className="w-6 h-6 text-rose-500" />,
    title: "End-to-End Support",
    description: "Dedicated after-sales service and hassle-free warranty management.",
  },
];

export function AboutWhyChoose() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Why Choose <span className="text-[#039BC5] dark:text-cyan-400">GNX Power Solution?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
            Delivering quality, speed, and lifetime support across every solar project in India.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_GNX.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
            >
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
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
