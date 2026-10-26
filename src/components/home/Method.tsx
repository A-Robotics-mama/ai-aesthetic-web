import { IMAGES } from "@/site/media";
import type { Copy } from "@/site/content";

/**
 * The four steps, numbered, with the instrument named under each.
 *
 * The numbering is not ornament: the club's whole argument is that the order
 * matters, so the steps are a sequence and are allowed to look like one.
 */
export default function Method({ copy }: { copy: Copy }) {
  return (
    <section id="method" className="scroll-mt-24 border-b border-gold/15 py-24 lg:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="eyebrow" data-reveal>
              {copy.method.eyebrow}
            </p>
            <h2
              className="display mt-6 text-[clamp(2.1rem,1.4rem+2.6vw,3.6rem)]"
              data-reveal
              style={{ ["--delay" as string]: "80ms" }}
            >
              {copy.method.title}
            </h2>
          </div>

          <p className="lede" data-reveal style={{ ["--delay" as string]: "160ms" }}>
            {copy.method.lede}
          </p>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-gold/15 sm:grid-cols-2 lg:grid-cols-4">
          {copy.method.steps.map((step, index) => (
            <li
              key={step.id}
              className="group relative bg-ink p-7 transition-colors duration-500 hover:bg-ink-2 lg:p-8"
              data-reveal
              style={{ ["--delay" as string]: `${index * 110}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <span className="label text-[0.7rem] tracking-[0.3em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="text-gold/35 transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>

              <div className="mt-8 overflow-hidden rounded-xl">
                <img
                  src={IMAGES[step.id]}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  className="aspect-square w-full scale-[1.02] object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
              </div>

              <h3 className="display mt-7 text-2xl">{step.title}</h3>

              {step.meta && (
                <p className="label mt-2 text-[0.63rem] tracking-[0.2em] text-gold/80 uppercase">
                  {step.meta}
                </p>
              )}

              <p className="mt-4 text-[0.95rem] leading-7 text-bone/60">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
