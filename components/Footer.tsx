import Link from "next/link";
import { Share2, ScanFace } from "lucide-react";

const FOOTER_LINKS = [
  {
    heading: "Programs",
    links: [
      { label: "Rock Steady Boxing", href: "/programs/rock-steady" },
      { label: "Boxing 4 All", href: "/programs/boxing-4-all" },
      { label: "DanceAbility", href: "/programs/dance-ability" },
      { label: "Private Sessions", href: "/programs/private-sessions" },
      { label: "Care Partner Support", href: "/programs/support-group" },
      { label: "Free Seminars", href: "/programs/seminars" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Awards & Media", href: "/media-awards" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Community", href: "/community" },
      { label: "Enroll Now", href: "/enroll" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="px-4 sm:px-6 pt-16 pb-8"
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* TODO: Replace with trademarked SVG logo */}
            <Link href="/" aria-label="I AM Movement home" className="inline-flex items-center gap-1 mb-5">
              <span
                className="text-2xl leading-none"
                style={{ fontFamily: "var(--font-display)", color: "#E63B2E" }}
              >
                I AM
              </span>
              <span
                className="text-2xl leading-none"
                style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}
              >
                MOVEMENT
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#A1A1AA" }}>
              Orange County&apos;s premier adaptive fitness gym — empowering older adults and adults
              with special needs through boxing, dance, and movement.
            </p>
            <address className="not-italic text-sm mb-4" style={{ color: "#A1A1AA" }}>
              Irvine, California
              <br />
              Mon–Sat: By Appointment
              <br />
              Sunday: Closed
            </address>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="I AM Movement on Facebook (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors hover:text-[#E63B2E]"
                style={{ background: "rgba(255,255,255,0.06)", minWidth: "44px", minHeight: "44px" }}
              >
                <Share2 size={18} aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="I AM Movement on Instagram (opens in new tab)"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors hover:text-[#E63B2E]"
                style={{ background: "rgba(255,255,255,0.06)", minWidth: "44px", minHeight: "44px" }}
              >
                <ScanFace size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_LINKS.map((col) => (
            <nav key={col.heading} aria-label={`${col.heading} links`}>
              <h3
                className="text-sm font-bold uppercase tracking-widest text-white mb-5"
                style={{ fontFamily: "var(--font-display)", fontSize: "16px", letterSpacing: "0.1em" }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-3" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-[#E63B2E]"
                      style={{ color: "#A1A1AA", minHeight: "44px", display: "inline-flex", alignItems: "center" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs" style={{ color: "#A1A1AA" }}>
            © 2024 I AM Movement. All rights reserved.
          </p>
          {/* ADA accessibility statement */}
          <p className="text-xs max-w-md text-right" style={{ color: "#A1A1AA" }}>
            I AM Movement is committed to digital accessibility. If you experience any barrier,
            please{" "}
            <Link href="/contact" className="underline hover:text-white transition-colors">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
