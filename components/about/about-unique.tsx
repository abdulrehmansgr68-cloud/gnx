import { Zap, Store, Award } from "lucide-react";

const UNIQUE_PILLARS = [
  {
    icon: <Zap className="w-8 h-8 text-[#8a6d1c] dark:text-amber-300" />,
    title: "Simplify Clean Energy Access for Consumers",
    description:
      "by offering verified solar plant kits, EV chargers, inverters, batteries, and smart energy services.",
    badgeBg: "bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800",
  },
  {
    icon: <Store className="w-8 h-8 text-[#007b99] dark:text-cyan-400" />,
    title: "Empower Local Businesses and Entrepreneurs",
    description:
      "with digital storefronts, business enablement tools, subscriptions, lead generation, and branding support.",
    badgeBg: "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800",
  },
  {
    icon: <Award className="w-8 h-8 text-[#f26522]" />,
    title: "Build a Nation-Wide Network of Energy Experts",
    description:
      "who can consult, educate, and serve the growing clean energy ecosystem.",
    badgeBg: "bg-orange-50 dark:bg-orange-950/60 border-orange-200 dark:border-orange-800",
  },
];

export function AboutUnique() {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title & Subtitle */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            What Makes <span className="text-[#f26522]">Power Solution Unique</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            Power Solution is a platform built by sector experts, for the sector. We are focused on three core goals:
          </p>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {UNIQUE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col space-y-4"
            >
              <div className={`p-3.5 rounded-2xl w-fit border shadow-xs ${pillar.badgeBg}`}>
                {pillar.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Informational Paragraphs Below Cards */}
        <div className="space-y-4 pt-2">
          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Whether you’re a farmer looking for a solar water pump, a school aiming to go solar, a startup installing EV charging stations, or an energy consultant — Power Solution is the one-stop solution for discovering and delivering energy transition solutions.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            Power Solution blends e-commerce capabilities, service aggregation, and professional networks into one platform — tailored for the Indian market. Our tech-driven approach ensures transparency, speed, and efficiency in every interaction, making clean energy adoption a practical reality for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
