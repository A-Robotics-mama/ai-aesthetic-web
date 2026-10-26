import { CLINIC, CONTACTS } from "@/constants/company";
import { INSTAGRAM, MAP_URL } from "@/site/media";
import type { Copy } from "@/site/content";

/**
 * The close: one invitation, and the three facts needed to accept it.
 *
 * The club answers on e-mail and in Instagram direct, so those are the two
 * channels offered here. A telephone number is deliberately not printed: the
 * club's WhatsApp line is not in service yet, and a dead number on the contact
 * block is worse than none.
 */
export default function Contact({ copy }: { copy: Copy }) {
  return (
    <section id="contact" className="scroll-mt-24 py-24 lg:py-32">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/30 bg-ink-2 px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-28 -right-20 h-[26rem] w-[26rem] rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(200,164,93,0.3) 0%, rgba(200,164,93,0) 70%)",
            }}
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="eyebrow" data-reveal>
                {copy.contact.eyebrow}
              </p>

              <h2
                className="display mt-6 max-w-[14ch] text-[clamp(2.2rem,1.4rem+3vw,4rem)]"
                data-reveal
                style={{ ["--delay" as string]: "80ms" }}
              >
                {copy.contact.title}
              </h2>

              <p className="lede mt-7" data-reveal style={{ ["--delay" as string]: "150ms" }}>
                {copy.contact.lede}
              </p>

              <div
                className="mt-10 flex flex-col gap-3 sm:flex-row"
                data-reveal
                style={{ ["--delay" as string]: "220ms" }}
              >
                <a href={`mailto:${CONTACTS.clinic.email}`} className="btn btn-gold">
                  {copy.contact.cta}
                </a>
                <a
                  href={INSTAGRAM.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-line"
                >
                  {copy.contact.ctaAlt}
                </a>
              </div>
            </div>

            <dl className="space-y-8" data-reveal style={{ ["--delay" as string]: "260ms" }}>
              <div>
                <dt className="mono text-[0.58rem] tracking-[0.26em] text-gold uppercase">
                  {copy.contact.hoursLabel}
                </dt>
                <dd className="mt-3 text-[1.05rem] text-bone/85">{copy.contact.hours}</dd>
                <dd className="mono mt-1 text-[0.68rem] tracking-[0.14em] text-sand uppercase">
                  {copy.contact.closed}
                </dd>
              </div>

              <div>
                <dt className="mono text-[0.58rem] tracking-[0.26em] text-gold uppercase">
                  {copy.contact.addressLabel}
                </dt>
                <dd className="mt-3 text-[1.05rem] leading-7 text-bone/85">
                  <a href={MAP_URL} target="_blank" rel="noreferrer" className="hover:text-gold">
                    {CLINIC.address.lines.join(", ")}
                    <br />
                    {CLINIC.address.city}, {CLINIC.address.country}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="mono text-[0.58rem] tracking-[0.26em] text-gold uppercase">
                  {copy.contact.writeLabel}
                </dt>
                <dd className="mt-3 text-[1.05rem] text-bone/85">
                  <a href={`mailto:${CONTACTS.clinic.email}`} className="hover:text-gold">
                    {CONTACTS.clinic.email}
                  </a>
                </dd>
                <dd className="mt-1 text-[1.05rem] text-bone/85">
                  <a href={INSTAGRAM.url} target="_blank" rel="noreferrer" className="hover:text-gold">
                    {INSTAGRAM.handle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="mt-10 max-w-4xl text-xs leading-6 text-sand/70">{copy.disclaimer}</p>
      </div>
    </section>
  );
}
