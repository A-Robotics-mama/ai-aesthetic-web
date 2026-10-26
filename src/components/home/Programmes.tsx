"use client";

import { useRef } from "react";
import { IMAGES } from "@/site/media";
import type { Copy } from "@/site/content";

/**
 * The six directions, as a rail the reader pushes sideways.
 *
 * A grid would have worked; a rail does one thing better — it says there is
 * more than fits, which is true of the club's book. Native scroll-snap does the
 * moving, and the pointer handlers only add dragging for a mouse, so touch and
 * the keyboard keep the behaviour the browser already gives them.
 */
export default function Programmes({ copy }: { copy: Copy }) {
  const rail = useRef<HTMLDivElement>(null);
  const grab = useRef({ down: false, x: 0, left: 0, moved: 0 });

  const onDown = (event: React.PointerEvent) => {
    const node = rail.current;
    if (!node || event.pointerType === "touch") return;

    grab.current = { down: true, x: event.clientX, left: node.scrollLeft, moved: 0 };
    node.classList.add("dragging");
  };

  const onMove = (event: React.PointerEvent) => {
    const node = rail.current;
    if (!node || !grab.current.down) return;

    const shift = event.clientX - grab.current.x;
    grab.current.moved = Math.abs(shift);
    node.scrollLeft = grab.current.left - shift;
  };

  const onUp = () => {
    const node = rail.current;
    if (!node) return;

    grab.current.down = false;
    node.classList.remove("dragging");
  };

  return (
    <section id="programmes" className="scroll-mt-24 border-b border-gold/15 py-24 lg:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow" data-reveal>
              {copy.programmes.eyebrow}
            </p>
            <h2
              className="display mt-6 max-w-[14ch] text-[clamp(2.1rem,1.4rem+2.6vw,3.6rem)]"
              data-reveal
              style={{ ["--delay" as string]: "80ms" }}
            >
              {copy.programmes.title}
            </h2>
          </div>

          <div className="flex items-center gap-4" data-reveal>
            <span className="label text-[0.62rem] tracking-[0.3em] text-sand uppercase">
              {copy.programmes.drag}
            </span>
            <span aria-hidden className="text-gold/50">
              ⟷
            </span>
          </div>
        </div>

        <p className="lede mt-7" data-reveal style={{ ["--delay" as string]: "140ms" }}>
          {copy.programmes.lede}
        </p>
      </div>

      <div
        ref={rail}
        className="rail shell mt-14"
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerLeave={onUp}
      >
        {copy.programmes.items.map((item, index) => (
          <article
            key={item.id}
            className="group w-[78vw] max-w-[23rem] sm:w-[23rem]"
            data-reveal
            style={{ ["--delay" as string]: `${index * 80}ms` }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-gold/15">
              <img
                src={IMAGES[item.id]}
                alt=""
                aria-hidden
                loading="lazy"
                draggable={false}
                className="aspect-[3/4] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.07]"
              />
              <div className="card-shade pointer-events-none absolute inset-0" />

              <div className="absolute inset-x-6 bottom-6">
                <h3 className="display text-[1.7rem]">{item.title}</h3>
                {item.meta && (
                  <p className="label mt-2 text-[0.6rem] tracking-[0.2em] text-gold uppercase">
                    {item.meta}
                  </p>
                )}
              </div>
            </div>

            <p className="mt-5 pr-4 text-[0.95rem] leading-7 text-bone/60">{item.text}</p>
          </article>
        ))}
      </div>

      <p className="shell mt-12 max-w-3xl text-xs leading-6 text-sand/70">
        {copy.programmes.note}
      </p>
    </section>
  );
}
