import { SOFIIA } from "@/constants/people";
import { vcard } from "@/site/vcard";

/**
 * `/sofiia.vcf` — визитка Софии файлом.
 *
 * Обработчик статический: в экспорте он выполняется один раз на сборке и
 * ложится в `out/` готовым файлом, который отдаёт обычный веб-сервер. Поэтому
 * заголовки здесь — для разработки; в бою тип ставит сервер по расширению
 * (`text/vcard`), а телефон открывает файл в контактах.
 *
 * Карточка английская: имя и адрес в ней латиницей в любом случае, а
 * единственная переводимая строка — должность. Русская страница ссылается на
 * этот же файл, чтобы в телефоне не заводилось два разных контакта на одного
 * человека.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(vcard(SOFIIA, "en"), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'inline; filename="sofiia-myliushko.vcf"',
    },
  });
}
