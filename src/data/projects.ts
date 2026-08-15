import { REVEAL_CLIENT_NAMES } from './config';
import type { L, LList } from '../i18n/types';

export type Status = 'live' | 'building' | 'ongoing' | 'delivered';

export const STATUS_LABEL: Record<Status, L> = {
  live: { en: 'Live in production', es: 'En producción' },
  building: { en: 'In development', es: 'En desarrollo' },
  ongoing: { en: 'Ongoing', es: 'En curso' },
  delivered: { en: 'Delivered', es: 'Entregado' },
};

export interface Decision {
  /** The fork in the road, phrased as the choice, not as the result. */
  title: L;
  body: L;
}

export interface Project {
  id: string;
  name: string;
  /** Neutral label used while REVEAL_CLIENT_NAMES is false. */
  anonName?: L;
  tagline: L;
  status: Status;
  /** Qualifies a status where the plain label would overstate it. */
  statusNote?: L;
  role: L;
  period: string;
  problem: L;
  built: LList;
  decisions: Decision[];
  outcome: L;
  /** Technology names stay verbatim in both languages. */
  stack: string[];
  lead: boolean;
  /** True when the name itself is what needs permission. */
  confidential?: boolean;
  /**
   * A public link anyone can open to check the claim. This is the only
   * external, unfakeable evidence the site has, so where one exists it is
   * surfaced next to the project name rather than buried at the bottom.
   */
  url?: string;
  urlLabel?: L;
  /**
   * Two sentences that make someone want to open the thing. `problem` argues;
   * this invites. Only projects with a `caseSlug` need one, because only those
   * are rendered as a card the reader is meant to click.
   */
  summary?: L;
  /**
   * Five words naming what this project is evidence OF. Four teardowns of
   * similar depth otherwise ask the reader to pick blind.
   */
  proves?: L;
  /**
   * Path to a full teardown page, relative to the language root
   * ("work/luxura" → "/work/luxura/" and "/es/work/luxura/"). Its presence is
   * what turns the directory row into a card.
   */
  caseSlug?: string;
  /**
   * Product screenshots, relative to BASE_URL. Taken from Henry's own
   * published marketing site (luxura.vip), so they are his to reuse.
   */
  shots?: { src: string; alt: L }[];
}

