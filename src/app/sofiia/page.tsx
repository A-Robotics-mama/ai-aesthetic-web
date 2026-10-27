import type { Metadata } from "next";
import ProfileCard from "@/components/profile/ProfileCard";
import { CLINIC } from "@/constants/company";
import { SOFIIA, fullName } from "@/constants/people";

const NAME = fullName(SOFIIA);

/**
 * Страница, на которую смотрит NFC-карта Софии.
 *
 * Только по-английски: «всё, русского не надо» (27.10.2026). Из поиска
 * страница закрыта — визитка существует для того, кому её дали в руку.
 */
export const metadata: Metadata = {
  title: NAME,
  description: `${NAME}, ${SOFIIA.role} of ${CLINIC.name}, ${CLINIC.address.city}. Contact card: phone, email and address.`,
  alternates: { canonical: "/sofiia" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "profile",
    url: `${CLINIC.origin}/sofiia`,
    siteName: CLINIC.name,
    title: `${NAME} · ${SOFIIA.role}`,
    description: `${CLINIC.name}, ${CLINIC.address.city}.`,
  },
};

export default function SofiiaPage() {
  return <ProfileCard card={SOFIIA} />;
}
