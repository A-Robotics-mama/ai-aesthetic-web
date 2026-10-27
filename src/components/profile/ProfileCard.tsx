import Link from "next/link";
import type { ReactNode } from "react";
import Chrome from "@/components/chrome/Chrome";
import { CLINIC } from "@/constants/company";
import { fullName, type PersonCard } from "@/constants/people";

/**
 * Визитка человека клуба: страница, на которую смотрит NFC-карта.
 *
 * Порядок — тот же, что на карточке Бориса в MS Cosmotrade («надо это все
 * разместить на NFC карте, как сделано у меня»): снимок в рамке, имя,
 * должность, название, во всю ширину кнопка «сохранить контакт», ряд круглых
 * кнопок действий и знак внизу. Телефон держат в одной руке, поэтому всё
 * идёт одним столбцом и главная кнопка — размером с палец.
 *
 * Цвета наши: кремовый фон и бронза, а не чёрный с золотом, — на сайте клуба
 * утверждён один фон, и визитка не повод заводить второй.
 *
 * Пустые поля не печатаются: нет WhatsApp — нет кнопки.
 */

export default function ProfileCard({ card }: { card: PersonCard }) {
  const name = fullName(card);
  const { lines, city, country } = CLINIC.address;
  const digits = card.phone.replace(/\D/g, "");

  return (
    <>
      <Chrome intro={false} />

      <main className="shell flex min-h-screen flex-1 items-center py-14">
        <section className="mx-auto flex w-full max-w-md flex-col items-center text-center">
          {card.photo && (
            <div className="rounded-sm border border-gold/60 p-1" data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.photo}
                alt={name}
                width={640}
                height={640}
                className="h-[13rem] w-[13rem] rounded-sm object-cover"
              />
            </div>
          )}

          <h1
            className="display mt-7 text-[clamp(1.8rem,1.3rem+1.8vw,2.4rem)]"
            data-reveal
            style={{ ["--delay" as string]: "60ms" }}
          >
            {name}
          </h1>

          <p
            className="mt-2 text-[1.02rem] leading-7 text-bone/70"
            data-reveal
            style={{ ["--delay" as string]: "120ms" }}
          >
            {card.role}
          </p>

          <p
            className="label mt-2 text-[0.62rem] tracking-[0.24em] text-gold uppercase"
            data-reveal
            style={{ ["--delay" as string]: "180ms" }}
          >
            {CLINIC.name}
          </p>

          {/* Без `download`: телефон должен открыть файл в контактах сразу, а
              не положить его в загрузки, откуда до контактов ещё идти. На
              компьютере браузер всё равно скачает — .vcf он показать не умеет. */}
          <a
            href={`/${card.slug}.vcf`}
            className="btn btn-gold mt-9 w-full"
            data-reveal
            style={{ ["--delay" as string]: "240ms" }}
          >
            {card.save}
          </a>

          <div
            className="mt-9 grid w-full grid-cols-4 gap-3"
            data-reveal
            style={{ ["--delay" as string]: "300ms" }}
          >
            {card.phone && (
              <Action href={`tel:+${digits}`} label={card.labels.phone}>
                <PhoneIcon />
              </Action>
            )}

            {card.whatsapp && (
              <Action
                href={`https://wa.me/${card.whatsapp.replace(/\D/g, "")}`}
                label={card.labels.whatsapp}
              >
                <WhatsAppIcon />
              </Action>
            )}

            <Action href={`mailto:${card.email}`} label={card.labels.email}>
              <MailIcon />
            </Action>

            <Action href={card.instagram.url} label={card.labels.instagram}>
              <InstagramIcon />
            </Action>
          </div>

          <dl
            className="mt-10 w-full border-t border-gold/15 text-left"
            data-reveal
            style={{ ["--delay" as string]: "360ms" }}
          >
            {/* Номер и почта уже стоят кнопками выше — в списке остаётся то,
                чего кнопкой не нажмёшь. */}
            <Line label={card.labels.where} value={`${lines[0]}, ${lines[1]}, ${city}, ${country}`} />
            <Line label={card.labels.hours} value={card.hours} />
          </dl>

          <Link
            href="/"
            aria-label={CLINIC.name}
            className="mt-12 block w-full border-t border-gold/15 pt-8"
            data-reveal
            style={{ ["--delay" as string]: "420ms" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/logo-440.png"
              alt={CLINIC.name}
              width={440}
              height={440}
              className="mark mx-auto w-28 object-contain"
            />
          </Link>
        </section>
      </main>
    </>
  );
}

/** Круглая кнопка действия: иконка и подпись под ней. */
function Action({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const away = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      {...(away ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="label flex flex-col items-center gap-2 text-[0.52rem] tracking-[0.18em] text-sand uppercase transition-colors hover:text-gold"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 transition-colors hover:border-gold">
        {children}
      </span>
      {label}
    </a>
  );
}

/** Строка списка под кнопками: подпись слева, значение справа. */
function Line({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="grid gap-1 border-b border-gold/15 py-3.5 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-5">
      <dt className="label text-[0.56rem] tracking-[0.22em] text-sand uppercase">{label}</dt>
      <dd className="text-[0.92rem] leading-6 text-bone/75">
        {href ? (
          <a href={href} className="transition-colors hover:text-gold">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

/* Иконки — те же четыре действия, что на карточке MS Cosmotrade, нарисованы
   линией в одну толщину, чтобы в ряду они выглядели одним набором. */

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.45L3 20l1.1-4.7A8.5 8.5 0 1 1 20.5 11.5Z" />
      <path d="M8.5 7.8c.4 3.3 2.4 5.3 5.7 5.7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
