import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Chrome from "@/components/chrome/Chrome";
import HtmlLang from "@/components/chrome/HtmlLang";
import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Method from "@/components/home/Method";
import Figures from "@/components/home/Figures";
import Programmes from "@/components/home/Programmes";
import Technology from "@/components/home/Technology";
import Place from "@/components/home/Place";
import Residence from "@/components/home/Residence";
import Lately from "@/components/home/Lately";
import Contact from "@/components/home/Contact";
import { COPY, type Lang } from "@/site/content";

/**
 * The home page, in one language.
 *
 * The order is an argument, read top to bottom: a claim, the reason it is not
 * a slogan, the method, the figures behind the method, what can be bought,
 * what it is done with, where it happens, what travels to a partner, and only
 * then the invitation.
 */
export default function HomePage({ lang }: { lang: Lang }) {
  const copy = COPY[lang];

  return (
    <>
      <Chrome />
      <HtmlLang lang={lang} />
      <SiteHeader lang={lang} />

      <main>
        <Hero copy={copy} lang={lang} />
        <Manifesto copy={copy} />
        <Method copy={copy} />
        <Figures copy={copy} />
        <Programmes copy={copy} />
        <Technology copy={copy} />
        <Place copy={copy} />
        <Residence copy={copy} />
        <Lately copy={copy} />
        <Contact copy={copy} />
      </main>

      <SiteFooter />
    </>
  );
}
