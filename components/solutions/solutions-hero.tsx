import Image from "next/image";

export function SolutionsHero() {
  return (
    <section className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden bg-slate-900">
      <Image
        src="/contact-hero-clean.png"
        alt="Our Solutions - GNX Power Solution"
        fill
        className="object-cover opacity-90 object-center"
        priority
      />

      {/* Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 space-y-2">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-md">
          Our Solutions
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-200 font-medium max-w-xl drop-shadow">
          Intelligent, high-efficiency solar energy systems for homes, businesses, and industrial facilities.
        </p>
      </div>
    </section>
  );
}
