import type { ReactNode } from "react";
import Chrome from "@/components/chrome/Chrome";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

/**
 * The frame every page other than the home page sits in.
 *
 * The header is fixed, so the padding at the top is the shell's job rather than
 * each page's; and the entrance curtain is suppressed here, because a document
 * reached from a footer link should open on the document.
 */
export default function PageShell({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Chrome intro={false} />
      <SiteHeader />

      <main className="shell flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <header className="max-w-4xl">
          <p className="eyebrow" data-reveal>
            {eyebrow}
          </p>

          <h1
            className="display mt-6 text-[clamp(2.2rem,1.4rem+2.8vw,3.8rem)]"
            data-reveal
            style={{ ["--delay" as string]: "80ms" }}
          >
            {title}
          </h1>

          {lede && (
            <p className="lede mt-7" data-reveal style={{ ["--delay" as string]: "160ms" }}>
              {lede}
            </p>
          )}
        </header>

        {children}
      </main>

      <SiteFooter />
    </>
  );
}
