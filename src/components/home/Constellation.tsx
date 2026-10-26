"use client";

import { useEffect, useRef } from "react";

/**
 * The club's mark is a constellation — an «AI» ringed by nodes and traces — so
 * the hero carries the same figure, drawn slowly behind the headline.
 *
 * It is deliberately faint: a background that competes with the type would be
 * worse than no background. The canvas stops when it scrolls out of view and
 * never starts at all when the visitor asked for less motion.
 */
export default function Constellation() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const board = canvas.current;
    if (!board) return;

    const paper = board.getContext("2d");
    if (!paper) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dots = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      dx: (Math.random() - 0.5) * 0.00018,
      dy: (Math.random() - 0.5) * 0.00018,
      r: 0.6 + Math.random() * 1.4,
    }));

    let width = 0;
    let height = 0;
    let frame = 0;
    let running = true;

    const size = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      width = board.clientWidth;
      height = board.clientHeight;
      board.width = Math.round(width * scale);
      board.height = Math.round(height * scale);
      paper.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const draw = () => {
      paper.clearRect(0, 0, width, height);

      for (const dot of dots) {
        if (!still) {
          dot.x += dot.dx;
          dot.y += dot.dy;
          if (dot.x < 0 || dot.x > 1) dot.dx *= -1;
          if (dot.y < 0 || dot.y > 1) dot.dy *= -1;
        }
      }

      /* Traces first, so the nodes sit on top of them. */
      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const ax = dots[i].x * width;
          const ay = dots[i].y * height;
          const bx = dots[j].x * width;
          const by = dots[j].y * height;
          const gap = Math.hypot(ax - bx, ay - by);

          if (gap > 170) continue;

          paper.strokeStyle = `rgba(200, 164, 93, ${0.16 * (1 - gap / 170)})`;
          paper.lineWidth = 1;
          paper.beginPath();
          paper.moveTo(ax, ay);
          paper.lineTo(bx, by);
          paper.stroke();
        }
      }

      for (const dot of dots) {
        paper.fillStyle = "rgba(233, 212, 163, 0.5)";
        paper.beginPath();
        paper.arc(dot.x * width, dot.y * height, dot.r, 0, Math.PI * 2);
        paper.fill();
      }

      if (!still && running) frame = requestAnimationFrame(draw);
    };

    size();
    draw();

    const onResize = () => {
      size();
      if (still) draw();
    };

    window.addEventListener("resize", onResize);

    /* A canvas painting under a headline nobody is looking at is pure heat. */
    const watcher = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
      if (running && !still && !frame) frame = requestAnimationFrame(draw);
      if (!running && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });

    watcher.observe(board);

    return () => {
      window.removeEventListener("resize", onResize);
      watcher.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
