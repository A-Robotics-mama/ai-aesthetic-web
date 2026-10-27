"use client";

import { useState } from "react";
import type { Copy } from "@/site/content";

/**
 * The equipment park as a list you read with the pointer: the twelve names on
 * the left, and what the chosen one is for on the right.
 *
 * Борис, 26.10.2026, о показе со стрелками: «список неочевиден, я сам еле
 * понял что надо переключать аппараты стрелкой, первый вариант со списком был
 * намного лучше». Поэтому листалки нет совсем: весь парк стоит столбцом, и
 * видно сразу, что строк двенадцать и что они нажимаются. Сам порядок — тот,
 * в котором его перечислил Борис.
 *
 * Строка выбирается щелчком, а не наведением. Наведение было и подвело на
 * встрече 27.10.2026: по дороге к ссылке «у производителя», которая стоит в
 * правой панели, указатель пересекал соседние строки, панель сменялась, и
 * ссылка уводила к чужому аппарату.
 *
 * Фотографий здесь пока нет: «вариант с картинками аппаратов тоже мне не
 * нравится, завтра подберу видеоряд сам». Место под кадр появится, когда он
 * принесёт свой ряд; до тех пор справа стоят главные свойства аппарата —
 * числа производителя, а не обещания.
 */
export default function Technology({ copy }: { copy: Copy }) {
  const devices = copy.technology.devices;
  const [shown, setShown] = useState(0);
  const one = devices[shown];

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

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
          <ul className="border-t border-gold/15">
            {devices.map((device, index) => {
              const open = index === shown;

              return (
                <li key={device.id} className="border-b border-gold/15">
                  {/* Наведением строка больше не выбирается: ссылка «у
                      производителя» стоит в правой панели, и по дороге к ней
                      указатель пересекал соседние строки — панель успевала
                      смениться, и щелчок уводил к чужому аппарату. Борис,
                      27.10.2026: «открыл висбоди а меня перенаправило на
                      индибу она». Выбор меняется только намеренно. */}
                  <button
                    type="button"
                    onFocus={() => setShown(index)}
                    onClick={() => setShown(index)}
                    aria-expanded={open}
                    className="group flex w-full items-baseline justify-between gap-6 py-4 text-left"
                    data-reveal
                    style={{ ["--delay" as string]: `${index * 45}ms` }}
                  >
                    <span className="flex items-baseline gap-5">
                      <span className="label w-6 shrink-0 text-[0.62rem] text-gold/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`display text-[1.3rem] transition-colors duration-400 sm:text-[1.5rem] ${
                          open ? "text-gold" : "text-bone group-hover:text-gold-soft"
                        }`}
                      >
                        {device.title}
                      </span>
                    </span>

                    <span className="label shrink-0 text-[0.56rem] tracking-[0.2em] text-sand uppercase">
                      {device.brand}
                    </span>
                  </button>

                  {/* На узком экране панели рядом нет, поэтому свойства
                      открываются под тем именем, которому принадлежат. */}
                  <div
                    className={`overflow-hidden pr-2 transition-all duration-500 lg:hidden ${
                      open ? "max-h-[36rem] pb-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="label text-[0.56rem] tracking-[0.24em] text-sand uppercase">
                      {device.group}
                    </p>
                    <p className="mt-3 text-[0.92rem] leading-7 text-bone/65">
                      {device.lede}
                    </p>
                    <ul className="mt-4">
                      {device.aspects.map((aspect) => (
                        <li
                          key={aspect}
                          className="flex gap-3 py-1.5 text-[0.88rem] leading-6 text-bone/55"
                        >
                          <span
                            aria-hidden
                            className="mt-3 h-px w-4 shrink-0 bg-gold/60"
                          />
                          {aspect}
                        </li>
                      ))}
                    </ul>

                    {/* С телефона это единственный путь к производителю:
                        правой панели на узком экране нет. */}
                    <a
                      href={device.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="label mt-5 inline-flex items-center gap-2 text-[0.6rem] tracking-[0.22em] text-gold uppercase transition-opacity duration-300 hover:opacity-70"
                    >
                      {copy.technology.maker}
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <p className="eyebrow">{one.brand}</p>

              <h3 className="display mt-3 text-[clamp(1.7rem,1.3rem+1.3vw,2.4rem)]">
                {one.title}
              </h3>

              <p className="label mt-3 text-[0.6rem] tracking-[0.26em] text-sand uppercase">
                {one.group}
              </p>

              <p className="mt-6 text-[1rem] leading-8 text-bone/75">{one.lede}</p>

              <ul className="mt-7 border-t border-gold/15">
                {one.aspects.map((aspect) => (
                  <li
                    key={aspect}
                    className="flex gap-4 border-b border-gold/15 py-4 text-[0.92rem] leading-7 text-bone/65"
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
                className="label mt-6 inline-flex items-center gap-2 text-[0.62rem] tracking-[0.24em] text-gold uppercase transition-opacity duration-300 hover:opacity-70"
              >
                {copy.technology.maker}
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
