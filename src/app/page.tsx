import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { CLINIC, CONTACTS } from "@/constants/company";

const services = [
  {
    title: "Medical Aesthetics",
    description:
      "Personalized treatment plans focused on skin quality, facial harmony and natural-looking results.",
  },
  {
    title: "Advanced Cosmetology",
    description:
      "Professional facial protocols combining clinical expertise, premium skincare and modern technologies.",
  },
  {
    title: "Body Treatments",
    description:
      "Non-invasive technologies for body contouring, tissue quality, recovery and wellbeing.",
  },
  {
    title: "Longevity & Wellness",
    description:
      "Evidence-informed programmes designed to support energy, recovery, healthy ageing and quality of life.",
  },
];

const technologies = [
  "INDIBA Deep Beauty",
  "IPL by Formatk Systems",
  "Advanced laser platforms",
  "Professional skin diagnostics",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090909] text-white">
      <SiteHeader />

      <main className="flex-1">
        <section className="mx-auto flex max-w-7xl flex-col px-6 lg:px-10">
          <div className="flex flex-1 items-center py-24 lg:py-32">
            <div>
              <p className="mb-6 text-sm font-medium tracking-[0.24em] text-[#c8a45d] uppercase">
                Advanced aesthetic medicine in {CLINIC.address.city}
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Intelligence,
                <br />
                technology and beauty.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
                A premium aesthetic clinic combining medical expertise,
                intelligent diagnostics and advanced technologies to create
                personalized treatments with natural, refined results.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#c8a45d] px-8 py-4 text-center font-medium text-black transition hover:bg-[#d8b96e]"
                >
                  Book a consultation
                </Link>

                <a
                  href="#services"
                  className="rounded-full border border-white/15 px-8 py-4 text-center font-medium transition hover:border-white/35 hover:bg-white/5"
                >
                  Explore treatments
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-5 border-t border-white/10 py-7 text-sm text-white/45 sm:grid-cols-3">
            <p>Medical expertise</p>
            <p>Advanced aesthetic technologies</p>
            <p>Personalized treatment programmes</p>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-10 border-y border-white/10 bg-[#101010] px-6 py-24 lg:px-10"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm tracking-[0.22em] text-[#c8a45d] uppercase">
                Our philosophy
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Aesthetic medicine built around the individual.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-white/60">
              <p>
                {CLINIC.name} approaches beauty as a combination of medical
                knowledge, precise assessment and respect for individual
                characteristics.
              </p>

              <p>
                Every programme begins with consultation and diagnostics. Our
                specialists select technologies and protocols according to the
                client&rsquo;s goals, condition and long-term treatment
                strategy.
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-10"
        >
          <p className="text-sm tracking-[0.22em] text-[#c8a45d] uppercase">
            Treatments
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Comprehensive care for face, skin and body.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-2xl border border-white/10 bg-[#101010] p-8 transition hover:border-[#c8a45d]/45"
              >
                <p className="text-sm text-[#c8a45d]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-8 text-2xl font-semibold">{service.title}</h3>

                <p className="mt-4 max-w-xl leading-7 text-white/55">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm leading-7 text-white/40">
            The descriptions above are general information about the treatments
            offered and are not medical advice. Whether a treatment is right for
            you is decided at a consultation.
          </p>
        </section>

        <section
          id="technology"
          className="scroll-mt-10 border-y border-white/10 bg-[#101010] px-6 py-24 lg:px-10"
        >
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm tracking-[0.22em] text-[#c8a45d] uppercase">
                Technology
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Technology selected for clinical value.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                Our equipment is selected to support precise, controlled and
                personalized treatment protocols rather than one-size-fits-all
                procedures.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="flex items-center justify-between py-6"
                >
                  <span className="text-lg">{technology}</span>
                  <span aria-hidden className="text-[#c8a45d]">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl scroll-mt-10 px-6 py-24 lg:px-10"
        >
          <div className="rounded-3xl border border-[#c8a45d]/30 bg-[#c8a45d]/10 px-7 py-14 sm:px-12 lg:px-16">
            <p className="text-sm tracking-[0.22em] text-[#d9bd7b] uppercase">
              Consultation
            </p>

            <div className="mt-5 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  Begin with a personalized consultation.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                  Visit {CLINIC.name} at {CLINIC.address.lines[0]} in{" "}
                  {CLINIC.address.city} and discover a treatment programme
                  designed around your individual goals.
                </p>
              </div>

              <a
                href={`mailto:${CONTACTS.clinic.email}`}
                className="shrink-0 rounded-full bg-[#c8a45d] px-8 py-4 text-center font-medium text-black transition hover:bg-[#d8b96e]"
              >
                Contact the clinic
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
