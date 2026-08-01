import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { Defs, LI, MailLink, P, Strong, UL } from "@/components/legal/prose";
import {
  CLINIC,
  COMPANY,
  CONTACTS,
  LEGAL_VERSIONS,
  TRADE_MARK,
} from "@/constants/company";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms on which AI Aesthetic Club provides this website and communicates with you about treatments and appointments.",
  alternates: { canonical: "/terms" },
};

const SECTIONS: readonly LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who these terms are with",
    body: (
      <>
        <P>
          This website is operated by <Strong>{COMPANY.legalName}</Strong>,
          registered in the {COMPANY.jurisdiction} under number{" "}
          {COMPANY.registrationNumber}, trading as {CLINIC.name}. In these terms
          &ldquo;we&rdquo; and &ldquo;the clinic&rdquo; mean that company, and
          &ldquo;you&rdquo; means the person using the site or writing to us.
        </P>

        <P>
          By using this website or contacting the clinic through it, on
          Instagram, on Messenger or on WhatsApp, you accept these terms. If you
          do not accept them, please do not use those channels.
        </P>
      </>
    ),
  },
  {
    id: "not-medical-advice",
    title: "This site is not medical advice",
    body: (
      <>
        <P>
          Everything published here — descriptions of treatments, technologies
          and programmes — is <Strong>general information</Strong>. It is not a
          diagnosis, not a treatment recommendation, and not a substitute for a
          consultation.
        </P>

        <P>
          The same applies to messages. What we tell you on Instagram, Messenger
          or WhatsApp is preliminary: whether a treatment is appropriate for you
          can only be decided at a consultation, in person, after an assessment
          and a review of your history and contraindications.
        </P>

        <P>
          <Strong>
            If you have an urgent medical problem, contact emergency services.
          </Strong>{" "}
          These channels are not monitored around the clock and must not be used
          for emergencies.
        </P>
      </>
    ),
  },
  {
    id: "messaging",
    title: "Messaging the clinic",
    body: (
      <>
        <P>
          You can write to the clinic on Instagram, Messenger and WhatsApp. Those
          platforms are operated by Meta under its own terms, which apply to you
          independently of ours.
        </P>

        <P>
          Replies may be drafted with the help of a language model, and are
          reviewed by clinic staff before they are sent. We aim to answer within{" "}
          {CONTACTS.clinic.responseTime}, but we do not guarantee a response
          time and messages are not monitored continuously.
        </P>

        <P>
          Please keep clinical detail out of these channels. How your messages
          are handled is described in the{" "}
          <Link
            href="/privacy-policy"
            className="text-[#c8a45d] underline-offset-4 transition hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </P>
      </>
    ),
  },
  {
    id: "appointments",
    title: "Appointments",
    body: (
      <Defs
        items={[
          {
            term: "Requesting is not booking",
            description:
              "An enquiry or a request sent through this site or by message is not a confirmed appointment. A booking exists once the clinic confirms a specific date and time to you.",
          },
          {
            term: "Changes and cancellation",
            description:
              "Please tell us as early as you can if you cannot attend, so the slot can go to someone else. The cancellation terms that apply to your treatment are given to you when the appointment is confirmed.",
          },
          {
            term: "Prices",
            description:
              "Prices depend on the treatment plan agreed at your consultation. Any figure mentioned before then is indicative, and the price that applies is the one confirmed to you in writing.",
          },
        ]}
      />
    ),
  },
  {
    id: "acceptable-use",
    title: "Using the site properly",
    body: (
      <>
        <P>You agree not to:</P>

        <UL>
          <LI>
            use the site or our messaging channels unlawfully, or to harass
            clinic staff;
          </LI>
          <LI>
            attempt to gain unauthorised access to any part of the site or the
            systems behind it;
          </LI>
          <LI>
            copy, scrape or republish the content of this site beyond what
            copyright law permits;
          </LI>
          <LI>
            send us anyone else&rsquo;s personal data without the right to do
            so.
          </LI>
        </UL>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <P>
          The content of this site, including its text, layout and images, is
          owned by {COMPANY.legalName} or used with permission.
        </P>

        <P>
          <Strong>{TRADE_MARK.name}</Strong> is a trade mark registered with the{" "}
          {TRADE_MARK.registry} under number {TRADE_MARK.number} in{" "}
          {TRADE_MARK.classes}. Nothing on this site grants a licence to use it.
        </P>

        <P>
          Names of equipment and technologies mentioned on the site belong to
          their respective manufacturers and are used to identify what the
          clinic works with.
        </P>
      </>
    ),
  },
  {
    id: "availability",
    title: "Availability of the site",
    body: (
      <P>
        We aim to keep the site available, but we do not guarantee it will be
        uninterrupted or error-free. We may change, suspend or withdraw any part
        of it, and we may update these terms — the version and effective date at
        the top of this page tell you which version applies.
      </P>
    ),
  },
  {
    id: "liability",
    title: "Liability",
    body: (
      <>
        <P>
          Nothing in these terms limits liability that cannot be limited by law,
          including liability for death or personal injury caused by negligence,
          for fraud, or under mandatory consumer protection rules.
        </P>

        <P>
          Subject to that, we are not liable for loss arising from reliance on
          the general information published here rather than on advice given at
          a consultation, nor for the availability or behaviour of the Meta
          platforms you choose to contact us through.
        </P>

        <P>
          Your rights as a consumer under the law of your country of residence
          are unaffected by these terms.
        </P>
      </>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <>
        <P>
          These terms are governed by {COMPANY.governingLaw}, and{" "}
          {COMPANY.courts} have jurisdiction. If you are a consumer resident in
          the EU, you keep the protection of the mandatory rules of your own
          country and may bring proceedings there.
        </P>

        <P>
          Please raise any complaint with us first at{" "}
          <MailLink email={CONTACTS.clinic.email} /> — it is usually the fastest
          way to resolve it.
        </P>
      </>
    ),
  },
  {
    id: "contact",
    title: "How to reach us",
    body: (
      <>
        <P>
          General and appointment enquiries:{" "}
          <MailLink email={CONTACTS.clinic.email} />. Data protection matters:{" "}
          <MailLink email={CONTACTS.privacy.email} />.
        </P>

        <P>
          Formal notices go to the registered office shown below, copied by
          email. Full details are on the{" "}
          <Link
            href="/contact"
            className="text-[#c8a45d] underline-offset-4 transition hover:underline"
          >
            contact page
          </Link>
          .
        </P>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      version={LEGAL_VERSIONS.terms.version}
      effectiveDate={LEGAL_VERSIONS.terms.effectiveDate}
      summary={
        <>
          <p>
            What you read here is general information about aesthetic medicine,
            not advice about your case. Only a consultation can tell you whether
            a treatment suits you.
          </p>
          <p>
            Writing to us is not a booking — an appointment exists once we
            confirm a time to you.
          </p>
          <p>
            For anything urgent, contact emergency services. Our messaging
            channels are not monitored around the clock.
          </p>
        </>
      }
      sections={SECTIONS}
    />
  );
}
