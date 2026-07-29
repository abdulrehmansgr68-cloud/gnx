import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center text-center space-y-4 lg:space-y-5 my-auto">
      {/* Gold Eyebrow Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf8e6]/90 dark:bg-amber-950/60 border border-[#e6c875]/90 dark:border-amber-700/60 text-[#8a6d1c] dark:text-amber-300 text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-sm backdrop-blur-md">
        <Zap className="w-3.5 h-3.5 fill-[#8a6d1c] dark:fill-amber-300 text-[#8a6d1c] dark:text-amber-300" />
        <span>END-TO-END ENERGY SOLUTIONS</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white dark:text-white leading-[1.1] max-w-4xl drop-shadow-sm">
        Power Your World with Solar{" "}
        <span className="text-white">
          Shop, Install, Save.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base text-text-primary dark:text-slate-200 leading-relaxed font-normal max-w-2xl px-2">
        India&apos;s trusted online platform for solar panels, hardware, and professional installation. From your first click to full power — we make going solar simple.
      </p>

      {/* Primary & Secondary Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-[#00667e] hover:bg-[#005266] text-white font-bold rounded-full px-7 h-12 text-xs sm:text-base shadow-lg shadow-[#00667e]/25 transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Shop Solar Panels, Hardware & Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

        {/* <Link href="/contact">
          <Button
            size="lg"
            variant="outline"
            className="bg-white/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-900 font-bold rounded-full px-6 h-12 text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Get a Free Site Survey</span>
          </Button>
        </Link> */}
      </div>



      {/* 2 Middle Floating Trust Pills */}
      <div className="flex flex-row items-center justify-center gap-3 pt-2">
        {/* Pill 1 */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-md backdrop-blur-md">
          <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-[#007b99] dark:text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-left">
            <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">24/7 Access</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Guaranteed Power</p>
          </div>
        </div>

        {/* Pill 2 */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800 shadow-md backdrop-blur-md">
          <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-[#8a6d1c] dark:text-amber-400">
            <Leaf className="w-4 h-4 fill-[#8a6d1c]/20" />
          </div>
          <div className="text-left">
            <p className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-tight">100% Clean</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Sustainable Tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}

