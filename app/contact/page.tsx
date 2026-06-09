import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 pt-20">
        <div className="text-center py-16 px-4" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #0A0A0A 100%)" }}>
          <h1
            className="mb-2"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 80px)", color: "#FFFFFF" }}
          >
            I AM: READY.
          </h1>
          <p style={{ color: "#A1A1AA" }}>Reach out — we would love to meet you.</p>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
