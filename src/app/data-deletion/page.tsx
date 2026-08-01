import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import {
  Defs,
  ExternalLink,
  LI,
  MailLink,
  P,
  Strong,
  UL,
} from "@/components/legal/prose";
import {
  CONTACTS,
  LEGAL_VERSIONS,
  RETENTION,
  SUPERVISORY_AUTHORITY,
} from "@/constants/company";

export const metadata: Metadata = {
  title: "User Data Deletion",
  description:
    "How to ask AI Aesthetic Club to delete the personal data it holds about you, including Instagram and WhatsApp conversations, and what happens after you ask.",
  alternates: { canonical: "/data-deletion" },
};

/** Subject line we ask people to use, so requests are never missed. */
const SUBJECT = "User Data Deletion Request";

const SECTIONS: readonly LegalSection[] = [
  {
    id: "what-can-be-deleted",
    title: "What can be deleted",
    body: (
      <>
        <P>
          On request we delete the personal data the clinic holds about you,
          including:
        </P>

        <UL>
          <LI>
            your conversations with the clinic on Instagram, Messenger and
            WhatsApp, including attachments you sent;
          </LI>
          <LI>
            the platform-scoped user ID, profile name and username we received
            with those messages;
          </LI>
          <LI>enquiries and appointment requests you sent us;</LI>
          <LI>
            any notes we made in the conversation workspace while answering you.
          </LI>
        </UL>

        <P>
          Deleting the conversation on your own device or in the Instagram or
          WhatsApp app removes it from your view but not from ours. To have our
          copy deleted, send us the request described below.
        </P>
      </>
    ),
  },
  {
    id: "how-to-ask",
    title: "How to ask",
    body: (
      <>
        <P>
          Send an email to <MailLink email={CONTACTS.privacy.email} /> with the
          subject <Strong>{SUBJECT}</Strong>, and include:
        </P>

        <UL>
          <LI>
            the Instagram username, WhatsApp number or email address you used to
            contact us — this is how we find your data;
          </LI>
          <LI>a clear statement that you want your personal data deleted.</LI>
        </UL>

        <P>
          You do not need an account with us, you do not need to give a reason,
          and there is no charge. If you prefer, you can simply write{" "}
          <Strong>&ldquo;delete my data&rdquo;</Strong> in the same Instagram or
          WhatsApp conversation — a request made there counts exactly the same.
        </P>
      </>
    ),
  },
  {
    id: "what-happens",
    title: "What happens next",
    body: (
      <Defs
        items={[
          {
            term: "We confirm receipt",
            description: `We reply within ${CONTACTS.privacy.responseTime} to confirm that the request arrived and to say what will be deleted.`,
          },
          {
            term: "We check it is you",
            description:
              "We only ask for what is needed to be sure the request comes from the right person — usually a reply from the same account or address. We do not ask for identity documents unless the data at stake makes it necessary.",
          },
          {
            term: "We delete",
            description:
              "Deletion is completed within 30 days of the request, and normally much sooner. We tell you when it is done.",
          },
          {
            term: "Backups expire",
            description: `Copies held in encrypted backups are not individually erasable. They are overwritten on the normal cycle: ${RETENTION.backups}. Nothing is restored from them into live use in the meantime.`,
          },
        ]}
      />
    ),
  },
  {
    id: "what-we-keep",
    title: "What we may have to keep",
    body: (
      <>
        <P>
          A small amount of data can survive a deletion request, because the law
          requires it:
        </P>

        <UL>
          <LI>
            <Strong>Records of your treatment.</Strong> If you have been a
            patient, medical documentation must be retained for the period
            medical records law prescribes. Erasure does not extend to it while
            that duty lasts.
          </LI>
          <LI>
            <Strong>Invoices and accounting records.</Strong> Retained as tax
            law requires.
          </LI>
          <LI>
            <Strong>A record of the request itself.</Strong> Kept for{" "}
            {RETENTION.deletionRequests} — it is the evidence that we handled
            your request properly.
          </LI>
        </UL>

        <P>
          We tell you if any of this applies to you, and what remains. Anything
          not covered by such a duty is deleted.
        </P>
      </>
    ),
  },
  {
    id: "meta",
    title: "Removing the clinic's access on Instagram and WhatsApp",
    body: (
      <>
        <P>
          Deleting our copy does not affect Meta&rsquo;s. Meta keeps its own
          record of the conversation under its own policy, and only you can
          manage that.
        </P>

        <P>
          You can review and remove business connections in the privacy settings
          of your{" "}
          <ExternalLink href="https://accountscenter.instagram.com/">
            Instagram account
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink href="https://accountscenter.facebook.com/">
            Facebook account
          </ExternalLink>
          .
        </P>
      </>
    ),
  },
  {
    id: "if-we-refuse",
    title: "If we say no",
    body: (
      <>
        <P>
          If we cannot delete something, we tell you which data, why, and how
          long the obligation lasts. We do not refuse silently and we do not
          leave a request unanswered.
        </P>

        <P>
          If you disagree with our answer you can complain to the{" "}
          <ExternalLink href={SUPERVISORY_AUTHORITY.url}>
            {SUPERVISORY_AUTHORITY.name}
          </ExternalLink>{" "}
          in {SUPERVISORY_AUTHORITY.country}, or to the supervisory authority
          where you live or work.
        </P>

        <P>
          Your other rights — access, correction, restriction, objection — are
          described in the{" "}
          <Link
            href="/privacy-policy#your-rights"
            className="text-[#c8a45d] underline-offset-4 transition hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </P>
      </>
    ),
  },
];

export default function DataDeletionPage() {
  return (
    <LegalPage
      title="User Data Deletion"
      version={LEGAL_VERSIONS.dataDeletion.version}
      effectiveDate={LEGAL_VERSIONS.dataDeletion.effectiveDate}
      summary={
        <>
          <p>
            Email <MailLink email={CONTACTS.privacy.email} /> with the subject{" "}
            <Strong>{SUBJECT}</Strong>, telling us which Instagram username,
            WhatsApp number or email address you used to contact us.
          </p>
          <p>
            We confirm within {CONTACTS.privacy.responseTime} and delete within
            30 days. It costs nothing and you do not have to explain why.
          </p>
          <p>
            Asking in the chat itself works just as well as an email — both are
            treated the same.
          </p>
        </>
      }
      sections={SECTIONS}
    />
  );
}
