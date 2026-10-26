"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Everything that happens across the whole page rather than inside one block:
 * the opening curtain, the reading-progress hairline, the gold cursor and the
 * observer that brings blocks in as they are reached.
 *
 * One observer for the whole document rather than one per section: a page with
 * forty revealing elements should not hold forty observers, and the scroll
 * listener is the only place where the page's position is read.
 *
 * Everything here degrades to nothing: with motion reduced the CSS flattens the
 * transitions, with a coarse pointer the cursor is hidden, and if the script
 * never runs the content is still visible — the reveal classes are applied by
 * this component, and the page is built so that their absence shows the content
 * rather than hiding it.
 */
export default function Chrome({ intro = true }: { intro?: boolean }) {
  const [curtainGone, setCurtainGone] = useState(!intro);
  const curtain = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
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

    /* Taking the class off the node rather than going through state: this runs
       in the first effect after paint, and a re-render there would be a frame
       of the curtain for nothing. */
    if (seen || still) {
      curtain.current?.classList.add("skip");
      return;
    }

    try {
      sessionStorage.setItem("aiac.intro", "done");
    } catch {
      /* nothing to do: the curtain is harmless when it repeats */
    }

    /* Belt and braces. The curtain covers the entire site, so it is taken away
       by script as well as by the animation: if the animation is ever dropped
       — a browser we have not met, a stylesheet that failed — the page must
       still arrive. */
    const timer = window.setTimeout(() => setCurtainGone(true), 2100);

    return () => window.clearTimeout(timer);
  }, [intro]);

  /* Reveal on approach. The root margin fires a little before the element is
     actually in view, so the animation is finishing as the reader arrives. */
  useEffect(() => {
    const seen = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      seen.forEach((node) => node.classList.add("is-in"));
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

    return () => watcher.disconnect();
  }, []);

  /* Progress and cursor share one animation frame. */
  useEffect(() => {
    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let shownCursor = false;

    const paint = () => {
      frame = 0;

      if (bar.current) {
        const runway =
          document.documentElement.scrollHeight - window.innerHeight;
        const done = runway > 0 ? window.scrollY / runway : 0;
        bar.current.style.transform = `scaleX(${Math.min(1, Math.max(0, done))})`;
      }

      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const ask = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (!shownCursor && cursor.current) {
        cursor.current.classList.add("on");
        shownCursor = true;
      }

      const over = (event.target as HTMLElement | null)?.closest(
        "a, button, [data-grow], input, select",
      );
      cursor.current?.classList.toggle("grown", Boolean(over));
      ask();
    };

    const onLeave = () => cursor.current?.classList.remove("on");

    window.addEventListener("scroll", ask, { passive: true });
    window.addEventListener("resize", ask);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    ask();

    return () => {
      window.removeEventListener("scroll", ask);
      window.removeEventListener("resize", ask);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden />
      <div ref={bar} className="progress" style={{ transform: "scaleX(0)" }} aria-hidden />
      <div ref={cursor} className="cursor" aria-hidden />

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
            <div className="mt-7 h-px w-48 bg-gold curtain-line sm:w-72" />
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
