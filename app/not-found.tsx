import Link from "next/link";
import { ArrowLeft, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-md mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 text-[#007b99] dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-cyan-500" />
          <span>404 - Page Not Found</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
          Oops!
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
          The page you are looking for doesn&apos;t exist or has been moved. Explore our solar energy solutions or head back home.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-[#007b99] via-[#015C8F] to-[#007b99] hover:opacity-95 text-white font-extrabold rounded-xl px-6 h-12 text-sm shadow-md"
            >
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </Link>

          <Link href="/solutions" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-bold rounded-xl px-6 h-12 text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Explore Solutions
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
