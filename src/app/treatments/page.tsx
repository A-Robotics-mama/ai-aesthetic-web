import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Injectable aesthetics, skin rejuvenation, acne and rosacea programmes, body contouring and longevity care at AI Aesthetic Club in Limassol.",
  alternates: { canonical: "/treatments" },
};

const treatments = [
  {
    title: "Injectable Aesthetics",
    description:
      "Botulinum toxin, dermal fillers, collagen stimulators and regenerative treatments tailored to natural facial harmony.",
  },
  {
    title: "Skin Rejuvenation",
    description:
      "IPL, laser procedures, professional peels and advanced skin restoration protocols.",
  },
  {
    title: "Acne & Rosacea",
    description:
      "Comprehensive treatment programmes combining clinical skincare, IPL technology and medical supervision.",
  },
  {
    title: "Body Contouring",
    description:
      "Non-invasive procedures designed to improve body shape, skin quality and tissue firmness.",
  },
  {
    title: "Longevity",
    description:
      "Modern preventive medicine focused on healthy ageing, recovery and long-term wellbeing.",
  },
  {
    title: "Professional Skincare",
    description:
      "Medical-grade skincare programmes for daily home care and in-clinic maintenance.",
  },
];

export default function TreatmentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090909] text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-16 lg:px-10 lg:py-24">
        <h1 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Treatments
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60">
          Every treatment programme is individually designed after consultation
          and clinical assessment. The descriptions below are general
          information, not medical advice.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#101010] p-8"
            >
              <h2 className="text-2xl font-semibold">{item.title}</h2>

              <p className="mt-5 leading-7 text-white/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}