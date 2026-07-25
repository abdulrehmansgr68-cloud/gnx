"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Smartphone,
  ArrowRight,
  Sparkles,
  Download,
  ShieldCheck,
  User,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.gnx.powersolution&hl=en_IN";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({ fullName: "", email: "", phone: "", message: "" });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 transition-colors duration-300">
      {/* 1. Hero Banner Image Frame (Matching Snapshot Header) */}
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
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-md">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base text-slate-200 mt-2 font-medium max-w-lg">
            Let's have a discussion about your solar energy needs & vendor partnerships.
          </p>
        </div>
      </div>

      {/* 2. Main Section - Soft Cyan/Blue Tinted Backdrop */}
      <div className="bg-[#e6f7fa]/70 dark:bg-slate-950/90 py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Left Side: Contact Information & App Teaser */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Let's Start a{" "}
                  <span className="text-[#f26522] dark:text-orange-400">
                    Conversation
                  </span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
                  Whether you have questions about GNX Power Solution, need support, solar installation guidance, or vendor partnership inquiries, our team is here to help. We'll respond shortly.
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
                      3rd Kirti Tower, Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh
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
                      href="mailto:support@gnxpowersolution.com"
                      className="text-xs sm:text-sm text-[#007b99] dark:text-cyan-400 font-semibold hover:underline mt-1 block"
                    >
                      support@gnxpowersolution.com
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


              {/* Mobile App Download Teaser Card - Light Glass Styling */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-cyan-50/90 via-white to-[#e6f7fa] dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-cyan-500/30 shadow-xl relative overflow-hidden space-y-3">
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
                  Manage Solar Orders & Instant Quotes on Mobile
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

            {/* Right Side: Lead Generation Form OR Thank You Flow */}
            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative">

                {!isSubmitted ? (
                  /* --- Lead Generation Form --- */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                        Send a Message
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                        For business enquiries, partnerships, solar quotes, or vendor registration.
                      </p>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <Input
                          required
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          className="pl-10 h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:bg-white dark:focus:bg-slate-900 transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <Input
                          required
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="pl-10 h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:bg-white dark:focus:bg-slate-900 transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <Input
                          required
                          type="tel"
                          placeholder="Enter 10-digit mobile number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="pl-10 h-12 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:bg-white dark:focus:bg-slate-900 transition-all text-sm"
                        />
                      </div>
                    </div>

                    {/* Message / Requirement */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Your Message / Requirement <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
                        <Textarea
                          required
                          rows={4}
                          placeholder="Describe your solar requirement, capacity (kW), or partnership details..."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          className="pl-10 rounded-xl border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 focus:bg-white dark:focus:bg-slate-900 transition-all text-sm resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#007b99] via-[#015C8F] to-[#007b99] hover:opacity-95 text-white font-extrabold rounded-xl h-13 text-base shadow-xl shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting Inquiry...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit</span>
                        </>
                      )}
                    </Button>

                    <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Your information is 100% secure with GNX Power Solution.
                    </p>
                  </form>
                ) : (
                  /* --- Interactive Thank You & Clean App Download Screen --- */
                  <div className="py-4 flex flex-col items-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/30 shadow-md shadow-emerald-500/10">
                      <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                    </div>

                    <div>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                        Inquiry Received
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
                        Thank You, {formData.fullName || "Customer"}!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                        Your inquiry has been submitted successfully. Our solar solution experts will reach out to you shortly.
                      </p>
                    </div>

                    {/* Clean & Light App Download Card */}
                    <div className="w-full p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-cyan-50/80 via-white to-[#e6f7fa] dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border border-cyan-500/25 shadow-xl space-y-4 text-left relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-5 h-5 text-[#007b99] dark:text-cyan-400" />
                          <span className="text-xs font-extrabold text-[#007b99] dark:text-cyan-400 uppercase tracking-wider">
                            GNX Mobile Application
                          </span>
                        </div>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 uppercase shadow-sm">
                          Free App
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        Manage Solar Products & Vendor Requests on Mobile
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                        Manage products like solar panels, battery inverters, and place requests to buy or sell as a vendor now.
                      </p>

                      <div className="pt-2">
                        <a
                          href={PLAY_STORE_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#007b99] via-[#015C8F] to-[#007b99] hover:opacity-95 text-white text-xs sm:text-sm font-extrabold transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] group"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download on Google Play Store</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="text-xs font-semibold text-slate-500 hover:text-[#007b99] dark:hover:text-cyan-400 underline pt-1 transition-colors"
                    >
                      Send Another Message / Inquiry
                    </button>
                  </div>
                )}


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
