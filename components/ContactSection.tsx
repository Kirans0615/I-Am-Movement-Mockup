"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const PROGRAM_OPTIONS = [
  "Boxing 4 All",
  "Rock Steady Boxing (Parkinson's)",
  "DanceAbility",
  "Private Sessions (Autism)",
  "Care Partner Support Group",
  "Free Seminars",
  "General Inquiry",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up form submission (e.g., Resend, Formspree, or server action)
    // TODO: Integrate hCaptcha for spam protection (privacy-respecting CAPTCHA)
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-white placeholder-zinc-500 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#F5A623]";
  const inputStyle = {
    background: "#0A0A0A",
    border: "1px solid rgba(255,255,255,0.12)",
    minHeight: "52px",
    fontSize: "18px",
  };
  const labelClass = "block text-sm font-semibold text-white mb-1.5";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 lg:py-32 px-4 sm:px-6"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "#E63B2E" }}
          >
            Get in Touch
          </span>
        </div>

        <h2
          id="contact-heading"
          className="mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 64px)",
            color: "#FFFFFF",
            lineHeight: 1.1,
          }}
        >
          I AM: READY.
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-10 text-center"
                style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}
                role="alert"
                aria-live="polite"
              >
                <div
                  className="text-5xl mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "#F5A623" }}
                  aria-hidden="true"
                >
                  ✦
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "#A1A1AA" }}>
                  Thank you for reaching out. We&apos;ll be in touch with you shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact I AM Movement"
                className="space-y-6"
              >
                {/* Name row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First Name <span aria-hidden="true" style={{ color: "#E63B2E" }}>*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      required
                      aria-required="true"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last Name <span aria-hidden="true" style={{ color: "#E63B2E" }}>*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      required
                      aria-required="true"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span aria-hidden="true" style={{ color: "#E63B2E" }}>*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    aria-required="true"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(949) 555-0100"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="program" className={labelClass}>
                    I&apos;m looking to learn more about...
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={form.program}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    aria-label="Select a program"
                  >
                    <option value="">Select a program...</option>
                    {PROGRAM_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about yourself or your loved one..."
                    className={inputClass}
                    style={{
                      ...inputStyle,
                      minHeight: "140px",
                      resize: "vertical",
                    }}
                  />
                </div>

                {/* CAPTCHA placeholder */}
                <p className="text-xs" style={{ color: "#A1A1AA" }}>
                  {/* TODO: Integrate hCaptcha or reCAPTCHA v3 before going live */}
                  CAPTCHA to be integrated to prevent spam submissions.
                </p>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
                  style={{ background: "#E63B2E", minHeight: "56px", fontSize: "18px" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Info column */}
          <div className="flex flex-col gap-8">
            {/* Info card */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3
                className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "24px" }}
              >
                Visit Us
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(230,59,46,0.12)" }}
                  >
                    <MapPin size={20} style={{ color: "#E63B2E" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-base">Location</p>
                    <p style={{ color: "#A1A1AA" }} className="text-sm">
                      Irvine, California
                      <br />
                      Also serving: Tustin, Costa Mesa, Newport Beach, South County
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(245,166,35,0.12)" }}
                  >
                    <Clock size={20} style={{ color: "#F5A623" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-base">Hours</p>
                    <p style={{ color: "#A1A1AA" }} className="text-sm">
                      Monday – Saturday: By Appointment
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(230,59,46,0.12)" }}
                  >
                    <Phone size={20} style={{ color: "#E63B2E" }} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-base">Call Us</p>
                    <p style={{ color: "#A1A1AA" }} className="text-sm">
                      Call us today to learn more and tour our new facility!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            {/* TODO: Replace src with actual Google Maps embed URL for I AM Movement */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                minHeight: "260px",
                background: "#141414",
              }}
            >
              <iframe
                title="I AM Movement location map — Irvine, California"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106574.9!2d-117.82&3d33.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdee0b32ba8a7%3A0xdf4d75348ea88474!2sIrvine%2C+CA!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="260"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing I AM Movement's location in Irvine, California"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