const rawProjects: Project[] = [
  /* ---------------------------------------------------------------- LEAD -- */
  {
    id: 'luxura',
    name: 'Luxura',
    tagline: {
      en: 'Invitation-based dating app, Bogotá and Medellín',
      es: 'App de citas por invitación, Bogotá y Medellín',
    },
    status: 'live',
    statusNote: {
      en: 'Google Play production, through closed testing',
      es: 'Producción en Google Play, tras pruebas cerradas',
    },
    role: {
      en: 'Founder and technical lead: backend, infrastructure, monetization and paid acquisition, with Victor on design',
      es: 'Fundador y líder técnico: backend, infraestructura, monetización y pauta, con Victor en diseño',
    },
    period: '2026',
    lead: true,
    url: 'https://play.google.com/store/apps/details?id=app.luxura.dating',
    urlLabel: { en: 'See it on Google Play', es: 'Verla en Google Play' },
    caseSlug: 'work/luxura',
    proves: { en: 'Shipping, operating, and unit economics', es: 'Enviar, operar, y economía por usuario' },
    summary: {
      en: 'Eleven weeks from an empty repo to Google Play, 5,000+ downloads, and two paying subscribers. I paused the ads for one day to find out which half of the funnel was real, then rebuilt onboarding around the answer.',
      es: 'Once semanas de un repo vacío a Google Play, 5.000+ descargas y dos suscriptores pagos. Apagué la pauta un día para saber qué mitad del embudo era real, y reconstruí el onboarding alrededor de la respuesta.',
    },
    shots: [
      {
        src: 'images/luxura-step-one-en.png',
        alt: { en: 'Luxura onboarding screen', es: 'Pantalla de onboarding de Luxura' },
      },
      {
        src: 'images/luxura-step-two-en.png',
        alt: { en: 'Luxura browse grid', es: 'Grilla de perfiles de Luxura' },
      },
      {
        src: 'images/luxura-step-three-en.png',
        alt: { en: 'Luxura invitation flow', es: 'Flujo de invitación de Luxura' },
      },
    ],
    problem: {
      en: 'Open dating apps drown in low-effort volume. The people receiving leave first, and the rest follow them out. Luxura inverts the funnel: one role browses and pays to spend a strictly limited number of invitations, the other receives them free and chooses. Scarcity on the sending side is the product. That only works if the product owns its own economics, so payments, moderation, and the cost of every user had to be mine.',
      es: 'Las apps de citas abiertas se ahogan en volumen de bajo esfuerzo. Primero se va quien recibe, y el resto la sigue. Luxura invierte el embudo: un rol navega y paga por gastar un número estrictamente limitado de invitaciones, el otro las recibe gratis y elige. La escasez del lado que envía es el producto. Eso solo funciona si el producto es dueño de su propia economía, así que los pagos, la moderación y el costo de cada usuario tenían que ser míos.',
    },
    built: {
      en: [
        'Next.js web app wrapped with Capacitor for the Android release',
        'Phone OTP I own end to end: my own codes table, rate limiting and an SMS circuit breaker, with Infobip primary and Twilio as fallback',
        'RevenueCat paywall and subscription handling',
        'AppsFlyer and RevenueCat attribution, wired to Meta Pixel and the Conversions API',
        'Photo and video moderation as a four-provider cascade (self-hosted, Azure, Google Cloud Vision, Sightengine) with a perceptual-hash memory of every rejection',
        'Live face verification in the browser: gesture liveness check matched against profile photos with AWS Rekognition',
        'Real-time chat over Socket.IO on a custom Node server, with 37 scheduled and event-driven background jobs behind it',
        'Full Google Play release pipeline, 12 testers for 14 days in closed testing, then production',
        'Play Store listing, store assets and the release itself, to Victor\'s dark-and-gold design direction',
      ],
      es: [
        'App web en Next.js empaquetada con Capacitor para el release de Android',
        'OTP por SMS de punta a punta: tabla de códigos propia, rate limiting y circuit breaker, con Infobip como principal y Twilio de respaldo',
        'Paywall y suscripciones con RevenueCat',
        'Atribución con AppsFlyer y RevenueCat, conectada a Meta Pixel y la Conversions API',
        'Moderación de fotos y video en cascada de cuatro proveedores (self-hosted, Azure, Google Cloud Vision, Sightengine) con memoria de cada rechazo por hash perceptual',
        'Verificación facial en vivo en el navegador: prueba de gestos contrastada contra las fotos del perfil con AWS Rekognition',
        'Chat en tiempo real sobre Socket.IO en un servidor Node propio, con 37 jobs programados y por evento detrás',
        'Pipeline completo de release en Google Play, 12 testers por 14 días en prueba cerrada, luego producción',
        'Ficha y assets de Play Store y el release, sobre la dirección de diseño oscura con dorado de Victor',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Moved the whole platform off Vercel and Supabase onto a Hetzner VPS running Coolify',
          es: 'Migré toda la plataforma de Vercel y Supabase a un VPS de Hetzner con Coolify',
        },
        body: {
          en: 'A managed platform picks your database, your workers, and your failure modes for you. I wanted those choices back before the product grew into them, so I moved everything onto one Hetzner box running Coolify. When memory ran short I added swap instead of a bigger instance, because a bigger instance is how you stop noticing what your app costs to run. Development runs on that same box: two environments drift, and the drift only ever shows up in the one with users on it. Uptime, disk, and Docker hygiene are mine now.',
          es: 'Una plataforma administrada elige por ti la base de datos, los workers y los modos de falla. Quería esas decisiones de vuelta antes de que el producto creciera dentro de ellas, así que moví todo a una sola máquina Hetzner con Coolify. Cuando faltó memoria agregué swap en vez de una instancia más grande, porque una instancia más grande es la forma de dejar de notar lo que cuesta operar tu app. Desarrollo corre en esa misma máquina: dos entornos se desvían, y la desviación siempre aparece en el que tiene usuarios. El uptime, el disco y la higiene de Docker ahora son míos.',
        },
      },
      {
        title: {
          en: 'Stopped shopping for an SMS provider and owned the OTP path myself',
          es: 'Dejé de buscar proveedor de SMS y me hice dueño del flujo de OTP',
        },
        body: {
          en: 'The OTP screen went through six provider configurations in eight weeks (SNS, then Twilio Verify, raw Twilio, Firebase Phone Auth, Plivo), each swap driven by Colombian carrier delivery, per-message cost, or an error surface I could not control. Nothing else in the app matters if the first screen leaks users, and I was treating that as a procurement problem. The fix was structural: my own codes table, my own rate limiting, a circuit breaker, and the provider reduced to a config value. Infobip is primary today with Twilio behind it, and swapping primary now takes a day instead of a sprint.',
          es: 'La pantalla de OTP pasó por siete configuraciones de proveedor en ocho semanas (SNS, luego Twilio Verify, Twilio directo, Firebase Phone Auth, Plivo), y cada cambio salió de la entrega de las operadoras colombianas, del costo por mensaje, o de una superficie de error que no controlaba. Nada más en la app importa si la primera pantalla pierde usuarios, y yo lo estaba tratando como un problema de compras. El arreglo fue estructural: tabla de códigos propia, rate limiting propio, un circuit breaker, y el proveedor reducido a un valor de configuración. Hoy Infobip es el principal con Twilio detrás, y cambiar de principal toma un día en vez de un sprint.',
        },
      },
      {
        title: {
          en: 'Replaced gender with an invitation role, so men could invite men',
          es: 'Cambié el género por un rol de invitación, para que un hombre pudiera invitar a otro',
        },
        body: {
          en: 'The funnel was keyed to gender, which quietly made a man inviting a man impossible, and it shipped in the same change that moved the verification wall. Paid traffic was dying at a three-step check before it saw a single profile, so I let people in first and gated the invite instead of the entrance. Among users who started a profile, verification completion went from 51.5% to 64.1%. The paid tier now hangs off an INVITER or INVITEE role rather than a gender: fairer, and far easier to reason about in code.',
          es: 'El embudo estaba atado al género, lo que en la práctica hacía imposible que un hombre invitara a otro, y salió en el mismo cambio que movió el muro de verificación. El tráfico pago se moría en una revisión de tres pasos antes de ver un solo perfil, así que dejé entrar a la gente primero y puse el cobro en la invitación, no en la entrada. Entre quienes empezaron un perfil, la verificación completada pasó de 51,5% a 64,1%. El plan pago ahora cuelga de un rol INVITER o INVITEE y no de un género: más justo, y mucho más fácil de razonar en el código.',
        },
      },
    ],
    outcome: {
      en: 'Live on Google Play. I pay for the ads myself, so every architecture decision comes back to me with a price per signup attached. This is not a portfolio piece, it is a product I operate.',
      es: 'Publicada en Google Play. Yo pago la pauta, así que cada decisión de arquitectura me vuelve con un precio por registro encima. Esto no es una pieza de portafolio, es un producto que opero.',
    },
    stack: [
      'Next.js', 'TypeScript', 'Capacitor', 'PostgreSQL', 'Prisma', 'Hetzner',
      'Coolify', 'Docker', 'Socket.IO', 'RevenueCat', 'AppsFlyer', 'Twilio',
      'Infobip', 'Firebase FCM', 'AWS Rekognition', 'Azure Content Safety',
      'Cloudflare R2',
    ],
  },
  {
    id: 'monia',
    name: 'monia',
    tagline: {
      en: 'Personal finance ledger built from bank email',
      es: 'Libro contable personal armado desde el correo del banco',
    },
    status: 'live',
    statusNote: {
      en: 'Live, with a public demo account',
      es: 'En vivo, con cuenta demo pública',
    },
    role: { en: 'Sole engineer, schema to production deploy', es: 'Único ingeniero, del esquema al deploy' },
    period: '2026',
    lead: true,
    url: 'https://monia-rho.vercel.app',
    urlLabel: { en: 'Open the demo', es: 'Abrir el demo' },
    caseSlug: 'work/monia',
    proves: { en: 'Correctness discipline under an agentic workflow', es: 'Disciplina de correctitud en un flujo agéntico' },
    summary: {
      en: 'No aggregator reaches Colombian banks, so this one reads their email instead: transaction alerts and statement PDFs parsed into ledger rows across five institutions and five currencies. Seven days, 271 commits, and a review round that proved 678 green tests were not coverage.',
      es: 'Ningún agregador llega a los bancos colombianos, así que este lee su correo: alertas de transacción y PDF de extractos convertidos en filas del libro, en cinco instituciones y cinco monedas. Siete días, 271 commits, y una ronda de revisión que probó que 678 tests en verde no eran cobertura.',
    },
    shots: [
      {
        src: 'images/monia-ledger.jpg',
        alt: { en: 'The monia ledger with multi-currency amounts', es: 'El libro de monia con montos en varias monedas' },
      },
      {
        src: 'images/monia-overview.jpg',
        alt: { en: 'The monia overview screen', es: 'La pantalla de resumen de monia' },
      },
      {
        src: 'images/monia-sources.jpg',
        alt: { en: 'The monia Sources screen', es: 'La pantalla de Fuentes de monia' },
      },
    ],
    problem: {
      en: 'I bank in Colombia across five institutions and five currencies, and no aggregator covers any of them. Plaid and its peers do not reach Colombian banks, and the banks publish no usable API, so the standard answer, connect your accounts and see one ledger, does not exist here. What the banks do send is email: an alert per transaction and a statement PDF per month. That is a complete, timestamped record sitting in Gmail in a format no ledger reads. monia reads it. The mailbox is the API.',
      es: 'Tengo plata en Colombia en cinco instituciones y cinco monedas, y ningún agregador cubre ninguna. Plaid y sus pares no llegan a los bancos colombianos, y los bancos no publican una API usable, así que la respuesta estándar, conecta tus cuentas y ve un solo libro, no existe acá. Lo que los bancos sí mandan es correo: una alerta por transacción y un PDF de extracto por mes. Eso es un registro completo y con fecha sentado en Gmail en un formato que ningún libro lee. monia lo lee. El buzón es la API.',
    },
    built: {
      en: [
        'Gmail ingestion in two passes: a small daily catch-up and a chunked backfill that walks history backwards without a tab held open',
        'Statement PDF parsing with pdf.js taught to run server-side with no DOM and no fonts, reconciled against the email ledger',
        'A money module where every amount is a bigint in its currency\'s minor units and no JavaScript number ever touches one',
        'Per-user reporting currency as a read-time SQL view over a frozen storage base, converted at each row\'s own date',
        'An assistant that never supplies a number: the app computes every figure and the model only picks which one answers',
        '1,028 unit, 186 integration and 173 end-to-end tests, with CI running a second job against a real Postgres container',
      ],
      es: [
        'Ingesta de Gmail en dos pasadas: una puesta al día diaria pequeña y un relleno por bloques que camina la historia hacia atrás sin una pestaña abierta',
        'Parseo de PDF de extractos con pdf.js enseñado a correr del lado del servidor sin DOM y sin fuentes, conciliado contra el libro de correo',
        'Un módulo de dinero donde cada monto es un bigint en las unidades menores de su moneda y ningún number de JavaScript toca uno',
        'Moneda de reporte por usuario como vista SQL en tiempo de lectura sobre una base congelada, convertida a la fecha de cada fila',
        'Un asistente que nunca aporta un número: la app calcula cada cifra y el modelo solo elige cuál responde',
        '1.028 tests unitarios, 186 de integración y 173 end-to-end, con CI corriendo un segundo job contra un contenedor real de Postgres',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Made the assistant choose figures rather than calculate them',
          es: 'Hice que el asistente eligiera cifras en vez de calcularlas',
        },
        body: {
          en: 'Ask a language model how much you spent on food in March and it produces a confident, plausible, wrong figure. In a ledger that is worse than no answer, because the user cannot tell it from a right one. So the application computes every figure first, with the same typed queries the screens use, and hands the model a fact sheet. The model says which figures answer the question and writes the sentence around them. I rejected three designs in writing first: raw SQL is one malformed query from a wrong total, query tools still let the model pick the window and the filter, and retrieval over transaction text answers "did I pay X" well and "how much" badly.',
          es: 'Pregúntale a un modelo cuánto gastaste en comida en marzo y produce una cifra segura, plausible y equivocada. En un libro contable eso es peor que ninguna respuesta, porque el usuario no la puede distinguir de una correcta. Así que la aplicación calcula cada cifra primero, con las mismas consultas tipadas que usan las pantallas, y le entrega al modelo una hoja de datos. El modelo dice qué cifras responden la pregunta y escribe la frase alrededor. Rechacé tres diseños por escrito antes: SQL crudo está a una consulta mal formada de un total equivocado, las herramientas de consulta igual dejan que el modelo elija la ventana y el filtro, y la recuperación sobre el texto responde bien "¿pagué X?" y mal "¿cuánto?".',
        },
      },
      {
        title: {
          en: 'Kept the Gmail scope off the sign-in grant',
          es: 'Dejé el permiso de Gmail fuera del inicio de sesión',
        },
        body: {
          en: 'Signing in with Google asks for identity only. The Gmail read scope is requested separately, from Settings, and only by the accounts that import mail. The reason is regulatory: it is a restricted scope, and attaching it to sign-in puts the whole application under the restricted-scope regime, which means an annual third-party CASA assessment before the consent screen can be published, and weekly refresh-token expiry until it passes.',
          es: 'Iniciar sesión con Google pide identidad y nada más. El permiso de lectura de Gmail se pide aparte, desde Ajustes, y solo por las cuentas que importan correo. La razón es regulatoria: es un permiso restringido, y pegarlo al inicio de sesión mete la aplicación entera bajo ese régimen, lo que significa una evaluación CASA anual de un tercero antes de poder publicar la pantalla de consentimiento, y vencimiento semanal de refresh tokens hasta que pase.',
        },
      },
    ],
    outcome: {
      en: 'Live with a public demo account. The numbers on its page are read off the repository, and the known-issues list is on the page rather than in my head.',
      es: 'En vivo con cuenta demo pública. Los números de su página se leen del repositorio, y la lista de problemas conocidos está en la página y no en mi cabeza.',
    },
    stack: [
      'Next.js', 'TypeScript', 'React', 'PostgreSQL', 'Drizzle', 'Neon',
      'Gmail API', 'pdfjs-dist', 'Binance API', 'Better Auth', 'Tailwind',
      'Vitest', 'Playwright', 'Vercel',
    ],
  },
  {
    id: 'storia',
    name: 'Storía',
    tagline: {
      en: 'AI customer service for LATAM small business',
      es: 'Atención al cliente con IA para pymes de LATAM',
    },
    status: 'building',
    role: { en: 'Architecture and implementation', es: 'Arquitectura e implementación' },
    period: '2026',
    lead: true,
    caseSlug: 'work/storia',
    proves: { en: 'Agent architecture, built fast', es: 'Arquitectura de agentes, construida rápido' },
    shots: [
      { src: 'images/storia-inbox.jpg', alt: { en: 'The Storia unified inbox with a live WhatsApp conversation', es: 'La bandeja unificada de Storia con una conversación de WhatsApp en vivo' } },
      { src: 'images/storia-dashboard.jpg', alt: { en: 'The Storia dashboard', es: 'El panel de Storia' } },
      { src: 'images/storia-agent.jpg', alt: { en: 'The Storia agent builder', es: 'El constructor de agentes de Storia' } },
    ],
    summary: {
      en: 'Four days, 49,000 lines, and an AI sales agent that reads a real catalogue, sends the photos and books the visit, across WhatsApp, Messenger, Instagram and the phone line. Multi-tenant from the schema up. No pilot has run yet.',
      es: 'Cuatro días, 49.000 líneas, y un agente de ventas con IA que lee un catálogo real, manda las fotos y agenda la visita, en WhatsApp, Messenger, Instagram y la línea telefónica. Multi-tenant desde el esquema. Todavía no corre ningún piloto.',
    },
    problem: {
      en: 'A small business in Latin America gets reached on WhatsApp, Messenger, Instagram and the phone at the same time, and answers all four from one person\'s handset. Storia puts those channels behind AI agents that can actually carry the conversation.',
      es: 'A una pyme en Latinoamérica la contactan por WhatsApp, Messenger, Instagram y teléfono al mismo tiempo, y responde los cuatro desde el celular de una persona. Storia pone esos canales detrás de agentes de IA capaces de sostener la conversación.',
    },
    built: {
      en: [
        'Unified inbox across WhatsApp, Messenger, Instagram and the phone line',
        'WhatsApp Cloud API integration under Meta Tech Provider onboarding',
        'Agent orchestrator with 10 tools: catalogue search, images, quoting, lead scoring, appointments, human handoff',
        'Hybrid product search over typed columns, JSONB attributes, full-text and pgvector in one query',
        'Multi-tenant schema, 25 models, every query scoped and every vector search filtered before the distance operator',
        'Twelve security modules: prompt-injection detection, per-tenant token budgets, rate limits, circuit breaker, PII redaction',
        'Voice agents for the telephone channel',
      ],
      es: [
        'Bandeja unificada para WhatsApp, Messenger, Instagram y la línea telefónica',
        'Integración con WhatsApp Cloud API bajo el onboarding de Meta Tech Provider',
        'Orquestador de agente con 10 herramientas: búsqueda en catálogo, imágenes, cotización, puntaje de leads, citas, traspaso a humano',
        'Búsqueda híbrida de productos sobre columnas tipadas, atributos JSONB, full-text y pgvector en una sola consulta',
        'Esquema multi-tenant, 25 modelos, cada consulta acotada y cada búsqueda vectorial filtrada antes del operador de distancia',
        'Doce módulos de seguridad: detección de inyección de prompts, presupuesto de tokens por tenant, rate limits, circuit breaker, redacción de datos personales',
        'Agentes de voz para el canal telefónico',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Went through Meta Tech Provider onboarding rather than reselling a wrapper',
          es: 'Pasé por el onboarding de Meta Tech Provider en vez de revender un wrapper',
        },
        body: {
          en: 'Going direct on the WhatsApp Cloud API means owning Meta\'s review process and everything compliance touches. It also means the per-conversation economics and the customer relationship stay with the product instead of with a middleman.',
          es: 'Construir directo sobre la WhatsApp Cloud API implica hacerse cargo del proceso de revisión de Meta y de su superficie de cumplimiento. También implica que la economía por conversación y la relación con el cliente se quedan en el producto y no en un intermediario.',
        },
      },
    ],
    // The old outcome restated the decision almost verbatim. This one only
    // says where it stands; the "why" is already in the hard call above.
    outcome: {
      en: 'In development, on Meta\'s own rails from day one.',
      es: 'En desarrollo, sobre los rieles de Meta desde el primer día.',
    },
    stack: [
      'Next.js', 'TypeScript', 'React', 'Prisma', 'PostgreSQL', 'pgvector',
      'Redis', 'BullMQ', 'WhatsApp Cloud API', 'Meta Graph API', 'Voice agents',
      'Capacitor', 'Tailwind',
    ],
  },

  {
    id: 'mate',
    name: 'Mate',
    tagline: { en: 'AI matchmaker, no swiping', es: 'Matchmaker con IA, sin swipe' },
    status: 'building',
    statusNote: {
      en: 'Built and running, not launched',
      es: 'Construido y corriendo, sin lanzar',
    },
    role: { en: 'Architecture and implementation', es: 'Arquitectura e implementación' },
    period: '2026',
    caseSlug: 'work/mate',
    proves: { en: 'Research honesty, including against myself', es: 'Honestidad en investigación, incluso contra mí' },
    summary: {
      en: 'An AI matchmaker with no swiping: a scheduled job scores candidates on the dimensions the research says predict compatibility, and writes you the reason. Seven months, one production incident that turned out to be 75% test fixtures, and a validation pass that killed the framing the product was named after.',
      es: 'Un matchmaker con IA y sin swipe: un job programado puntúa candidatos en las dimensiones que la investigación dice que predicen compatibilidad, y te escribe la razón. Siete meses, un incidente en producción que resultó ser 75% datos de prueba, y una validación que mató el encuadre que le daba nombre al producto.',
    },
    shots: [
      { src: 'images/mate-front.jpg', alt: { en: 'The Mate landing page', es: 'La landing de Mate' } },
      { src: 'images/mate-matches.jpg', alt: { en: 'Scored matches in Mate', es: 'Matches puntuados en Mate' } },
      { src: 'images/mate-conversation.jpg', alt: { en: 'A Mate match conversation', es: 'Una conversación de match en Mate' } },
    ],
    lead: true,
    problem: {
      en: 'Swiping asks you to judge a person from one photo and one sentence. Mate tests the opposite: a scheduled job reads what you told it about yourself, scores candidates on the dimensions the research says actually predict compatibility, and hands you a match with the reason written out. The model never speaks as the user, to anyone. I built the agent-to-agent version first and the market research killed that framing, which is the finding the teardown is really about.',
        es: 'Deslizar te obliga a juzgar a una persona con una foto y una frase. Mate prueba lo contrario: un job programado lee lo que le contaste sobre ti, puntúa candidatos en las dimensiones que la investigación dice que sí predicen compatibilidad, y te entrega un match con la razón escrita. El modelo nunca habla como el usuario, con nadie. Construí primero la versión agente-a-agente y la investigación de mercado mató ese encuadre, que es de lo que trata de verdad el desglose.',
    },
    built: {
      en: [
        'Per-user agents holding a persistent model of the person they represent',
        'Autonomous agent-to-agent conversation, assessed for compatibility before any match surfaces',
        'Multi-agent orchestration on LangGraph',
        'Vector storage for agent memory, so an agent stays consistent across conversations',
        'Next.js App Router front end with Tailwind and shadcn/ui',
      ],
      es: [
        'Un agente por usuario que mantiene un modelo persistente de la persona que representa',
        'Conversación autónoma entre agentes, evaluada por compatibilidad antes de mostrar cualquier match',
        'Orquestación multiagente con LangGraph',
        'Memoria de agente en base vectorial, para que el agente sea consistente entre conversaciones',
        'Front end en Next.js App Router con Tailwind y shadcn/ui',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Started in React Native, then deliberately pivoted to web-first',
          es: 'Empecé en React Native y giré a propósito hacia web primero',
        },
        body: {
          en: 'The open question is whether agents talking to each other actually produce better matches. That lives in the orchestration layer, not in native gestures. Web-first took the iteration loop from a store review down to a deploy, and Capacitor keeps mobile open for when the answer is yes.',
          es: 'La pregunta abierta es si los agentes hablando entre ellos producen mejores matches. Eso vive en la capa de orquestación, no en los gestos nativos. Ir primero a web bajó el ciclo de iteración de una revisión de tienda a un deploy, y Capacitor deja la vía móvil abierta para cuando la respuesta sea sí.',
        },
      },
      {
        title: {
          en: 'Gave agents durable memory in a vector store instead of a longer prompt',
          es: 'Le di a los agentes memoria durable en una base vectorial en vez de un prompt más largo',
        },
        body: {
          en: 'An agent that forgets between conversations does not represent a person, it represents whatever fit in the last context window. Persisting memory as retrievable vectors keeps the agent consistent as conversations accumulate, and keeps token cost flat rather than growing with the relationship.',
          es: 'Un agente que olvida entre conversaciones no representa a una persona. Representa lo que cupo en la última ventana de contexto. Guardar la memoria como vectores recuperables mantiene al agente consistente a medida que se acumulan las conversaciones, y deja el costo de tokens plano en lugar de crecer con la relación.',
        },
      },
    ],
    outcome: {
      en: 'The orchestration layer is the experiment, so it gets built before anything wrapped around it.',
      es: 'La capa de orquestación es el experimento, así que se construye antes que la superficie que la rodea.',
    },
    stack: [
      'Next.js', 'TypeScript', 'LangGraph', 'PostgreSQL', 'Prisma',
      'Vector DB', 'Redis', 'Tailwind', 'shadcn/ui',
    ],
  },

  {
    id: 'femi',
    name: 'Femi',
    tagline: { en: "Women's safety platform", es: 'Plataforma de seguridad para mujeres' },
    status: 'building',
    statusNote: {
      en: 'Substantially built, not released',
      es: 'En gran parte construida, sin lanzar',
    },

    role: { en: 'Mobile and real-time systems', es: 'Móvil y sistemas en tiempo real' },
    period: '2025-2026',
    lead: true,
    problem: {
      en: 'A panic button has one setting. Real situations run from walking home uneasy to an emergency in progress, and the response should not be identical. Femi grades an alert across five levels of urgency and routes each one differently.',
        es: 'Un botón de pánico tiene un solo ajuste. Las situaciones reales van desde caminar a casa incómoda hasta una emergencia en curso, y la respuesta no debería ser idéntica. Femi clasifica cada alerta en cinco niveles de urgencia y enruta cada una de forma distinta.',
    },
    built: {
      en: [
        'React Native and Expo application',
        'Five-level emergency alert system carrying GPS location',
        'Dual response model, trusted personal contacts plus nearby verified helpers',
        'Identity verification combining face recognition with document checks',
        'Live chat over WebSocket inside the alert itself, so responders coordinate in context',
        'Community forum and a hearts-based reputation system',
        'Google Sign-In through Expo auth with custom scheme redirects',
      ],
      es: [
        'Aplicación en React Native y Expo',
        'Sistema de alertas de emergencia en cinco niveles, con ubicación GPS',
        'Modelo de respuesta doble, contactos de confianza más ayudantes verificados cercanos',
        'Verificación de identidad que combina reconocimiento facial con validación de documento',
        'Chat en vivo por WebSocket dentro de la alerta, para que quien responde coordine en contexto',
        'Foro comunitario y sistema de reputación por corazones',
        'Inicio de sesión con Google vía Expo auth y redirecciones con esquema propio',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Required face and document verification before letting anyone answer an alert',
          es: 'Exigí verificación facial y de documento antes de dejar que alguien respondiera una alerta',
        },
        body: {
          en: 'Pinging strangers near a woman in trouble only helps if those strangers are accountable. Face and document checks slow signup down and the helper network grows slower for it. On a safety product that is the right way to be wrong: an unverified helper network is a liability, not a feature.',
          es: 'Avisar a desconocidos cerca de una mujer en problemas solo ayuda si esos desconocidos responden por lo que hacen. La verificación facial y de documento frena el registro y la red de ayudantes crece más lento. En un producto de seguridad esa es la forma correcta de equivocarse: una red sin verificar es un riesgo, no una funcionalidad.',
        },
      },
      {
        title: {
          en: 'Put live chat inside the alert rather than in a separate inbox',
          es: 'Puse el chat en vivo dentro de la alerta y no en una bandeja aparte',
        },
        body: {
          en: 'Nobody navigates during an incident. Keeping the WebSocket channel inside the alert puts the location, the urgency, and the conversation on one screen, so a responder never leaves it to ask where someone is.',
          es: 'Durante un incidente nadie navega. Mantener el canal WebSocket dentro del detalle de la alerta deja la ubicación, el nivel de urgencia y la conversación en una sola pantalla, para que quien responde nunca cambie de contexto solo para preguntar dónde está la persona.',
        },
      },
    ],
    outcome: {
      en: 'Real-time alerting, identity verification, and trust modeling working as one system: the parts of a safety product you cannot bolt on later.',
      es: 'Alertas en tiempo real, verificación de identidad y modelado de confianza funcionando como un solo sistema: las partes de un producto de seguridad que no se pueden agregar después.',
    },
    stack: [
      'React Native', 'Expo', 'TypeScript', 'WebSockets', 'PostgreSQL',
      'Face recognition', 'Google OAuth',
    ],
  },

  /* ---------------------------------------------------------- SUPPORTING -- */
  {
    id: 'level60',
    name: 'Level60 Consulting',
    tagline: { en: 'Microsoft enterprise integration', es: 'Integración empresarial con Microsoft' },
    status: 'ongoing',
    role: { en: 'Full-stack engineer', es: 'Ingeniero full-stack' },
    period: '2021-2026',
    lead: false,
    problem: {
      en: 'Corporate Microsoft estates where identity, Teams, and reporting have to hold together across tenants, and keep holding the day Microsoft retires an endpoint underneath you.',
      es: 'Entornos corporativos de Microsoft donde identidad, Teams y reportería tienen que sostenerse entre tenants, y seguir sosteniéndose el día que Microsoft retira un endpoint debajo tuyo.',
    },
    built: {
      en: [
        'Microsoft Graph and Teams API integrations',
        'Azure Functions and backend services against Azure SQL',
        'Single sign-on through Entra ID and ADFS',
        'Migration research for the TeamworkDevice endpoint retirement',
        'Azure SQL quota remediation across large archive tables',
      ],
      es: [
        'Integraciones con Microsoft Graph y la API de Teams',
        'Azure Functions y servicios de backend sobre Azure SQL',
        'Inicio de sesión único con Entra ID y ADFS',
        'Investigación de migración por el retiro del endpoint TeamworkDevice',
        'Remediación de cuota en Azure SQL sobre tablas de archivo grandes',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Treated the Teams API deprecation as a research problem before a code problem',
          es: 'Traté la deprecación de la API de Teams como un problema de investigación antes que de código',
        },
        body: {
          en: 'A retired Microsoft endpoint almost never maps one to one onto its replacement. I worked out exactly what the new surface could and could not do before touching the integration, which turned the migration into a known quantity instead of a discovery exercise with clients on it.',
          es: 'Un endpoint retirado de Microsoft casi nunca mapea uno a uno con su reemplazo. Establecí exactamente qué podía y qué no podía hacer la nueva superficie antes de tocar la integración, y eso convirtió la migración en algo conocido en vez de un descubrimiento con clientes encima.',
        },
      },
    ],
    outcome: {
      en: 'Five years of it, unbroken. Long-lived systems, real consequences, running inside someone else\'s tenant.',
      es: 'Cinco años seguidos. Sistemas de larga vida, consecuencias reales, corriendo dentro del tenant de otra empresa.',
    },
    stack: [
      'Microsoft Graph', 'Teams API', 'Azure Functions', 'Azure SQL',
      'Entra ID', 'ADFS', 'TypeScript',
    ],
  },


  {
    id: 'clinic-matching',
    name: 'HairBackNow',
    anonName: { en: 'Clinic matching platform', es: 'Plataforma de matching de clínicas' },
    tagline: {
      en: 'Growth engineering for a medical marketplace',
      es: 'Ingeniería de crecimiento para un marketplace médico',
    },
    status: 'delivered',
    role: {
      en: 'Contract, paid acquisition and channel strategy',
      es: 'Contrato, pauta y estrategia de canales',
    },
    period: '2026',
    lead: false,
    confidential: true,
    problem: {
      en: 'A platform matching patients to hair restoration clinics, where the cost of acquiring a patient decides whether the model works at all.',
      es: 'Una plataforma que conecta pacientes con clínicas de restauración capilar, donde el costo de adquirir un paciente decide si el modelo funciona o no.',
    },
    built: {
      en: [
        'Channel strategy memo covering Meta Ads, Google Ads, and geo-targeting',
        'Measurement and attribution setup',
        'Meta ad creative production',
      ],
      es: [
        'Memo de estrategia de canales sobre Meta Ads, Google Ads y segmentación geográfica',
        'Configuración de medición y atribución',
        'Producción de creativos para Meta',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Specified the measurement setup before the spend',
          es: 'Definí la medición antes de la inversión',
        },
        body: {
          en: 'Paid acquisition without attribution is a guess with an invoice attached. Getting the tracking right first meant every campaign decision after it rested on a number instead of an impression.',
          es: 'Pauta sin atribución es una adivinanza con factura. Dejar el tracking correcto primero hizo que cada decisión de campaña posterior se apoyara en un número y no en una impresión.',
        },
      },
    ],
    outcome: { en: 'Delivered as a contract engagement.', es: 'Entregado como contrato.' },
    stack: ['Meta Ads', 'Google Ads', 'Attribution', 'Creative production'],
  },

  {
    id: 'infra-ops',
    name: 'Infrastructure operations',
    tagline: { en: 'Running what I ship', es: 'Operar lo que construyo' },
    status: 'ongoing',
    role: { en: 'Operator', es: 'Operación' },
    period: '2025-2026',
    lead: false,
    problem: {
      en: 'Self-hosting has a tail. The day you leave managed platforms, disk pressure, container sprawl, and cache failures become yours at two in the morning.',
      es: 'Auto-hospedar es una decisión con cola. Cuando dejas las plataformas administradas, el disco lleno, los contenedores acumulados y las fallas de caché pasan a ser tuyos a las dos de la mañana.',
    },
    built: {
      en: [
        'Hetzner disk management and capacity planning',
        'Automated Docker cleanup, to stop image accumulation filling the volume',
        'Redis failure diagnosis and resolution',
        'Coolify deployment troubleshooting',
      ],
      es: [
        'Gestión de disco y planificación de capacidad en Hetzner',
        'Limpieza automatizada de Docker, para que la acumulación de imágenes no llene el volumen',
        'Diagnóstico y resolución de fallas de Redis',
        'Resolución de problemas de despliegue en Coolify',
      ],
    },
    decisions: [
      {
        title: {
          en: 'Automated the cleanup instead of remembering to do it',
          es: 'Automaticé la limpieza en vez de acordarme de hacerla',
        },
        body: {
          en: 'Every outage I have had on my own hardware traced back to something that piled up quietly. A scheduled cleanup turns a judgment call I have to remember into a property of the system.',
          es: 'Cada caída que he tenido en self-hosting se rastreó hasta algo que se acumuló en silencio. La limpieza programada convierte un juicio recurrente en una propiedad del sistema.',
        },
      },
    ],
    outcome: {
      en: 'This is why the Luxura migration held. Someone has to run it afterwards, and that someone is me.',
      es: 'La razón por la que la migración de hosting de Luxura se sostuvo: alguien tiene que operarla después, y ese alguien soy yo.',
    },
    stack: ['Hetzner', 'Docker', 'Coolify', 'Redis', 'Linux'],
  },
];

/** Applies the client-name permission flag. Nothing else reads REVEAL_CLIENT_NAMES. */
export const projects: Project[] = rawProjects.map((p) =>
  p.confidential && !REVEAL_CLIENT_NAMES && p.anonName
    ? { ...p, name: p.anonName.en, anonName: p.anonName }
    : p,
);

/** Confidential entries render their neutral label per language. */
export const projectName = (p: Project, lang: 'en' | 'es'): string =>
  p.confidential && !REVEAL_CLIENT_NAMES && p.anonName ? p.anonName[lang] : p.name;

export const leadProjects = projects.filter((p) => p.lead);
export const supportingProjects = projects.filter((p) => !p.lead);
