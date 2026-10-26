"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COPY, OTHER_LANG, type Lang } from "@/site/content";

/**
 * The header every page carries.
 *
 * It starts transparent over the hero and takes on the ground colour once the
 * page has moved, so the first screen is the photograph and not a bar across
 * it. The wordmark links home rather than to an anchor: on the legal pages
 * there is no section to scroll to, and a dead link on a page Meta reviews is a
 * cheap way to fail review.
 *
 * `lang` defaults to English so the legal pages, which are English-only, can go
 * on calling this with no props.
 */
export default function SiteHeader({ lang = "en" }: { lang?: Lang }) {
  const copy = COPY[lang];
  const home = lang === "ru" ? "/ru" : "/";
  const [moved, setMoved] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setMoved(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* An open menu must not leave the page scrolling underneath it. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        moved || open
          ? "border-b border-gold/15 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex items-center justify-between py-4 lg:py-5">
        <Link href={home} className="flex items-center gap-3 py-1" onClick={() => setOpen(false)}>
          <span className="leading-tight">
            <span className="label block text-[0.72rem] tracking-[0.26em] text-bone uppercase lg:text-[0.78rem]">
              AI Aesthetic Club
            </span>
            <span className="label block text-[0.55rem] tracking-[0.22em] text-gold/80 uppercase">
              Limassol · Cyprus
            </span>
          </span>
        </Link>

        <nav className="label hidden items-center gap-9 text-[0.68rem] tracking-[0.2em] uppercase lg:flex">
          {copy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-bone/65 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={OTHER_LANG[lang]}
            className="label rounded-full border border-gold/30 px-3 py-1.5 text-[0.62rem] tracking-[0.2em] text-gold uppercase transition-colors hover:border-gold hover:bg-gold/10"
          >
            {copy.langLabel}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((was) => !was)}
            aria-expanded={open}
            aria-label="Menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span
              className={`h-px w-5 bg-bone transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-bone transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* The mobile menu: the same five destinations, set large enough to be
          read at arm's length. */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="shell flex flex-col gap-1 pb-8">
          {copy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display border-b border-gold/10 py-4 text-2xl text-bone/85"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
