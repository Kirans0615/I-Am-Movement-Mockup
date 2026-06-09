"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// TODO: Connect to Google Business reviews API to pull live reviews
const TESTIMONIALS = [
  {
    name: "Milt R.",
    body: "Rock Steady Boxing has changed my life. My balance is better than it's been in years.",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Sandra K.",
    body: "The coaches are incredible — patient, encouraging, and genuinely care about every member.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "James T.",
    body: "My husband has Parkinson's and this program gives him purpose and joy every single week.",
    img: "https://randomuser.me/api/portraits/men/80.jpg",
  },
  {
    name: "Patricia L.",
    body: "I started DanceAbility not knowing what to expect. Now I can't imagine life without it.",
    img: "https://randomuser.me/api/portraits/women/70.jpg",
  },
  {
    name: "Robert M.",
    body: "The care partner support group is a lifeline. I don't feel alone in this journey anymore.",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Diane W.",
    body: "My son has autism and the private sessions are tailored perfectly to what he needs.",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
  },
];

function TestimonialCard({ t, delay }: { t: typeof TESTIMONIALS[0]; delay: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="rounded-2xl p-8 flex flex-col gap-4"
      style={{
        background: "#141414",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      aria-label={`Testimonial from ${t.name}`}
    >
      {/* Stars */}
      <div className="flex gap-1" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: "#F5A623" }} aria-hidden="true">
            ★
          </span>
        ))}
      </div>

      <blockquote>
        <p className="text-base leading-relaxed text-white">&ldquo;{t.body}&rdquo;</p>
      </blockquote>

      <figcaption className="flex items-center gap-3 mt-auto pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
          <Image
            src={t.img}
            alt={`Photo of ${t.name}`}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>
        <span className="font-semibold text-white text-sm">{t.name}</span>
        <span className="text-xs ml-auto" style={{ color: "#A1A1AA" }}>
          I AM Movement Member
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 lg:py-32 px-4 sm:px-6"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="testimonials-heading"
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#FFFFFF",
            }}
          >
            What Our Family Says
          </h2>
          <p style={{ color: "#A1A1AA" }}>
            Real stories from real members — over 2 million lives impacted nationwide.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i * 0.08} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-base font-semibold transition-colors hover:underline"
            style={{ color: "#F5A623", minHeight: "44px" }}
            aria-label="Read all Google Business reviews for I AM Movement"
          >
            Read all reviews on our Google Business page →
          </Link>
        </div>
      </div>
    </section>
  );
}
