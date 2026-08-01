import type { ReactNode } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { COMPANY, CLINIC, CONTACTS } from "@/constants/company";
import { MailLink } from "./prose";

export type LegalSection = {
  /** Anchor target. Stable across edits — Meta's app settings link to these. */
  id: string;
  title: string;
  body: ReactNode;
};

type LegalPageProps = {
  title: string;
  /** Semantic version of the document, e.g. "1.0". */
  version: string;
  /** ISO date, e.g. "2026-08-01". Rendered in a readable long form. */
  effectiveDate: string;
  /**
   * Plain-language summary shown before the numbered clauses. A reading aid
   * only — the clauses govern, and the page says so.
   */
  summary: ReactNode;
  sections: readonly LegalSection[];
};

function formatDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Shell shared by the Privacy Policy, Terms of Use and Data Deletion pages.
 *
 * Sections are passed as data rather than as children so the table of contents
 * and the body are generated from one array: a clause can never be listed but
 * missing, or present but unlisted.
 *
 * Every document ends with the same identity block. Meta's review compares the
 * entity named in the app against the one named on the site, so the company
 * details are rendered here once instead of being retyped per page.
 */
export default function LegalPage({
  title,
  version,
  effectiveDate,
  summary,
  sections,
}: LegalPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#090909] text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-16 lg:px-10 lg:py-24">
        <header className="max-w-3xl">
          <p className="text-sm tracking-[0.22em] text-[#c8a45d] uppercase">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            {title}
          </h1>

          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/40">
            <div className="flex gap-2">
              <dt>Version</dt>
              <dd className="text-white/60">{version}</dd>
            </div>

            <div className="flex gap-2">
              <dt>Effective</dt>
              <dd className="text-white/60">
                <time dateTime={effectiveDate}>{formatDate(effectiveDate)}</time>
              </dd>
            </div>
          </dl>
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
          <nav
            aria-label="On this page"
            className="lg:sticky lg:top-10 lg:self-start"
          >
            <h2 className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">
              On this page
            </h2>

            <ol className="mt-4 space-y-2.5">
              {sections.map((section, index) => (
                <li key={section.id} className="flex gap-3 text-sm">
                  <span className="w-5 shrink-0 text-right tabular-nums text-white/30">
                    {index + 1}
                  </span>

                  <a
                    href={`#${section.id}`}
                    className="text-white/55 transition hover:text-white"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 max-w-3xl">
            <section
              aria-label="Summary"
              className="rounded-2xl border border-[#c8a45d]/30 bg-[#c8a45d]/10 p-6 sm:p-8"
            >
              <h2 className="text-sm font-semibold tracking-[0.14em] text-[#d9bd7b] uppercase">
                In short
              </h2>

              <div className="mt-4 space-y-3 leading-8 text-white/70">
                {summary}
              </div>

              <p className="mt-5 text-xs leading-6 text-white/40">
                This summary is provided for readability. Only the numbered
                clauses below are binding.
              </p>
            </section>

            <div className="mt-14 space-y-14">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="scroll-mt-10"
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="flex gap-4 text-xl font-semibold tracking-tight"
                  >
                    <span className="tabular-nums text-[#c8a45d]">
                      {index + 1}.
                    </span>
                    <span>{section.title}</span>
                  </h2>

                  <div className="mt-4 space-y-4">{section.body}</div>
                </section>
              ))}
            </div>

            <section
              aria-label="Who is responsible"
              className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <h2 className="text-sm font-semibold tracking-[0.14em] text-white/50 uppercase">
                Data controller
              </h2>

              <div className="mt-4 grid gap-6 text-sm leading-7 text-white/60 sm:grid-cols-2">
                <div>
                  <p className="font-medium text-white/90">
                    {COMPANY.legalName}
                  </p>
                  <p className="mt-1">
                    Registration number {COMPANY.registrationNumber}
                  </p>
                  <p>VAT {COMPANY.vatNumber}</p>
                  <p className="mt-3 text-white/45">Registered office</p>
                  {COMPANY.registeredOffice.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>{COMPANY.registeredOffice.country}</p>
                </div>

                <div>
                  <p className="font-medium text-white/90">
                    {CLINIC.name} — clinic
                  </p>
                  {CLINIC.address.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  <p>
                    {CLINIC.address.city}, {CLINIC.address.country}
                  </p>
                  <p className="mt-3 text-white/45">
                    Privacy and data protection
                  </p>
                  <p>
                    <MailLink email={CONTACTS.privacy.email} />
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
