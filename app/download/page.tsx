import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Download,
  ShieldCheck,
  Zap,
  TrendingUp,
  FileText,
  Truck,
  ArrowRight,
  Star,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.gnx.powersolution&hl=en_IN";

const APP_FEATURES = [
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: "Direct Factory Prices",
    description: "Access wholesale rates on Tier-1 solar panels, hybrid inverters & lithium storage batteries.",
    bgColor: "bg-amber-50 dark:bg-amber-950/60",
  },
  {
    icon: <FileText className="w-6 h-6 text-cyan-500" />,
    title: "Instant GST Invoicing",
    description: "Generate official tax-compliant B2B invoices and instant quotation PDFs directly from mobile.",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/60",
  },
  {
    icon: <Truck className="w-6 h-6 text-emerald-500" />,
    title: "Live Order Tracking",
    description: "Track doorstep shipments and freight delivery across 10,000+ pin codes in India.",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/60",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: "Vendor Management Portal",
    description: "Sellers can list products, track customer inquiries, and manage payouts with 0% commission.",
    bgColor: "bg-blue-50 dark:bg-blue-950/60",
  },
];

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-cyan-500/10 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-[#007b99] dark:text-cyan-400 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Smartphone className="w-4 h-4 text-cyan-500" />
            <span>GNX Mobile App for Android</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            Solar Procurement & Vendor Management{" "}
            <span className="bg-gradient-to-r from-[#007b99] via-[#015C8F] to-[#f26522] bg-clip-text text-transparent">
              On Your Phone
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Download GNX Power Solution mobile app on Google Play to order Tier-1 solar equipment, get instant GST billing, and track nationwide logistics.
          </p>

          {/* Download Action Box */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#007b99] via-[#015C8F] to-[#007b99] hover:opacity-95 text-white font-extrabold text-base shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <Download className="w-5 h-5" />
              <span>Download on Google Play Store</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-bold rounded-2xl px-8 h-14 text-base shadow-sm"
              >
                Contact Sales Support
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-slate-500 dark:text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Official Android App
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 4.9 Rating (10,000+ Downloads)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-500" /> Free & Secure
            </span>
          </div>

        </div>
      </section>

      {/* App Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Everything You Need in One Solar App
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">
            Designed for solar buyers, EPC contractors, installers, and verified vendors across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APP_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-900/5 transition-all hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                <div
                  className={`${feature.bgColor} p-3.5 rounded-2xl w-fit mb-4 shadow-sm`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden text-center space-y-4">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Official Google Play App</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white max-w-2xl mx-auto">
            Ready to Streamline Your Solar Energy Sourcing?
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Join thousands of satisfied solar buyers and vendors. Download the GNX Power Solution app now on Android.
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-95 text-white font-extrabold text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4" />
              <span>Download GNX Mobile App (Google Play)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
