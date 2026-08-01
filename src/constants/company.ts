/**
 * Single source of truth for legal-entity, clinic and contact facts.
 *
 * Every legal page and footer reads from here, so an address or a registration
 * number is a one-line edit and no two documents can end up disagreeing. Meta's
 * business verification compares what the app declares against what the site
 * shows, and a mismatch between two pages is exactly what fails that check.
 *
 * Values are taken from the company's own registry documents:
 *   - Certificate of Incorporation, Registrar of Companies, Cyprus (HE 424463)
 *   - VAT registration certificate, Cyprus Tax Department
 *   - EUIPO register entry for EUTM 019063533
 */

export const COMPANY = {
  /** Registered legal name exactly as it appears on the incorporation certificate. */
  legalName: "Aesthetic Robotics Limited",
  shortName: "Aesthetic Robotics",
  /** Registration number in the Cyprus Register of Companies. */
  registrationNumber: "HE 424463",
  incorporatedOn: "2021-08-09",
  vatNumber: "10424463Q",
  jurisdiction: "Republic of Cyprus",
  governingLaw: "the laws of the Republic of Cyprus",
  courts: "the courts of the Republic of Cyprus",
  /**
   * Address for formal notices, as filed with the Tax Department and the EUIPO
   * register. Distinct from the clinic address below — they are different
   * places and are deliberately never used interchangeably.
   */
  registeredOffice: {
    lines: ["Amathoundos 98, Rita Court, block C, shop 6", "4532 Agios Tychonas"],
    country: "Cyprus",
  },
} as const;

/**
 * The clinic itself: where treatment is given and where patient records are
 * held. Same legal entity as COMPANY, different premises.
 */
export const CLINIC = {
  name: "AI Aesthetic Club",
  operatedBy: COMPANY.legalName,
  address: {
    lines: ["Dream Tower", "Amathoundos 62, Agios Tychonas"],
    city: "Limassol",
    country: "Cyprus",
  },
  origin: "https://ai-aesthetic.eu",
  description:
    "AI Aesthetic Club is an aesthetic medicine clinic in Limassol combining medical expertise, intelligent diagnostics and advanced technologies in personalised treatment programmes.",
} as const;

/**
 * Trade mark under which the clinic operates.
 */
export const TRADE_MARK = {
  name: "AI Aesthetic Club",
  registry: "European Union Intellectual Property Office",
  number: "019063533",
  filedOn: "2024-08-04",
  registeredOn: "2024-12-20",
  expiresOn: "2034-08-04",
  classes: "Class 44 — medical, cosmetic and aesthetic services",
  proprietor: COMPANY.legalName,
} as const;

export const CONTACTS = {
  clinic: {
    label: "The clinic",
    email: "info@ai-aesthetic.eu",
    purpose: "Appointments, treatments and general enquiries.",
    responseTime: "1 business day",
  },
  /**
   * Data protection mailbox. This exact address is already published in the
   * data deletion instructions registered with Meta, so it must keep working
   * and must not be renamed without updating the app configuration.
   */
  privacy: {
    label: "Privacy and data protection",
    email: "club@ai-aesthetic.eu",
    purpose:
      "Access, correction and deletion requests, and any question about how personal data is handled.",
    responseTime: "5 business days",
  },
} as const;

/**
 * Document versions and effective dates. Bump both in the same commit whenever
 * the substance of a legal page changes; the pages show them to the reader.
 */
export const LEGAL_VERSIONS = {
  terms: { version: "1.0", effectiveDate: "2026-08-01" },
  privacy: { version: "1.0", effectiveDate: "2026-08-01" },
  dataDeletion: { version: "1.0", effectiveDate: "2026-08-01" },
} as const;

export type Processor = {
  name: string;
  purpose: string;
  dataCategories: string;
  location: string;
  transferMechanism: string;
};

/**
 * Processors engaged for personal data the clinic controls.
 *
 * Published because Art. 13(1)(e) GDPR requires the recipients of personal data
 * to be disclosed, and because Meta's platform terms require an app to tell
 * people what happens to the data it receives through Instagram and WhatsApp.
 */
export const PROCESSORS: readonly Processor[] = [
  {
    name: "Meta Platforms Ireland Limited",
    purpose:
      "Operates Instagram, Messenger and WhatsApp. Messages you send the clinic travel over Meta's platforms and are delivered to us through its APIs.",
    dataCategories:
      "Platform-scoped user ID, profile name and username, message content and attachments, delivery metadata.",
    location: "European Union, with onward transfers by Meta to the United States.",
    transferMechanism:
      "Meta's EU Data Transfer Framework and Standard Contractual Clauses.",
  },
  {
    name: "OpenAI Ireland Limited",
    purpose:
      "Language model inference used to interpret an incoming message and draft a reply for a member of clinic staff to review before it is sent.",
    dataCategories:
      "Message text and the clinic information needed to answer it. Direct identifiers are removed before the request where the reply does not require them.",
    location: "European Union and United States.",
    transferMechanism:
      "Standard Contractual Clauses under OpenAI's data processing addendum. API data is not used to train models.",
  },
  {
    name: "Hosting and infrastructure provider",
    purpose:
      "Servers and managed databases on which the conversation workspace runs.",
    dataCategories: "Conversation data stored by the service, encrypted at rest.",
    location: "European Union.",
    transferMechanism: "Not applicable — data remains within the EEA.",
  },
] as const;

/**
 * Retention periods surfaced in the Privacy Policy and Data Deletion pages.
 */
export const RETENTION = {
  conversations: "24 months after the last message in the conversation",
  enquiries: "12 months after the enquiry is closed",
  deletionRequests: "3 years, as proof that the request was handled",
  websiteLogs: "30 days",
  backups: "35 days, after which backup copies expire automatically",
} as const;

/** Lead supervisory authority for GDPR complaints. */
export const SUPERVISORY_AUTHORITY = {
  name: "Office of the Commissioner for Personal Data Protection",
  country: "Cyprus",
  url: "https://www.dataprotection.gov.cy/",
} as const;
