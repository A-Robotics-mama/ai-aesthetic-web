import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { CLINIC, COMPANY } from "@/constants/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Aesthetic Club is a members' club at Dream Tower in Limassol, combining experience, advanced technologies and personal care.",
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
            {CLINIC.name} is a premium aesthetic club focused on
            combining experience, advanced technologies and personal
            care.
          </p>

          <p>
            Every programme begins with a conversation, an assessment and a
            plan designed around each member&rsquo;s own features,
            skin condition and long-term aesthetic goals.
          </p>

          <p>
            Our philosophy is based on natural results, evidence
            and continuous investment in innovative technologies that improve
            safety, precision and the member&rsquo;s experience.
          </p>

          <p>
            Located in {CLINIC.address.lines[0]}, {CLINIC.address.city},{" "}
            {CLINIC.name} offers facial aesthetics, skin rejuvenation, body
            programmes and longevity programmes in a modern
            environment.
          </p>

          <p className="text-base text-white/45">
            The club is operated by {COMPANY.legalName}, a company registered
            in the {COMPANY.jurisdiction} under number{" "}
            {COMPANY.registrationNumber}.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
