import { CLINIC, COMPANY } from "@/constants/company";

/**
 * Личные карточки людей клуба — пока одна, Софии.
 *
 * Карточка живёт в двух видах: страница, которую открывают по ссылке, по
 * QR-коду или прикосновением к NFC-карте, и файл `.vcf`, который телефон
 * кладёт прямо в контакты. Оба собираются отсюда, поэтому имя, должность и
 * телефон не могут разойтись между тем, что человек прочитал, и тем, что у
 * него осталось в телефоне.
 *
 * Только по-английски. Борис, 27.10.2026: «всё, русского не надо» — карточку
 * дают в руку гостю отеля и партнёру, а не клиенту, который пишет в директ.
 *
 * Всё, что здесь написано, — слова Бориса, не мои: имя, должность, номер и
 * почта продиктованы им 27.10.2026. См. [[aiac-words-about-people-are-theirs]].
 */
export type PersonCard = {
  slug: string;
  /** Разобранное имя: vCard требует отдельно фамилию, имя и обращение. */
  name: { last: string; first: string; prefix: string };
  /** Должность одной строкой — ровно так, как её назвал Борис. */
  role: string;
  email: string;
  /** Номер в международном виде: его же набирает телефон по ссылке `tel:`. */
  phone: string;
  /**
   * Тот же номер в WhatsApp, если он там есть; пусто — строки нет. Пустое
   * поле не печатается ни на странице, ни в `.vcf`: пустая строка выглядит
   * как сломанная карточка, а не как карточка без WhatsApp.
   */
  whatsapp: string;
  instagram: { handle: string; url: string };
  /** Снимок для страницы: квадрат по лицу. */
  photo: string;
  /**
   * Тот же снимок для поля PHOTO внутри `.vcf` — путь от `public/`. JPEG, а
   * не webp: контакты на телефоне понимают JPEG, webp не везде. Файл читается
   * на сборке и уезжает в карточку в base64, чтобы лицо было видно в
   * контактах и тогда, когда хостинга уже нет.
   */
  photoFile: string;
  labels: {
    phone: string;
    whatsapp: string;
    email: string;
    instagram: string;
    where: string;
    hours: string;
  };
  hours: string;
  save: string;
  write: string;
  saveNote: string;
};

export const SOFIIA: PersonCard = {
  slug: "sofiia",
  name: { last: "Myliushko", first: "Sofiia", prefix: "Dr." },
  role: "Owner & Director",
  email: "office@ai-aesthetic.eu",
  phone: "+357 99 779776",
  /* Тот же номер, что и телефон: он же стоит в её карточке MS Cosmotrade. */
  whatsapp: "+357 99 779776",
  instagram: {
    handle: "@ai.aesthetic_club",
    url: "https://www.instagram.com/ai.aesthetic_club/",
  },
  photo: "/media/sofiia.webp",
  photoFile: "media/sofiia-card.jpg",
  labels: {
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    instagram: "Instagram",
    where: "Where",
    hours: "Open",
  },
  hours: "Monday – Saturday · 07:00 – 21:00",
  save: "Save to contacts",
  write: "Write",
  saveNote: "A contact card your phone can open — name, number and address in one file.",
};

/** Полное имя в том виде, в каком его печатают и на странице, и в vCard. */
export function fullName(card: PersonCard): string {
  return `${card.name.prefix} ${card.name.first} ${card.name.last}`;
}

/** Организация, от имени которой выдана карточка. */
export const CARD_ORG = { club: CLINIC.name, legal: COMPANY.legalName } as const;
