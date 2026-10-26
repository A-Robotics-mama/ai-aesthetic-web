import { CLIPS, IMAGES, MAP_URL } from "@/site/media";
import type { Copy } from "@/site/content";

/**
 * Where the club is, shown rather than described: a walk-through of the rooms
 * filmed by the club, the entrance of Dream Tower, the lounge, the robot.
 *
 * The facts beside it — address, hours, how many rooms — are the ones a person
 * actually needs before deciding to come, and they are taken from the club's
 * own schedule rather than retyped.
 */
export default function Place({ copy }: { copy: Copy }) {
  return (
    <section id="club" className="scroll-mt-24 border-b border-gold/15 py-24 lg:py-32">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <p className="eyebrow" data-reveal>
              {copy.place.eyebrow}
            </p>

            <h2
              className="display mt-6 text-[clamp(2.1rem,1.4rem+2.6vw,3.6rem)]"
              data-reveal
              style={{ ["--delay" as string]: "80ms" }}
            >
              {copy.place.title}
            </h2>

            <div className="mt-8 space-y-6">
              {copy.place.paras.map((para, index) => (
                <p
                  key={para.slice(0, 24)}
                  className="lede"
                  data-reveal
                  style={{ ["--delay" as string]: `${140 + index * 80}ms` }}
                >
                  {para}
                </p>
              ))}
            </div>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-xl bg-gold/15 sm:grid-cols-2">
              {copy.place.facts.map((fact) => (
                <div key={fact.k} className="bg-ink p-5" data-reveal>
                  <dt className="label text-[0.58rem] tracking-[0.24em] text-gold uppercase">
                    {fact.k}
                  </dt>
                  <dd className="mt-2 text-[0.95rem] leading-6 text-bone/75">{fact.v}</dd>
                </div>
              ))}
            </dl>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn-line mt-10"
              data-reveal
            >
              {copy.place.mapCta}
            </a>
          </div>

          <div className="grid gap-4">
            <figure
              className="relative overflow-hidden rounded-2xl border border-gold/20"
              data-reveal
            >
              <video
                className="aspect-[4/3] w-full object-cover"
                poster={CLIPS.place.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              >
                <source src={CLIPS.place.webm} type="video/webm" />
                <source src={CLIPS.place.mp4} type="video/mp4" />
              </video>
              <div className="card-shade pointer-events-none absolute inset-x-0 bottom-0 h-1/3" />
              <figcaption className="over-photo label absolute bottom-4 left-5 text-[0.6rem] tracking-[0.22em] text-bone/70 uppercase">
                Dream Tower · 60s
              </figcaption>
            </figure>

            <div className="grid grid-cols-2 gap-4">
              {copy.place.captions.map((shot, index) => (
                <figure
                  key={shot.id}
                  className="group relative overflow-hidden rounded-xl border border-gold/15"
                  data-reveal
                  style={{ ["--delay" as string]: `${index * 90}ms` }}
                >
                  <img
                    src={IMAGES[shot.id]}
                    alt={shot.text}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                  <div className="card-shade pointer-events-none absolute inset-x-0 bottom-0 h-2/3" />
                  <figcaption className="over-photo label absolute bottom-3 left-4 text-[0.55rem] tracking-[0.2em] text-bone/70 uppercase">
                    {shot.text}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
