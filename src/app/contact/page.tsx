import type { Metadata } from "next";
import Chrome from "@/components/chrome/Chrome";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { CLINIC, COMPANY, CONTACTS } from "@/constants/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "How to reach AI Aesthetic Club in Limassol: the club, appointments, data protection enquiries and the company's registered details.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [CONTACTS.clinic, CONTACTS.privacy] as const;

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Chrome intro={false} />
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 pt-32 pb-20 lg:px-10 lg:pt-40 lg:pb-28">
        <header className="max-w-3xl">
          <p className="eyebrow">
            Contact
          </p>

          <h1 className="mt-4 display text-[clamp(2.2rem,1.4rem+2.8vw,3.8rem)]">
            Talk to the club.
          </h1>

          <p className="mt-6 text-lg leading-8 text-bone/65">
            We are glad to answer your questions and help you choose the
            programme that fits. Every message reaches a person at the
            club.
          </p>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CHANNELS.map((channel) => (
            <section
              key={channel.email}
              className="rounded-2xl border border-gold/15 bg-ink-2 p-8"
            >
              <h2 className="display text-xl">{channel.label}</h2>

              <p className="mt-3 leading-7 text-bone/60">{channel.purpose}</p>

              <a
                href={`mailto:${channel.email}`}
                className="mt-6 inline-block text-lg text-gold underline-offset-4 transition hover:underline"
              >
                {channel.email}
              </a>

              <p className="mt-3 text-sm text-sand/80">
                Typical response: {channel.responseTime}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-gold/15 bg-ink-2 p-8">
            <h2 className="display text-xl">Visit the club</h2>

            <address className="mt-4 space-y-1 leading-8 text-bone/65 not-italic">
              <p className="text-bone/90">{CLINIC.name}</p>
              {CLINIC.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                {CLINIC.address.city}, {CLINIC.address.country}
              </p>
            </address>

            <p className="mt-5 text-sm leading-7 text-sand/90">
              Visits by appointment. Please write to us to
              arrange a time.
            </p>
          </section>

          <section className="rounded-2xl border border-gold/15 bg-ink-2 p-8">
            <h2 className="display text-xl">Company details</h2>

            <dl className="mt-4 space-y-3 text-sm leading-7 text-bone/65">
              <div>
                <dt className="text-sand/80">Legal entity</dt>
                <dd className="text-bone/85">{COMPANY.legalName}</dd>
              </div>

              <div>
                <dt className="text-sand/80">Registration number</dt>
                <dd>{COMPANY.registrationNumber}</dd>
              </div>

              <div>
                <dt className="text-sand/80">VAT</dt>
                <dd>{COMPANY.vatNumber}</dd>
              </div>

              <div>
                <dt className="text-sand/80">
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

            <p className="mt-5 text-sm leading-7 text-sand/90">
              The registered office is an administrative address and is not the
              club. Visits take place at the address on the left.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
