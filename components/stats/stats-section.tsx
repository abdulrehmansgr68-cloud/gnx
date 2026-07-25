import React from 'react';

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "750+", label: "Commercial Projects" },
  { value: "50 MW+", label: "Installed Capacity" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "100+", label: "Cities Covered" },
];

export function StatsSection() {
  return (
    <section className="relative py-24 bg-[#0F1423] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#039BC5]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center mb-16 px-4">
        <p className="text-[#FBC02D] font-bold text-sm tracking-widest uppercase mb-4">
          Trusted Nationwide
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Powering a Brighter<br />Future
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        {/* Desktop Layout (Horizontal row with dividers) */}
        <div className="hidden md:flex flex-row justify-between items-center w-full">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center px-4 w-full">
                <span className="text-4xl lg:text-5xl font-bold text-[#FBC02D] mb-2">{stat.value}</span>
                <span className="text-sm lg:text-base text-slate-300">{stat.label}</span>
              </div>
              {/* Divider */}
              {index !== stats.length - 1 && (
                <div className="h-16 w-px bg-slate-600/50 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Layout (Grid) */}
        <div className="grid grid-cols-2 gap-8 md:hidden text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[#FBC02D] mb-2">{stat.value}</span>
              <span className="text-sm text-slate-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
