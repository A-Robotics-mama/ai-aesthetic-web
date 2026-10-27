import Link from "next/link";
import Chrome from "@/components/chrome/Chrome";
import { CLINIC } from "@/constants/company";
import { fullName, type PersonCard } from "@/constants/people";
import type { Lang } from "@/site/content";

/**
 * Визитка человека клуба: страница, которую открывают по ссылке из подписи в
 * почте или по QR-коду с печатной карточки.
 *
 * Это карточка, а не раздел сайта, поэтому шапки с меню здесь нет: пришедший
 * сюда искал конкретного человека, и первое, что он должен увидеть, — имя, а
 * не навигацию. Из того же соображения главная кнопка одна — «сохранить в
 * контакты»: ради неё страницу и открывают с телефона.
 *
 * Пустые поля не печатаются: пока у клуба нет рабочего номера, строки
 * «телефон» на странице просто нет — пустая строка выглядит как сломанная
 * карточка, а не как карточка без телефона.
 */

type Row = { label: string; text: string; href?: string; external?: boolean };

export default function ProfileCard({
  card,
  lang,
}: {
  card: PersonCard;
  lang: Lang;
}) {
  const copy = card[lang];
  const name = fullName(card);
  const other = lang === "ru" ? `/${card.slug}` : `/ru/${card.slug}`;
  const home = lang === "ru" ? "/ru" : "/";
  const { lines, city, country } = CLINIC.address;

  const rows: Row[] = [];

  if (card.phone) {
    rows.push({
      label: copy.labels.phone,
      text: card.phone,
      href: `tel:${card.phone.replace(/[^+\d]/g, "")}`,
    });
  }

  if (card.whatsapp) {
    rows.push({
      label: copy.labels.whatsapp,
      text: card.whatsapp,
      href: `https://wa.me/${card.whatsapp.replace(/[^\d]/g, "")}`,
      external: true,
    });
  }

  rows.push(
    { label: copy.labels.email, text: card.email, href: `mailto:${card.email}` },
    {
      label: copy.labels.instagram,
      text: card.instagram.handle,
      href: card.instagram.url,
      external: true,
    },
    { label: copy.labels.where, text: `${lines[0]}, ${lines[1]}, ${city}, ${country}` },
    { label: copy.labels.hours, text: copy.hours },
  );

  return (
    <>
      <Chrome intro={false} />

      <main className="shell flex min-h-screen flex-1 items-center py-16 lg:py-24">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex items-center justify-between">
            <Link
              href={home}
              className="label text-[0.6rem] tracking-[0.24em] text-sand uppercase transition-colors hover:text-gold"
            >
              {CLINIC.name}
            </Link>

            <Link
              href={other}
              className="label rounded-full border border-gold/30 px-3 py-1.5 text-[0.6rem] tracking-[0.2em] text-gold uppercase transition-colors hover:border-gold hover:bg-gold/10"
            >
              {lang === "ru" ? "EN" : "RU"}
            </Link>
          </div>

          <div className="mt-10 border-t border-gold/20 pt-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/logo-440.png"
              alt=""
              aria-hidden
              width={440}
              height={440}
              className="mark w-28 object-contain"
              data-reveal
            />

            <p className="eyebrow mt-8" data-reveal style={{ ["--delay" as string]: "60ms" }}>
              {copy.eyebrow}
            </p>

            <h1
              className="display mt-5 text-[clamp(2.1rem,1.4rem+2.6vw,3.4rem)]"
              data-reveal
              style={{ ["--delay" as string]: "120ms" }}
            >
              {name}
            </h1>

            <p
              className="label mt-4 text-[0.66rem] tracking-[0.26em] text-gold uppercase"
              data-reveal
              style={{ ["--delay" as string]: "180ms" }}
            >
              {copy.role}
            </p>

            {copy.lede && (
              <p className="lede mt-7" data-reveal style={{ ["--delay" as string]: "240ms" }}>
                {copy.lede}
              </p>
            )}

            <dl className="mt-12 border-t border-gold/15">
              {rows.map((row, index) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-b border-gold/15 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6"
                  data-reveal
                  style={{ ["--delay" as string]: `${300 + index * 50}ms` }}
                >
                  <dt className="label text-[0.58rem] tracking-[0.24em] text-sand uppercase">
                    {row.label}
                  </dt>
                  <dd className="text-[0.95rem] leading-7 text-bone/75">
                    {row.href ? (
                      <a
                        href={row.href}
                        {...(row.external
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className="transition-colors hover:text-gold"
                      >
                        {row.text}
                      </a>
                    ) : (
                      row.text
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div
              className="mt-12 flex flex-wrap items-center gap-4"
              data-reveal
              style={{ ["--delay" as string]: "600ms" }}
            >
              {/* Без `download`: телефон должен открыть файл в контактах сразу,
                  а не положить его в загрузки, откуда до контактов ещё идти.
                  На компьютере браузер всё равно скачает — .vcf он показать не
                  умеет. */}
              <a href={`/${card.slug}.vcf`} className="btn btn-gold">
                {copy.save}
              </a>

              <a href={`mailto:${card.email}`} className="btn btn-line">
                {copy.write}
              </a>
            </div>

            <p
              className="label mt-6 text-[0.58rem] leading-6 tracking-[0.12em] text-sand uppercase"
              data-reveal
              style={{ ["--delay" as string]: "660ms" }}
            >
              {copy.saveNote}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
