import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#015C8F] to-[#0198C5] px-4 sm:px-6 lg:px-8 text-center text-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-[#FBC02D] font-bold text-sm tracking-widest uppercase mb-4">
          Start Your Solar Journey
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to Save on Your<br />Electricity Bills?
        </h2>
        <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl mb-10 leading-relaxed">
          Join over 10,000 households and businesses powering their future with clean, affordable solar energy. Get a personalized quote today.
        </p>
        
        <div className="flex justify-center w-full">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button size="lg" className="bg-[#FBC02D] hover:bg-[#F9A825] text-slate-900 font-extrabold rounded-full px-10 h-15 text-lg shadow-xl transition-all hover:scale-105 active:scale-95 w-full sm:w-auto inline-flex items-center justify-center gap-3">
              <span>Start Your Journey Now</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

