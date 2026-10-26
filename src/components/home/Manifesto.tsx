"use client";

import { useEffect, useRef } from "react";
import { CLIPS } from "@/site/media";
import type { Copy } from "@/site/content";

/**
 * The club's one sentence, lit word by word as the reader scrolls through it.
 *
 * Борис формулирует это так: «мы начинаем с диагностики, а не с процедуры» —
 * и это единственное место на странице, где текст задерживает читателя
 * намеренно.
 *
 * The lighting is done in CSS: the scroll handler writes one custom property
 * and every word works out its own opacity from its position in the sentence,
 * so a hundred words cost one style write per frame rather than a hundred.
 */
export default function Manifesto({ copy }: { copy: Copy }) {
  const block = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = block.current;
    if (!node) return;

    let frame = 0;

    const paint = () => {
      frame = 0;
      const box = node.getBoundingClientRect();
      /* Fully lit by the time the paragraph sits in the middle of the screen. */
      const run = window.innerHeight * 0.75;
      const done = (window.innerHeight * 0.88 - box.top) / run;
      node.style.setProperty("--p", String(Math.min(1.15, Math.max(0, done))));
    };

    const ask = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", ask, { passive: true });
    window.addEventListener("resize", ask);
    ask();

    return () => {
      window.removeEventListener("scroll", ask);
      window.removeEventListener("resize", ask);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const words = copy.manifesto.text.split(" ");

  return (
    <section className="relative border-b border-gold/15 py-28 lg:py-40">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="eyebrow" data-reveal>
            {copy.manifesto.eyebrow}
          </p>

        <p
          ref={block}
          className="display display-xl mt-10 max-w-[22ch] text-[clamp(1.9rem,1.1rem+3.4vw,4.1rem)] leading-[1.14]"
          /* Lit until the scroll handler takes over: without script the
             sentence must be readable, not a grey block. */
          style={{ ["--p" as string]: 1 }}
        >
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                style={{ ["--i" as string]: index / words.length }}
                className="[opacity:clamp(0.22,calc((var(--p)-var(--i))*7+0.22),1)] transition-opacity duration-300"
              >
                {word}{" "}
              </span>
            ))}
          </p>

          <p
            className="label mt-10 text-[0.65rem] tracking-[0.3em] text-sand uppercase"
            data-reveal
          >
            — {copy.manifesto.by}
          </p>
        </div>

        {/* Процедура в Face Room, снятая самим клубом. Ролик стоял на первом
            экране, но там теперь знак, а рядом с этой фразой он и к месту:
            «начинаем с диагностики» — и тут же руки, которые работают. */}
        <figure className="relative" data-reveal style={{ ["--delay" as string]: "200ms" }}>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/25">
            <video
              className="aspect-[4/5] w-full object-cover"
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

            <figcaption className="over-photo label absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-[0.6rem] leading-5 tracking-[0.22em] text-bone/70 uppercase">
              <span>{copy.hero.caption}</span>
              <span className="text-gold">●&nbsp;LIVE</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
