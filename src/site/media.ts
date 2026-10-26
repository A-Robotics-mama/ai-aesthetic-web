/**
 * The club's own photographs, and which block each one belongs to.
 *
 * Снимки — из инстаграма клуба (@ai.aesthetic_club): это настоящие кабинеты,
 * настоящие аппараты и настоящие люди, а не сток. Кадры обрезаны так, чтобы в
 * них не осталось вшитых рекламных надписей: подписи на странице делает
 * вёрстка, а не картинка.
 *
 * Ключи совпадают с `id` записей в content.ts — так обе языковые версии
 * ссылаются на одну и ту же фотографию и не могут разъехаться.
 */

export const IMAGES: Record<string, string> = {
  "hero-face": "/media/hero-face.webp",

  "step-diagnostics": "/media/step-diagnostics.webp",
  "step-protocol": "/media/step-protocol.webp",
  "step-technology": "/media/step-technology.webp",
  "step-result": "/media/step-result.webp",

  "prog-face": "/media/prog-face.webp",
  "prog-body": "/media/prog-body.webp",
  "prog-care": "/media/prog-care.webp",
  "prog-laser": "/media/prog-laser.webp",
  "prog-longevity": "/media/prog-longevity.webp",
  "prog-rituals": "/media/prog-rituals.webp",

  "place-tower": "/media/place-tower.webp",
  "place-lounge": "/media/place-lounge.webp",
  "place-robes": "/media/place-robes.webp",
  "place-sign": "/media/place-sign.webp",
  "place-terrace": "/media/place-terrace.webp",
  "place-people": "/media/place-people.webp",
  "tech-robot": "/media/tech-robot.webp",

  "resort-sea": "/media/resort-sea.webp",
  "resort-shore": "/media/resort-shore.webp",
  "texture-towels": "/media/texture-towels.webp",
  "texture-dune": "/media/texture-dune.webp",

  "accent-golden": "/media/accent-golden.webp",
  "accent-model": "/media/accent-model.webp",
  "accent-scent": "/media/accent-scent.webp",
  "accent-serum": "/media/accent-serum.webp",
  "accent-swatch": "/media/accent-swatch.webp",
};

/**
 * Снимки по аппаратам: ключ — `id` записи в `technology.devices`, значение —
 * порядок кадров в показе. Первым всегда идёт сам аппарат, дальше — работа.
 *
 * Борис, 26.10.2026: «надо скачать и использовать этот видеоряд и все
 * следующие» — кадры сняты со страниц производителей по его списку ссылок,
 * приведены к 4:3 и пережаты в webp. Своих фотографий аппаратов у клуба пока
 * нет; как появятся, сюда подставляются они.
 */
export const DEVICE_SHOTS: Record<string, readonly string[]> = {
  "tech-isemeco": [
    "/media/dev/tech-isemeco-1.webp",
    "/media/dev/tech-isemeco-2.webp",
    "/media/dev/tech-isemeco-3.webp",
  ],
  "tech-visbody": [
    "/media/dev/tech-visbody-1.webp",
    "/media/dev/tech-visbody-2.webp",
    "/media/dev/tech-visbody-3.webp",
    "/media/dev/tech-visbody-4.webp",
  ],
  "tech-ona": [
    "/media/dev/tech-ona-1.webp",
    "/media/dev/tech-ona-2.webp",
    "/media/dev/tech-ona-3.webp",
    "/media/dev/tech-ona-4.webp",
  ],
  "tech-elite": [
    "/media/dev/tech-elite-1.webp",
    "/media/dev/tech-elite-2.webp",
    "/media/dev/tech-elite-3.webp",
  ],
  "tech-reverso": [
    "/media/dev/tech-reverso-1.webp",
    "/media/dev/tech-reverso-2.webp",
    "/media/dev/tech-reverso-3.webp",
  ],
  "tech-icoone": [
    "/media/dev/tech-icoone-1.webp",
    "/media/dev/tech-icoone-2.webp",
    "/media/dev/tech-icoone-3.webp",
    "/media/dev/tech-icoone-4.webp",
    "/media/dev/tech-icoone-5.webp",
  ],
  "tech-quattro": [
    "/media/dev/tech-quattro-1.webp",
    "/media/dev/tech-quattro-2.webp",
    "/media/dev/tech-quattro-3.webp",
  ],
  "tech-ipl": [
    "/media/dev/tech-ipl-1.webp",
    "/media/dev/tech-ipl-2.webp",
    "/media/dev/tech-ipl-3.webp",
  ],
  "tech-resurfx": [
    "/media/dev/tech-resurfx-1.webp",
    "/media/dev/tech-resurfx-2.webp",
  ],
  "tech-cryoskin": [
    "/media/dev/tech-cryoskin-1.webp",
    "/media/dev/tech-cryoskin-2.webp",
    "/media/dev/tech-cryoskin-3.webp",
  ],
  "tech-vip": [
    "/media/dev/tech-vip-1.webp",
    "/media/dev/tech-vip-2.webp",
    "/media/dev/tech-vip-3.webp",
  ],
  "tech-oxygenium": [
    "/media/dev/tech-oxygenium-1.webp",
    "/media/dev/tech-oxygenium-2.webp",
    "/media/dev/tech-oxygenium-3.webp",
  ],
};

/** The vertical loop in the hero, and the walk-through in the club block. */
export const CLIPS = {
  hero: {
    mp4: "/media/hero.mp4",
    webm: "/media/hero.webm",
    poster: "/media/hero-poster.webp",
  },
  place: {
    mp4: "/media/place.mp4",
    webm: "/media/place.webm",
    poster: "/media/place-poster.webp",
  },
} as const;

/**
 * The equipment park, exactly as it stands in the club's own records
 * (`aiac.device_units`). It runs across the page under the hero, so a visitor
 * sees the list before any claim is made about it.
 */
export const PARK: readonly string[] = [
  "ISEMECO 3D D9",
  "Visbody",
  "INDIBA Reverso",
  "INDIBA ONA",
  "INDIBA Elite NS",
  "icoone Laser Med",
  "icoone Laser Body",
  "Lumenis Stellar M22",
  "ResurFX",
  "LightSheer Quattro",
  "CryoSkin",
  "VIP Hi-Line",
  "Oxygenium",
];

/** Recent work, shown as a strip that links to the account it came from. */
export const STRIP: readonly string[] = [
  "accent-model",
  "accent-swatch",
  "place-sign",
  "accent-scent",
  "place-people",
  "accent-serum",
];

export const INSTAGRAM = {
  handle: "@ai.aesthetic_club",
  url: "https://www.instagram.com/ai.aesthetic_club/",
} as const;

/** Google Maps needs no key for a plain search link. */
export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Dream+Tower+Amathoundos+62+Agios+Tychonas+Limassol";
