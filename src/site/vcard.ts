import { CLINIC } from "@/constants/company";
import { CARD_ORG, fullName, type PersonCard } from "@/constants/people";

/**
 * Карточка контакта в формате vCard.
 *
 * Версия 3.0, а не 4.0: четвёртую понимают не все телефоны, а третью кладёт в
 * контакты всё, что встречается у гостей — iPhone, Android, Outlook. Строки
 * разделяются CRLF и сворачиваются по 75 октетов, как требует RFC 2426: iOS
 * прощает длинную строку, но Outlook на ней спотыкается.
 *
 * Пустые поля пропускаются: карточка без WhatsApp — это карточка без строки,
 * а не строка `X-SOCIALPROFILE:`, которая в контактах выглядит как пустая
 * ссылка.
 */

/** Экранирование по RFC 2426: запятая, точка с запятой, обратный слэш, перевод строки. */
function esc(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\;");
}

/**
 * Свёртка длинной строки. Считаем октеты, а не знаки: в кириллице и в
 * base64-снимке предел в 75 наступает не там, где кажется по длине строки.
 */
function fold(line: string): string[] {
  const bytes = new TextEncoder().encode(line);
  if (bytes.length <= 75) return [line];

  const out: string[] = [];
  let piece = "";
  let count = 0;
  let first = true;

  for (const ch of line) {
    const size = new TextEncoder().encode(ch).length;
    /* В продолжении строки первый октет занят пробелом. */
    const limit = first ? 75 : 74;
    if (count + size > limit) {
      out.push(first ? piece : ` ${piece}`);
      first = false;
      piece = "";
      count = 0;
    }
    piece += ch;
    count += size;
  }
  if (piece) out.push(first ? piece : ` ${piece}`);
  return out;
}

export function vcard(card: PersonCard): string {
  const name = fullName(card);
  const { lines, city, country } = CLINIC.address;

  const fields: [string, string][] = [
    ["VERSION", "3.0"],
    ["N", `${esc(card.name.last)};${esc(card.name.first)};;${esc(card.name.prefix)};`],
    ["FN", esc(name)],
    ["ORG", esc(CARD_ORG.club)],
    ["TITLE", esc(card.role)],
  ];

  /* Телефон выше почты: карточку дают в руку, чтобы позвонили. */
  if (card.phone) fields.push(["TEL;TYPE=CELL,VOICE", card.phone]);
  if (card.email) fields.push(["EMAIL;TYPE=INTERNET,PREF", card.email]);

  fields.push(
    /* ADR: почтовый ящик; дополнение; улица; город; область; индекс; страна. */
    [
      "ADR;TYPE=WORK",
      `;;${esc(`${lines[0]}, ${lines[1]}`)};${esc(city)};;;${esc(country)}`,
    ],
    ["URL", `${CLINIC.origin}/${card.slug}/`],
    ["X-SOCIALPROFILE;TYPE=instagram", card.instagram.url],
  );

  /* Снимок прямо в карточке: телефон покажет лицо в контактах, и ради этого
     его стоит нести в файле, а не ссылкой — ссылка умрёт вместе с хостингом.
     JPEG в base64, как понимают оба телефона. */
  if (card.photo) fields.push(["PHOTO;ENCODING=b;TYPE=JPEG", card.photo]);

  /* REV обязателен для 3.0 и показывает телефону, что карточка свежее той,
     что уже лежит в контактах. Дата сборки, не времени запроса: страница
     статическая, и второго значения у неё быть не может. */
  fields.push(["REV", new Date().toISOString().replace(/\.\d+Z$/, "Z")]);

  const body = fields.flatMap(([key, value]) => fold(`${key}:${value}`));

  return ["BEGIN:VCARD", ...body, "END:VCARD", ""].join("\r\n");
}
