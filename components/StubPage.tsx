import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface StubPageProps {
  headline: string; // e.g. "I AM: DETERMINED."
  subheading: string; // page name
  description?: string;
}

export default function StubPage({ headline, subheading, description }: StubPageProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">
        {/* Hero stub */}
        <section
          aria-labelledby="stub-heading"
          className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center pt-24 pb-16"
          style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0A0A0A 100%)" }}
        >
          <p
            className="text-sm font-bold tracking-widest uppercase mb-4"
            style={{ color: "#E63B2E" }}
          >
            {subheading}
          </p>
          <h1
            id="stub-heading"
            className="mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "#FFFFFF",
              lineHeight: 1.05,
            }}
          >
            {headline}
          </h1>
          {description && (
            <p className="text-lg max-w-xl mb-8" style={{ color: "#A1A1AA" }}>
              {description}
            </p>
          )}
          <div
            className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl"
            style={{
              background: "#141414",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="text-2xl" aria-hidden="true" style={{ color: "#F5A623" }}>
              ✦
            </span>
            <p className="font-semibold text-white">Content in Progress — Check Back Soon!</p>
          </div>
          <Link
            href="/"
            className="mt-8 text-sm font-semibold transition-colors hover:underline"
            style={{ color: "#F5A623", minHeight: "44px", display: "inline-flex", alignItems: "center" }}
          >
            ← Back to Home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
