import { readFileSync } from "node:fs";
import { join } from "node:path";
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
  /* Снимок читается здесь, а не хранится в коде: base64 в исходнике — это
     двадцать килобайт нечитаемой строки в файле, который правят руками.
     Обработчик выполняется на сборке, так что файл берётся с диска. */
  const photo = readFileSync(join(process.cwd(), "public", SOFIIA.photoFile)).toString(
    "base64",
  );

  return new Response(vcard(SOFIIA, photo), {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'inline; filename="sofiia-myliushko.vcf"',
    },
  });
}
