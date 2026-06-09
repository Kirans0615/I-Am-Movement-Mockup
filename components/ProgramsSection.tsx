"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const PROGRAMS = [
  {
    name: "Rock Steady Boxing",
    href: "/programs/rock-steady",
    tag: "Parkinson's Program",
    tagColor: "#E63B2E",
    description:
      "Adaptive boxing for Parkinson's disease that targets gait, balance, finger dexterity, hand/eye coordination, voice activation, memory recall, multi-tasking, and posture. Includes Muay Thai moves for balance and variety. Members also learn how to fall safely and recover from a fall.",
    highlight: "Evidence-based non-contact boxing program",
  },
  {
    name: "Boxing 4 All",
    href: "/programs/boxing-4-all",
    tag: "All Abilities",
    tagColor: "#F5A623",
    description:
      "Open boxing program for adults of all abilities. Build strength, coordination, and confidence in a welcoming, energetic environment where everyone belongs.",
    highlight: "Open to all skill levels",
  },
  {
    name: "DanceAbility",
    href: "/programs/dance-ability",
    tag: "Inclusive Dance",
    tagColor: "#E63B2E",
    description:
      "Inclusive dance for people of all abilities, rooted in DanceAbility International pedagogy. Express yourself, build community, and discover the joy of movement — no experience necessary.",
    highlight: "DanceAbility International certified",
  },
  {
    name: "Private Sessions",
    href: "/programs/private-sessions",
    tag: "Autism Focus",
    tagColor: "#F5A623",
    description:
      "Adaptive boxing sessions tailored for individuals with autism, infused with activities care partners specify — building communication, decision-making, life skills, and confidence.",
    highlight: "Fully customized per member",
  },
  {
    name: "Care Partner Support Group",
    href: "/programs/support-group",
    tag: "Monthly Meetings",
    tagColor: "#E63B2E",
    description:
      "Monthly support group for people helping loved ones navigate Parkinson's or dementia. Find community, share resources, and know you are not alone in this journey.",
    highlight: "Free to attend",
  },
  {
    name: "Free Seminars",
    href: "/programs/seminars",
    tag: "Education",
    tagColor: "#F5A623",
    description:
      "Past topics include deep brain stimulation, hand/eye/body coordination, Ask a Neurologist, home safety, voice activation, acupuncture for Parkinson's, and more. Stay informed, stay empowered.",
    highlight: "No cost — open to community",
  },
];


export default function ProgramsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="programs"
      aria-labelledby="programs-heading"
      className="py-24 lg:py-32 px-4 sm:px-6"
      style={{ background: "#141414" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "#F5A623" }}
          >
            What We Offer
          </span>
        </motion.div>

        <motion.h2
          id="programs-heading"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          I AM: CAPABLE.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROGRAMS.map((program, i) => (
            <motion.article
              key={program.name}
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderTopWidth: "3px",
                borderTopColor: program.tagColor,
              }}
              aria-labelledby={`program-${i}-name`}
            >
              <div className="p-8 flex flex-col flex-1">
                {/* Tag */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4 self-start"
                  style={{ background: `${program.tagColor}20`, color: program.tagColor }}
                >
                  {program.tag}
                </span>

                <h3
                  id={`program-${i}-name`}
                  className="font-bold text-white mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                  }}
                >
                  {program.name}
                </h3>

                <p className="text-base leading-relaxed mb-6 flex-1" style={{ color: "#A1A1AA" }}>
                  {program.description}
                </p>

                <div
                  className="flex items-center justify-between pt-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-sm font-medium" style={{ color: "#F5A623" }}>
                    ✦ {program.highlight}
                  </span>
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all hover:opacity-90"
                    style={{ background: "#E63B2E", minHeight: "44px" }}
                    aria-label={`Learn more about ${program.name}`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
