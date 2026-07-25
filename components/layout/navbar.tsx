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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8 flex h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/app_logo.svg"
              alt="GNX Power Solution"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

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
    </header>
  );
}

