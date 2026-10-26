"use client";

import { useEffect, useRef } from "react";
import type { Copy } from "@/site/content";

/**
 * Four numbers out of the club's own records, counted up once when reached.
 *
 * They are the figures a visitor can check against the price list and the
 * equipment in the rooms — twelve platforms, five rooms, forty-six icoone
 * programmes, two hundred-odd procedures — so none of them is rounded upwards
 * for effect.
 */
export default function Figures({ copy }: { copy: Copy }) {
  const strip = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const node = strip.current;
    if (!node) return;

    const cells = Array.from(node.querySelectorAll<HTMLElement>("[data-to]"));
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* The figure is already in the markup, so a reader without script — or
       one whose browser is still fetching it — sees the number rather than a
       zero. The animation only replays it. */
    if (still) return;

    const run = (cell: HTMLElement) => {
      const target = Number(cell.dataset.to);
      const started = performance.now();
      const span = 1300;

      const tick = (now: number) => {
        const part = Math.min(1, (now - started) / span);
        /* Ease out: the last digits should land slowly, like a scale settling. */
        const eased = 1 - Math.pow(1 - part, 3);
        cell.textContent = String(Math.round(target * eased));
        if (part < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const watcher = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          run(entry.target as HTMLElement);
          watcher.unobserve(entry.target);
        }
      },
      { threshold: 0.6 },
    );

    cells.forEach((cell) => watcher.observe(cell));

    return () => watcher.disconnect();
  }, []);

  return (
    <section className="border-b border-gold/15 py-20 lg:py-24">
      <dl ref={strip} className="shell grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {copy.figures.map((figure, index) => (
          <div key={figure.label} data-reveal style={{ ["--delay" as string]: `${index * 90}ms` }}>
            <dt className="figure flex items-baseline">
              {figure.prefix}
              <span data-to={figure.value}>{figure.value}</span>
              {figure.suffix && <span className="text-gold/70">{figure.suffix}</span>}
            </dt>
            <dd className="label mt-4 text-[0.66rem] leading-5 tracking-[0.2em] text-sand uppercase">
              {figure.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
