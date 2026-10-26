/**
 * Every word on the home page, in both languages the club is read in.
 *
 * Клиенты пишут по-русски (95% переписки), а партнёры и гости отелей читают
 * по-английски, поэтому страница существует дважды: `/` и `/ru`. Текст лежит
 * здесь, а не в разметке, чтобы два языка нельзя было развести по смыслу —
 * правка в одном месте видна рядом со второй версией.
 *
 * Facts in this file come from the club's own records: the equipment park and
 * the procedure count from the AIAC database, the hours from the working-hours
 * table, the address from the company register. Nothing here is a promise about
 * an outcome: what a programme will do for a person is decided at a
 * consultation, and the page says so.
 */

export type Lang = "en" | "ru";

export type Entry = {
  /** Matches a key in IMAGES, so both languages share one photograph. */
  id: string;
  title: string;
  text: string;
  /** Instrument-style line under the title: the device, the family, the count. */
  meta?: string;
};

/**
 * Один аппарат парка: чем он является, что в нём главное и где об этом
 * написано у производителя. `id` совпадает с ключом в DEVICE_SHOTS, так что
 * обе языковые версии показывают одни и те же снимки.
 */
export type Device = {
  id: string;
  title: string;
  /** Производитель — он же надзаголовок над именем. */
  brand: string;
  /** Что это за машина: анализ кожи, диодный лазер, фракционный RF. */
  group: string;
  /** Одна фраза: чем этот аппарат отличается от соседнего. */
  lede: string;
  /** Три-четыре главных свойства — фактами, а не обещаниями. */
  aspects: string[];
  /** Страница производителя: читателю есть куда проверить. */
  href: string;
};

export type Copy = {
  langLabel: string;
  nav: { href: string; label: string }[];
  hero: {
    eyebrow: string;
    /** Words wrapped in *asterisks* are set in gold italic. */
    headline: string;
    lede: string;
    cta: string;
    ctaAlt: string;
    caption: string;
    scroll: string;
  };
  marqueeNote: string;
  manifesto: { eyebrow: string; text: string; by: string };
  method: { eyebrow: string; title: string; lede: string; steps: Entry[] };
  figures: { value: number; prefix?: string; suffix?: string; label: string }[];
  programmes: {
    eyebrow: string;
    title: string;
    lede: string;
    items: Entry[];
    note: string;
    drag: string;
  };
  technology: {
    eyebrow: string;
    title: string;
    lede: string;
    maker: string;
    devices: Device[];
  };
  place: {
    eyebrow: string;
    title: string;
    paras: string[];
    facts: { k: string; v: string }[];
    captions: { id: string; text: string }[];
    mapCta: string;
  };
  residence: {
    eyebrow: string;
    title: string;
    paras: string[];
    points: Entry[];
    cta: string;
    subject: string;
  };
  social: { eyebrow: string; title: string; cta: string };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    ctaAlt: string;
    hoursLabel: string;
    hours: string;
    closed: string;
    addressLabel: string;
    writeLabel: string;
  };
  disclaimer: string;
};

