import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { CLINIC, COMPANY, CONTACTS } from "@/constants/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "How to reach AI Aesthetic Club in Limassol: the clinic, appointments, data protection enquiries and the company's registered details.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [CONTACTS.clinic, CONTACTS.privacy] as const;

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090909] text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-16 lg:px-10 lg:py-24">
        <header className="max-w-3xl">
          <p className="text-sm tracking-[0.22em] text-[#c8a45d] uppercase">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Talk to the clinic.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/60">
            We are glad to answer your questions and help you choose the
            treatment programme that fits. Every message reaches a person at the
            clinic.
          </p>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CHANNELS.map((channel) => (
            <section
              key={channel.email}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h2 className="text-xl font-semibold">{channel.label}</h2>

              <p className="mt-3 leading-7 text-white/55">{channel.purpose}</p>

              <a
                href={`mailto:${channel.email}`}
                className="mt-6 inline-block text-lg text-[#c8a45d] underline-offset-4 transition hover:underline"
              >
                {channel.email}
              </a>

              <p className="mt-3 text-sm text-white/40">
                Typical response: {channel.responseTime}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-semibold">Visit the clinic</h2>

            <address className="mt-4 space-y-1 leading-8 text-white/60 not-italic">
              <p className="text-white/90">{CLINIC.name}</p>
              {CLINIC.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                {CLINIC.address.city}, {CLINIC.address.country}
              </p>
            </address>

            <p className="mt-5 text-sm leading-7 text-white/45">
              Consultations and treatments by appointment. Please write to us to
              arrange a time.
            </p>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-xl font-semibold">Company details</h2>

            <dl className="mt-4 space-y-3 text-sm leading-7 text-white/60">
              <div>
                <dt className="text-white/40">Legal entity</dt>
                <dd className="text-white/85">{COMPANY.legalName}</dd>
              </div>

              <div>
                <dt className="text-white/40">Registration number</dt>
                <dd>{COMPANY.registrationNumber}</dd>
              </div>

              <div>
                <dt className="text-white/40">VAT</dt>
                <dd>{COMPANY.vatNumber}</dd>
              </div>

              <div>
                <dt className="text-white/40">
                  Registered office — for formal notices
                </dt>
                <dd>
                  {COMPANY.registeredOffice.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">
                    {COMPANY.registeredOffice.country}
                  </span>
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-sm leading-7 text-white/45">
              The registered office is an administrative address and is not the
              clinic. Treatments take place at the address on the left.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
