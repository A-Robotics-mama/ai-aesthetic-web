import type { Metadata } from "next";
import ProfileCard from "@/components/profile/ProfileCard";
import { CLINIC } from "@/constants/company";
import { SOFIIA, fullName } from "@/constants/people";

const NAME = fullName(SOFIIA);

export const metadata: Metadata = {
  title: NAME,
  description: `${NAME}, ${SOFIIA.en.role} at ${CLINIC.name}, ${CLINIC.address.city}. Contact card: email, address and hours.`,
  alternates: { canonical: "/sofiia", languages: { en: "/sofiia", ru: "/ru/sofiia" } },
  openGraph: {
    type: "profile",
    url: `${CLINIC.origin}/sofiia`,
    siteName: CLINIC.name,
    title: `${NAME} · ${CLINIC.name}`,
    description: SOFIIA.en.lede,
  },
};

export default function SofiiaPage() {
  return <ProfileCard card={SOFIIA} lang="en" />;
}
