"use client";

import { useEffect, useState } from "react";
import Constellation from "@/components/home/Constellation";
import { CLIPS, PARK } from "@/site/media";
import type { Copy, Lang } from "@/site/content";

/**
 * The first screen: a claim, a loop of a real protocol, and the equipment park
 * running underneath it.
 *
 * The headline arrives a word at a time. It is not decoration — it sets the
 * reading order of a sentence that is the whole positioning of the club — but
 * the words are in the markup from the start, so a reader without JavaScript
 * or with motion turned down gets the sentence, not an empty screen.
 */
export default function Hero({ copy, lang }: { copy: Copy; lang: Lang }) {
  const [lit, setLit] = useState(false);

  useEffect(() => {
    /* After the curtain, not under it. */
    const timer = window.setTimeout(() => setLit(true), 420);
    return () => window.clearTimeout(timer);
  }, []);

  const words = copy.hero.headline.split(" ");

  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36">
      <Constellation />

      {/* A warm glow off the top-left corner, as if from the window in the
          photograph beside it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(200,164,93,0.28) 0%, rgba(200,164,93,0) 68%)",
        }}
      />

      <div className="shell relative grid items-end gap-14 pb-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16 lg:pb-16">
        <div>
          <p className="eyebrow" data-reveal>
            {copy.hero.eyebrow}
          </p>

          <h1
            className={`display mt-7 text-[clamp(2.9rem,1.6rem+6.4vw,7.2rem)] ${
              lit ? "is-lit" : ""
            }`}
          >
            {words.map((word, index) => {
              const accent = word.startsWith("*");
              const bare = word.replace(/\*/g, "");

              return (
                <span key={`${bare}-${index}`} className="word">
                  <span
                    style={{ ["--delay" as string]: `${120 + index * 90}ms` }}
                    className={accent ? "text-gold italic" : undefined}
                  >
                    {bare}
                    {index < words.length - 1 ? " " : ""}
                  </span>
                </span>
              );
            })}
          </h1>

          <p className="lede mt-9" data-reveal style={{ ["--delay" as string]: "700ms" }}>
            {copy.hero.lede}
          </p>

          <div
            className="mt-11 flex flex-col gap-3 sm:flex-row"
            data-reveal
            style={{ ["--delay" as string]: "850ms" }}
          >
            <a href={`${lang === "ru" ? "/ru" : ""}/#contact`} className="btn btn-gold">
              {copy.hero.cta}
            </a>
            <a href={`${lang === "ru" ? "/ru" : ""}/#method`} className="btn btn-line">
              {copy.hero.ctaAlt}
            </a>
          </div>

          <div
            className="rule mt-14 hidden lg:flex"
            data-reveal
            style={{ ["--delay" as string]: "950ms" }}
          >
            <span className="mono text-[0.65rem] tracking-[0.3em] text-sand uppercase">
              {copy.hero.scroll}
            </span>
          </div>
        </div>

        {/* The loop is a real protocol in the Face Room, shot by the club. It
            is muted, short and decorative, so it may autoplay. */}
        <figure
          className="relative"
          data-reveal="mask"
          style={{ ["--delay" as string]: "500ms" }}
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/25">
            <video
              className="aspect-[4/5] w-full object-cover sm:aspect-square"
              poster={CLIPS.hero.poster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={CLIPS.hero.webm} type="video/webm" />
              <source src={CLIPS.hero.mp4} type="video/mp4" />
            </video>

            <div className="card-shade pointer-events-none absolute inset-x-0 bottom-0 h-1/3" />

            <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
              <span className="mono text-[0.6rem] leading-5 tracking-[0.22em] text-bone/70 uppercase">
                {copy.hero.caption}
              </span>
              <span className="mono text-[0.6rem] text-gold">●&nbsp;LIVE</span>
            </figcaption>
          </div>

        </figure>
      </div>

      {/* The park, before anything is claimed about it. */}
      <div className="marquee-stop relative mt-6 overflow-hidden border-y border-gold/15 py-5">
        <div className="marquee items-center gap-12 pr-12">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex items-center gap-12 pr-12" aria-hidden={pass === 1}>
              {PARK.map((name) => (
                <span
                  key={`${pass}-${name}`}
                  className="mono flex items-center gap-12 text-[0.72rem] tracking-[0.24em] text-bone/55 uppercase whitespace-nowrap"
                >
                  {name}
                  <span className="text-gold/60">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
