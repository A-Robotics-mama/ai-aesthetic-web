import { IMAGES, INSTAGRAM, STRIP } from "@/site/media";
import type { Copy } from "@/site/content";

/**
 * A strip of the club's recent work, linking back to the account it comes from.
 *
 * These are the club's own photographs; the strip exists so that the page shows
 * the room as it was last week rather than as it was when the site was built.
 */
export default function Lately({ copy }: { copy: Copy }) {
  return (
    <section className="border-b border-gold/15 py-20 lg:py-24">
      <div className="shell flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow" data-reveal>
            {copy.social.eyebrow}
          </p>
          <h2
            className="display mt-5 text-[clamp(1.8rem,1.3rem+1.8vw,2.6rem)]"
            data-reveal
            style={{ ["--delay" as string]: "80ms" }}
          >
            {copy.social.title}
          </h2>
        </div>

        <a
          href={INSTAGRAM.url}
          target="_blank"
          rel="noreferrer"
          className="label text-[0.64rem] tracking-[0.24em] text-gold uppercase transition-colors hover:text-gold-soft"
          data-reveal
        >
          {copy.social.cta} ↗
        </a>
      </div>

      <div className="shell mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {STRIP.map((id, index) => (
          <a
            key={id}
            href={INSTAGRAM.url}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-lg border border-gold/15"
            data-reveal
            style={{ ["--delay" as string]: `${index * 70}ms` }}
          >
            <img
              src={IMAGES[id]}
              alt={INSTAGRAM.handle}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/35" />
          </a>
        ))}
      </div>
    </section>
  );
}
