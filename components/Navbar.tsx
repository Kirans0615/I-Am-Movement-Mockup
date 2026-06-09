"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Awards & Media", href: "/media-awards" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Rock Steady Boxing (Parkinson's)", href: "/programs/rock-steady" },
      { label: "Boxing 4 All", href: "/programs/boxing-4-all" },
      { label: "DanceAbility", href: "/programs/dance-ability" },
      { label: "Private Sessions (Autism)", href: "/programs/private-sessions" },
      { label: "Care Partner Support Group", href: "/programs/support-group" },
      { label: "Free Seminars", href: "/programs/seminars" },
    ],
  },
  { label: "Community", href: "/community" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-sm shadow-lg shadow-black/40" : "bg-[#0A0A0A]"
      }`}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          {/* TODO: Replace with trademarked SVG logo — current version is text placeholder */}
          <Link href="/" aria-label="I AM Movement home" className="flex items-center gap-1 shrink-0">
            <span
              className="text-2xl lg:text-3xl leading-none"
              style={{ fontFamily: "var(--font-display)", color: "#E63B2E" }}
            >
              I AM
            </span>
            <span
              className="text-2xl lg:text-3xl leading-none"
              style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}
            >
              MOVEMENT
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="relative">
                {link.children ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      aria-expanded={activeDropdown === link.label}
                      aria-haspopup="true"
                      className="flex items-center gap-1 px-3 py-2 text-[15px] text-white hover:text-[#E63B2E] transition-colors font-medium"
                      style={{ minHeight: "44px" }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {activeDropdown === link.label && (
                      <ul
                        role="menu"
                        className="absolute top-full left-0 mt-1 w-64 rounded-lg overflow-hidden shadow-xl shadow-black/60"
                        style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}
                      >
                        {link.children.map((child) => (
                          <li key={child.label} role="none">
                            <Link
                              href={child.href}
                              role="menuitem"
                              className="block px-4 py-3 text-[15px] text-white hover:text-[#E63B2E] hover:bg-white/5 transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-[15px] text-white hover:text-[#E63B2E] transition-colors font-medium"
                    style={{ minHeight: "44px" }}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="ml-2 px-5 py-2 rounded-lg text-[15px] font-bold text-white transition-all"
                style={{ background: "#E63B2E", minHeight: "44px" }}
              >
                Join Now
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className="lg:hidden pb-4"
          >
            <ul role="list" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  {link.children ? (
                    <div>
                      <button
                        aria-expanded={activeDropdown === link.label}
                        onClick={() =>
                          setActiveDropdown(activeDropdown === link.label ? null : link.label)
                        }
                        className="flex items-center justify-between w-full px-3 py-3 text-[16px] text-white font-medium"
                        style={{ minHeight: "44px" }}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {activeDropdown === link.label && (
                        <ul className="pl-4 flex flex-col gap-1">
                          {link.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-[15px] text-[#A1A1AA] hover:text-[#E63B2E] transition-colors"
                                style={{ minHeight: "44px" }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 text-[16px] text-white hover:text-[#E63B2E] transition-colors font-medium"
                      style={{ minHeight: "44px" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center px-5 py-3 rounded-lg text-[16px] font-bold text-white"
                  style={{ background: "#E63B2E", minHeight: "44px" }}
                >
                  Join Now
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
