import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "INDIBA Deep Beauty, IPL by Formatk Systems, laser platforms and professional skin diagnostics used at AI Aesthetic Club in Limassol.",
  alternates: { canonical: "/technologies" },
};

const technologies = [
  {
    title: "INDIBA Deep Beauty",
    subtitle: "Cellular regeneration",
    description:
      "Radiofrequency technology supporting tissue regeneration, skin quality, post-procedure recovery and facial as well as body treatments.",
  },
  {
    title: "IPL Formatk Systems",
    subtitle: "Israeli medical platform",
    description:
      "Advanced IPL technology for vascular lesions, pigmentation, skin rejuvenation and acne management using dedicated medical filters.",
  },
  {
    title: "Laser Technologies",
    subtitle: "Precision treatments",
    description:
      "Modern laser platforms selected according to skin type and clinical indication for safe and predictable results.",
  },
  {
    title: "Professional Skin Diagnostics",
    subtitle: "Personalized assessment",
    description:
      "Every treatment plan begins with detailed consultation and skin evaluation to create an individualized protocol.",
  },
];

export default function TechnologiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090909] text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-16 lg:px-10 lg:py-24">
        <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Technologies
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
          We invest in technologies that provide measurable clinical value,
          predictable outcomes and maximum patient safety. Equipment names
          belong to their respective manufacturers.
        </p>

        <div className="mt-16 space-y-6">
          {technologies.map((item) => (
            <section
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#101010] p-8 transition hover:border-[#c8a45d]/40"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-[#c8a45d]">
                {item.subtitle}
              </p>

              <h2 className="mt-3 text-3xl font-semibold">
                {item.title}
              </h2>

              <p className="mt-5 max-w-4xl leading-8 text-white/60">
                {item.description}
              </p>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}