import type { L, LList } from '../i18n/types';

export const profile = {
  name: 'Henry Cabello',
  title: { en: 'Senior Full-Stack Engineer', es: 'Ingeniero Full-Stack Senior' } as L,
  experience: { en: '8+ years', es: '8+ años' } as L,
  location: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' } as L,
  workingStyle: { en: 'Remote-first · US clients', es: 'Remoto · clientes en EE. UU.' } as L,
  languages: {
    en: ['Spanish, native', 'English, fluent'],
    es: ['Español, nativo', 'Inglés, fluido'],
  } as LList,

  /** Relative to BASE_URL; pages resolve it with path(). */
  photo: 'images/henry.jpg',
  photoAlt: {
    en: 'Henry Cabello',
    es: 'Henry Cabello',
  } as L,

  email: 'cabello986@gmail.com',
  /** A hiring manager wants a slot, not a form. */
  calendly: 'https://calendly.com/cabello986/30min',
  github: 'hacu9',
  githubUrl: 'https://github.com/hacu9',
  linkedin: 'cabello986',
  linkedinUrl: 'https://www.linkedin.com/in/cabello986',

  /**
   * The headline. Short, and general enough to fit every role he wants.
   *
   * History, so this does not cycle again:
   *   1. A 34-word sentence. Would not set as display type; argued range,
   *      and range reads as generalist.
   *   2. "One engineer shipped this app...", "this app" pointed at nothing
   *      before the reader had met Luxura, and it shifted person mid-thought.
   *   3. "I build the product, run the infrastructure, and buy the users."
   *      Too narrow: a third was ad buying, none was AI.
   *   4. "I build it, ship it, and still run it." Generic.
   *   5. "Nothing here is a demo." Strong, and it attacked the genre rather
   *      than describing him, but it is a stance rather than a voice. Kept as
   *      the alternate.
   *
   *   6. "Ask me what broke." Henry's own line, and it did open a loop the
   *      reader wanted closed. Two things killed it. It promised plural
   *      breakages and the lede paid one. And the lede that carried it spent
   *      the entire hero on Luxura, which told a hiring manager that the
   *      enterprise and AI work below it was not worth talking about. That
   *      work is what qualifies him for everything in `fitFor`.
   *
   * The current line attacks the format instead of describing him, which is
   * why an earlier note filed it as "a stance rather than a voice" and set it
   * aside. That note was wrong on the evidence. Every other portfolio in the
   * pile is demos; this one is four real products, and saying so out loud is
   * the only claim on the page that its competitors cannot copy.
   *
   * It is also literally true, which was checked rather than assumed:
   * Luxura is `live`, Level60 and the infrastructure work are `ongoing`,
   * HairBackNow is `delivered`, and Mate, Femi and Storia are `building`
   * real products for real users. None of the seven was built to be shown.
   *
   * Do NOT strengthen this into "everything here runs in production". Three
   * projects carry status 'building', so that version is false.
   *
   * ALTERNATES, if this ever needs swapping. Each is one line:
   *   'I don't hand things off.'      // true of all four domains, but it is
   *                                   // a negative, and an assertion until
   *                                   // the lede pays it off one line later
   *   'Ask me what it cost.'          // the interrogative hook, pointed at
   *                                   // the rarest claim he has
   *   'Eight years, four domains, nothing built twice.'
   *   'The stack is not the skill.'   // currently the approach heading
   *
   * REJECTED, and they should stay rejected. Anything built on the money
   * angle ("I pay for my own users", "I shipped it, I run it, I pay for it")
   * repeats history item 3 above: it reads growth marketer to the exact
   * person who is screening for an engineer.
   */
  positioning: {
    en: 'Nothing here is a demo.',
    es: 'Nada de esto es un demo.',
  } as L,

  /**
   * Proves the headline in one breath: the breadth first, then the one
   * artifact a reader can open on their phone right now.
   *
   * The previous version listed three talking points ("the OTP failure,
   * running production on one box, and what happens when you let two models
   * argue about your code"). Three problems with it, all fixed here:
   *
   *   - "The parts worth talking about are..." ranked the enterprise and AI
   *     work below it as not worth talking about, in the hero, above the
   *     cards carrying it. It volunteered a deficit against his own work.
   *   - The OTP item was a configuration he enabled. It read as a war story
   *     and it was not one, and an interviewer who asked would find that out.
   *   - The list broke parallel three ways: a noun, then a gerund phrase,
   *     then a clause. Three re-parses inside a six-second read.
   *
   * It does NOT claim every project reached production. Four are named and
   * only Luxura is `live`, so the sentence stops at naming the domains and
   * lets the status badge on each card carry the truth per project. An
   * earlier draft ended "every one went to production", which was false.
   *
   * The three-verb close is the strongest sentence on the page and predates
   * all of this. Do not rewrite it.
   *
   * It was once stretched to "I buy every user who installs it". That broke
   * the beat, 3 words then 4 then 8, so the clause that should snap was the
   * one that sagged, and it was near-tautological besides: a user is someone
   * who installed. It is back to "I buy its users", now with no conjunction,
   * so the three clauses land flat and escalate on their own.
   *
   * FOUR is counted, not rounded. Luxura, Mate, Femi and Storia are Henry's
   * from an empty repo. Level60 is integration inside Microsoft estates that
   * already existed and HairBackNow was contract growth work, so neither is
   * ground-up. Those two are real and they are named, they are just a
   * different kind of work, and the old opener ("four domains that share
   * nothing") blurred the two kinds together. Recount before editing this.
   *
   * The hero does NOT say which of the four shipped, and it must not start.
   * Every card renders a status badge from STATUS_LABEL, so the reader
   * already sees "In development" on three of them. Repeating it here turns
   * structure into confession, which is the same reason the shipping-status
   * paragraph below was removed. "Some were experiments" is also less
   * accurate than the badges: Femi is substantially built and Storia is a
   * commercial product in Meta Tech Provider onboarding.
   */
  lede: {
    en: 'Four products I started from an empty repo, and five unbroken years inside corporate Microsoft estates. Luxura is the one you can open right now: I built it, I run its server, I buy its users.',
    // "I buy its users" works in English; in Spanish "comprar usuarios" reads
    // as buying fake followers, so the Spanish buys the traffic instead, which
    // is also the wording the Luxura outcome uses.
    es: 'Cuatro productos que arranqué desde un repositorio vacío, y cinco años ininterrumpidos dentro de entornos corporativos de Microsoft. Luxura es la que puedes abrir ahora mismo: la construí, opero su servidor, le compro el tráfico.',
  } as L,

  /** Used where a plain description is needed, such as meta tags. */
  summary: {
    // Only Luxura is in production, so the singular. The plural overstated it.
    en: 'Senior full-stack engineer, 8+ years. Ships and operates complete products: enterprise Microsoft integrations, AI agents, and a mobile app in production.',
    es: 'Ingeniero full-stack senior, 8+ años. Construye y opera productos completos: integraciones empresariales con Microsoft, agentes de IA y una app móvil en producción.',
  } as L,

  /**
   * Henry's own framing of the differentiator: the durable skill is learning
   * new technology fast and well, not any single stack.
   *
   * TODO(henry): the Spanish note stopped at "construir cosas muy distintas
   * entre sí:" and the list never arrived. Send it and this section gets the
   * concrete examples it is currently paraphrasing.
   */
  thesis: {
    lead: { en: 'The stack is not the skill.', es: 'El stack no es la habilidad.' } as L,
    body: {
      /*
       * Restructured after review. The old opener, "my real expertise is
       * learning new technology quickly and properly, curious about how it
       * works and disciplined about whether it does the job", was the
       * weakest line on the page: self-awarded adjectives with no receipt,
       * and a sentence every applicant writes.
       *
       * Henry's thesis has not changed. It is now demonstrated first and
       * named second, instead of asserted and then supported.
       *
       * The section also no longer ends on ad campaigns. For a hiring
       * manager the last word should be engineering, so the ads sit mid-list.
       */
      en: [
        'The method is always the same. Find the number that is falling. Work out whether it belongs to the code or to the vendor underneath it. Change the piece that actually controls it, then stay and run what you changed.',
        'That is how a domain I have never touched turns into something in production. Microsoft enterprise systems, a multi-agent AI platform, a dating app on Google Play, a safety product with real-time alerts. Four domains, no shared ground, one way in.',
        'It is also why I keep the work most engineers pass on: payments, attribution, release pipelines, the ad campaigns, and the infrastructure holding it all up. On a team, that turns into technical direction: the review gates and the specs other people build against.',
      ],
      es: [
        'El método siempre es el mismo. Encontrar el número que se está cayendo. Averiguar si es del código o del proveedor que lo sostiene. Cambiar la pieza que de verdad lo controla y quedarse operando ese cambio.',
        'Así es como un dominio que nunca he tocado termina en producción. Sistemas empresariales de Microsoft, una plataforma de IA multiagente, una app de citas en Google Play, un producto de seguridad con alertas en tiempo real. Cuatro dominios sin nada en común, una sola forma de entrar.',
        'También es la razón por la que me quedo con el trabajo que la mayoría evita: pagos, atribución, pipelines de release, las campañas y la infraestructura que sostiene todo. En un equipo, eso se vuelve dirección técnica: los controles de revisión y las especificaciones contra las que construyen los demás.',
      ],
    } as LList,
    /**
     * REMOVED: deliberately, and it should stay removed.
     *
     * Every project card carries a status badge, so what has shipped is
     * already stated structurally. A paragraph re-confessing it was redundant,
     * and it set the tone the rest of the copy then copied: disclaimers where
     * claims belonged.
     *
     * Forward-looking self-critique still has a place. The Luxura outcome
     * names registration as the step being worked on now, that is
     * professional evaluation of the work. "I have not..." is just damage.
     */
  },

  /**
   * The evidence behind the "I verify what the model tells me" claim.
   *
   * Until now that claim was an assertion. These are four separate occasions,
   * recovered from working history, where Henry rejected confident AI output
   * and turned out to be right. For an AI or agentic role this is stronger
   * material than any project bullet, because the scarce skill in 2026 is
   * judging model output rather than producing it.
   *
   * Each one is a specific, checkable incident. None is a self-description.
   */
  verification: {
    en: [
      'A model told me TikTok has no account-level budget cap. It does, and the campaign would have run uncapped if I had believed it.',
      'A report came back with zero conversions on a campaign I could see was installing. The zero was a field-mapping bug, and it only surfaced because I refused the number.',
      'TikTok attribution was silently broken for weeks. An AI research pass missed the cause completely; it was one ad-network permissions toggle.',
      'Two false lines nearly went out on my own CV, both written by an assistant that sounded certain. I caught them before they shipped.',
    ],
    es: [
      'Un modelo me dijo que TikTok no tiene tope de presupuesto por cuenta. Sí lo tiene, y la campaña habría corrido sin tope si le hubiera creído.',
      'Un reporte marcaba cero conversiones en una campaña que yo veía generando instalaciones. El cero era un error de mapeo de campos, y solo apareció porque no acepté el número.',
      'La atribución de TikTok estuvo fallando en silencio durante semanas. Una investigación hecha con IA no dio con la causa; era un permiso de red publicitaria.',
      'Dos afirmaciones falsas estuvieron a punto de salir en mi propia hoja de vida, escritas por un asistente que sonaba seguro. Las detecté antes de publicarla.',
    ],
  } as LList,

  /** Answers directly what the target roles screen for. */
  fitFor: {
    en: [
      'Tech lead on greenfield AI and agentic work',
      'Senior full-stack at a product company',
      'Senior mobile, React Native and Capacitor',
      'AI automation, RAG and agent tooling',
    ],
    es: [
      'Tech lead en proyectos de IA y sistemas agénticos desde cero',
      'Full-stack senior en empresa de producto',
      'Mobile senior, React Native y Capacitor',
      'Automatización con IA, RAG y tooling de agentes',
    ],
  } as LList,
} as const;
