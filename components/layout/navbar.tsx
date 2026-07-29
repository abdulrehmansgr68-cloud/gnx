"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Smartphone, Menu, X, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full relative bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 before:absolute before:-top-40 before:inset-x-0 before:h-40 before:bg-background dark:before:bg-slate-950 before:pointer-events-none">
        <div className="w-full flex h-16 items-center justify-between">
          {/* Full-height Logo Banner with Slanted Right Edge */}
          <div
            className="h-full flex items-center pl-4 sm:pl-6 lg:pl-10 pr-10 sm:pr-14 lg:pr-16 shadow-md transition-all shrink-0"
            style={{
              background: "linear-gradient(90deg, #02438A 0%, #029FC8 100%)",
              clipPath: "polygon(0 0, 100% 0, calc(100% - 30px) 100%, 0 100%)",
            }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="GNX Power Solution"
                width={160}
                height={40}
                className="h-8 sm:h-9 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Right Header Controls (Nav Links & Action Buttons) */}
          <div className="flex-1 flex items-center justify-end gap-3 sm:gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 text-sm">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-colors py-1 ${isActive
                      ? "text-[#007b99] dark:text-cyan-400 font-extrabold border-b-2 border-[#007b99] dark:border-cyan-400"
                      : "text-slate-600 dark:text-slate-300 font-medium hover:text-[#007b99] dark:hover:text-cyan-400"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons & Theme Toggle */}
            <div className="flex items-center gap-3">
              <Link href="/contact">
                <Button className="hidden sm:flex rounded-full px-6 bg-primary hover:bg-primary/90 shadow-md cursor-pointer">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Contact Us & App
                </Button>
              </Link>
              <ThemeToggle />

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-In Sidebar Drawer & Backdrop */}
      {isOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <div
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Sliding Sidebar Panel */}
          <aside className="fixed inset-y-0 right-0 z-50 w-72 max-w-[80vw] bg-background border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 md:hidden">
            <div className="space-y-6">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div
                  className="px-3 py-1.5 rounded-lg shadow-sm"
                  style={{
                    background: "linear-gradient(90deg, #02438A 0%, #029FC8 100%)",
                  }}
                >
                  <Image
                    src="/logo.svg"
                    alt="GNX Power Solution"
                    width={120}
                    height={30}
                    className="h-6 w-auto"
                  />
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-1.5 pt-2">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/" ? pathname === "/" : pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-sm transition-all ${isActive
                        ? "bg-[#007b99]/10 text-[#007b99] dark:text-cyan-400 shadow-xs"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                        }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Sidebar Footer */}
            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
                <Button className="w-full rounded-full bg-primary hover:bg-primary/90 shadow-md cursor-pointer font-bold">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Contact Us & App
                </Button>
              </Link>
              <p className="text-[11px] text-center text-slate-400 dark:text-slate-500 font-medium">
                © {new Date().getFullYear()} GNX Power Solution
              </p>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
