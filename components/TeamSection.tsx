"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const TEAM = [
  {
    name: 'Timorei "Timi" Spaulding',
    title: "Co-Founder & Head Coach",
    // TODO: Replace with actual photo provided by client
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    imgAlt: "Timorei Timi Spaulding, Co-Founder and Head Coach at I AM Movement",
    certifications: [
      "Rock Steady Boxing Coach",
      "DanceAbility Instructor",
      "First Aid / CPR / AED (American Red Cross)",
    ],
    bio: "Timi has a lifelong passion for movement as both exercise and art. She holds a BS in Dance and Business Administration from SF State and the University of Oregon. She earned her DanceAbility certification directly under founder Alito Alessi in 2016 and is currently completing her comprehensive Pilates certification.",
    funFact: "Loves Mexican food and collecting passport stamps.",
  },
  {
    name: 'Donnella "Nel" Andraos',
    title: "Co-Founder & Rock Steady Coach",
    // TODO: Replace with actual photo provided by client
    img: "https://randomuser.me/api/portraits/women/55.jpg",
    imgAlt: "Donnella Nel Andraos, Co-Founder and Rock Steady Coach at I AM Movement",
    certifications: [
      "Rock Steady Boxing Coach",
      "Group Fitness Instructor (ACE)",
      "First Aid / CPR / AED (American Red Cross)",
    ],
    bio: "Nel is a triple-negative breast cancer survivor who discovered kickboxing as a tool to fight chemo-brain and neuropathy. Now actively training Muay Thai, she brings lived experience and fierce empathy to every session. Nel also volunteers with the American Cancer Society's Reach to Recovery program.",
    funFact: "Her power combo: a maple bar and a Diet Coke.",
  },
];

export default function TeamSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="team"
      aria-labelledby="team-heading"
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
            style={{ color: "#E63B2E" }}
          >
            The People Behind the Mission
          </span>
        </motion.div>

        <motion.h2
          id="team-heading"
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
          I AM: INSPIRED.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderTopWidth: "3px",
                borderTopColor: "#F5A623",
              }}
              aria-labelledby={`team-member-${i}`}
            >
              {/* Photo */}
              <div className="relative w-full h-64 bg-zinc-900">
                <Image
                  src={member.img}
                  alt={member.imgAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-8">
                <h3
                  id={`team-member-${i}`}
                  className="text-white mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(22px, 2vw, 28px)",
                  }}
                >
                  {member.name}
                </h3>
                <p className="text-sm font-semibold mb-5" style={{ color: "#E63B2E" }}>
                  {member.title}
                </p>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2 mb-6" aria-label="Certifications">
                  {member.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-2.5 py-1 rounded-full text-xs font-medium text-white"
                      style={{ background: "rgba(230,59,46,0.15)", border: "1px solid rgba(230,59,46,0.3)" }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "#A1A1AA" }}>
                  {member.bio}
                </p>

                <div
                  className="flex items-start gap-2 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-sm" style={{ color: "#F5A623" }}>⚡</span>
                  <p className="text-sm italic" style={{ color: "#A1A1AA" }}>
                    Fun fact: {member.funFact}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Add team member ghost card */}
          {/* TODO: Add new team member bio when provided by client */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="rounded-2xl flex flex-col items-center justify-center p-10 min-h-80 text-center"
            style={{
              border: "2px dashed rgba(255,255,255,0.12)",
              background: "transparent",
            }}
            aria-label="Placeholder for new team member"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl"
              style={{ background: "rgba(255,255,255,0.04)" }}
              aria-hidden="true"
            >
              +
            </div>
            <p className="font-bold text-white mb-2">Add New Team Member</p>
            <p className="text-sm" style={{ color: "#A1A1AA" }}>
              Bio coming soon. Contact us to learn about our growing team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
