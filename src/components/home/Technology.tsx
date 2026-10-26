"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DEVICE_SHOTS } from "@/site/media";
import type { Copy } from "@/site/content";

/**
 * The equipment park, one machine at a time.
 *
 * Борис, 26.10.2026: «по наполнению ты всё перепутал, картинки и названия
 * аппаратов не совпадают... надо дать весь список наших аппаратов и
 * соответствующие картики, а лучше слайд шоу». Поэтому здесь три вещи сразу:
 *
 *  - весь список виден целиком — рельсой под кадром, двенадцать имён, ни одно
 *    не спрятано за наведением;
 *  - у каждого аппарата свои снимки, снятые с сайта производителя, и подпись
 *    под кадром говорит, что именно на нём;
 *  - главные свойства — по три-четыре на аппарат, фактами, а не обещаниями.
 *
 * Один таймер двигает всё: он листает снимки внутри аппарата, а когда они
 * кончились — переходит к следующему. Так каждому достаётся время, пропорци-
 * ональное числу его кадров, и не нужен второй интервал, который бы с первым
 * расходился.
 */
export default function Technology({ copy }: { copy: Copy }) {
  const devices = copy.technology.devices;
  const [at, setAt] = useState(0);
  const [shot, setShot] = useState(0);
  const [held, setHeld] = useState(false);
  const frame = useRef<HTMLDivElement>(null);

  const shots = DEVICE_SHOTS[devices[at].id] ?? [];

  const goto = useCallback(
    (index: number) => {
      const many = devices.length;
      setAt(((index % many) + many) % many);
      setShot(0);
    },
    [devices.length],
  );

  /* Автоматический показ. Если человек держит курсор на блоке, листает сам или
     просил убрать движение — стоим. */
  useEffect(() => {
    if (held) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (still.matches) return;

    const timer = window.setInterval(() => {
      setShot((was) => {
        const many = DEVICE_SHOTS[devices[at].id]?.length ?? 1;
        if (was + 1 < many) return was + 1;
        setAt((here) => (here + 1) % devices.length);
        return 0;
      });
    }, 3200);

    return () => window.clearInterval(timer);
  }, [at, held, devices]);

  /* Стрелками — как в любой галерее, но только когда кадр в фокусе: иначе мы
     отнимем стрелки у прокрутки страницы. */
  const onKey = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goto(at + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goto(at - 1);
    }
  };

  const one = devices[at];

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
              className="display mt-6 max-w-[18ch] text-[clamp(2.1rem,1.4rem+2.6vw,3.6rem)]"
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

        <div
          ref={frame}
          tabIndex={-1}
          onKeyDown={onKey}
          onMouseEnter={() => setHeld(true)}
          onMouseLeave={() => setHeld(false)}
          onFocusCapture={() => setHeld(true)}
          onBlurCapture={() => setHeld(false)}
          className="mt-14 outline-none lg:mt-16"
        >
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16">
            {/* Кадр. Снимки лежат стопкой и переключаются прозрачностью —
                браузеру не приходится перекладывать вёрстку на каждом шаге. */}
            <div data-reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gold/20 bg-ink-3">
                {devices.map((device) =>
                  (DEVICE_SHOTS[device.id] ?? []).map((src, index) => {
                    const lit = device.id === one.id && index === shot;

                    return (
                      <img
                        key={src}
                        src={src}
                        alt={`${device.title} — ${device.brand}`}
                        loading={device.id === devices[0].id ? "eager" : "lazy"}
                        decoding="async"
                        width={1200}
                        height={900}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                          lit ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden={!lit}
                      />
                    );
                  }),
                )}

                {/* Счётчик кадров внутри аппарата — чтобы было видно, что
                    показ идёт и сколько ещё осталось. */}
                <div className="pointer-events-none absolute right-4 bottom-4 flex gap-1.5">
                  {shots.map((src, index) => (
                    <span
                      key={src}
                      className={`h-[3px] w-5 rounded-full transition-colors duration-500 ${
                        index === shot ? "bg-gold" : "bg-bone/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Листалка и позиция в парке. */}
              <div className="mt-5 flex items-center justify-between gap-6">
                <p className="label text-[0.68rem] tracking-[0.22em] text-sand uppercase">
                  <span className="text-gold">{String(at + 1).padStart(2, "0")}</span>
                  <span className="mx-2 text-sand/50">/</span>
                  {String(devices.length).padStart(2, "0")}
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => goto(at - 1)}
                    aria-label={copy.technology.prev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-[color:var(--color-on-gold)]"
                  >
                    <span aria-hidden>←</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => goto(at + 1)}
                    aria-label={copy.technology.next}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-[color:var(--color-on-gold)]"
                  >
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Что это за аппарат и что в нём главное. */}
            <div data-reveal style={{ ["--delay" as string]: "120ms" }}>
              <p className="eyebrow">{one.brand}</p>

              <h3 className="display mt-4 text-[clamp(1.8rem,1.3rem+1.6vw,2.6rem)]">
                {one.title}
              </h3>

              <p className="label mt-3 text-[0.62rem] tracking-[0.26em] text-sand uppercase">
                {one.group}
              </p>

              <p className="mt-6 text-[1.02rem] leading-8 text-bone/75">{one.lede}</p>

              <ul className="mt-8 border-t border-gold/15">
                {one.aspects.map((aspect) => (
                  <li
                    key={aspect}
                    className="flex gap-4 border-b border-gold/15 py-4 text-[0.93rem] leading-7 text-bone/65"
                  >
                    <span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-gold/60" />
                    {aspect}
                  </li>
                ))}
              </ul>

              <a
                href={one.href}
                target="_blank"
                rel="noreferrer noopener"
                className="label mt-7 inline-flex items-center gap-2 text-[0.64rem] tracking-[0.24em] text-gold uppercase transition-opacity duration-300 hover:opacity-70"
              >
                {copy.technology.maker}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          {/* Весь парк разом. Рельса — это и навигация, и тот самый полный
              список: двенадцать имён, видно сразу, без наведения. */}
          <div className="mt-14 border-t border-gold/15 pt-8">
            <p className="label text-[0.6rem] tracking-[0.28em] text-sand uppercase">
              {copy.technology.listLabel}
            </p>

            <ol className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
              {devices.map((device, index) => {
                const here = index === at;

                return (
                  <li key={device.id}>
                    <button
                      type="button"
                      onClick={() => goto(index)}
                      aria-current={here ? "true" : undefined}
                      className="group flex w-full items-baseline gap-3 py-2 text-left"
                    >
                      <span
                        className={`label w-6 shrink-0 text-[0.6rem] transition-colors duration-300 ${
                          here ? "text-gold" : "text-sand/60"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[0.95rem] transition-colors duration-300 ${
                          here
                            ? "text-gold"
                            : "text-bone/55 group-hover:text-gold-soft"
                        }`}
                      >
                        {device.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
