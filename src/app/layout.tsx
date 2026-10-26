import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import { CLINIC, COMPANY } from "@/constants/company";
import "./globals.css";

/**
 * Один шрифт, набранный тихо.
 *
 * Борис, 26.10.2026: «надо поменять шрифт, этот очень наляпистый, смотри как
 * изящно сделано у Амары». Bodoni и Playfair ушли совсем: дидон с его
 * волосяными линиями, каплями и курсивом бросается в глаза вместо того, что
 * им написано. Остался Jost — геометрический гротеск в духе Futura: на
 * крупном кегле он держит строку тонкой и спокойной, а в мелких прописных с
 * широким просветом даёт ту самую сдержанность, на которой стоит Amara.
 * Разница между заголовком и подписью теперь — вес, кегль и разрядка, а не
 * пятый шрифт.
 *
 * Одно семейство на всю страницу ещё и потому, что Jost покрывает латиницу и
 * кириллицу: русской половине сайта больше не нужен второй шрифт, который
 * браузер подбирал по глифу.
 */
const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500"],
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
      className={`${sans.variable} h-full antialiased`}
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
