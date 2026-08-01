import Link from "next/link";

/**
 * Header shared by every page.
 *
 * The wordmark links home rather than to an anchor, because on the legal pages
 * there is no section to scroll to and a dead link on a page Meta reviews is a
 * cheap way to fail review.
 */
export default function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="leading-tight">
          <span className="block text-lg font-semibold tracking-[0.22em]">
            AI AESTHETIC CLUB
          </span>
          <span className="mt-1 block text-xs tracking-[0.18em] text-[#c8a45d]">
            POWERED BY AESTHETIC ROBOTICS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
          <Link href="/#about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/#services" className="transition hover:text-white">
            Treatments
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
