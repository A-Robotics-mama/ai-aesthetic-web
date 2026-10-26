import Link from "next/link";
import Chrome from "@/components/chrome/Chrome";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Chrome intro={false} />
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pt-32 pb-24 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow">
            404
          </p>

          <h1 className="mt-4 display text-[clamp(2.2rem,1.4rem+2.8vw,3.8rem)]">
            This page does not exist.
          </h1>

          <p className="mt-6 text-lg leading-8 text-bone/65">
            The link may be out of date. Everything on the site is reachable
            from the home page, and the club is happy to point you to the
            right place.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="btn btn-gold"
            >
              Go to the home page
            </Link>

            <Link
              href="/contact"
              className="btn btn-line"
            >
              Contact the club
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
