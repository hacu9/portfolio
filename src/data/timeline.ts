import type { L, LList } from '../i18n/types';

export interface TimelineEntry {
  from: string;
  to: string;
  /** Shown when COARSE_TIMELINE_DATES is on. */
  yearsOnly: string;
  role: L;
  org: string;
  /** One line of context. Rendered by every variant. */
  detail?: L;
  /** What was actually done in the role. This is the part a hiring manager reads. */
  highlights?: LList;
  kind: 'work' | 'education';
}

/**
 * Employment, not projects. A portfolio that shows only products reads as a
 * side-project page; the roles are what make it a career.
 *
 * Feb to Jul 2021 is unaccounted for and stays that way. A five-month gap five
 * years ago needs no story, and filler would be worse than the gap. If Henry
 * would rather not show it, config.COARSE_TIMELINE_DATES collapses the column
 * to years without asserting anything untrue.
 */
export const timeline: TimelineEntry[] = [
  {
    from: 'Jul 2021',
    to: 'Present',
    yearsOnly: '2021 -',
    role: { en: 'Full-Stack Engineer', es: 'Ingeniero Full-Stack' },
    org: 'Level60 Consulting',
    detail: {
      en: 'Microsoft enterprise integration for corporate clients: identity, Teams, and reporting across tenants.',
      es: 'Integración empresarial con Microsoft para clientes corporativos: identidad, Teams y reportería entre tenants.',
    },
    highlights: {
      en: [
        'Built and maintained integrations against Microsoft Graph and the Teams API, plus Azure Functions services over Azure SQL.',
        'Implemented single sign-on through Entra ID and ADFS across client tenants.',
        'Led the migration research when Microsoft retired the TeamworkDevice endpoint, establishing what the replacement surface could and could not do before any code changed.',
        'Diagnosed and remediated Azure SQL quota exhaustion on large archive tables.',
        'Set and announced branch-protection policy for the team: required review before merge, PR-only on main and develop.',
      ],
      es: [
        'Construí y mantuve integraciones con Microsoft Graph y la API de Teams, además de servicios en Azure Functions sobre Azure SQL.',
        'Implementé inicio de sesión único con Entra ID y ADFS entre tenants de clientes.',
        'Dirigí la investigación de migración cuando Microsoft retiró el endpoint TeamworkDevice, estableciendo qué podía y qué no podía hacer la nueva superficie antes de tocar el código.',
        'Diagnostiqué y resolví el agotamiento de cuota en Azure SQL sobre tablas de archivo grandes.',
        'Definí y comuniqué al equipo la política de protección de ramas: revisión obligatoria antes de mergear, solo PRs en main y develop.',
      ],
    },
    kind: 'work',
  },
  {
    from: '2021',
    to: 'Present',
    yearsOnly: '2021 -',
    role: { en: 'Independent engineer, own products', es: 'Ingeniero independiente, productos propios' },
    org: 'Own products and direct contracts',
    detail: {
      en: 'Four products of my own, each taken end to end, alongside the Level60 work.',
      es: 'Cuatro productos propios, llevados de punta a punta en paralelo al trabajo de Level60.',
    },
    highlights: {
      en: [
        'Shipped Luxura to Google Play production alone: build, infrastructure, payments, moderation, store release, and the ad campaigns.',
        'Moved off managed platforms onto a single VPS I operate, taking back the database, the workers, and the hosting bill.',
        'Ran paid acquisition personally across Meta, TikTok, and Google: campaign structure, creative, attribution, and the cost per acquired user.',
        'Delivered growth and measurement strategy as a contract engagement for a medical marketplace.',
      ],
      // The Spanish previously claimed the hosting cost went down; the English
      // only claims ownership of the bill. Aligned to the English, nothing here
      // may assert more than the record does.
      es: [
        'Publiqué Luxura en producción en Google Play yo solo: build, infraestructura, pagos, moderación, release y campañas.',
        'Salí de las plataformas administradas hacia un único VPS que opero yo, recuperando la base de datos, los workers y la factura del hosting.',
        'Manejé la pauta personalmente en Meta, TikTok y Google: estructura de campañas, creativos, atribución y costo por usuario adquirido.',
        'Entregué estrategia de crecimiento y medición como contrato para un marketplace médico.',
      ],
    },
    kind: 'work',
  },
  {
    from: 'Jul 2020',
    to: 'Feb 2021',
    yearsOnly: '2020-2021',
    role: { en: 'Full-Stack Developer', es: 'Desarrollador Full-Stack' },
    org: 'Gara Group Inc.',
    // "My first US client" was removed: the freelance entry below has US
    // clients before Gara, and both claims could not stand.
    detail: {
      en: 'Remote from Cúcuta for a Florida software firm.',
      es: 'Remoto desde Cúcuta para una firma de software en Florida.',
    },
    highlights: {
      /*
       * Gara Group, Inc. is a real firm in Sunrise, Florida that builds
       * platforms for direct-sales and network-marketing companies -
       * distributor back-offices, replicated customer-facing sites, and
       * corporate operations. That matches Henry's description of the work.
       *
       * TODO(henry): the Laravel and Vue stack is your recollection, prefaced
       * with "I think". Confirm before this goes to a recruiter, and add one
       * concrete thing you shipped, this is still the thinnest role here.
       */
      en: [
        'Built web applications for a firm specializing in direct-sales and network-marketing platforms, distributor back-office, replicated customer-facing sites, and corporate operations.',
        'Worked in Laravel with Vue on the front end.',
      ],
      es: [
        'Construí aplicaciones web para una firma especializada en plataformas de venta directa y mercadeo en red, back-office de distribuidores, sitios replicados de cara al cliente y operaciones corporativas.',
        'Trabajé en Laravel con Vue en el front end.',
      ],
    },
    kind: 'work',
  },
  {
    /*
     * TODO(henry): dates are year-level on purpose. Henry does not remember
     * the exact months, so nothing more precise than the year is claimed.
     * The 2018 start is his own anchor for the "8+ years" headline. Confirm
     * the year, and add one concrete Pukara deliverable when one surfaces.
     * "Hospitalary handling software" was read as hospital management
     * software; if he meant hospitality (hotels), fix the highlight.
     */
    from: '2018',
    to: '2020',
    yearsOnly: '2018-2020',
    role: { en: 'Freelance Full-Stack Developer', es: 'Desarrollador Full-Stack freelance' },
    org: 'Pukara',
    detail: {
      en: 'Consulting for Pukara, plus direct work for clients in Spain and the US.',
      es: 'Consultoría para Pukara, más trabajo directo para clientes en España y EE. UU.',
    },
    highlights: {
      en: [
        'Built hospital management software for a client in Spain.',
        'Consulting work for Pukara across many client projects.',
      ],
      es: [
        'Construí software de gestión hospitalaria para un cliente en España.',
        'Hice consultoría para Pukara en muchos proyectos de clientes.',
      ],
    },
    kind: 'work',
  },
  {
    from: '2016',
    to: '2017',
    yearsOnly: '2016-2017',
    role: { en: 'Full Stack certification', es: 'Certificación Full Stack' },
    org: 'freeCodeCamp',
    kind: 'education',
  },
  {
    from: '2014',
    to: '2016',
    yearsOnly: '2014-2016',
    role: { en: 'Ingeniería Informática', es: 'Ingeniería Informática' },
    org: 'UNET, Universidad Nacional Experimental del Táchira',
    kind: 'education',
  },
];

/** The "Present" label follows the page language. */
export const presentLabel: L = { en: 'Present', es: 'Actualidad' };

/**
 * Date strings stay in English in the data ("Jul 2021"); the Spanish page
 * localizes the month at render time. Bare years pass through unchanged.
 */
const ES_MONTH: Record<string, string> = {
  Jan: 'ene', Feb: 'feb', Mar: 'mar', Apr: 'abr', May: 'may', Jun: 'jun',
  Jul: 'jul', Aug: 'ago', Sep: 'sep', Oct: 'oct', Nov: 'nov', Dec: 'dic',
};

/** "Jul 2021" → "jul 2021". Months are lowercase in Spanish. */
export const esDate = (s: string): string =>
  s.replace(/^[A-Z][a-z]{2}(?=\s)/, (m) => ES_MONTH[m] ?? m);
