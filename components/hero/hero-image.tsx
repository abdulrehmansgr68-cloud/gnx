import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";

export function HeroImage() {
  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] mt-6 lg:mt-0 flex items-center justify-center">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Clean Showcase Banner Frame */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xl group">
        <Image
          src="/bg-image.png"
          alt="GNX Solar E-Commerce Store"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />

        {/* Subtle Dark Gradient at bottom for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        {/* Clean Showcase Overlay Info */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-md bg-[#FBC02D] text-slate-950 text-[11px] font-extrabold uppercase tracking-wider">
                Direct Factory Rate
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Tier-1 Certified
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
              Solar Panels &amp; Energy Storage Systems
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Order online with 25-Year Warranty &amp; Free Doorstep Pan-India Shipping.
            </p>
          </div>

          <a
            href="#products"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-bold transition-all shrink-0 border border-white/20"
          >
            <span>Explore Products</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
