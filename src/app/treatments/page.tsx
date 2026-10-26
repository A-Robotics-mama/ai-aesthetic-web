import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { IMAGES } from "@/site/media";
import { COPY } from "@/site/content";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Face and skin, body and contour, injectables, laser and light, longevity, rituals — the six directions a programme at AI Aesthetic Club is built from.",
  alternates: { canonical: "/treatments" },
};

/**
 * The same six directions as on the home page, read as a page.
 *
 * Both come from `content.ts`: a second list here would be a second version of
 * the truth, and the one nobody remembers to update is always the one a visitor
 * lands on.
 */
export default function TreatmentsPage() {
  const copy = COPY.en;

  return (
    <PageShell
      eyebrow={copy.programmes.eyebrow}
      title={copy.programmes.title}
      lede={copy.programmes.lede}
    >
      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {copy.programmes.items.map((item, index) => (
          <article key={item.id} data-reveal style={{ ["--delay" as string]: `${index * 80}ms` }}>
            <div className="overflow-hidden rounded-2xl border border-gold/15">
              <img
                src={IMAGES[item.id]}
                alt=""
                aria-hidden
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <h2 className="display mt-6 text-2xl">{item.title}</h2>

            {item.meta && (
              <p className="label mt-2 text-[0.6rem] tracking-[0.2em] text-gold uppercase">
                {item.meta}
              </p>
            )}

            <p className="mt-4 text-[0.95rem] leading-7 text-bone/60">{item.text}</p>
          </article>
        ))}
      </div>

      <p className="mt-14 max-w-3xl text-xs leading-6 text-sand/70">{copy.programmes.note}</p>

      <Link href="/#contact" className="btn btn-gold mt-10">
        {copy.contact.cta}
      </Link>
    </PageShell>
  );
}
