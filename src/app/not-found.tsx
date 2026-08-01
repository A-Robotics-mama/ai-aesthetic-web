import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#090909] text-white">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.22em] text-[#c8a45d] uppercase">
            404
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            This page does not exist.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/60">
            The link may be out of date. Everything on the site is reachable
            from the home page, and the clinic is happy to point you to the
            right place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-[#c8a45d] px-8 py-4 text-center font-medium text-black transition hover:bg-[#d8b96e]"
            >
              Go to the home page
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-8 py-4 text-center font-medium transition hover:border-white/35 hover:bg-white/5"
            >
              Contact the clinic
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
