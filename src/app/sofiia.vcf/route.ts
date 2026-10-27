import { SOFIIA } from "@/constants/people";
import { vcard } from "@/site/vcard";

/**
 * `/sofiia.vcf` — визитка Софии файлом.
 *
 * Обработчик статический: в экспорте он выполняется один раз на сборке и
 * ложится в `out/` готовым файлом, который отдаёт обычный веб-сервер. Поэтому
 * заголовки здесь — для разработки; в бою тип ставит сервер по расширению
 * (`text/x-vcard`), а телефон открывает файл в контактах.
 */
export const dynamic = "force-static";

export function GET() {
  return new Response(vcard(SOFIIA), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'inline; filename="sofiia-myliushko.vcf"',
    },
  });
}
