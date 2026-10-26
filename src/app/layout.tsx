import type { Metadata, Viewport } from "next";
import {
  Bodoni_Moda,
  IBM_Plex_Mono,
  Jost,
  Azeret_Mono,
  Playfair_Display,
} from "next/font/google";
import { CLINIC, COMPANY } from "@/constants/company";
import "./globals.css";

/**
 * Three faces, each with a job.
 *
 * Bodoni carries the headlines: a high-contrast serif whose hairlines glow on
 * black, which is the club's ground. Jost sets everything that is read rather
 * than looked at. Azeret Mono is reserved for figures and labels — the page's
 * recurring motif is a measurement, and a measurement is set in a mono face.
 *
 * Bodoni и Azeret не покрывают кириллицу, а половина страницы — русская.
 * Поэтому рядом стоят Playfair Display и IBM Plex Mono: браузер подбирает
 * шрифт по глифу, латиница остаётся в Bodoni, а русский текст не падает в
 * системный шрифт, который на каждой машине свой.
 */
const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

const displayCyrillic = Playfair_Display({
  variable: "--font-display-cyrillic",
  subsets: ["cyrillic"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const monoCyrillic = IBM_Plex_Mono({
  variable: "--font-mono-cyrillic",
  subsets: ["cyrillic"],
  weight: ["300", "400"],
  display: "swap",
});

const mono = Azeret_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  /**
   * `metadataBase` turns the relative canonicals declared per page into
   * absolute URLs. Meta resolves the legal URLs it is given, so they have to
   * point at the live origin rather than at localhost.
   */
  metadataBase: new URL(CLINIC.origin),
  title: {
    default: `${CLINIC.name} — The club where beauty is measured`,
    template: `%s — ${CLINIC.name}`,
  },
  description: CLINIC.description,
  applicationName: CLINIC.name,
  authors: [{ name: COMPANY.legalName }],
  alternates: { canonical: "/", languages: { en: "/", ru: "/ru" } },
  openGraph: {
    type: "website",
    siteName: CLINIC.name,
    locale: "en_GB",
    url: CLINIC.origin,
    title: `${CLINIC.name} — The club where beauty is measured`,
    description: CLINIC.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#080706",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${displayCyrillic.variable} ${body.variable} ${mono.variable} ${monoCyrillic.variable} h-full antialiased`}
    >
      <head>
        {/*
          Marks the document as scripted before anything is painted. The
          reveal-on-scroll styles hang off this class, so the page is readable
          when the bundle never arrives — and there is no flash when it does,
          because this runs ahead of the first paint.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js");',
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
