import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { CLINIC } from "@/constants/company";

/**
 * Русская версия главной.
 *
 * 95% клиентов пишут в клуб по-русски, поэтому страница существует не как
 * перевод «на всякий случай», а как основная для тех, кто придёт в кабинет.
 */
export const metadata: Metadata = {
  title: `${CLINIC.name} — клуб эстетики и долголетия в Лимассоле`,
  description:
    "AI Aesthetic Club в Лимассоле: сначала диагностика, потом протокол. Двенадцать аппаратных платформ, пять кабинетов, Dream Tower.",
  alternates: { canonical: "/ru", languages: { en: "/", ru: "/ru" } },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${CLINIC.origin}/ru`,
    siteName: CLINIC.name,
    title: `${CLINIC.name} — клуб, где красоту измеряют`,
    description:
      "Сначала диагностика, потом протокол. Двенадцать аппаратных платформ, пять кабинетов, Dream Tower, Лимассол.",
  },
};

export default function HomeRu() {
  return <HomePage lang="ru" />;
}
