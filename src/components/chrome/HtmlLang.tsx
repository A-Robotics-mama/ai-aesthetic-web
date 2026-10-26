"use client";

import { useEffect } from "react";
import type { Lang } from "@/site/content";

/**
 * Keeps `<html lang>` honest on the Russian page.
 *
 * The export has one root layout and therefore one `<html>` element, so the
 * attribute is corrected on the client. It matters for screen readers choosing
 * a voice and for the browser's own hyphenation, and costs one line.
 */
export default function HtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    const was = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = was;
    };
  }, [lang]);

  return null;
}
