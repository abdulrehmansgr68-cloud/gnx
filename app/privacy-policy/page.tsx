import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Lock, UserCheck, Trash2, Mail, Globe, MapPin, CreditCard, Smartphone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | GNX Power Solution",
  description:
    "Learn how GNX Power Solution collects, uses, and safeguards your information when using our web platform and mobile application.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | GNX Power Solution",
    description:
      "Understand how GNX Power Solution safeguards your user and business data across web and mobile platforms.",
    url: "https://gnxpowersolution.com/privacy-policy",
    siteName: "GNX Power Solution",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* 1. Hero Section matching GNX subpage theme (Left Aligned) */}
      <section className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden bg-slate-900 px-4 sm:px-6 lg:px-12 flex items-center">
        <Image
          src="/contact-hero-clean.png"
          alt="Privacy Policy - GNX Power Solution"
          fill
          className="object-cover opacity-90 object-center"
          priority
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-cyan-300" />
            <span>Data Protection & Privacy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 font-medium">
            Last Updated: 06 July 2026
          </p>
        </div>
      </section>

      {/* 2. Main Content Body - Left Aligned to Standard Max-Width Grid */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-12">

        {/* Welcome Intro */}
        <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Lock className="w-6 h-6 text-[#039BC5]" />
            Welcome to GNX Power Solution
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and web platform.
          </p>
        </div>

        {/* Section 1 */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-[#039BC5] text-xs font-bold">
              1
            </span>
            Information We Collect
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            We collect information that you provide directly to us and automatically through your use of the app and platform:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <UserCheck className="w-4 h-4 text-[#039BC5]" />
                <span>Personal Data</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Name, email address, phone number, and shipping/billing address (for delivering solar products).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <MapPin className="w-4 h-4 text-[#039BC5]" />
                <span>Location Data</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We may request access to your location to calculate solar potential, suggest the right solar panel capacity, or find nearby installation partners.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <CreditCard className="w-4 h-4 text-[#039BC5]" />
                <span>Payment Information</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Standard payment details processed securely through third-party payment gateways (we do not store your credit card/UPI passwords directly).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white text-sm">
                <Smartphone className="w-4 h-4 text-[#039BC5]" />
                <span>Device Data</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Device ID, operating system, and app usage statistics for performance optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-[#039BC5] text-xs font-bold">
              2
            </span>
            How We Use Your Information
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            We use the collected data for the following legitimate business purposes:
          </p>

          <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
              <span>Process and deliver your solar product orders efficiently.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
              <span>Provide custom solar quotes or engineering assessments based on your location and roof size.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
              <span>Send order updates, tracking details, and dedicated customer support messages.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#039BC5] shrink-0 mt-0.5" />
              <span>Improve our mobile app experience, security performance, and resolve operational bugs.</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-[#039BC5] text-xs font-bold">
              3
            </span>
            Data Sharing and Disclosure
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-semibold">
            We do not sell your personal data to third parties. We only share information strictly required to fulfill your services:
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-white font-bold">Delivery Partners:</strong> Courier and logistics services to ship your solar panels, inverters, structures, and hardware accessories.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-white font-bold">Installation Partners:</strong> Certified local technicians and engineers who perform feasibility audits and rooftop solar setup at your specified location.
            </div>
            <div className="p-4 rounded-xl bg-cyan-50/70 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 text-cyan-900 dark:text-cyan-300">
              <strong className="font-bold">Payment Processors (Future Implementation):</strong> Secure gateways (like Razorpay or Stripe) may be added in future updates. No active payment modules are enabled in this current version.
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-[#039BC5] text-xs font-bold">
              4
            </span>
            Data Retention & Account Deletion
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            We retain your personal information as long as your account remains active or as needed to provide you services.
          </p>
          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3">
            <Trash2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              You have the right to request the deletion of your account and personal data at any time by contacting us at{" "}
              <a href="mailto:support@gnxpowersolution.com" className="font-bold underline hover:text-amber-700 dark:hover:text-amber-300">
                support@gnxpowersolution.com
              </a>{" "}
              or by selecting the <strong>&quot;Delete Account&quot;</strong> option inside the mobile application.
            </p>
          </div>
        </div>

        {/* Section 5 */}
        <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-[#039BC5] text-xs font-bold">
              5
            </span>
            Contact Us
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            If you have any questions or concerns regarding this Privacy Policy or data practices, please get in touch:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              href="mailto:muskan@gnxpowersolution.com"
              className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#039BC5] transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-[#039BC5]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Email Address</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">muskan@gnxpowersolution.com</div>
              </div>
            </a>

            <Link
              href="/"
              className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#039BC5] transition-colors"
            >
              <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-[#039BC5]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Official Website</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">www.gnxpowersolution.com</div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
