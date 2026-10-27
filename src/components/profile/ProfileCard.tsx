import Link from "next/link";
import Chrome from "@/components/chrome/Chrome";
import { CLINIC } from "@/constants/company";
import { fullName, type PersonCard } from "@/constants/people";

/**
 * Визитка человека клуба: страница, которую открывают прикосновением к
 * NFC-карте, по QR-коду с печатной карточки или по ссылке из подписи.
 *
 * Это карточка, а не раздел сайта, поэтому шапки с меню здесь нет: пришедший
 * сюда искал конкретного человека, и первое, что он должен увидеть, — имя, а
 * не навигацию. Из того же соображения главная кнопка одна — «сохранить в
 * контакты»: ради неё карту и подносят к телефону.
 *
 * Пустые поля не печатаются: нет WhatsApp — нет строки, нет снимка — нет
 * места под снимок. Пустая строка выглядит как сломанная карточка.
 */

type Row = { label: string; text: string; href?: string; external?: boolean };

export default function ProfileCard({ card }: { card: PersonCard }) {
  const name = fullName(card);
  const { lines, city, country } = CLINIC.address;

  const rows: Row[] = [];

  /* Телефон первым: карточку дают в руку, чтобы позвонили. */
  if (card.phone) {
    rows.push({
      label: card.labels.phone,
      text: card.phone,
      href: `tel:${card.phone.replace(/[^+\d]/g, "")}`,
    });
  }

  if (card.whatsapp) {
    rows.push({
      label: card.labels.whatsapp,
      text: card.whatsapp,
      href: `https://wa.me/${card.whatsapp.replace(/\D/g, "")}`,
      external: true,
    });
  }

  rows.push(
    { label: card.labels.email, text: card.email, href: `mailto:${card.email}` },
    {
      label: card.labels.instagram,
      text: card.instagram.handle,
      href: card.instagram.url,
      external: true,
    },
    { label: card.labels.where, text: `${lines[0]}, ${lines[1]}, ${city}, ${country}` },
    { label: card.labels.hours, text: card.hours },
  );

  return (
    <>
      <Chrome intro={false} />

      <main className="shell flex min-h-screen flex-1 items-center py-16 lg:py-24">
        <div className="mx-auto w-full max-w-2xl">
          <Link
            href="/"
            className="label text-[0.6rem] tracking-[0.24em] text-sand uppercase transition-colors hover:text-gold"
          >
            {CLINIC.name}
          </Link>

          <div className="mt-10 border-t border-gold/20 pt-10">
            <div className="flex items-start justify-between gap-8">
              <div>
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

                <p
                  className="eyebrow mt-8"
                  data-reveal
                  style={{ ["--delay" as string]: "60ms" }}
                >
                  {city} · {country}
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
                  {card.role}
                </p>
              </div>

              {card.photo && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={card.photo}
                  alt={name}
                  className="hidden w-40 shrink-0 rounded-sm object-cover sm:block"
                  data-reveal
                  style={{ ["--delay" as string]: "120ms", aspectRatio: "3 / 4" }}
                />
              )}
            </div>

            <dl className="mt-12 border-t border-gold/15">
              {rows.map((row, index) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-b border-gold/15 py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6"
                  data-reveal
                  style={{ ["--delay" as string]: `${240 + index * 50}ms` }}
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
              style={{ ["--delay" as string]: "560ms" }}
            >
              {/* Без `download`: телефон должен открыть файл в контактах сразу,
                  а не положить его в загрузки, откуда до контактов ещё идти.
                  На компьютере браузер всё равно скачает — .vcf он показать не
                  умеет. */}
              <a href={`/${card.slug}.vcf`} className="btn btn-gold">
                {card.save}
              </a>

              <a href={`mailto:${card.email}`} className="btn btn-line">
                {card.write}
              </a>
            </div>

            <p
              className="label mt-6 text-[0.58rem] leading-6 tracking-[0.12em] text-sand uppercase"
              data-reveal
              style={{ ["--delay" as string]: "620ms" }}
            >
              {card.saveNote}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
