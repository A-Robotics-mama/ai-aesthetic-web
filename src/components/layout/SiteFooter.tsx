import Link from "next/link";
import { COMPANY, CLINIC, CONTACTS, TRADE_MARK } from "@/constants/company";

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
    <footer className="border-t border-white/10 px-6 py-12 text-sm text-white/45 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="font-medium text-white">{CLINIC.name}</p>
            {CLINIC.address.lines.map((line) => (
              <p key={line} className="mt-1">
                {line}
              </p>
            ))}
            <p>
              {CLINIC.address.city}, {CLINIC.address.country}
            </p>
          </div>

          <nav aria-label="Legal" className="flex flex-col gap-3">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Use
            </Link>
            <Link href="/data-deletion" className="transition hover:text-white">
              User Data Deletion
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="max-w-xs">
            <a
              href={`mailto:${CONTACTS.clinic.email}`}
              className="transition hover:text-white"
            >
              {CONTACTS.clinic.email}
            </a>
            <p className="mt-3">
              Data protection:{" "}
              <a
                href={`mailto:${CONTACTS.privacy.email}`}
                className="transition hover:text-white"
              >
                {CONTACTS.privacy.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/35">
          <p>
            {CLINIC.name} is operated by {COMPANY.legalName}, registration
            number {COMPANY.registrationNumber}, {COMPANY.jurisdiction}.
            Registered office: {COMPANY.registeredOffice.lines.join(", ")},{" "}
            {COMPANY.registeredOffice.country}.
          </p>

          <p className="mt-2">
            {TRADE_MARK.name} is a trade mark registered with the{" "}
            {TRADE_MARK.registry} under number {TRADE_MARK.number}. © {year}{" "}
            {COMPANY.legalName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
