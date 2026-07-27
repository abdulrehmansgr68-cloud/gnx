import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

        {/* Column 1: Brand & Social */}
        <div className="flex flex-col space-y-5 lg:col-span-2">
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
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
            India's trusted online platform for solar panels, hardware, and professional installation. From your first click to full power — we make going solar simple.
          </p>

          <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 pt-1">
            <p className="font-semibold text-slate-800 dark:text-slate-200">GNX Power Solution</p>
            <p>3rd Floor Kirti Tower, Plot no 12 and 13C, Tech Zone-IV,</p>
            <p>Amarpali Dream Valley, Greater Noida West 201306</p>
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
              className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-sm"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            {/* <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter / X"
              className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            >
              <FaTwitter className="h-4 w-4" />
            </a> */}
            <a
              href="https://www.linkedin.com/company/gnx-power-solution/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/gnxpowersolution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

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
          <Link href="/contact" className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-semibold">Contact Support</Link>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Newsletter</h3>
          <div className="flex flex-col space-y-2.5">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-10 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-xs"
            />
            <Button className="h-10 w-full bg-[#007b99] hover:bg-[#005266] text-white font-bold text-xs shadow-sm">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Get latest solar subsidy updates and B2B pricing drops directly in your inbox.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>© {new Date().getFullYear()} GNX Power Solution. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-slate-600 dark:hover:text-slate-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

