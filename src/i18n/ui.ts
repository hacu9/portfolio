import type { L } from './types';

/** Every label, heading and control that is not project content. */
export const ui = {
  // ---- navigation and chrome
  work: { en: 'Work', es: 'Proyectos' } as L,
  about: { en: 'Approach', es: 'Enfoque' } as L,
  stack: { en: 'Stack', es: 'Stack' } as L,
  timeline: { en: 'Track record', es: 'Trayectoria' } as L,
  contact: { en: 'Contact', es: 'Contacto' } as L,
  skipToContent: { en: 'Skip to content', es: 'Ir al contenido' } as L,
  switchLang: { en: 'Ver en español', es: 'View in English' } as L,
  toggleTheme: { en: 'Toggle theme', es: 'Cambiar tema' } as L,

  // ---- hero
  availableFor: { en: 'Open to', es: 'Disponible para' } as L,
  basedIn: { en: 'Based in', es: 'Radicado en' } as L,
  yearsShipping: { en: 'Years shipping', es: 'Años construyendo' } as L,

  // ---- case study structure, Henry's own four-beat shape
  readCase: { en: 'Read the teardown', es: 'Ver el desglose' } as L,
  caseHint: {
    en: 'Full write-up — how it was built, what it cost, what I got wrong',
    es: 'Desglose completo — cómo se construyó, qué costó, en qué me equivoqué',
  } as L,

  theProblem: { en: 'The problem', es: 'El problema' } as L,
  whatIBuilt: { en: 'What I built', es: 'Lo que construí' } as L,
  theDecision: { en: 'The hard call', es: 'La decisión difícil' } as L,
  theDecisions: { en: 'The hard calls', es: 'Las decisiones difíciles' } as L,
  theOutcome: { en: 'Where it stands', es: 'En qué quedó' } as L,
  role: { en: 'Role', es: 'Rol' } as L,
  period: { en: 'Period', es: 'Periodo' } as L,
  builtWith: { en: 'Built with', es: 'Construido con' } as L,
  /** Shown beside a project that has a public listing anyone can open. */
  verify: { en: 'Open it', es: 'Ábrela' } as L,
  experience: { en: 'Experience', es: 'Experiencia' } as L,
  currently: { en: 'Currently', es: 'Ahora mismo' } as L,

  // ---- sections
  leadWork: { en: 'Selected work', es: 'Trabajo destacado' } as L,
  supportingWork: { en: 'Also shipped', es: 'También entregado' } as L,
  howIWork: { en: 'How I work', es: 'Cómo trabajo' } as L,
  theTradeoff: { en: 'The trade-off', es: 'La contrapartida' } as L,
  whatIUse: { en: 'What I use', es: 'Lo que uso' } as L,

  // ---- contact
  getInTouch: { en: 'Get in touch', es: 'Hablemos' } as L,
  /**
   * Invites contact without announcing that he is looking. The previous line
   * listed three roles and read as a want ad, which puts the reader in the
   * position of doing him a favour rather than starting a conversation.
   */
  contactLede: {
    en: 'Tell me what you are building.',
    es: 'Cuéntame qué estás construyendo.',
  } as L,
  emailMe: { en: 'Email', es: 'Correo' } as L,

  // ---- misc
  builtNote: {
    en: 'Built with Astro. Static output, hosted on GitHub Pages.',
    es: 'Hecho con Astro. Salida estática, alojado en GitHub Pages.',
  } as L,
} as const;
