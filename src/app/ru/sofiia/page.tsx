import type { Metadata } from "next";
import ProfileCard from "@/components/profile/ProfileCard";
import { CLINIC } from "@/constants/company";
import { SOFIIA, fullName } from "@/constants/people";

const NAME = fullName(SOFIIA);

export const metadata: Metadata = {
  title: "Доктор София",
  description: `Доктор София, ${SOFIIA.ru.role} ${CLINIC.name}, Лимассол. Карточка контакта: почта, адрес и часы приёма.`,
  alternates: { canonical: "/ru/sofiia", languages: { en: "/sofiia", ru: "/ru/sofiia" } },
  openGraph: {
    type: "profile",
    url: `${CLINIC.origin}/ru/sofiia`,
    siteName: CLINIC.name,
    title: `${NAME} · ${CLINIC.name}`,
    description: SOFIIA.ru.lede,
  },
};

export default function SofiiaPageRu() {
  return <ProfileCard card={SOFIIA} lang="ru" />;
}