const EN: Copy = {
  langLabel: "RU",
  nav: [
    { href: "/#method", label: "Method" },
    { href: "/#programmes", label: "Programmes" },
    { href: "/#technology", label: "Technology" },
    { href: "/#club", label: "The club" },
    { href: "/#contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Limassol · Cyprus · since 2024",
    headline: "The club where beauty is *measured*.",
    lede:
      "Diagnostics first, the protocol second. Twelve technologies, five rooms and one plan built around your own readings — at Dream Tower, Limassol.",
    cta: "Book a consultation",
    ctaAlt: "See the method",
    caption: "Facial protocol · Face Room · 34.70° N, 33.07° E",
    scroll: "Scroll",
  },
  marqueeNote: "The equipment park",
  manifesto: {
    eyebrow: "Why we are different",
    text:
      "We start with diagnostics, not with a procedure. A skin scan, a body scan, numbers you can read yourself — and only then a protocol with your name on it. Beauty you can measure is beauty you can repeat.",
    by: "AI Aesthetic Club",
  },
  method: {
    eyebrow: "The method",
    title: "Four steps, in this order.",
    lede:
      "The order is the point. A procedure chosen before the assessment is a guess, however good the device behind it is.",
    steps: [
      {
        id: "step-diagnostics",
        title: "Diagnostics",
        meta: "ISEMECO 3D D9 · Visbody",
        text:
          "The face is photographed in several light spectra, the body is scanned without contact. Hydration, pores, pigment, wrinkle depth, composition — recorded as figures, so there is something to compare with later.",
      },
      {
        id: "step-protocol",
        title: "Protocol",
        meta: "Doctor Sofiia",
        text:
          "The scan is read by the doctor who will run the programme. She writes what to do, in what order, with what intervals — and what she expects to change by when.",
      },
      {
        id: "step-technology",
        title: "Technology",
        meta: "Twelve platforms, five rooms",
        text:
          "The protocol chooses the machine, never the other way round. Where two devices do the same work, the one that suits your skin and your calendar wins.",
      },
      {
        id: "step-result",
        title: "Measured result",
        meta: "The same scan again",
        text:
          "Progress is read off the instrument that set the baseline. What worked stays in the programme; what did not is replaced rather than repeated.",
      },
    ],
  },
  figures: [
    { value: 12, label: "technology platforms" },
    { value: 200, suffix: "+", label: "procedures in the book" },
    { value: 5, label: "rooms at Dream Tower" },
    { value: 46, label: "icoone programmes" },
  ],
  programmes: {
    eyebrow: "Programmes",
    title: "Six directions, one plan.",
    lede:
      "A programme is assembled from these after the assessment — rarely from one of them alone.",
    items: [
      {
        id: "prog-face",
        title: "Face & skin",
        meta: "Care protocols · peels · INDIBA",
        text:
          "Professional facial protocols, chemical and enzyme peels, radiofrequency and hydro-cleansing — built around skin condition rather than around a season.",
      },
      {
        id: "prog-body",
        title: "Body & contour",
        meta: "icoone · CryoSkin · VIP Hi-Line",
        text:
          "Lymphatic drainage, fibrosis, tone and contour. Eighteen body-correction protocols, measured on the scan before and after.",
      },
      {
        id: "prog-care",
        title: "Injectables",
        meta: "34 protocols · by the doctor",
        text:
          "Botulinum therapy, fillers, biorevitalisation and mesotherapy — planned by zone, settled by the units actually used, and never sold as a season offer.",
      },
      {
        id: "prog-laser",
        title: "Laser & light",
        meta: "LightSheer Quattro · Stellar M22",
        text:
          "Diode laser hair removal across thirty-two zone protocols, IPL for pigment and vessels, non-ablative resurfacing with ResurFX.",
      },
      {
        id: "prog-longevity",
        title: "Longevity",
        meta: "Diagnostics · IV · supplements",
        text:
          "Energy, recovery and ageing well, approached the same way: assessment, a plan with intervals, and a repeat measurement that says whether it is working.",
      },
      {
        id: "prog-rituals",
        title: "Rituals & hands",
        meta: "Massage · manicure · podology",
        text:
          "Massage, manicure and pedicure, podology. The quiet part of the club, and for many members the reason they come every week.",
      },
    ],
    note:
      "The descriptions above are general information about what the club does, not advice. Whether a programme suits you is decided at a consultation.",
    drag: "Drag",
  },
  technology: {
    eyebrow: "Technology",
    title: "Twelve platforms, and what each one is actually for.",
    lede:
      "The park in full, as it stands in the club's own register — one machine at a time, with the three or four things that matter about it. Every name below is a device you can be treated on this week.",
    maker: "At the manufacturer",
    devices: [
      {
        id: "tech-isemeco",
        title: "ISEMECO 3D D9",
        brand: "Meicet",
        group: "Skin analysis",
        lede:
          "The scan every programme opens with: the face photographed in a dozen light spectra and modelled in three dimensions, so the protocol is written against readings rather than against an impression.",
        aspects: [
          "Twelve high-definition full-face images — RGB, polarised, cross-polarised, UV, brown, red and monochrome.",
          "Over thirty measured dimensions, each graded mild, moderate or severe instead of merely described.",
          "A deep-learning ageing index across eight features, from forehead lines to brown spots.",
          "3D modelling that reads a change in facial volume down to 0.1 ml, which is what makes a before and an after comparable.",
        ],
        href:
          "https://www.meicet.com/isemeco-3d-d9-skin-analyzer-3d-full-facial-modeling-suitable-for-doctors-cosmetic-surgeons-dermatologists-product/",
      },
      {
        id: "tech-visbody",
        title: "Visbody M30",
        brand: "Visbody",
        group: "Body analysis",
        lede:
          "A contactless body scan: no electrodes, no tape measure. A 3D model you can turn, and the figures that come off it.",
        aspects: [
          "Thirteen circumferences measured by depth camera rather than by hand.",
          "A nine-point static posture assessment built on 3D skeletal detection.",
          "Up to eight earlier scans kept side by side as before-and-after avatars.",
          "Four result sheets: composition, shape, posture, circumference.",
        ],
        href: "https://visbody.com/visbody-m30/",
      },
      {
        id: "tech-ona",
        title: "INDIBA ONA",
        brand: "INDIBA",
        group: "Facial platform",
        lede:
          "Four technologies in one facial — hydrodermabrasion, electroporation, LED and low-frequency current — run in a fixed order rather than picked one at a time.",
        aspects: [
          "A double peel: AHA and BHA solutions delivered under pressure, then drawn off by a radial tip at 15 to 80 kPa.",
          "Electroporation carries the serum five millimetres down, through pores held open by high-voltage pulses.",
          "Modulated 1 kHz current contracts and releases the facial muscle under control.",
          "Blue, red and violet LED on the same pass as the infusion.",
        ],
        href: "https://indiba.com/products/ona/",
      },
      {
        id: "tech-elite",
        title: "INDIBA Elite NS",
        brand: "INDIBA",
        group: "Radiofrequency · 448 kHz",
        lede:
          "Monopolar radiofrequency at 448 kHz — the one frequency the whole INDIBA method is built on, and the device most protocols here open and close with.",
        aspects: [
          "Capacitive and resistive electrodes: surface tissue or deep, chosen by what is being treated rather than by programme.",
          "Worked at three thermal levels, including one below the sensation of heat, for tissue that is still inflamed.",
          "One device across recovery, fat mobilisation and tissue repair.",
          "Used after surgery and after injectables — oedema, haematoma, scars.",
        ],
        href: "https://indiba.com/products/elite-ns/",
      },
      {
        id: "tech-reverso",
        title: "INDIBA Reverso",
        brand: "INDIBA",
        group: "Fractional radiofrequency",
        lede:
          "Fractional resurfacing where the shape of the pulse, not just its strength, is chosen for the skin in front of it.",
        aspects: [
          "Four pulse profiles — flat, super, double and double-speed scan — from thin, sensitive skin to deep scar work.",
          "Three energy patterns: the full grid, half the pins, or alternating lines for tightening in one direction.",
          "Fine wrinkles, acne and surgical scars, white and red stretch marks, enlarged pores.",
          "Also used post-operatively, where what is being treated is the inflammation and the pain.",
        ],
        href: "https://indiba.com/products/reverso/",
      },
      {
        id: "tech-icoone",
        title: "icoone Laser Med",
        brand: "icoone",
        group: "Microstimulation",
        lede:
          "Roboderm® microstimulation: independently motorised rollers that lift and release the tissue without suction — which is why it can be repeated daily and does not bruise.",
        aspects: [
          "21,600 microstimulations a minute, the figure the technology is named for.",
          "No vacuum: the handpiece glides, so even thin and sensitive skin takes it painlessly.",
          "LED and laser diodes in the handpieces, working on the same pass as the massage.",
          "Forty-six programmes in the club's book — medical, aesthetic, wellness and men's.",
        ],
        href: "https://icoone.com/en/treatments-aesthetic-body/",
      },
      {
        id: "tech-quattro",
        title: "LightSheer QUATTRO",
        brand: "Lumenis",
        group: "Diode laser",
        lede:
          "Two wavelengths and three handpieces, so the setting follows the hair and the skin in front of it — tanned and dark skin included.",
        aspects: [
          "805 nm and 1060 nm on one platform: every skin type, not a safe middle for all of them.",
          "The High Speed handpiece, 22×35 mm, vacuum-assisted — lower fluence per pulse, no gel, large areas quickly.",
          "ChillTip XC at 12×12 mm and ET at 9×9 mm, with continuous sapphire contact cooling for precision work.",
          "Pigmented and vascular lesions treated on the same machine.",
        ],
        href: "https://lumenis.com/aesthetics/products/lightsheer/",
      },
      {
        id: "tech-ipl",
        title: "Stellar M22 · IPL",
        brand: "Lumenis",
        group: "Intense pulsed light",
        lede:
          "Broad-spectrum light from 400 to 1200 nm, filtered down to the target before it ever reaches the skin.",
        aspects: [
          "Nine Expert Filters in one universal handpiece: the cut-off changes per condition, not the machine.",
          "Optimal Pulse Technology holds the shape of the pulse, which is what makes a session repeatable.",
          "Vascular and pigmented lesions, photoageing, and hair.",
          "The applicator is cooled continuously while it sits against the skin.",
        ],
        href: "https://lumenis.com/aesthetics/products/m22/ipl/",
      },
      {
        id: "tech-resurfx",
        title: "Stellar M22 · ResurFX",
        brand: "Lumenis",
        group: "Non-ablative fractional",
        lede:
          "The 1565 nm fibre module of the same platform — the only true non-ablative fractional technology, and one pass is all it takes.",
        aspects: [
          "CoolScan places each fractional spot out of sequence, so heat does not accumulate in the tissue.",
          "More than 600 combinations of shape, size and density to choose from.",
          "One pass instead of several: less time on the skin, and less of it asked of the epidermis.",
          "Continuous contact cooling inside the handpiece throughout.",
        ],
        href: "https://lumenis.com/aesthetics/products/m22/resurfx/",
      },
      {
        id: "tech-cryoskin",
        title: "CryoSkin",
        brand: "CryoSkin · Paris",
        group: "Cryotherapy",
        lede:
          "Thermal shock in a single session: the tissue warmed, then taken down to cold — with no nitrogen and no suction anywhere in the process.",
        aspects: [
          "Fully electric. No gas cylinder, so the temperature is held and read rather than sprayed.",
          "Suction-free: the handpiece glides, and nothing is drawn up into it.",
          "Slimming, firming and facial contouring from one handpiece.",
          "Designed and built in France, where the technology was invented in 2013.",
        ],
        href: "https://cryoskin-international.com/",
      },
      {
        id: "tech-vip",
        title: "VIP Hi-Line",
        brand: "VIP Italia",
        group: "Electrostimulation",
        lede:
          "Neuromuscular stimulation from a house that has done nothing but muscle since 1971 — it works the muscle, not the fat above it.",
        aspects: [
          "Programmes for tone, definition and recovery, set per muscle group.",
          "Non-invasive electro-lymphatic drainage on the same unit.",
          "Isometric work and microcurrent for the face.",
          "Hands-free: the pads do the work while the client lies still.",
        ],
        href: "https://vipitalia.com/treatments/",
      },
      {
        id: "tech-oxygenium",
        title: "Oxygenium",
        brand: "Fabbrimarine",
        group: "Oxygen care",
        lede:
          "Oxygen therapy for the face, run on Italian marine cosmetics rather than on a generic gel — the gentlest thing in the park, and the one that most often closes a session.",
        aspects: [
          "Marine actives from a house that has formulated from the sea for over fifty years, out of Bologna.",
          "Formulated for sensitive, reactive and compromised skin, where a peel would be too much.",
          "Protocols written to follow radiofrequency, light and vacuum work, not to replace it.",
          "Preparation, intensive phase and finish — the whole protocol from one house.",
        ],
        href: "https://fabbrimarine.ae/",
      },
    ],
  },
  place: {
    eyebrow: "The club",
    title: "Dream Tower, Limassol.",
    paras: [
      "Five rooms on the seafront side of Dream Tower — two of them named after stones, Agat and Amethyst — a lounge where coffee arrives before the consultation does, and a service robot that still makes first-time members laugh.",
      "The club opens at seven in the morning, which is unusual here and deliberate: a protocol before work is a protocol that actually gets repeated.",
    ],
    facts: [
      { k: "Address", v: "Amathoundos 62, Dream Tower, Agios Tychonas" },
      { k: "City", v: "Limassol, Cyprus" },
      { k: "Open", v: "Monday – Saturday, 07:00 – 21:00" },
      { k: "Rooms", v: "Five, including a diagnostics suite" },
    ],
    captions: [
      { id: "place-tower", text: "Dream Tower, the entrance" },
      { id: "place-lounge", text: "The lounge" },
      { id: "place-robes", text: "Before a protocol" },
      { id: "tech-robot", text: "The club's robot" },
    ],
    mapCta: "Open in maps",
  },
  residence: {
    eyebrow: "Club & Residence",
    title: "The method travels.",
    paras: [
      "A diagnostics-led programme does not need our address to work. It needs the scan, the protocol, the instruments and the people who read them — and all four can be set up inside a hotel spa or a residence on the Mediterranean.",
      "We are talking to partners in Limassol now: resorts that already have the rooms and the guests, and want a programme with numbers behind it rather than a menu of treatments.",
    ],
    points: [
      {
        id: "res-residency",
        title: "Residency programmes",
        text:
          "Three, five and seven days, opening with diagnostics and closing with the same measurement.",
      },
      {
        id: "res-suite",
        title: "A diagnostics suite on site",
        text: "Skin and body scanning installed and run in the partner's spa.",
      },
      {
        id: "res-continuity",
        title: "Continued at home",
        text:
          "The guest leaves with a protocol the club keeps running after check-out.",
      },
      {
        id: "res-staff",
        title: "Trained by the club",
        text:
          "Partner specialists are trained on our protocols and supervised by our doctor.",
      },
    ],
    cta: "Talk about a collaboration",
    subject: "Collaboration with AI Aesthetic Club",
  },
  social: {
    eyebrow: "Lately",
    title: "What the club has been doing.",
    cta: "Follow on Instagram",
  },
  contact: {
    eyebrow: "Membership",
    title: "Start with a consultation.",
    lede:
      "Write to the club and we will answer with the first free hours. The assessment takes an hour and ends with a plan you can read — whether or not you decide to start.",
    cta: "Write to the club",
    ctaAlt: "Instagram",
    hoursLabel: "Open",
    hours: "Monday – Saturday · 07:00 – 21:00",
    closed: "Sunday closed",
    addressLabel: "Where",
    writeLabel: "Write",
  },
  disclaimer:
    "AI Aesthetic Club is a members' club. Information on this page is general and is not advice; programmes, protocols and their suitability are decided at a consultation.",
};

const RU: Copy = {
  langLabel: "EN",
  nav: [
    { href: "/ru/#method", label: "Метод" },
    { href: "/ru/#programmes", label: "Программы" },
    { href: "/ru/#technology", label: "Технологии" },
    { href: "/ru/#club", label: "Клуб" },
    { href: "/ru/#contact", label: "Контакты" },
  ],
  hero: {
    eyebrow: "Лимассол · Кипр · с 2024 года",
    headline: "Клуб, где красоту *измеряют*.",
    lede:
      "Сначала диагностика, потом протокол. Двенадцать аппаратов, пять кабинетов и один план, собранный по Вашим собственным показателям — Dream Tower, Лимассол.",
    cta: "Записаться на консультацию",
    ctaAlt: "Как это устроено",
    caption: "Протокол по лицу · Face Room · 34.70° N, 33.07° E",
    scroll: "Вниз",
  },
  marqueeNote: "Парк аппаратов",
  manifesto: {
    eyebrow: "Чем мы отличаемся",
    text:
      "Мы начинаем с диагностики, а не с процедуры. Снимок кожи, анализ тела, цифры, которые Вы видите сами, — и только потом протокол с Вашим именем. Красоту, которую измеряют, можно повторить.",
    by: "AI Aesthetic Club",
  },
  method: {
    eyebrow: "Метод",
    title: "Четыре шага. Именно в таком порядке.",
    lede:
      "Порядок и есть суть. Процедура, выбранная до осмотра, — это догадка, каким бы хорошим ни был аппарат за ней.",
    steps: [
      {
        id: "step-diagnostics",
        title: "Диагностика",
        meta: "ISEMECO 3D D9 · Visbody",
        text:
          "Лицо снимают в нескольких спектрах света, тело анализируют бесконтактно. Увлажнённость, поры, пигмент, глубина морщин, состав тела — всё записано цифрами, чтобы потом было с чем сравнивать.",
      },
      {
        id: "step-protocol",
        title: "Протокол",
        meta: "Доктор София",
        text:
          "Снимок читает тот врач, который и будет вести программу. Она пишет, что делать, в каком порядке, с какими интервалами — и что к какому сроку должно измениться.",
      },
      {
        id: "step-technology",
        title: "Технология",
        meta: "Двенадцать платформ, пять кабинетов",
        text:
          "Аппарат выбирает протокол, а не наоборот. Если одну и ту же задачу решают два аппарата, берём тот, который подходит Вашей коже и Вашему графику.",
      },
      {
        id: "step-result",
        title: "Измеренный результат",
        meta: "Тот же снимок повторно",
        text:
          "Прогресс считывают тем же прибором, который задал точку отсчёта. Что сработало — остаётся в программе, что нет — заменяют, а не повторяют.",
      },
    ],
  },
  figures: [
    { value: 12, label: "аппаратных платформ" },
    { value: 200, suffix: "+", label: "процедур в прайсе" },
    { value: 5, label: "кабинетов в Dream Tower" },
    { value: 46, label: "программ icoone" },
  ],
  programmes: {
    eyebrow: "Программы",
    title: "Шесть направлений, один план.",
    lede:
      "Программу собирают из них после осмотра — редко из одного направления целиком.",
    items: [
      {
        id: "prog-face",
        title: "Лицо и кожа",
        meta: "Уходы · пилинги · INDIBA",
        text:
          "Профессиональные уходы, химические и энзимные пилинги, радиочастота и гидропилинг — под состояние кожи, а не под сезон.",
      },
      {
        id: "prog-body",
        title: "Тело и контур",
        meta: "icoone · CryoSkin · VIP Hi-Line",
        text:
          "Лимфодренаж, фиброз, тонус и контур. Восемнадцать протоколов коррекции фигуры, с замером до и после.",
      },
      {
        id: "prog-care",
        title: "Инъекции",
        meta: "34 протокола · ведёт врач",
        text:
          "Ботулинотерапия, филлеры, биоревитализация и мезотерапия — план по зонам, расчёт по фактически использованным единицам и никаких сезонных акций.",
      },
      {
        id: "prog-laser",
        title: "Лазер и свет",
        meta: "LightSheer Quattro · Stellar M22",
        text:
          "Диодная эпиляция — тридцать два протокола по зонам, IPL по пигменту и сосудам, неаблятивное обновление кожи на ResurFX.",
      },
      {
        id: "prog-longevity",
        title: "Долголетие",
        meta: "Диагностика · капельницы · нутрицевтика",
        text:
          "Энергия, восстановление и красивое старение — тем же способом: осмотр, план с интервалами и повторный замер, который говорит, работает ли это.",
      },
      {
        id: "prog-rituals",
        title: "Ритуалы и руки",
        meta: "Массаж · маникюр · подология",
        text:
          "Массаж, маникюр и педикюр, подология. Тихая часть клуба — и для многих именно та, ради которой приходят каждую неделю.",
      },
    ],
    note:
      "Всё, что написано выше, — общая информация о работе клуба, а не рекомендация. Подходит ли Вам программа, решают на консультации.",
    drag: "Тяните",
  },
  technology: {
    eyebrow: "Технологии",
    title: "Двенадцать платформ — и что каждая делает на самом деле.",
    lede:
      "Весь парк, как он записан в журнале клуба: по одному аппарату на кадр и три-четыре главных факта о нём. Каждое имя в списке — машина, на которой можно записаться на этой неделе.",
    maker: "У производителя",
    devices: [
      {
        id: "tech-isemeco",
        title: "ISEMECO 3D D9",
        brand: "Meicet",
        group: "Анализ кожи",
        lede:
          "Снимок, с которого начинается любая программа: лицо снято в дюжине спектров света и собрано в объёме — протокол пишется по показаниям, а не по впечатлению.",
        aspects: [
          "Двенадцать снимков лица в высоком разрешении — RGB, поляризованный и кросс-поляризованный свет, UV, пигмент, краснота, монохром.",
          "Больше тридцати измеряемых признаков, и каждый не описан словами, а отнесён к лёгкой, средней или выраженной степени.",
          "Индекс старения по восьми зонам — от морщин лба до пигментных пятен, — посчитанный обученной моделью.",
          "Объёмная модель читает изменение объёма лица до 0,1 мл: именно это и позволяет сравнить «до» и «после».",
        ],
        href:
          "https://www.meicet.com/isemeco-3d-d9-skin-analyzer-3d-full-facial-modeling-suitable-for-doctors-cosmetic-surgeons-dermatologists-product/",
      },
      {
        id: "tech-visbody",
        title: "Visbody M30",
        brand: "Visbody",
        group: "Анализ тела",
        lede:
          "Бесконтактный анализ тела: ни электродов, ни сантиметровой ленты. Объёмная модель, которую можно повернуть, и цифры, снятые с неё.",
        aspects: [
          "Тринадцать обхватов, снятых камерами глубины, а не руками.",
          "Оценка осанки по девяти точкам — по объёмной модели скелета.",
          "До восьми прежних замеров рядом, в виде фигур «до» и «после».",
          "Четыре листа результата: состав, форма, осанка, обхваты.",
        ],
        href: "https://visbody.com/visbody-m30/",
      },
      {
        id: "tech-ona",
        title: "INDIBA ONA",
        brand: "INDIBA",
        group: "Аппарат для лица",
        lede:
          "Четыре технологии в одном уходе — гидропилинг, электропорация, LED и ток низкой частоты, — и идут они в заданном порядке, а не выбираются по одной.",
        aspects: [
          "Двойной пилинг: составы с AHA и BHA подаются под давлением и тут же забираются насадкой при 15–80 кПа.",
          "Электропорация уводит сыворотку на пять миллиметров — через поры, которые держат открытыми импульсы высокого напряжения.",
          "Модулированный ток 1 кГц управляемо сокращает и отпускает мышцу лица.",
          "Синий, красный и фиолетовый LED — на том же проходе, что и введение.",
        ],
        href: "https://indiba.com/products/ona/",
      },
      {
        id: "tech-elite",
        title: "INDIBA Elite NS",
        brand: "INDIBA",
        group: "Радиочастота · 448 кГц",
        lede:
          "Монополярная радиочастота 448 кГц — та самая частота, на которой построен весь метод INDIBA, и аппарат, которым здесь чаще всего открывают и закрывают протокол.",
        aspects: [
          "Ёмкостный и резистивный электроды: поверхностные ткани или глубокие — выбирают по задаче, а не по названию программы.",
          "Три тепловых уровня, включая тот, где тепла ещё не чувствуешь, — для тканей, в которых ещё держится воспаление.",
          "Один аппарат и на восстановление, и на работу с жировой тканью, и на заживление.",
          "Работает после операций и после инъекций: отёк, гематома, рубцы.",
        ],
        href: "https://indiba.com/products/elite-ns/",
      },
      {
        id: "tech-reverso",
        title: "INDIBA Reverso",
        brand: "INDIBA",
        group: "Фракционная радиочастота",
        lede:
          "Фракционное обновление кожи, где под кожу подбирают не только силу импульса, но и его форму.",
        aspects: [
          "Четыре профиля импульса — ровный, усиленный, двойной и быстрый, — от тонкой чувствительной кожи до работы с глубоким рубцом.",
          "Три рисунка подачи энергии: вся сетка, половина игл или чередующиеся линии — подтяжка в заданном направлении.",
          "Мелкие морщины, постакне и послеоперационные рубцы, белые и красные растяжки, расширенные поры.",
          "Работает и после операции — там лечат воспаление и боль, а не рельеф.",
        ],
        href: "https://indiba.com/products/reverso/",
      },
      {
        id: "tech-icoone",
        title: "icoone Laser Med",
        brand: "icoone",
        group: "Микростимуляция",
        lede:
          "Микростимуляция Roboderm®: независимо моторизованные ролики поднимают и отпускают ткань без вакуума — поэтому процедуру можно повторять хоть каждый день и после неё не остаётся синяков.",
        aspects: [
          "21 600 микростимуляций в минуту — число, по которому технология и названа.",
          "Вакуума нет: насадка скользит, и даже тонкая чувствительная кожа переносит это без боли.",
          "LED и лазерные диоды встроены в насадки и работают на том же проходе, что и массаж.",
          "Сорок шесть программ в книге клуба — медицинские, эстетические, велнес и мужские.",
        ],
        href: "https://icoone.com/en/treatments-aesthetic-body/",
      },
      {
        id: "tech-quattro",
        title: "LightSheer QUATTRO",
        brand: "Lumenis",
        group: "Диодный лазер",
        lede:
          "Две длины волны и три насадки: настройка идёт за волосом и кожей, которые перед тобой, — включая загорелую и тёмную.",
        aspects: [
          "805 нм и 1060 нм на одной платформе: под каждый фототип, а не безопасная середина для всех сразу.",
          "Скоростная насадка 22×35 мм с вакуумом — меньше энергии на импульс, без геля, большие зоны быстро.",
          "ChillTip XC 12×12 мм и ET 9×9 мм с непрерывным сапфировым контактным охлаждением — для точной работы.",
          "Пигментные и сосудистые образования — на том же аппарате.",
        ],
        href: "https://lumenis.com/aesthetics/products/lightsheer/",
      },
      {
        id: "tech-ipl",
        title: "Stellar M22 · IPL",
        brand: "Lumenis",
        group: "Широкополосный импульсный свет",
        lede:
          "Широкополосный свет от 400 до 1200 нм, отфильтрованный под мишень ещё до того, как он дошёл до кожи.",
        aspects: [
          "Девять экспертных фильтров в одной насадке: под задачу меняют границу спектра, а не аппарат.",
          "Optimal Pulse Technology держит форму импульса — именно это и позволяет повторить сеанс.",
          "Сосудистые и пигментные образования, фотостарение, волос.",
          "Аппликатор охлаждается непрерывно, пока стоит на коже.",
        ],
        href: "https://lumenis.com/aesthetics/products/m22/ipl/",
      },
      {
        id: "tech-resurfx",
        title: "Stellar M22 · ResurFX",
        brand: "Lumenis",
        group: "Неаблятивное фракционное обновление",
        lede:
          "Волоконный модуль 1565 нм той же платформы — единственное по-настоящему неаблятивное фракционное обновление, и хватает одного прохода.",
        aspects: [
          "CoolScan ставит точки не подряд, поэтому тепло не копится в тканях.",
          "Больше шестисот сочетаний формы, размера и плотности.",
          "Один проход вместо нескольких: меньше времени на коже и меньше спроса с эпидермиса.",
          "Внутри насадки всё время работает контактное охлаждение.",
        ],
        href: "https://lumenis.com/aesthetics/products/m22/resurfx/",
      },
      {
        id: "tech-cryoskin",
        title: "CryoSkin",
        brand: "CryoSkin · Париж",
        group: "Криотерапия",
        lede:
          "Температурный удар за один сеанс: ткань сначала прогревают, потом уводят в холод — и нигде в этом нет ни азота, ни вакуума.",
        aspects: [
          "Полностью электрический. Баллона с газом нет, поэтому температуру держат и видят, а не распыляют.",
          "Без вакуума: насадка скользит, ничего в неё не втягивается.",
          "Снижение объёма, тонус и контур лица — одной насадкой.",
          "Разработан и собран во Франции, где эту технологию и придумали в 2013 году.",
        ],
        href: "https://cryoskin-international.com/",
      },
      {
        id: "tech-vip",
        title: "VIP Hi-Line",
        brand: "VIP Italia",
        group: "Электростимуляция",
        lede:
          "Нейромышечная стимуляция от дома, который с 1971 года не занимается ничем, кроме мышцы: он работает с мышцей, а не с жиром над ней.",
        aspects: [
          "Программы на тонус, рельеф и восстановление — задаются по группам мышц.",
          "Неинвазивный электролимфодренаж на том же аппарате.",
          "Изометрическая работа и микротоки для лица.",
          "Руки свободны: электроды работают сами, клиент просто лежит.",
        ],
        href: "https://vipitalia.com/treatments/",
      },
      {
        id: "tech-oxygenium",
        title: "Oxygenium",
        brand: "Fabbrimarine",
        group: "Кислородный уход",
        lede:
          "Кислородная терапия для лица на итальянской морской косметике, а не на универсальном геле: самое мягкое, что есть в парке, и чаще всего именно им сеанс заканчивается.",
        aspects: [
          "Морские активные вещества от дома, который больше пятидесяти лет работает с морем — из Болоньи.",
          "Составы рассчитаны на чувствительную, реактивную и повреждённую кожу, которой пилинг был бы в тягость.",
          "Протоколы написаны так, чтобы идти следом за радиочастотой, светом и вакуумом, а не вместо них.",
          "Подготовка, основная фаза и финиш — весь протокол от одного производителя.",
        ],
        href: "https://fabbrimarine.ae/",
      },
    ],
  },
  place: {
    eyebrow: "Клуб",
    title: "Dream Tower, Лимассол.",
    paras: [
      "Пять кабинетов с морской стороны Dream Tower — два из них названы камнями, Агат и Аметист, — лаундж, где кофе приносят раньше, чем начинается консультация, и робот, над которым новые гости до сих пор смеются.",
      "Клуб открывается в семь утра. Для Лимассола это редкость и это сознательно: протокол до работы — тот протокол, который действительно повторяют.",
    ],
    facts: [
      { k: "Адрес", v: "Amathoundos 62, Dream Tower, Agios Tychonas" },
      { k: "Город", v: "Лимассол, Кипр" },
      { k: "Часы", v: "Понедельник – суббота, 07:00 – 21:00" },
      { k: "Кабинеты", v: "Пять, включая диагностический" },
    ],
    captions: [
      { id: "place-tower", text: "Dream Tower, вход" },
      { id: "place-lounge", text: "Лаундж" },
      { id: "place-robes", text: "Перед протоколом" },
      { id: "tech-robot", text: "Робот клуба" },
    ],
    mapCta: "Открыть на карте",
  },
  residence: {
    eyebrow: "Клуб и резиденция",
    title: "Метод переносится.",
    paras: [
      "Программе, построенной на диагностике, не нужен наш адрес. Ей нужны снимок, протокол, приборы и люди, которые умеют их читать, — и всё четыре разворачиваются внутри спа отеля или резиденции на Средиземном море.",
      "Сейчас мы разговариваем с партнёрами в Лимассоле: с теми, у кого уже есть залы и гости, и кто хочет программу с цифрами, а не меню процедур.",
    ],
    points: [
      {
        id: "res-residency",
        title: "Программы пребывания",
        text:
          "Три, пять и семь дней: открываются диагностикой и закрываются тем же замером.",
      },
      {
        id: "res-suite",
        title: "Диагностика на месте",
        text: "Анализ кожи и тела ставим и ведём в спа партнёра.",
      },
      {
        id: "res-continuity",
        title: "Продолжение дома",
        text: "Гость уезжает с протоколом, который клуб ведёт и после выезда.",
      },
      {
        id: "res-staff",
        title: "Обучение персонала",
        text:
          "Специалистов партнёра учим своим протоколам, а ведёт их наш врач.",
      },
    ],
    cta: "Обсудить сотрудничество",
    subject: "Сотрудничество с AI Aesthetic Club",
  },
  social: {
    eyebrow: "Недавнее",
    title: "Чем клуб жил в последнее время.",
    cta: "Смотреть в Instagram",
  },
  contact: {
    eyebrow: "Членство",
    title: "Начните с консультации.",
    lede:
      "Напишите в клуб — ответим ближайшими свободными часами. Осмотр занимает час и заканчивается планом, который Вы можете прочитать сами, даже если решите не начинать.",
    cta: "Написать в клуб",
    ctaAlt: "Instagram",
    hoursLabel: "Часы",
    hours: "Понедельник – суббота · 07:00 – 21:00",
    closed: "Воскресенье — выходной",
    addressLabel: "Адрес",
    writeLabel: "Почта",
  },
  disclaimer:
    "AI Aesthetic Club — клуб для членов клуба. Информация на этой странице общая и не является рекомендацией; программы, протоколы и их уместность определяют на консультации.",
};

export const COPY: Record<Lang, Copy> = { en: EN, ru: RU };

/** Where each language's page lives, for the switch in the header. */
export const OTHER_LANG: Record<Lang, string> = { en: "/ru", ru: "/" };
