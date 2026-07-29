import Image from "next/image";
import { HeroContent } from "./hero-content";
import { HeroBottomBanner } from "./hero-bottom-banner";

export function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] min-h-[580px] flex flex-col justify-between overflow-hidden bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-3 transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/bg-image.png"
          alt="Home Energy Ecosystem"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>

      {/* Main Centered Content Container */}
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center relative z-10 py-2 sm:py-4">
        <HeroContent />
      </div>

      {/* Bottom Floating Stats Banner Ribbon */}
      <div className="max-w-6xl mx-auto w-full relative z-10 pt-1">
        <HeroBottomBanner />
      </div>
    </section>
  );
}



