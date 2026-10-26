import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import { DEVICE_SHOTS, PARK } from "@/site/media";
import { COPY } from "@/site/content";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The equipment park at AI Aesthetic Club in Limassol: ISEMECO 3D D9, Visbody, INDIBA ONA, Elite NS and Reverso, icoone Laser Med, LightSheer QUATTRO, Stellar M22 with IPL and ResurFX, CryoSkin, VIP Hi-Line, Oxygenium.",
  alternates: { canonical: "/technologies" },
};

/**
 * The park in full, with what each platform is for.
 *
 * The list is the club's own equipment register, so this page can be checked
 * against the machines standing in the rooms — which is the point of printing
 * it at all. The home page shows the same twelve as a slideshow; here they are
 * laid out flat, because a register is read, not watched.
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
        {copy.technology.devices.map((device, index) => (
          <li
            key={device.id}
            className="grid gap-6 border-b border-gold/15 py-10 lg:grid-cols-[auto_minmax(0,16rem)_minmax(0,1fr)] lg:gap-10"
            data-reveal
            style={{ ["--delay" as string]: `${index * 60}ms` }}
          >
            <span className="label text-[0.62rem] text-gold/60">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <p className="eyebrow">{device.brand}</p>
              <h2 className="display mt-2 text-[1.6rem]">{device.title}</h2>
              <p className="label mt-2 text-[0.58rem] tracking-[0.2em] text-sand uppercase">
                {device.group}
              </p>

              <img
                src={DEVICE_SHOTS[device.id]?.[0]}
                alt={`${device.title} — ${device.brand}`}
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="mt-5 aspect-[4/3] w-full rounded-xl border border-gold/20 object-cover"
              />
            </div>

            <div>
              <p className="text-[0.98rem] leading-7 text-bone/70">{device.lede}</p>

              <ul className="mt-5">
                {device.aspects.map((aspect) => (
                  <li
                    key={aspect}
                    className="flex gap-4 py-2 text-[0.92rem] leading-7 text-bone/60"
                  >
                    <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-gold/60" />
                    {aspect}
                  </li>
                ))}
              </ul>

              <a
                href={device.href}
                target="_blank"
                rel="noreferrer noopener"
                className="label mt-4 inline-flex items-center gap-2 text-[0.62rem] tracking-[0.22em] text-gold uppercase transition-opacity duration-300 hover:opacity-70"
              >
                {copy.technology.maker}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="eyebrow mt-16">{copy.marqueeNote}</h2>

      <p className="label mt-5 max-w-4xl text-[0.78rem] leading-8 tracking-[0.14em] text-sand uppercase">
        {PARK.join(" · ")}
      </p>

      <Link href="/#contact" className="btn btn-gold mt-12">
        {copy.contact.cta}
      </Link>
    </PageShell>
  );
}
