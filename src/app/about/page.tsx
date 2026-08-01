import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { CLINIC, COMPANY } from "@/constants/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Aesthetic Club is an aesthetic medicine clinic at Dream Tower in Limassol, combining medical expertise, advanced technologies and personalized patient care.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090909] text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-16 lg:px-10 lg:py-24">
        <header className="max-w-3xl">
          <p className="text-sm tracking-[0.22em] text-[#c8a45d] uppercase">
            About
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            About {CLINIC.name}
          </h1>
        </header>

        <div className="mt-12 max-w-3xl space-y-8 text-lg leading-8 text-white/60">
          <p>
            {CLINIC.name} is a premium aesthetic medicine clinic focused on
            combining medical expertise, advanced technologies and personalized
            patient care.
          </p>

          <p>
            Every treatment begins with consultation, assessment and an
            individualized plan designed around each patient&rsquo;s anatomy,
            skin condition and long-term aesthetic goals.
          </p>

          <p>
            Our philosophy is based on natural results, evidence-based medicine
            and continuous investment in innovative technologies that improve
            safety, precision and patient experience.
          </p>

          <p>
            Located in {CLINIC.address.lines[0]}, {CLINIC.address.city},{" "}
            {CLINIC.name} provides facial aesthetics, skin rejuvenation, body
            treatments and longevity programmes in a modern clinical
            environment.
          </p>

          <p className="text-base text-white/45">
            The clinic is operated by {COMPANY.legalName}, a company registered
            in the {COMPANY.jurisdiction} under number{" "}
            {COMPANY.registrationNumber}.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
