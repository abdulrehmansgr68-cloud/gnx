"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden">
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
        <div className="flex-1 flex items-center justify-end gap-6 md:gap-8 px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 ${
                    isActive
                      ? "text-[#007b99] dark:text-cyan-400 font-extrabold border-b-2 border-[#007b99] dark:border-cyan-400"
                      : "text-slate-600 dark:text-slate-300 font-medium hover:text-[#007b99] dark:hover:text-cyan-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/contact">
              <Button className="hidden sm:flex rounded-full px-6 bg-primary hover:bg-primary/90 shadow-md">
                <Smartphone className="mr-2 h-4 w-4" />
                Contact Us & App
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>

      </div>
    </header>
  );
}

