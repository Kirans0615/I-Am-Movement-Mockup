"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion — skip GSAP if motion is reduced
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let gsapModule: typeof import("gsap") | null = null;

    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      gsapModule = { gsap } as any;

      if (!heroRef.current || !textRef.current) return;

      // Cinematic entrance
      gsap.fromTo(
        textRef.current.querySelectorAll(".gsap-word"),
        { opacity: 0, y: 60, skewY: 4 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.3,
        }
      );

      // Parallax on scroll
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -80,
        ease: "none",
      });
    };

    initGSAP();

    return () => {
      // Cleanup ScrollTrigger on unmount
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  return (
    <section
      ref={heroRef}
      aria-label="Hero — I AM Unstoppable"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #0D1B2A 0%, #0A0A0A 60%, #1a0a0a 100%)",
      }}
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #E63B2E 0px, transparent 1px, transparent 60px, #E63B2E 61px)",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "#E63B2E" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: "#F5A623" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — headline */}
          <div ref={textRef}>
            {/* Floating badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span
                className="gsap-word flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold text-black"
                style={{ background: "#F5A623" }}
              >
                <Zap size={14} aria-hidden="true" />
                Rock Steady Boxing Certified
              </span>
              <span
                className="gsap-word flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold text-white"
                style={{ border: "1px solid #F5A623", color: "#F5A623" }}
              >
                <Zap size={14} aria-hidden="true" />
                DanceAbility Certified
              </span>
            </div>

            {/* Tagline */}
            <div className="mb-4 overflow-hidden">
              <p
                className="gsap-word text-[#E63B2E] text-xl font-bold tracking-widest uppercase"
              >
                I AM...
              </p>
            </div>

            <h1
              className="gsap-word leading-none mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(64px, 10vw, 120px)",
                color: "#FFFFFF",
                letterSpacing: "0.02em",
              }}
            >
              UNSTOPPABLE.
            </h1>

            <p
              className="gsap-word text-lg lg:text-xl mb-10 max-w-xl leading-relaxed"
              style={{ color: "#A1A1AA" }}
            >
              I AM Movement is Orange County&apos;s ultimate fitness enabler. We challenge people
              with and without disabilities through creative movement, adaptive boxing, and dance —
              because everyone deserves to fight back and have fun doing it.
            </p>

            <div className="gsap-word flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: "#E63B2E", minHeight: "54px", boxShadow: "0 0 0 0 #E63B2E" }}
              >
                Join the Movement
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:bg-white/10"
                style={{ border: "2px solid rgba(255,255,255,0.3)", minHeight: "54px" }}
              >
                Tour Our Facility
              </Link>
            </div>
          </div>

          {/* Right — stats card */}
          <div
            className="gsap-word rounded-2xl p-8 lg:p-10"
            style={{
              background: "linear-gradient(135deg, #0D1B2A 0%, #0A0A0A 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2
              className="mb-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#FFFFFF",
              }}
            >
              Be Your Own Hero.
            </h2>
            <p className="mb-10 text-base" style={{ color: "#A1A1AA" }}>
              Empowering Orange County since 2017.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: "300+", label: "Members Served", color: "#E63B2E" },
                { value: "7+", label: "Years Empowering OC", color: "#F5A623" },
                { value: "4", label: "Cities Served", color: "#E63B2E" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-5xl lg:text-6xl leading-none mb-2"
                    style={{ fontFamily: "var(--font-display)", color: stat.color }}
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#A1A1AA" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Cities */}
            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-sm font-semibold text-white mb-3">Serving:</p>
              <div className="flex flex-wrap gap-2">
                {["Irvine", "Tustin", "Costa Mesa", "Newport Beach"].map((city) => (
                  <span
                    key={city}
                    className="px-3 py-1 rounded-full text-sm text-white"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
        style={{ color: "#A1A1AA" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.2)" }} />
      </div>
    </section>
  );
}
