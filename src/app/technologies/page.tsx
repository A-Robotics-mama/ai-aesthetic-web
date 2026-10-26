import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { PARK } from "@/site/media";
import { COPY } from "@/site/content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The equipment park at AI Aesthetic Club in Limassol: ISEMECO 3D D9, Visbody, INDIBA, icoone, Lumenis Stellar M22, LightSheer Quattro, CryoSkin.",
  alternates: { canonical: "/technologies" },
};

/**
 * The park in full, with what each platform is for.
 *
 * The list is the club's own equipment register, so this page can be checked
 * against the machines standing in the rooms — which is the point of printing
 * it at all.
 */
export default function TechnologiesPage() {
  const copy = COPY.en;

  return (
    <PageShell
      eyebrow={copy.technology.eyebrow}
      title={copy.technology.title}
      lede={copy.technology.lede}
    >
      <ul className="mt-16 border-t border-gold/15">
        {copy.technology.items.map((item, index) => (
          <li
            key={item.id}
            className="grid gap-4 border-b border-gold/15 py-8 lg:grid-cols-[auto_minmax(0,18rem)_minmax(0,1fr)] lg:gap-10"
            data-reveal
            style={{ ["--delay" as string]: `${index * 60}ms` }}
          >
            <span className="mono text-[0.62rem] text-gold/60">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h2 className="display text-[1.6rem]">{item.title}</h2>
              <p className="mono mt-2 text-[0.58rem] tracking-[0.2em] text-sand uppercase">
                {item.meta}
              </p>
            </div>

            <p className="text-[0.98rem] leading-7 text-bone/65">{item.text}</p>
          </li>
        ))}
      </ul>

      <h2 className="eyebrow mt-16">{copy.marqueeNote}</h2>

      <p className="mono mt-5 max-w-4xl text-[0.78rem] leading-8 tracking-[0.14em] text-sand uppercase">
        {PARK.join(" · ")}
      </p>

      <Link href="/#contact" className="btn btn-gold mt-12">
        {copy.contact.cta}
      </Link>
    </PageShell>
  );
}
