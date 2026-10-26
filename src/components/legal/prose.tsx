import type { ReactNode } from "react";

/**
 * Typography for the legal documents.
 *
 * Kept as components rather than a global `.prose` stylesheet because the
 * clause bodies are written as JSX: a paragraph often contains a link to
 * another clause or an interpolated constant, and wrapping raw HTML would put
 * the address of the company inside a string where nothing can check it.
 */

export function P({ children }: { children: ReactNode }) {
  return <p className="leading-8 text-bone/65">{children}</p>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-bone/90">{children}</strong>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="space-y-3">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 leading-8 text-bone/65">
      <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-gold/60" />
      <span className="min-w-0">{children}</span>
    </li>
  );
}

export function MailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-gold underline-offset-4 transition hover:underline"
    >
      {email}
    </a>
  );
}

/**
 * A mail link rendered as a button, with the subject and body already filled.
 *
 * The plain {@link MailLink} is right inside a sentence; this is for the one
 * action a page exists to make easy. Apple's review of the mobile app follows
 * the published route itself, and a route that is a sentence telling someone
 * to compose an email by hand is one the reviewer may judge too hard to find.
 *
 * The subject and body are encoded, because a subject is a sentence with
 * spaces and a full stop: unencoded it breaks the link in some mail clients
 * and is silently truncated in others. The address itself is not encoded —
 * `@` is a delimiter there, not a character to escape, and a `club%40` address
 * is what some clients refuse to open.
 */
export function MailButton({
  email,
  subject,
  body,
  children,
}: {
  email: string;
  subject: string;
  body: string;
  children: ReactNode;
}) {
  const href =
    `mailto:${email}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={href}
      className="inline-flex btn btn-gold"
    >
      {children}
    </a>
  );
}

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-gold underline-offset-4 transition hover:underline"
    >
      {children}
    </a>
  );
}

/**
 * Term-and-definition list, for clauses that are a set of short definitions
 * rather than running prose.
 */
export function Defs({
  items,
}: {
  items: readonly { term: string; description: string }[];
}) {
  return (
    <dl className="space-y-5">
      {items.map((item) => (
        <div key={item.term}>
          <dt className="font-medium text-bone/90">{item.term}</dt>
          <dd className="mt-1.5 leading-8 text-bone/65">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}

export type Column = { key: string; heading: string };

/**
 * Table that degrades to stacked cards below `md`.
 *
 * The processor list is the only tabular content on the site and it has to
 * stay readable on a phone, which is where most people open a privacy policy
 * linked from Instagram.
 */
export function Table<Row extends Record<string, string>>({
  columns,
  rows,
  caption,
}: {
  columns: readonly Column[];
  rows: readonly Row[];
  caption: string;
}) {
  return (
    <div>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>

          <thead>
            <tr className="border-b border-bone/20">
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="py-3 pr-6 align-bottom font-medium text-white/80"
                >
                  {column.heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row[columns[0].key]} className="border-b border-gold/15">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="py-4 pr-6 align-top leading-7 text-bone/65"
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-4 md:hidden">
        {rows.map((row) => (
          <li
            key={row[columns[0].key]}
            className="rounded-xl border border-gold/15 bg-ink-2 p-5"
          >
            <dl className="space-y-3">
              {columns.map((column) => (
                <div key={column.key}>
                  <dt className="text-xs tracking-[0.14em] text-sand/80 uppercase">
                    {column.heading}
                  </dt>
                  <dd className="mt-1 leading-7 text-bone/70">
                    {row[column.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
