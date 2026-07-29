import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-3 bg-slate-50/50 dark:bg-slate-950/50">
      <Loader2 className="w-8 h-8 text-[#007b99] dark:text-cyan-400 animate-spin" />
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wide uppercase">
        Loading GNX Power Solution...
      </p>
    </div>
  );
}
