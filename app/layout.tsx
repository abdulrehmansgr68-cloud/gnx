import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://gnxpowersolution.com"
  ),
  title: {
    default: "GNX Power Solution | Solar Products, EPC & Vendor Platform",
    template: "%s | GNX Power Solution",
  },
  description:
    "Buy certified Tier-1 solar products online & sell as a verified vendor. End-to-end solar rooftop EPC, inverters, batteries, and turn-key solar energy solutions across India.",
  keywords: [
    "GNX Power Solution",
    "solar panels India",
    "solar EPC company",
    "buy solar inverters online",
    "lithium solar battery",
    "solar vendor portal",
    "rooftop solar installation",
  ],
  authors: [{ name: "GNX Power Solution Team" }],
  creator: "GNX Power Solution",
  publisher: "GNX Power Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gnxpowersolution.com",
    siteName: "GNX Power Solution",
    title: "GNX Power Solution | Solar Products & Rooftop EPC Platform",
    description:
      "Empowering homes, commercial buildings, and industrial facilities with certified solar energy solutions across India.",
    images: [
      {
        url: "/a48f81da641c9fd51bd6eb1f3d33c5e14f5c7087.png",
        width: 1200,
        height: 630,
        alt: "GNX Power Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GNX Power Solution | Solar Products & Rooftop EPC Platform",
    description:
      "Certified solar panels, hybrid inverters, lithium batteries, and EPC rooftop solar solutions across India.",
    images: ["/a48f81da641c9fd51bd6eb1f3d33c5e14f5c7087.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
