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
  return <p className="leading-8 text-white/60">{children}</p>;
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-white/90">{children}</strong>;
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="space-y-3">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 leading-8 text-white/60">
      <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-[#c8a45d]/60" />
      <span className="min-w-0">{children}</span>
    </li>
  );
}

export function MailLink({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="text-[#c8a45d] underline-offset-4 transition hover:underline"
    >
      {email}
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
      className="text-[#c8a45d] underline-offset-4 transition hover:underline"
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
          <dt className="font-medium text-white/90">{item.term}</dt>
          <dd className="mt-1.5 leading-8 text-white/60">{item.description}</dd>
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
            <tr className="border-b border-white/15">
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
              <tr key={row[columns[0].key]} className="border-b border-white/10">
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="py-4 pr-6 align-top leading-7 text-white/60"
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
            className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
          >
            <dl className="space-y-3">
              {columns.map((column) => (
                <div key={column.key}>
                  <dt className="text-xs tracking-[0.14em] text-white/40 uppercase">
                    {column.heading}
                  </dt>
                  <dd className="mt-1 leading-7 text-white/65">
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
