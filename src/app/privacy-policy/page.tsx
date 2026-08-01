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
  Table,
  UL,
} from "@/components/legal/prose";
import {
  CLINIC,
  COMPANY,
  CONTACTS,
  LEGAL_VERSIONS,
  PROCESSORS,
  RETENTION,
  SUPERVISORY_AUTHORITY,
} from "@/constants/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AI Aesthetic Club collects, uses and protects personal data, including messages sent to the clinic through Instagram and WhatsApp.",
  alternates: { canonical: "/privacy-policy" },
};

const PROCESSOR_COLUMNS = [
  { key: "name", heading: "Recipient" },
  { key: "purpose", heading: "Why" },
  { key: "dataCategories", heading: "What" },
  { key: "location", heading: "Where" },
] as const;

const SECTIONS: readonly LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who is responsible for your data",
    body: (
      <>
        <P>
          {CLINIC.name} is an aesthetic medicine clinic in {CLINIC.address.city},
          operated by <Strong>{COMPANY.legalName}</Strong>, a company registered
          in the {COMPANY.jurisdiction} under number{" "}
          {COMPANY.registrationNumber}.
        </P>

        <P>
          For everything described in this policy we are the{" "}
          <Strong>data controller</Strong>: we decide why your personal data is
          collected and how it is used, and we answer for it. Where other
          companies handle data on our instructions, they are listed in clause 6
          and they act only on our behalf.
        </P>

        <P>
          This policy covers our website, the enquiries you send us and the
          messages you exchange with the clinic on Instagram, Messenger and
          WhatsApp. Records created in the course of your treatment are covered
          separately — see clause 10.
        </P>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <P>We collect only what a specific purpose requires.</P>

        <Defs
          items={[
            {
              term: "When you message the clinic on Instagram, Messenger or WhatsApp",
              description:
                "Your platform-scoped user ID, your profile name and username, the content of your messages and any attachments you choose to send, and delivery metadata such as timestamps. We receive this from Meta because you started a conversation with our business account.",
            },
            {
              term: "When you send an enquiry or ask for an appointment",
              description:
                "Your name, the contact details you give us, and whatever you tell us about what you are interested in.",
            },
            {
              term: "When you visit this website",
              description:
                "Your IP address and basic technical request data, recorded in server logs. The site sets no advertising or analytics cookies.",
            },
          ]}
        />

        <P>
          Please do not send us detailed health information over Instagram or
          WhatsApp. Those are ordinary messaging channels, not a medical record
          system. If a question needs clinical detail, we will ask you to
          discuss it at your consultation instead.
        </P>
      </>
    ),
  },
  {
    id: "why-we-use-it",
    title: "Why we use it, and on what legal basis",
    body: (
      <>
        <Defs
          items={[
            {
              term: "To answer you and arrange a consultation",
              description:
                "Art. 6(1)(b) GDPR — steps taken at your request before entering into a contract for services, and performance of that contract.",
            },
            {
              term: "To run and improve the clinic's own communication",
              description:
                "Art. 6(1)(f) GDPR — our legitimate interest in answering enquiries promptly and keeping a record of what was agreed. We have weighed this against your interests and use the minimum data that makes it work.",
            },
            {
              term: "To meet obligations that apply to us",
              description:
                "Art. 6(1)(c) GDPR — tax, accounting and health-and-safety duties, and responses to lawful requests from authorities.",
            },
          ]}
        />

        <P>
          We do not sell personal data, and we do not use your messages to
          advertise to you.
        </P>
      </>
    ),
  },
  {
    id: "messaging",
    title: "Messages you send through Meta platforms",
    body: (
      <>
        <P>
          When you write to us on Instagram, Messenger or WhatsApp, the message
          travels over Meta&rsquo;s platforms before it reaches us. Meta handles
          it under its own privacy policy, as the operator of the service you
          chose to use.
        </P>

        <P>
          Once the message reaches the clinic, it is stored in our own
          conversation workspace so that whoever answers you can see the history
          and you do not have to repeat yourself. Access is limited to clinic
          staff who need it to reply.
        </P>

        <P>
          You can stop this at any time by not writing to us on those channels,
          and you can ask us to delete the conversation — see clause 9 and the{" "}
          <Link
            href="/data-deletion"
            className="text-[#c8a45d] underline-offset-4 transition hover:underline"
          >
            data deletion instructions
          </Link>
          .
        </P>
      </>
    ),
  },
  {
    id: "automated-drafting",
    title: "Automated drafting of replies",
    body: (
      <>
        <P>
          To answer faster, we use a language model to read an incoming message
          and <Strong>draft</Strong> a suggested reply. Direct identifiers are
          removed before the request wherever the answer does not depend on
          them.
        </P>

        <P>
          A member of clinic staff reviews every draft before anything is sent.
          No decision about your treatment, your appointment or your price is
          made automatically. There is no automated decision-making producing
          legal or similarly significant effects within the meaning of Art. 22
          GDPR.
        </P>
      </>
    ),
  },
  {
    id: "who-else",
    title: "Who else handles your data",
    body: (
      <>
        <P>
          The companies below process personal data on our instructions, under a
          contract that meets Art. 28 GDPR. They may not use it for their own
          purposes.
        </P>

        <Table
          caption="Processors engaged by the clinic"
          columns={PROCESSOR_COLUMNS}
          rows={PROCESSORS.map((processor) => ({
            name: processor.name,
            purpose: processor.purpose,
            dataCategories: processor.dataCategories,
            location: processor.location,
          }))}
        />

        <P>
          Beyond these, we disclose personal data only where the law requires
          it, or to our professional advisers under a duty of confidence.
        </P>
      </>
    ),
  },
  {
    id: "transfers",
    title: "Transfers outside the EEA",
    body: (
      <>
        <P>
          Our own systems keep data inside the European Economic Area. Two of
          the recipients above transfer data onward to the United States:
        </P>

        <UL>
          {PROCESSORS.filter((processor) =>
            processor.location.includes("United States"),
          ).map((processor) => (
            <LI key={processor.name}>
              <Strong>{processor.name}</Strong> — {processor.transferMechanism}
            </LI>
          ))}
        </UL>

        <P>
          You may ask us for a copy of the safeguards that apply by writing to{" "}
          <MailLink email={CONTACTS.privacy.email} />.
        </P>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <>
        <Defs
          items={[
            { term: "Conversations with the clinic", description: RETENTION.conversations },
            { term: "Enquiries and appointment requests", description: RETENTION.enquiries },
            { term: "Records of deletion requests", description: RETENTION.deletionRequests },
            { term: "Website server logs", description: RETENTION.websiteLogs },
            { term: "Backups", description: RETENTION.backups },
          ]}
        />

        <P>
          When a period ends, the data is deleted. Where the law requires us to
          keep something longer — tax records, or documentation of medical
          treatment — that longer period governs, and we keep only what the
          obligation covers.
        </P>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <P>Under the GDPR you may ask us to:</P>

        <UL>
          <LI>confirm what personal data we hold about you, and give you a copy;</LI>
          <LI>correct anything inaccurate or incomplete;</LI>
          <LI>delete your data, where no legal duty requires us to keep it;</LI>
          <LI>restrict how we use it while a dispute about it is resolved;</LI>
          <LI>
            provide it in a portable, machine-readable form, where we hold it on
            the basis of your consent or a contract;
          </LI>
          <LI>
            stop processing based on our legitimate interest, by objecting to
            it.
          </LI>
        </UL>

        <P>
          Write to <MailLink email={CONTACTS.privacy.email} />. We respond
          within one month, and will tell you promptly if the request is complex
          enough to need the extension the GDPR allows. Exercising a right is
          free, and we will not treat you differently for using one.
        </P>
      </>
    ),
  },
  {
    id: "treatment-records",
    title: "Records of your treatment",
    body: (
      <>
        <P>
          If you become a patient, the clinic creates records that this policy
          does not cover: your medical history, contraindications, the consent
          you give before a procedure, and what was done. That data is special
          category data, processed for the purposes of health care under{" "}
          <Strong>Art. 9(2)(h) GDPR</Strong> and the professional duties that
          apply to the practitioners treating you.
        </P>

        <P>
          Those records are kept for the period medical documentation law
          requires, which is longer than the periods in clause 8, and your right
          to erasure does not extend to them while that obligation lasts.
        </P>

        <P>
          {/* TODO(legal): publish the clinic's treatment privacy notice and link
              it here once it has been reviewed. Until then the notice is handed
              over on paper at the first consultation, which is what this
              paragraph promises — do not remove it without replacing it. */}
          You receive a separate privacy notice covering these records at your
          first consultation, before any procedure takes place.
        </P>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <>
        <P>
          Data is encrypted in transit and at rest. Access to the conversation
          workspace requires an individual account and is limited to staff whose
          work needs it. Backups are encrypted and expire automatically.
        </P>

        <P>
          If a breach occurs that is likely to result in a risk to your rights,
          we notify {SUPERVISORY_AUTHORITY.name} within 72 hours and inform you
          directly where the risk is high.
        </P>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <P>
        Our services are for adults. We do not knowingly collect data from
        anyone under 18 without the involvement of a parent or guardian, and we
        delete it if we discover we have.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <P>
        When the substance changes we publish a new version with a new effective
        date, both shown at the top of this page. Material changes are
        communicated on the channel you use to talk to us before they take
        effect.
      </P>
    ),
  },
  {
    id: "complaints",
    title: "Complaints",
    body: (
      <>
        <P>
          If you are unhappy with how we handle your data, tell us first at{" "}
          <MailLink email={CONTACTS.privacy.email} /> — most issues are settled
          faster that way.
        </P>

        <P>
          You also have the right to complain to a supervisory authority. Ours
          is the{" "}
          <ExternalLink href={SUPERVISORY_AUTHORITY.url}>
            {SUPERVISORY_AUTHORITY.name}
          </ExternalLink>{" "}
          in {SUPERVISORY_AUTHORITY.country}. You may also complain to the
          authority where you live or work.
        </P>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      version={LEGAL_VERSIONS.privacy.version}
      effectiveDate={LEGAL_VERSIONS.privacy.effectiveDate}
      summary={
        <>
          <p>
            We are the clinic you are talking to, and we are responsible for
            your data. We use it to answer you and to arrange your treatment —
            not to advertise to you, and never to sell.
          </p>
          <p>
            Messages you send us on Instagram or WhatsApp are stored so we can
            reply and keep the thread. A language model drafts suggested
            answers, but a person reads every one before it is sent.
          </p>
          <p>
            You can ask us for a copy of your data or ask us to delete it, at
            any time, for free.
          </p>
        </>
      }
      sections={SECTIONS}
    />
  );
}
