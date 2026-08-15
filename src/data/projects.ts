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
      en: 'Sole engineer, plus infrastructure, monetization and paid acquisition',
      es: 'Único ingeniero, más infraestructura, monetización y pauta',
    },
    period: '2025-2026',
    lead: true,
    url: 'https://play.google.com/store/apps/details?id=app.luxura.dating',
    urlLabel: { en: 'See it on Google Play', es: 'Verla en Google Play' },
    caseSlug: 'work/luxura',
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
      en: 'Open dating apps drown in low-effort volume. The women leave first, then the men follow them out. Luxura inverts the funnel: men pay to send an invitation, women join free. That only works if the product owns its own economics, so payments, moderation, and the cost of every user had to be mine.',
      es: 'Las apps de citas abiertas se ahogan en volumen de bajo esfuerzo. Primero se van las mujeres, y después los hombres las siguen. Luxura invierte el embudo: los hombres pagan por invitar, las mujeres entran gratis. Eso solo funciona si el producto es dueño de su propia economía, así que los pagos, la moderación y el costo de cada usuario tenían que ser míos.',
    },
    built: {
      en: [
        'Next.js web app wrapped with Capacitor for the Android release',
        'Firebase Phone Auth for SMS one-time passcodes',
        'RevenueCat paywall and subscription handling',
        'AppsFlyer and RevenueCat attribution, wired to Meta Pixel and the Conversions API',
        'Automated content moderation on Azure Content Safety',
        'Full Google Play release pipeline, 12 testers for 14 days in closed testing, then production',
        'Brand identity, logo, and Play Store assets in a dark-and-gold direction',
      ],
      es: [
        'App web en Next.js empaquetada con Capacitor para el release de Android',
        'Firebase Phone Auth para los códigos OTP por SMS',
        'Paywall y suscripciones con RevenueCat',
        'Atribución con AppsFlyer y RevenueCat, conectada a Meta Pixel y la Conversions API',
        'Moderación automática de contenido con Azure Content Safety',
        'Pipeline completo de release en Google Play, 12 testers por 14 días en prueba cerrada, luego producción',
        'Identidad de marca, logo y assets de Play Store en una dirección oscura con dorado',
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
          en: 'Dropped AWS SNS for Firebase Phone Auth on the OTP path',
          es: 'Cambié AWS SNS por Firebase Phone Auth en el flujo de OTP',
        },
        body: {
          en: 'SNS was too slow reaching Colombian carriers, and signups were dying on the verification screen. Nothing else in the app matters if the first screen leaks users. Firebase delivered in-country, so I took the lock-in on that one path and kept the funnel.',
          es: 'SNS llegaba demasiado lento a las operadoras colombianas y los registros se morían en la pantalla de verificación. Nada más en la app importa si la primera pantalla pierde usuarios. Firebase entregaba dentro del país, así que acepté el amarre en ese punto y me quedé con el embudo.',
        },
      },
      {
        title: {
          en: 'Replaced gender with an invitation role, so men could invite men',
          es: 'Cambié el género por un rol de invitación, para que un hombre pudiera invitar a otro',
        },
        body: {
          en: 'The funnel was keyed to gender, which quietly made a man inviting a man impossible. I replaced it with an INVITER and INVITEE role chosen at signup. Onboarding got simpler, and the paid tier now hangs off a role instead of a gender: fairer, and far easier to reason about in code.',
          es: 'El embudo estaba atado al género, lo que en la práctica hacía imposible que un hombre invitara a otro. Lo reemplacé por un rol INVITER e INVITEE que se elige al registrarse. El onboarding quedó más simple, y el plan pago ahora cuelga de un rol y no de un género: más justo, y mucho más fácil de razonar en el código.',
        },
      },
    ],
    outcome: {
      en: 'Live on Google Play. I buy the traffic myself, so every architecture decision comes back to me priced per user. This is not a portfolio piece, it is a product I operate.',
      es: 'Publicada en Google Play. Yo compro el tráfico, así que cada decisión de arquitectura me vuelve con un precio por usuario. Esto no es una pieza de portafolio, es un producto que opero.',
    },
    stack: [
      'Next.js', 'TypeScript', 'Capacitor', 'PostgreSQL', 'Hetzner', 'Coolify',
      'Docker', 'Firebase Auth', 'RevenueCat', 'AppsFlyer', 'Azure Content Safety',
    ],
  },

  {
    id: 'mate',
    name: 'Mate',
    tagline: { en: 'Agent-to-agent AI dating', es: 'Citas con IA de agente a agente' },
    status: 'building',
    statusNote: {
      en: 'Orchestration layer in development',
      es: 'Capa de orquestación en desarrollo',
    },
    role: { en: 'Architecture and implementation', es: 'Arquitectura e implementación' },
    period: '2026',
    lead: true,
    problem: {
      en: 'Swiping asks you to judge a person from one photo and one sentence. Mate tests the opposite: every user gets an agent that represents them, the agents talk first, and the humans only meet once that conversation says it is worth their evening.',
        es: 'Deslizar te obliga a juzgar a una persona con una foto y una frase. Mate prueba lo contrario: cada usuario tiene un agente que lo representa, los agentes hablan primero, y las personas se conocen solo cuando esa conversación dice que la noche vale la pena.',
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
          es: 'Un agente que olvida entre conversaciones no representa a una persona, representa lo que cupo en la última ventana de contexto. Guardar la memoria como vectores recuperables mantiene al agente consistente a medida que se acumulan las conversaciones, y deja el costo de tokens plano en lugar de crecer con la relación.',
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
    id: 'storia',
    name: 'Storia',
    tagline: {
      en: 'AI customer service for LATAM small business',
      es: 'Atención al cliente con IA para pymes de LATAM',
    },
    status: 'building',
    role: { en: 'Architecture and implementation', es: 'Arquitectura e implementación' },
    period: '2026',
    lead: false,
    problem: {
      en: 'A small business in Latin America gets reached on WhatsApp, Messenger, Instagram and the phone at the same time, and answers all four from one person\'s handset. Storia puts those channels behind AI agents that can actually carry the conversation.',
      es: 'A una pyme en Latinoamérica la contactan por WhatsApp, Messenger, Instagram y teléfono al mismo tiempo, y responde los cuatro desde el celular de una persona. Storia pone esos canales detrás de agentes de IA capaces de sostener la conversación.',
    },
    built: {
      en: [
        'Unified inbox across WhatsApp, Messenger and Instagram',
        'WhatsApp Cloud API integration under Meta Tech Provider onboarding',
        'Voice agents for the telephone channel',
      ],
      es: [
        'Bandeja unificada para WhatsApp, Messenger e Instagram',
        'Integración con WhatsApp Cloud API bajo el onboarding de Meta Tech Provider',
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
    stack: ['Next.js', 'TypeScript', 'WhatsApp Cloud API', 'Voice agents', 'PostgreSQL'],
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
