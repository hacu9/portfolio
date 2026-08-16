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
      en: 'Principal engineer on a room-health platform for corporate clients: it monitors Microsoft Teams Rooms, Cisco and Zoom hardware across customer tenants, runs pre-meeting checks, raises alerts, and syncs to an ERP, ServiceNow and Power BI.',
      es: 'Ingeniero principal de una plataforma de salud de salas para clientes corporativos: monitorea salas de Microsoft Teams, hardware de Cisco y Zoom entre tenants, corre chequeos previos a la reunión, levanta alertas, y sincroniza con un ERP, ServiceNow y Power BI.',
    },
    highlights: {
      en: [
        'Principal engineer on the platform for five years. I joined it two years in and became the constant across it, owning the integration and alerting layers: multi-tenant Exchange calendar sync, Teams Panel discovery and tracking, peripheral fault detection, and global alerting with daily caps and summary digests.',
        'Replaced a Logic Apps pipeline with app-only Microsoft Graph ingestion for ServiceNow incidents, removing a hop that had to be maintained separately from the application.',
        'Owned a separate Python service on Azure that integrates the platform with the client ERP, 58 endpoints, as its principal author.',
        'Ran the Azure platform the product sits on: Entra app registrations and multi-tenant consent, Blob Storage and the SAS credentials that reach it, Logic Apps, Azure SQL, Analysis Services, and Monitor data collection rules with KQL for room telemetry.',
        'Wrote the impact assessment when Microsoft retired the TeamworkDevice API. It was the only interface the product had for Teams Rooms device health, Microsoft confirmed no replacement was planned, and the assessment set what every customer tenant could still be told before any code changed.',
        'Traced a reporting pipeline that had shown no incident data for six months to an expired storage credential and a row-terminator mismatch in a bulk load, across Logic Apps, Azure SQL, Blob Storage and Analysis Services.',
        'Implemented single sign-on through Entra ID and ADFS across client tenants.',
        'Diagnosed and remediated Azure SQL quota exhaustion on large archive tables.',
        'Set and announced branch-protection policy for the team: required review before merge, PR-only on main and develop.',
      ],
      es: [
        'Ingeniero principal de la plataforma durante cinco años. Entré dos años después de que arrancara y me volví la constante del proyecto, a cargo de las capas de integración y alertas: sincronización multi-tenant de calendarios de Exchange, descubrimiento y seguimiento de paneles de Teams, detección de fallas en periféricos, y alertas globales con topes diarios y resúmenes.',
        'Reemplacé un pipeline de Logic Apps con ingesta de incidentes de ServiceNow por Microsoft Graph app-only, y saqué del medio un salto que había que mantener aparte de la aplicación.',
        'A cargo de un servicio aparte en Python sobre Azure que integra la plataforma con el ERP del cliente, 58 endpoints, como su autor principal.',
        'Manejé la plataforma de Azure sobre la que corre el producto: registros de aplicación en Entra y consentimiento multi-tenant, Blob Storage y las credenciales SAS que lo alcanzan, Logic Apps, Azure SQL, Analysis Services, y reglas de recolección de Monitor con KQL para telemetría de salas.',
        'Escribí la evaluación de impacto cuando Microsoft retiró la API TeamworkDevice. Era la única interfaz que el producto tenía para la salud de los dispositivos de Teams Rooms, Microsoft confirmó que no habría reemplazo, y la evaluación definió qué se le podía decir a cada tenant antes de tocar código.',
        'Rastreé un pipeline de reportería que llevaba seis meses sin datos de incidentes hasta una credencial de almacenamiento vencida y un terminador de fila que no coincidía en una carga masiva, entre Logic Apps, Azure SQL, Blob Storage y Analysis Services.',
        'Implementé inicio de sesión único con Entra ID y ADFS entre tenants de clientes.',
        'Diagnostiqué y remedié agotamiento de cuota en Azure SQL sobre tablas de archivo grandes.',
        'Definí y anuncié la política de protección de ramas del equipo: revisión obligatoria antes del merge, solo PR en main y develop.',
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
        'Shipped Luxura to Google Play production as the only engineer: build, infrastructure, payments, moderation, store release, and the ad campaigns. Victor designed it.',
        'Moved off managed platforms onto a single VPS I operate, taking back the database, the workers, and the hosting bill.',
        'Ran paid acquisition personally across Meta, TikTok, and Google: campaign structure, creative, attribution, and the cost per acquired user.',
        'Delivered growth and measurement strategy as a contract engagement for a medical marketplace.',
      ],
      // The Spanish previously claimed the hosting cost went down; the English
      // only claims ownership of the bill. Aligned to the English, nothing here
      // may assert more than the record does.
      es: [
        'Publiqué Luxura en producción en Google Play como único ingeniero: build, infraestructura, pagos, moderación, release y campañas. Victor lo diseñó.',
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
    role: {
      en: 'Ingeniería Informática, two years, not completed',
      es: 'Ingeniería Informática, dos años, sin completar',
    },
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
