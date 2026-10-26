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
  technology: { eyebrow: string; title: string; lede: string; items: Entry[] };
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
    title: "Chosen on merit, replaced without sentiment.",
    lede:
      "The park is listed in full. Hover a platform to see what it is for — and what it is not.",
    items: [
      {
        id: "tech-isemeco",
        title: "ISEMECO 3D D9",
        meta: "Skin analysis",
        text:
          "Photographs the face in several light spectra and returns figures for hydration, pores, pigment and wrinkle depth. Every programme starts here, which is why there is no package to buy before the scan.",
      },
      {
        id: "tech-visbody",
        title: "Visbody",
        meta: "Body scan",
        text:
          "A contactless scan of composition, posture and circumference. Repeated at intervals, it is what turns «I feel better» into a number.",
      },
      {
        id: "tech-ona",
        title: "INDIBA ONA · Elite NS",
        meta: "Proionic 448 kHz",
        text:
          "Proionic current at 448 kHz working at the level of cell metabolism: drainage, recovery after procedures, and the preparation most protocols open with.",
      },
      {
        id: "tech-reverso",
        title: "INDIBA Reverso",
        meta: "Fractional RF",
        text:
          "Radiofrequency delivered into the dermis to remodel scars, stretch marks and texture. It works with the quality of the skin rather than with its appearance.",
      },
      {
        id: "tech-icoone",
        title: "icoone Laser Med & Body",
        meta: "Roboderm® microstimulation",
        text:
          "Thousands of micro-stimulations a minute across two machines: lymphatic drainage, fibrosis, tone. Forty-six programmes in four families — medical, aesthetic, wellness and men's.",
      },
      {
        id: "tech-stellar",
        title: "Lumenis Stellar M22",
        meta: "IPL · ResurFX",
        text:
          "One platform, several applications: IPL for pigment and vessels, ResurFX for non-ablative resurfacing. Settings are chosen per phototype, not per price list.",
      },
      {
        id: "tech-lightsheer",
        title: "LightSheer Quattro",
        meta: "Diode laser",
        text:
          "Four handpieces for hair removal, from a small handpiece for the face to a large one for legs — thirty-two protocols by zone.",
      },
      {
        id: "tech-cryo",
        title: "CryoSkin · VIP Hi-Line · Oxygenium",
        meta: "Contour · muscle · oxygen",
        text:
          "Controlled heat and cold for contour, muscle stimulation for relief, oxygen care for recovery. The supporting cast of a body programme.",
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
    title: "Выбираем по делу, меняем без сожалений.",
    lede:
      "Парк перечислен полностью. Наведите на платформу — увидите, для чего она и для чего нет.",
    items: [
      {
        id: "tech-isemeco",
        title: "ISEMECO 3D D9",
        meta: "Анализ кожи",
        text:
          "Снимает лицо в нескольких спектрах света и отдаёт цифры по увлажнённости, порам, пигменту и глубине морщин. С него начинается любая программа — поэтому у нас нельзя купить курс до снимка.",
      },
      {
        id: "tech-visbody",
        title: "Visbody",
        meta: "Анализ тела",
        text:
          "Бесконтактный анализ состава, осанки и объёмов. При повторе именно он превращает «мне стало лучше» в число.",
      },
      {
        id: "tech-ona",
        title: "INDIBA ONA · Elite NS",
        meta: "Проионика 448 кГц",
        text:
          "Проионный ток 448 кГц работает на уровне клеточного обмена: дренаж, восстановление после процедур и та самая подготовка, с которой начинается большинство протоколов.",
      },
      {
        id: "tech-reverso",
        title: "INDIBA Reverso",
        meta: "Фракционный RF",
        text:
          "Радиочастота в дерму — рубцы, растяжки, рельеф. Аппарат работает с качеством кожи, а не с её маскировкой.",
      },
      {
        id: "tech-icoone",
        title: "icoone Laser Med и Body",
        meta: "Микростимуляция Roboderm®",
        text:
          "Тысячи микростимуляций в минуту на двух аппаратах: лимфодренаж, фиброз, тонус. Сорок шесть программ в четырёх разделах — медицина, эстетика, велнес и мужские.",
      },
      {
        id: "tech-stellar",
        title: "Lumenis Stellar M22",
        meta: "IPL · ResurFX",
        text:
          "Одна платформа, несколько задач: IPL по пигменту и сосудам, ResurFX — неаблятивное обновление. Параметры подбирают по фототипу, а не по прайсу.",
      },
      {
        id: "tech-lightsheer",
        title: "LightSheer Quattro",
        meta: "Диодный лазер",
        text:
          "Четыре насадки для эпиляции — от маленькой для лица до большой для ног. Тридцать два протокола по зонам.",
      },
      {
        id: "tech-cryo",
        title: "CryoSkin · VIP Hi-Line · Oxygenium",
        meta: "Контур · мышцы · кислород",
        text:
          "Управляемые тепло и холод для контура, миостимуляция для рельефа, кислородный уход для восстановления. Вторые роли в телесной программе — но без них она не складывается.",
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
