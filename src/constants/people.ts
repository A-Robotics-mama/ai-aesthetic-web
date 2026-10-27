import { CLINIC, COMPANY } from "@/constants/company";

/**
 * Личные карточки людей клуба — пока одна, Софии.
 *
 * Карточка существует в двух видах: страница, которую открывают по ссылке или
 * по QR-коду, и файл `.vcf`, который телефон кладёт прямо в контакты. Оба
 * собираются отсюда, поэтому имя, должность и адрес не могут разойтись между
 * тем, что человек прочитал, и тем, что у него осталось в телефоне.
 *
 * Имя и специальность — те же, что в базе клуба (`practitioners`, код SOFIIA:
 * «Dr. Sofiia Myliushko», «Врач-дерматолог»), чтобы карточка и расписание
 * говорили об одном человеке одинаково.
 */
export type PersonCard = {
  slug: string;
  /** Разобранное имя: vCard требует отдельно фамилию, имя и обращение. */
  name: { last: string; first: string; prefix: string };
  email: string;
  /**
   * Телефон. Пока пусто: рабочего номера у клуба нет, а подставлять чужой
   * нельзя. Пустая строка — не ошибка: строка не печатается на странице и в
   * `.vcf` не попадает. Появится номер — он добавляется здесь, и обе
   * половины карточки получают его разом.
   */
  phone: string;
  /** Тот же номер в WhatsApp, если он тот же; пусто — кнопки нет. */
  whatsapp: string;
  instagram: { handle: string; url: string };
  en: PersonCopy;
  ru: PersonCopy;
};

export type PersonCopy = {
  /** Надзаголовок над именем. */
  eyebrow: string;
  /** Должность одной строкой. */
  role: string;
  /** Две-три фразы о том, как она работает. */
  lede: string;
  /** Подписи строк карточки. */
  labels: {
    email: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    site: string;
    where: string;
    hours: string;
  };
  hours: string;
  save: string;
  write: string;
  back: string;
  /** Пояснение под кнопкой: что именно скачается. */
  saveNote: string;
};

export const SOFIIA: PersonCard = {
  slug: "sofiia",
  name: { last: "Myliushko", first: "Sofiia", prefix: "Dr." },
  email: "s.myliushko@ai-aesthetic.eu",
  phone: "",
  whatsapp: "",
  instagram: {
    handle: "@ai.aesthetic_club",
    url: "https://www.instagram.com/ai.aesthetic_club/",
  },

  en: {
    eyebrow: `${CLINIC.address.city} · ${CLINIC.address.country}`,
    role: "Dermatologist",
    lede:
      "Sees every member herself, and starts with the readings rather than the treatment: an instrument assessment first, then a protocol written around it, then the same measurements again to show what changed.",
    labels: {
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      site: "The club",
      where: "Where",
      hours: "Open",
    },
    hours: "Monday – Saturday · 07:00 – 21:00",
    save: "Save to contacts",
    write: "Write to the doctor",
    back: "ai-aesthetic.eu",
    saveNote: "A contact card your phone can open — name, address and email in one file.",
  },

  ru: {
    eyebrow: "Лимассол · Кипр",
    role: "Врач-дерматолог",
    lede:
      "Ведёт приём сама и начинает с показателей, а не с процедуры: сначала аппаратная диагностика, потом протокол, собранный под её результаты, потом те же замеры заново — чтобы было видно, что изменилось.",
    labels: {
      email: "Почта",
      phone: "Телефон",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      site: "Клуб",
      where: "Где принимает",
      hours: "Часы работы",
    },
    hours: "Понедельник – суббота · 07:00 – 21:00",
    save: "Сохранить в контакты",
    write: "Написать доктору",
    back: "ai-aesthetic.eu",
    saveNote: "Карточка контакта для телефона — имя, адрес и почта одним файлом.",
  },
};

/** Полное имя в том виде, в каком его печатают и на странице, и в vCard. */
export function fullName(card: PersonCard): string {
  return `${card.name.prefix} ${card.name.first} ${card.name.last}`;
}

/** Организация, от имени которой выдана карточка. */
export const CARD_ORG = { club: CLINIC.name, legal: COMPANY.legalName } as const;
