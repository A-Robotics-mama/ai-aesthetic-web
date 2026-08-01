import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CLINIC, COMPANY } from "@/constants/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  /**
   * `metadataBase` turns the relative canonicals declared per page into
   * absolute URLs. Meta resolves the legal URLs it is given, so they have to
   * point at the live origin rather than at localhost.
   */
  metadataBase: new URL(CLINIC.origin),
  title: {
    default: `${CLINIC.name} — Aesthetic medicine in ${CLINIC.address.city}`,
    template: `%s — ${CLINIC.name}`,
  },
  description: CLINIC.description,
  applicationName: CLINIC.name,
  authors: [{ name: COMPANY.legalName }],
  openGraph: {
    type: "website",
    siteName: CLINIC.name,
    locale: "en_GB",
    url: CLINIC.origin,
    title: `${CLINIC.name} — Aesthetic medicine in ${CLINIC.address.city}`,
    description: CLINIC.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#090909] text-white">
        {children}
      </body>
    </html>
  );
}
