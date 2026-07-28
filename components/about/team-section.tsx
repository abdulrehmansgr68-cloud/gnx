import Image from "next/image";
import { Briefcase, Users, Award, ShieldCheck, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const executive = {
  name: "Mr. Neeraj Chauhan",
  role: "Chief Executive Officer",
  experience: "25+ Years Experience",
  bio: "A visionary leader with a proven track record of driving innovation, building high-performing teams, and delivering sustainable business success with a strong customer-centric approach.",
  image: "/team/image_2.png",
  highlights: [
    "Clean Energy Strategy",
    "Global Operations",
    "Sustainable Business Growth",
  ],
};

const managers = [
  {
    name: "Rangesh Kumar",
    role: "IT Operations Manager",
    experience: "8.5+ Years",
    bio: "Expert in IT infrastructure, system administration, and process optimization for secure and efficient IT services.",
    image: "/team/image_4.png",
  },
  {
    name: "Gaurav Kumar",
    role: "Finance & Treasury Manager",
    experience: "6+ Years",
    bio: "Experienced in financial management, treasury operations, budgeting, cash flow planning, corporate finance, and risk management.",
    image: "/team/image_6.png",
  },
  {
    name: "Muskan Sharma",
    role: "Project Manager",
    experience: "5+ Years",
    bio: "Specializes in project planning, team coordination, and timely execution ensuring high standards of efficiency.",
    image: "/team/image_3.png",
  },
  {
    name: "Sheelu Singh",
    role: "Project Coordinator",
    experience: "7+ Years",
    bio: "Specializes in project planning, tracking schedules, cross-functional team coordination, and ensuring timely quality delivery.",
    image: "/team/image_7.png",
  },
  {
    name: "Mrs. Sapna Pandey",
    role: "HR Operations",
    experience: "5+ Years",
    bio: "Specializes in recruitment, employee engagement, and HR administration, creating a highly productive work environment.",
    image: "/team/image_5.png",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#039BC5] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Users className="w-3.5 h-3.5" />
            Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            The Minds Behind <span className="text-[#039BC5]">GNX Power</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Our team of seasoned industry leaders and dedicated managers is driving the transition toward sustainable energy with unmatched expertise and integrity.
          </p>
        </div>

        {/* Executive Leader Spotlight (CEO Card) */}
        <div className="mb-20">
          <div className="relative group">
            {/* Subtle card glow on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#039BC5] to-blue-600 rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition duration-500" />

            <Card className="relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl p-8 sm:p-10 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Avatar Column */}
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-xl ring-4 ring-cyan-500/20 dark:ring-cyan-500/30 group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={executive.image}
                      alt={executive.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-[#039BC5] text-xs font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{executive.experience}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold tracking-wider uppercase mb-2">
                      Executive Leadership
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      {executive.name}
                    </h3>
                    <p className="text-[#039BC5] font-semibold text-lg flex items-center justify-center lg:justify-start gap-2 mt-1">
                      <Briefcase className="w-4 h-4" />
                      {executive.role}
                    </p>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed italic border-l-0 lg:border-l-4 border-cyan-500 lg:pl-4 py-1">
                    "{executive.bio}"
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
                    {executive.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200/60 dark:border-slate-700/60"
                      >
                        <Sparkles className="w-3 h-3 text-[#039BC5]" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Management Team Subheader */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-sm font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-[#039BC5]" />
            Operations & Management Leaders
          </div>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1" />
        </div>

        {/* Management Grid: Row 1 (3 cards) + Row 2 (2 cards centered) */}
        <div className="space-y-6 lg:space-y-8">
          {/* Row 1: Top 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {managers.slice(0, 3).map((manager) => (
              <Card
                key={manager.name}
                className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/40 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md mb-5 group-hover:scale-105 transition-transform duration-300 ring-4 ring-slate-100 dark:ring-slate-800 group-hover:ring-cyan-500/30">
                    <Image
                      src={manager.image}
                      alt={manager.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#039BC5] transition-colors">
                    {manager.name}
                  </h4>
                  <p className="text-[#039BC5] font-semibold text-sm mb-3">
                    {manager.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {manager.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                    Exp: {manager.experience}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          {/* Row 2: Bottom 2 Cards Centered */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-8">
            {managers.slice(3, 5).map((manager) => (
              <div key={manager.name} className="w-full sm:w-1/2 lg:w-[calc(33.333%-1.33rem)]">
                <Card className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/40 flex flex-col justify-between h-full">
                  <div>
                    <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md mb-5 group-hover:scale-105 transition-transform duration-300 ring-4 ring-slate-100 dark:ring-slate-800 group-hover:ring-cyan-500/30">
                      <Image
                        src={manager.image}
                        alt={manager.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#039BC5] transition-colors">
                      {manager.name}
                    </h4>
                    <p className="text-[#039BC5] font-semibold text-sm mb-3">
                      {manager.role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                      {manager.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                      Exp: {manager.experience}
                    </span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
