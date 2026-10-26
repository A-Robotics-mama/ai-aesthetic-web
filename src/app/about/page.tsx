import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { IMAGES } from "@/site/media";
import { COPY } from "@/site/content";
import { CLINIC, COMPANY, TRADE_MARK } from "@/constants/company";

export const metadata: Metadata = {
  title: "About",
  description:
    "AI Aesthetic Club is a members' club at Dream Tower in Limassol: diagnostics first, then a protocol, then a measured result.",
  alternates: { canonical: "/about" },
};

/**
 * Who the club is, in the order a stranger would ask: what it believes, how it
 * works, where it is, and who is behind it legally.
 */
export default function AboutPage() {
  const copy = COPY.en;

  return (
    <PageShell
      eyebrow={copy.place.eyebrow}
      title={`About ${CLINIC.name}`}
      lede={copy.manifesto.text}
    >
      <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <h2 className="display text-[clamp(1.7rem,1.3rem+1.4vw,2.4rem)]" data-reveal>
            {copy.method.title}
          </h2>

          <ol className="mt-8 space-y-8">
            {copy.method.steps.map((step, index) => (
              <li
                key={step.id}
                className="border-t border-gold/15 pt-6"
                data-reveal
                style={{ ["--delay" as string]: `${index * 70}ms` }}
              >
                <p className="label text-[0.62rem] tracking-[0.3em] text-gold">
                  {String(index + 1).padStart(2, "0")} · {step.meta}
                </p>
                <h3 className="display mt-3 text-xl">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-bone/60">{step.text}</p>
              </li>
            ))}
          </ol>

          <h2 className="display mt-16 text-[clamp(1.7rem,1.3rem+1.4vw,2.4rem)]" data-reveal>
            {copy.place.title}
          </h2>

          <div className="mt-6 space-y-5">
            {copy.place.paras.map((para) => (
              <p key={para.slice(0, 20)} className="lede" data-reveal>
                {para}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl bg-gold/15 sm:grid-cols-2">
            {copy.place.facts.map((fact) => (
              <div key={fact.k} className="bg-ink p-5" data-reveal>
                <dt className="label text-[0.58rem] tracking-[0.24em] text-gold uppercase">
                  {fact.k}
                </dt>
                <dd className="mt-2 text-[0.95rem] leading-6 text-bone/75">{fact.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid gap-4 self-start">
          {["place-lounge", "place-tower", "accent-golden"].map((id, index) => (
            <img
              key={id}
              src={IMAGES[id]}
              alt=""
              aria-hidden
              loading="lazy"
              className="w-full rounded-2xl border border-gold/15 object-cover"
              data-reveal
              style={{ ["--delay" as string]: `${index * 90}ms` }}
            />
          ))}
        </div>
      </div>

      <section className="mt-20 border-t border-gold/15 pt-10" data-reveal>
        <h2 className="eyebrow">Who operates the club</h2>

        <p className="mt-5 max-w-3xl text-[0.95rem] leading-8 text-bone/65">
          {CLINIC.name} is operated by {COMPANY.legalName}, a company registered in{" "}
          {COMPANY.jurisdiction} under number {COMPANY.registrationNumber}. The name is a trade
          mark registered with the {TRADE_MARK.registry} under number {TRADE_MARK.number}.
        </p>

        <Link href="/contact" className="btn btn-line mt-10">
          Contact the club
        </Link>
      </section>
    </PageShell>
  );
}
