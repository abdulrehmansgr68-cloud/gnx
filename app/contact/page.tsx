import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Smartphone,
  ArrowRight,
  Sparkles,
  Download,
} from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.gnx.powersolution&hl=en_IN";

export const metadata: Metadata = {
  title: "Contact Us | GNX Power Solution",
  description:
    "Get in touch with GNX Power Solution. Reach out for solar panel inquiries, rooftop EPC quotes, vendor partnerships, or technical support across India.",
  openGraph: {
    title: "Contact Us | GNX Power Solution",
    description:
      "Have questions about solar products or vendor partnerships? Contact GNX Power Solution experts today.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 transition-colors duration-300">
      {/* 1. Hero Banner Image Frame */}
      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden bg-slate-900">
        <Image
          src="/contact-hero-clean.png"
          alt="Contact Us - Let's Have a Discussion"
          fill
          className="object-cover opacity-90 object-center"
          priority
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>24/7 Dedicated Customer Support</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-slate-200 mt-2 font-medium max-w-lg">
            Let&apos;s have a discussion about your solar energy needs &amp; vendor partnerships.
          </p>
        </div>
      </div>

      {/* 2. Main Section */}
      <div className="bg-[#e6f7fa]/70 dark:bg-slate-950/90 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
           {/* Left Side: Contact Information & App Teaser */}
            <div className="lg:col-span-5 h-full flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Let&apos;s Start a{" "}
                  <span className="text-[#f26522] dark:text-orange-400">
                    Conversation
                  </span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
                  Whether you have questions about GNX Power Solution, need support, solar installation guidance, or vendor partnership inquiries, our team is here to help. We&apos;ll respond shortly.
                </p>
              </div>

              {/* 3 Contact Info Cards */}
              <div className="space-y-4">
                {/* Office Location */}
                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-md backdrop-blur-md transition-all hover:scale-[1.01]">
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-[#f26522] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Office Address
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-normal font-medium">
                      3rd Floor Kirti Tower, Plot no 12 and 13C, Tech Zone-IV, Amarpali Dream Valley, Greater Noida West 201306
                    </p>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-md backdrop-blur-md transition-all hover:scale-[1.01]">
                  <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-[#007b99] dark:text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Email Support
                    </h3>
                    <a
                      href="mailto:info@gnxpowersolution.com"
                      className="text-xs sm:text-sm text-[#007b99] dark:text-cyan-400 font-semibold hover:underline mt-1 block"
                    >
                      info@gnxpowersolution.com
                    </a>
                  </div>
                </div>

                {/* Phone Support */}
                <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-md backdrop-blur-md transition-all hover:scale-[1.01]">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+919871305921"
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold hover:underline mt-1 block"
                    >
                      +91-9871305921
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile App Download Teaser Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-cyan-50/90 via-white to-[#e6f7fa] dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-cyan-500/30 shadow-xl relative overflow-hidden space-y-3 mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#007b99] dark:text-cyan-400 uppercase tracking-wider">
                    <Smartphone className="w-4.5 h-4.5 text-[#007b99] dark:text-cyan-400" />
                    <span>GNX Mobile Application</span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 uppercase shadow-sm">
                    Free App
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  Manage Solar Orders &amp; Instant Quotes on Mobile
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  Download GNX Power Solution mobile app on Android to get real-time price drops, GST invoicing, and live tracking.
                </p>

                <div className="pt-2">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#007b99] via-[#015C8F] to-[#007b99] hover:opacity-95 text-white text-xs sm:text-sm font-extrabold transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] group"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download on Google Play</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Client Contact Form */}
            <div className="lg:col-span-7 h-full">
              <ContactForm />
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}
