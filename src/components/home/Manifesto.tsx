"use client";

import { useEffect, useRef } from "react";
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
      <div className="shell">
        <p className="eyebrow" data-reveal>
          {copy.manifesto.eyebrow}
        </p>

        <p
          ref={block}
          className="display mt-10 max-w-[22ch] text-[clamp(1.9rem,1.1rem+3.4vw,4.1rem)] leading-[1.14]"
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

        <p className="mono mt-10 text-[0.65rem] tracking-[0.3em] text-sand uppercase" data-reveal>
          — {copy.manifesto.by}
        </p>
      </div>
    </section>
  );
}
