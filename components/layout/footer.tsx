import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full max-w-full overflow-x-hidden bg-white dark:bg-slate-950 pt-10 pb-8 pl-4 sm:pl-6 lg:pl-10 pr-4 sm:pr-6 lg:pr-8 border-t border-slate-100 dark:border-slate-800">
      <div className="w-full mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">

        {/* Column 1: Brand & Social */}
        <div className="flex flex-col space-y-4">
          <div
            className="w-fit flex items-center px-4 py-2 shadow-md rounded-xl"
            style={{
              background: "linear-gradient(90deg, #02438A 0%, #029FC8 100%)",
            }}
          >
            <Image
              src="/logo.svg"
              alt="GNX Power Solution"
              width={160}
              height={40}
              className="h-9 w-auto"
            />
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            India&apos;s trusted online platform for solar panels, hardware, and professional installation. From your first click to full power — we make going solar simple.
          </p>

          <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1 pt-1">
            <p className="font-semibold text-slate-800 dark:text-slate-200">GNX POWER SOLUTION</p>
            <p>3rd Floor Kirti Tower, Plot no 12 and 13C, </p>
            <p>Tech Zone-IV, Amarpali Dream Valley, </p>
            <p>Greater Noida West 201306</p>
            <p className="pt-1">
              Email: <a href="mailto:info@gnxpowersolution.com" className="text-[#007b99] dark:text-cyan-400 font-medium hover:underline">info@gnxpowersolution.com</a>
            </p>
            <p>
              Phone: <a href="tel:+919871305921" className="text-slate-800 dark:text-slate-200 font-bold hover:underline">+91-9871305921</a>
            </p>
          </div>

          <div className="flex space-x-3 pt-2">
            <a
              href="https://www.facebook.com/gnxpowersolution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm"
            >
              <FaFacebookF className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/company/gnx-power-solution/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            >
              <FaLinkedinIn className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.instagram.com/gnxpowersolution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            >
              <FaInstagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="md:hidden flex justify-between items-center">
          {/* Column 2: Shop */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Shop</h3>
            <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Solar Panels</Link>
            <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Inverters</Link>
            <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Batteries & Storage</Link>
            <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Rooftop Kits</Link>
            <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Accessories & Spares</Link>
          </div>

          {/* Column 3: Services & Support */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Services & Support</h3>
            <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Solar Installation</Link>
            <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Maintenance & AMC</Link>
            <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Subsidy Assistance</Link>
            <Link href="/download" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold">Mobile App</Link>
            <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold">Contact Support</Link>
          </div>
        </div>

        <div className="hidden md:flex flex-col space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Shop</h3>
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Solar Panels</Link>
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Inverters</Link>
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Batteries & Storage</Link>
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Rooftop Kits</Link>
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Accessories & Spares</Link>
        </div>

        {/* Column 3: Services & Support */}
        <div className="hidden md:flex flex-col space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Services & Support</h3>
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Solar Installation</Link>
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Maintenance & AMC</Link>
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm">Subsidy Assistance</Link>
          <Link href="/download" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold">Mobile App</Link>
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold">Contact Support</Link>
        </div>
        {/* Column 4: Download App & QR Code */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Download App</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-snug">
            Scan QR code with your mobile camera to download the GNX app.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.gnx.powersolution&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-fit p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs hover:shadow-md hover:border-[#007b99] transition-all"
            aria-label="Google Play Store QR Code"
          >
            <div className="relative w-28 h-28 mx-auto bg-white p-1.5 rounded-lg overflow-hidden">
              <Image
                src="/playstore-qr.png"
                alt="GNX Power Solution Play Store QR Code"
                width={112}
                height={112}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
          </a>
          <div className="flex pt-4">
            <Link href="/privacy-policy" className="text-sm underline font-semibold hover:text-primary dark:hover:text-slate-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>

      <div className="w-full text-text-primary mx-auto mt-8 pt-4 border-t border-slate-300 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[0.9rem] gap-3">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <span className="text-text-primary">© 2026 GNX Power Solution. All Rights Reserved.</span>
        </div>


        <p className="font-medium">
          By{" "}
          <a
            href="https://www.sgrsoftwaresolution.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary dark:hover:text-slate-200 transition-colors"
          >
            SGR Software Solution Pvt Ltd
          </a>
        </p>
      </div>
    </footer>
  );
}

