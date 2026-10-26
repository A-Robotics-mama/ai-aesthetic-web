"use client";

import { useEffect, useState } from "react";
import Constellation from "@/components/home/Constellation";
import { PARK } from "@/site/media";
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

      <div className="shell relative grid items-center gap-12 pb-10 lg:grid-cols-2 lg:gap-14 lg:pb-16">
        <div>
          <p className="eyebrow" data-reveal>
            {copy.hero.eyebrow}
          </p>

          <h1
            className={`display display-xl mt-7 text-[clamp(2.6rem,1.1rem+4.1vw,6.2rem)] ${
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
                    className={accent ? "text-gold" : undefined}
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
            className="mt-11 flex flex-wrap gap-3"
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
            <span className="label text-[0.65rem] tracking-[0.3em] text-sand uppercase">
              {copy.hero.scroll}
            </span>
          </div>
        </div>

        {/* Борис, 26.10.2026: «лого должно занимать правую половину экрана».
            Знак нарисован тонкими линиями платы — именно размер и делает его
            читаемым, а первый экран держится на двух вещах: обещании слева и
            самом клубе справа. Ролик с процедурой уехал к манифесту. */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/media/logo-440.png"
            alt="AI Aesthetic Club"
            width={440}
            height={440}
            className="w-64 max-w-full object-contain sm:w-80 lg:w-full lg:max-w-[36rem]"
            data-reveal
            style={{ ["--delay" as string]: "400ms" }}
          />
        </div>
      </div>

      {/* The park, before anything is claimed about it. */}
      <div className="marquee-stop relative mt-6 overflow-hidden border-y border-gold/15 py-5">
        <div className="marquee items-center gap-12 pr-12">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex items-center gap-12 pr-12" aria-hidden={pass === 1}>
              {PARK.map((name) => (
                <span
                  key={`${pass}-${name}`}
                  className="label flex items-center gap-12 text-[0.72rem] tracking-[0.24em] text-bone/55 uppercase whitespace-nowrap"
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
