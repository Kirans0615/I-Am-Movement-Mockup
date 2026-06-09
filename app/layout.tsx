import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "I AM Movement — Adaptive Fitness in Irvine, CA",
  description:
    "I AM Movement is Orange County's premier adaptive fitness gym serving older adults and adults with special needs. Rock Steady Boxing for Parkinson's, DanceAbility, Boxing 4 All, and more in Irvine, CA.",
  keywords: [
    "adaptive fitness Irvine",
    "Rock Steady Boxing",
    "Parkinson's exercise",
    "DanceAbility",
    "senior fitness Orange County",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        {/* ADA: Skip to main content — first focusable element on every page */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
