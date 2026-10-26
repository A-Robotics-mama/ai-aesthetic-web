import Link from "next/link";
import { COMPANY, CLINIC, CONTACTS, TRADE_MARK } from "@/constants/company";
import { INSTAGRAM } from "@/site/media";

/**
 * Footer shared by every page.
 *
 * Carries the legal-entity line and the links to the three documents Meta
 * requires. Those links are what makes the documents reachable from anywhere
 * on the site, which is one of the things a reviewer checks.
 */
export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/15 bg-ink-2 py-14 lg:py-16">
      <div className="shell">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <p className="display text-2xl text-bone">{CLINIC.name}</p>
            <div className="mono mt-4 space-y-1 text-[0.7rem] leading-6 tracking-[0.12em] text-sand uppercase">
              {CLINIC.address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                {CLINIC.address.city}, {CLINIC.address.country}
              </p>
            </div>
          </div>

          {/* The home page carries the whole argument, but these three pages
              existed before it and are in the sitemap: a visitor arriving on an
              old link must still find their way around. */}
          <nav
            aria-label="The club"
            className="mono flex flex-col gap-3 text-[0.7rem] tracking-[0.16em] uppercase"
          >
            <Link href="/about" className="text-sand transition-colors hover:text-gold">
              About
            </Link>
            <Link href="/treatments" className="text-sand transition-colors hover:text-gold">
              What we do
            </Link>
            <Link href="/technologies" className="text-sand transition-colors hover:text-gold">
              Technology
            </Link>
            <Link href="/ru" className="text-sand transition-colors hover:text-gold">
              По-русски
            </Link>
          </nav>

          <nav aria-label="Legal" className="mono flex flex-col gap-3 text-[0.7rem] tracking-[0.16em] uppercase">
            <Link href="/privacy-policy" className="text-sand transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sand transition-colors hover:text-gold">
              Terms of Use
            </Link>
            <Link href="/data-deletion" className="text-sand transition-colors hover:text-gold">
              User Data Deletion
            </Link>
            <Link href="/contact" className="text-sand transition-colors hover:text-gold">
              Contact
            </Link>
          </nav>

          <div className="mono max-w-xs text-[0.7rem] leading-6 tracking-[0.12em] uppercase">
            <a
              href={`mailto:${CONTACTS.clinic.email}`}
              className="text-sand transition-colors hover:text-gold"
            >
              {CONTACTS.clinic.email}
            </a>
            <p className="mt-3 text-sand/70">
              Data protection:{" "}
              <a
                href={`mailto:${CONTACTS.privacy.email}`}
                className="transition-colors hover:text-gold"
              >
                {CONTACTS.privacy.email}
              </a>
            </p>
            <a
              href={INSTAGRAM.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-gold/80 transition-colors hover:text-gold"
            >
              {INSTAGRAM.handle} ↗
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-gold/10 pt-6 text-[0.68rem] leading-6 text-sand/60">
          <p>
            {CLINIC.name} is operated by {COMPANY.legalName}, registration number{" "}
            {COMPANY.registrationNumber}, {COMPANY.jurisdiction}. Registered office:{" "}
            {COMPANY.registeredOffice.lines.join(", ")}, {COMPANY.registeredOffice.country}.
          </p>

          <p className="mt-2">
            {TRADE_MARK.name} is a trade mark registered with the {TRADE_MARK.registry} under
            number {TRADE_MARK.number}. © {year} {COMPANY.legalName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
