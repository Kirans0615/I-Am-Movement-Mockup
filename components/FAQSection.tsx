"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "Do you offer private lessons?",
    a: "Yes! We offer private adaptive boxing and movement sessions tailored to your specific needs and goals. Contact us for scheduling and pricing — we'd love to chat!",
  },
  {
    q: "Can I volunteer? I want to help!",
    a: "Absolutely — we love community support. Reach out through the contact form or by phone. We'll find the right opportunity for you!",
  },
  {
    q: "I'm a personal trainer without a gym. Can I rent space from you?",
    a: "We may be able to accommodate space rental depending on availability. Contact us for details — we'd love to chat!",
  },
  {
    q: "What do you do in a Rock Steady Boxing class?",
    a: "A Rock Steady Boxing class includes non-contact boxing drills targeting gait, balance, hand/eye coordination, voice activation, and memory recall. We also incorporate Muay Thai techniques (elbows, knees, kicks) for variety and fall-recovery training. Every class is adapted to each member's current ability level.",
  },
];

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  // Controlled: only one FAQ open at a time
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [index]
    );
  };

  return (
    <section
      ref={ref}
      id="faq"
      aria-labelledby="faq-heading"
      className="py-24 lg:py-32 px-4 sm:px-6"
      style={{ background: "#141414" }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            id="faq-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              color: "#FFFFFF",
            }}
          >
            I AM: CURIOUS.
          </h2>
          <p className="mt-4 text-base" style={{ color: "#A1A1AA" }}>
            Frequently asked questions about I AM Movement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {FAQS.map((faq, i) => (
            <Accordion
              key={i}
              value={openItems.includes(i) ? [i] : []}
              onValueChange={() => toggle(i)}
              className="rounded-xl overflow-hidden"
              style={{
                background: "#0A0A0A",
                border: "1px solid rgba(255,255,255,0.06)",
              } as React.CSSProperties}
            >
              <AccordionItem value={i} className="border-none px-6">
                <AccordionTrigger
                  className="text-white font-semibold text-left py-5 hover:no-underline!"
                  style={{ fontSize: "20px" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="pb-5"
                  style={{ color: "#A1A1AA", fontSize: "18px", lineHeight: 1.7 }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
