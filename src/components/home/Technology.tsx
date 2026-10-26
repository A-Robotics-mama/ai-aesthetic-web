"use client";

import { useState } from "react";
import { IMAGES } from "@/site/media";
import type { Copy } from "@/site/content";

/**
 * The equipment park as a list you read with the pointer: the name on the left,
 * the machine and what it is for on the right.
 *
 * Every platform here is one the club owns — the list is the one kept in its
 * own records — and each entry says what the device does mechanically rather
 * than what it promises. A visitor comparing two clubs can compare the parks.
 */
export default function Technology({ copy }: { copy: Copy }) {
  const [shown, setShown] = useState(0);
  const items = copy.technology.items;

  return (
    <section
      id="technology"
      className="scroll-mt-24 border-b border-gold/15 bg-ink-2 py-24 lg:py-32"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="eyebrow" data-reveal>
              {copy.technology.eyebrow}
            </p>
            <h2
              className="display mt-6 max-w-[16ch] text-[clamp(2.1rem,1.4rem+2.6vw,3.6rem)]"
              data-reveal
              style={{ ["--delay" as string]: "80ms" }}
            >
              {copy.technology.title}
            </h2>
          </div>

          <p className="lede" data-reveal style={{ ["--delay" as string]: "160ms" }}>
            {copy.technology.lede}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <ul className="border-t border-gold/15">
            {items.map((item, index) => {
              const open = index === shown;

              return (
                <li key={item.id} className="border-b border-gold/15">
                  <button
                    type="button"
                    onMouseEnter={() => setShown(index)}
                    onFocus={() => setShown(index)}
                    onClick={() => setShown(index)}
                    aria-expanded={open}
                    className="group flex w-full items-baseline justify-between gap-6 py-5 text-left"
                    data-reveal
                    style={{ ["--delay" as string]: `${index * 60}ms` }}
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="mono text-[0.62rem] text-gold/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`display text-[1.45rem] transition-colors duration-400 sm:text-[1.7rem] ${
                          open ? "text-gold" : "text-bone group-hover:text-gold-soft"
                        }`}
                      >
                        {item.title}
                      </span>
                    </span>

                    <span className="mono shrink-0 text-[0.58rem] tracking-[0.2em] text-sand uppercase">
                      {item.meta}
                    </span>
                  </button>

                  {/* On a narrow screen there is no room for a panel beside the
                      list, so the text opens under the name it belongs to. */}
                  <p
                    className={`overflow-hidden pr-2 text-[0.92rem] leading-7 text-bone/60 transition-all duration-500 lg:hidden ${
                      open ? "max-h-72 pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.text}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20">
                {items.map((item, index) => (
                  <img
                    key={item.id}
                    src={IMAGES[item.id]}
                    alt={item.title}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      index === shown ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="card-shade pointer-events-none absolute inset-x-0 bottom-0 h-1/2" />
              </div>

              <p className="mono mt-6 text-[0.62rem] tracking-[0.24em] text-gold uppercase">
                {items[shown].meta}
              </p>
              <p className="mt-3 text-[1rem] leading-8 text-bone/70">{items[shown].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
