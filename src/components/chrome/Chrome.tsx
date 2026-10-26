"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Everything that happens across the whole page rather than inside one block:
 * the opening curtain, the reading-progress hairline, and the observer that
 * brings blocks in as they are reached.
 *
 * One observer for the whole document rather than one per section: a page with
 * forty revealing elements should not hold forty observers, and the scroll
 * listener is the only place where the page's position is read.
 *
 * Nothing here is allowed to hide content. The reveal styles only apply when
 * the document is marked as scripted, the observer has a timer behind it, and
 * the curtain lifts in CSS with a second timer behind that — a decoration that
 * fails must leave the page readable, not blank.
 */
export default function Chrome({ intro = true }: { intro?: boolean }) {
  const [curtainGone, setCurtainGone] = useState(!intro);
  const curtain = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  /* The curtain lifts itself in CSS. Script only takes it away early: on the
     way back from the privacy policy, or when the visitor asked for less
     motion, an entrance is an obstacle. */
  useEffect(() => {
    if (!intro) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let seen = false;
    try {
      seen = sessionStorage.getItem("aiac.intro") === "done";
    } catch {
      /* private window: the curtain simply plays again next time */
    }

    if (seen || still) {
      /* Taking the class off the node rather than going through state: this
         runs in the first effect after paint, and a re-render there would be
         a frame of the curtain for nothing. */
      curtain.current?.classList.add("skip");
      return;
    }

    try {
      sessionStorage.setItem("aiac.intro", "done");
    } catch {
      /* nothing to do: the curtain is harmless when it repeats */
    }

    /* Belt and braces: if the animation is ever dropped — a browser we have
       not met, a stylesheet that failed — the page must still arrive. */
    const timer = window.setTimeout(() => setCurtainGone(true), 2100);

    return () => window.clearTimeout(timer);
  }, [intro]);

  /* Reveal on approach. The root margin fires a little before the element is
     actually in view, so the animation is finishing as the reader arrives. */
  useEffect(() => {
    const seen = document.querySelectorAll<HTMLElement>("[data-reveal]");

    const showAll = () => seen.forEach((node) => node.classList.add("is-in"));

    if (!("IntersectionObserver" in window)) {
      showAll();
      return;
    }

    const watcher = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          watcher.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    seen.forEach((node) => watcher.observe(node));

    /* The safety net. A block that stays hidden is a block that is lost, so
       after two and a half seconds everything is shown regardless. */
    const safety = window.setTimeout(showAll, 2500);

    return () => {
      window.clearTimeout(safety);
      watcher.disconnect();
    };
  }, []);

  /* Reading progress, one animation frame per scroll. */
  useEffect(() => {
    let frame = 0;

    const paint = () => {
      frame = 0;

      if (!bar.current) return;

      const runway = document.documentElement.scrollHeight - window.innerHeight;
      const done = runway > 0 ? window.scrollY / runway : 0;
      bar.current.style.transform = `scaleX(${Math.min(1, Math.max(0, done))})`;
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

  return (
    <>
      <div className="grain" aria-hidden />
      <div
        ref={bar}
        className="progress"
        style={{ transform: "scaleX(0)" }}
        aria-hidden
      />

      {intro && (
        <div
          ref={curtain}
          className={`curtain ${curtainGone ? "skip" : ""}`}
          aria-hidden
        >
          <div className="text-center">
            {/* The mark is a whole lockup on a field of circuit traces: it
                only reads at size, so the entrance is where it belongs. */}
            <img
              src="/media/logo-440.png"
              alt=""
              width={440}
              height={440}
              className="curtain-mark mx-auto w-56 object-contain sm:w-72"
            />
            <div className="curtain-line mt-7 h-px w-48 bg-gold sm:w-72" />
            <p
              className="curtain-mark mono mt-5 text-[0.65rem] tracking-[0.3em] text-sand uppercase"
              style={{ animationDelay: "0.45s" }}
            >
              Limassol
            </p>
          </div>
        </div>
      )}
    </>
  );
}
