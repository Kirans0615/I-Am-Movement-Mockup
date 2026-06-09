"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Heart, Shield } from "lucide-react";

const PILLARS = [
  {
    icon: Zap,
    heading: "Empowering",
    body: "Our vision is to use fitness as an enabler, empowering our members through all-inclusive exercise and dance.",
  },
  {
    icon: Heart,
    heading: "Nurturing",
    body: "We supply qualified, nurturing coaches and instructors to teach the right moves in a clean, safe, welcoming environment.",
  },
  {
    icon: Shield,
    heading: "Strengthening",
    body: "We don't coddle our members. Whether the diagnosis is Parkinson's, aging, or an impairment — I AM Movement is for people who want to fight back.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const anim = (delay: number) =>
    inView
      ? { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } }
      : { initial: { opacity: 0, y: 40 } };

  return (
    <section
      ref={ref}
      id="about"
      aria-labelledby="about-heading"
      className="py-24 lg:py-32 px-4 sm:px-6"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div {...anim(0)} className="mb-4">
          <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#E63B2E" }}>
            Who We Are
          </span>
        </motion.div>

        <motion.h2
          id="about-heading"
          {...anim(0.1)}
          className="mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          I AM: DETERMINED.
        </motion.h2>

        {/* Three pillar cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.heading}
                {...anim(0.15 + i * 0.12)}
                className="p-8 rounded-2xl"
                style={{
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderLeftWidth: "4px",
                  borderLeftColor: "#E63B2E",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(245,166,35,0.12)" }}
                >
                  <Icon size={24} style={{ color: "#F5A623" }} aria-hidden="true" />
                </div>
                <h3
                  className="font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)", fontSize: "24px" }}
                >
                  {pillar.heading}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "#A1A1AA" }}>
                  {pillar.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Full-width pull quote */}
        <motion.blockquote
          {...anim(0.5)}
          className="relative px-8 lg:px-16 py-12 lg:py-16 rounded-2xl overflow-hidden"
          style={{ background: "#E63B2E" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, #fff 0px, transparent 1px, transparent 40px, #fff 41px)",
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p
              className="text-white font-medium leading-relaxed"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
            >
              &ldquo;Whether the diagnosis is Parkinson&apos;s, aging, or an impairment — I AM
              Movement is for people who embrace an active lifestyle, want to fight back, and have
              fun doing it.&rdquo;
            </p>
          </div>
        </motion.blockquote>
      </div>
    </section>
  );
}
