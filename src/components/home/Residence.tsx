import { CONTACTS } from "@/constants/company";
import { IMAGES } from "@/site/media";
import type { Copy } from "@/site/content";

/**
 * The club outside its own four walls.
 *
 * Борис, 26.10.2026: «общая идея в том, что мы планируем коллаборацию со спа и
 * предложили им сделать общими усилиями аналог» — поэтому на странице есть
 * раздел, который читает не клиент, а партнёр: что именно клуб приносит в чужой
 * спа и в каком виде.
 *
 * It names no partner. Nothing is signed, and a page that implies otherwise
 * would be the fastest way to lose the conversation it is meant to open.
 */
export default function Residence({ copy }: { copy: Copy }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-gold/15">
      <img
        src={IMAGES["place-terrace"]}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,7,6,0.88) 0%, rgba(8,7,6,0.55) 42%, rgba(8,7,6,0.93) 100%)",
        }}
      />

      <div className="shell py-28 lg:py-40">
        <p className="eyebrow" data-reveal>
          {copy.residence.eyebrow}
        </p>

        <h2
          className="display display-xl mt-6 max-w-[16ch] text-[clamp(2.3rem,1.5rem+3vw,4.4rem)]"
          data-reveal
          style={{ ["--delay" as string]: "80ms" }}
        >
          {copy.residence.title}
        </h2>

        <div className="mt-9 grid gap-7 lg:grid-cols-2 lg:gap-16">
          {copy.residence.paras.map((para, index) => (
            <p
              key={para.slice(0, 24)}
              className="lede"
              data-reveal
              style={{ ["--delay" as string]: `${140 + index * 90}ms` }}
            >
              {para}
            </p>
          ))}
        </div>

        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {copy.residence.points.map((point, index) => (
            <li
              key={point.id}
              className="border-t border-gold/30 pt-6"
              data-reveal
              style={{ ["--delay" as string]: `${index * 100}ms` }}
            >
              <h3 className="display text-xl">{point.title}</h3>
              <p className="mt-3 text-[0.92rem] leading-7 text-bone/60">{point.text}</p>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${CONTACTS.clinic.email}?subject=${encodeURIComponent(
            copy.residence.subject,
          )}`}
          className="btn btn-gold mt-14"
          data-reveal
        >
          {copy.residence.cta}
        </a>
      </div>
    </section>
  );
}
