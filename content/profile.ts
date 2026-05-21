// content/profile.ts
// SINGLE SOURCE OF TRUTH for every text shown on the profile, in both languages,
// plus the structural data (nav, socials, tiers, power-ups, quests, contacts).
// Components are data-driven from here — to edit copy, edit only this file.

export type Locale = "es" | "en";

/** All translatable strings, keyed. Values may contain inline HTML. */
export const dict: Record<Locale, Record<string, string>> = {
  es: {
    // HUD
    "hud.player": "PLAYER 1 · <b>@erickArita</b>",
    "hud.hp": "HP",
    "hud.score": "SCORE",
    // Nav
    "nav.stats": '<span class="dot"></span>STATS',
    "nav.tech": '<span class="dot"></span>TECH TREE',
    "nav.power": '<span class="dot"></span>POWER-UPS',
    "nav.projects": '<span class="dot"></span>PROYECTOS',
    "nav.quests": '<span class="dot"></span>QUEST LOG',
    "nav.langs": '<span class="dot"></span>LANGS',
    "nav.metrics": '<span class="dot"></span>METRICS',
    "nav.edu": '<span class="dot"></span>EDU',
    "nav.contact": '<span class="dot"></span>CONTACTO',
    // Hero
    "hero.hint": "◆ CLICK ASTEROIDES",
    "hero.tag": "CODING...",
    "hero.tagline": "▌SOFTWARE ENGINEER · HONDURAS",
    "hero.dialogue":
      '<b>¡HOLA!</b> Soy <span class="accent">Erick</span>, ingeniero de software full-stack desde <span class="pink">Santa Rosa de Copán</span>. Construyo soluciones de extremo a extremo con <span class="accent">.NET</span> + <span class="accent">React</span> + <span class="accent">Python</span>, diseño arquitecturas escalables y disfruto los <span class="pink">trade-offs</span> de sistemas distribuidos a gran escala.',
    // CV actions
    "cv.download": "▼ DESCARGAR CV",
    "cv.view": "▸ VER CV",
    // Section heads
    "sec.stats": "// STATS DEL JUGADOR",
    "sec.tech": "// ÁRBOL DE TECNOLOGÍAS",
    "sec.power": "// POWER-UPS · ESPECIALIZACIONES",
    "sec.projects": "// PROYECTOS · SIDE QUESTS",
    "sec.quests": "// QUEST LOG · EXPERIENCIA",
    "sec.langs": "// LENGUAJES MÁS USADOS",
    "sec.metrics": "// MÉTRICAS DE GITHUB",
    "sec.activity": "// MAPA DE ACTIVIDAD · 52 SEMANAS",
    "sec.edu": "// EDUCACIÓN",
    "sec.contact": "// ENCUÉNTRAME · CONTACTO",
    // Stats
    "stats.class.lbl": "CLASE",
    "stats.class.val": "SOFTWARE<br>ENGINEER",
    "stats.class.sub": "Full-stack · backend-leaning",
    "stats.xp.lbl": "XP",
    "stats.xp.val": "5+ AÑOS",
    "stats.xp.sub": "enviando a producción",
    "stats.zone.lbl": "ZONA",
    "stats.zone.val": "GMT-6",
    "stats.zone.sub": "Honduras · remote-ready",
    "stats.lang.lbl": "IDIOMAS",
    "stats.lang.val": "ES/EN",
    "stats.lang.sub": "Nativo · B2 profesional",
    // Tiers
    "tier.s.title": "▌STACK DIARIO",
    "tier.s.desc": "El stack que uso a diario en producción",
    "tier.a.title": "▌FUERTE",
    "tier.a.desc": "Cómodo, lo he enviado a prod varias veces",
    "tier.b.title": "▌CONOCIDO",
    "tier.b.desc": "Lo he tocado en proyectos puntuales",
    // Power-ups
    "power.1.title": "EVENT-DRIVEN A ESCALA",
    "power.1.desc":
      'Streaming en tiempo casi real con <b>Azure Event Hub</b> manejando <b>millones de eventos/día</b>. ETL bidireccional hacia data warehouse con <b>arquitectura medallion</b>.',
    "power.2.title": "SDK DE PLUGINS",
    "power.2.desc":
      'Diseñé un <b>SDK con arquitectura de plugins</b> que permite a otros devs extender el sistema con nuevos flujos, validaciones e integraciones contra APIs y bases externas.',
    "power.3.title": "FORMULARIOS DINÁMICOS",
    "power.3.desc":
      'Motor que crea <b>tablas y formularios dinámicamente</b> desde documentos de definición (campos, tipos, validaciones, triggers, relaciones). Onboarding de integraciones <b>de semanas a días</b>.',
    "power.4.title": "SAAS MULTITENANT",
    "power.4.desc":
      'Apps SaaS (CRM, contabilidad, control aduanero) donde múltiples empresas tienen su propia instancia con sucursales. Auth modular reutilizada entre productos.',
    "power.5.title": "RENDIMIENTO FRONTEND",
    "power.5.desc":
      'Estrategia de <b>caché en frontend</b> que redujo <b>~50%</b> las llamadas al backend y mejoró tiempos de carga percibidos en apps con miles de usuarios concurrentes.',
    "power.6.title": "TESTING &amp; CI/CD",
    "power.6.desc":
      'Cobertura E2E con <b>Playwright</b> y unit con <b>Vitest</b> en múltiples productos. Pipelines de <b>GitHub Actions</b> para deploy continuo a staging y producción en Azure.',
    // Quests
    "quest.1.dur": "1 AÑO 7 MESES",
    "quest.1.status": "★ ACTIVO",
    "quest.1.title": "NEXL — PLATAFORMA LEGAL-TECH",
    "quest.1.role": "SOFTWARE ENGINEER · CONTRATO",
    "quest.1.summary":
      "Plataforma de ingestión y administración de datos que sincroniza información de múltiples sistemas empresariales hacia un data warehouse en tiempo casi real.",
    "quest.1.li1":
      "Streaming en tiempo casi real con <b>Azure Event Hub</b> — millones de eventos/día.",
    "quest.1.li2":
      "Diseñé un <b>SDK con arquitectura de plugins</b> para extender ETLs e integraciones.",
    "quest.1.li3":
      "Motor de tablas/formularios dinámicos: onboarding de integraciones <b>de semanas a días</b>.",
    "quest.1.li4":
      "Orquestaciones con <b>Durable Functions</b>, Queue/Table Storage, retries y tolerancia a fallos.",
    "quest.2.dur": "3 AÑOS 6 MESES",
    "quest.2.title": "AROSOFT — SAAS MULTITENANT",
    "quest.2.role": "FULLSTACK (24) · FRONTEND (21–24)",
    "quest.2.summary":
      "Aplicaciones SaaS multitenant (CRM, contabilidad, Control Aduanero) con instancias y sucursales por empresa, end-to-end React + .NET en Azure.",
    "quest.2.li1": "Caché en frontend que redujo <b>~50%</b> las llamadas al backend.",
    "quest.2.li2":
      "Módulos CRM: clientes, ventas, calendario, push, mapas en vivo con Google Maps.",
    "quest.2.li3":
      "Auth modular reutilizado en múltiples apps; cobertura E2E con <b>Playwright</b>.",
    "quest.2.li4": "Pipelines de <b>CI/CD</b> con GitHub Actions hacia Azure.",
    "quest.3.when": "ABR 2023 — FEB 2024",
    "quest.3.dur": "~ 10 MESES",
    "quest.3.title": "DTODO — BACK OFFICE DE TRANSPORTE",
    "quest.3.role": "FRONTEND DEVELOPER",
    "quest.3.summary":
      "Back office para una aplicación de transporte: contabilidad, pagos a conductores, liquidez, roles y permisos, performance de flota.",
    "quest.3.li1":
      "Arquitectura en capas orientada a <b>escalabilidad</b> con principios SOLID.",
    "quest.3.li2": "UI rápida y amigable + E2E con Playwright y unit con Vitest.",
    "quest.3.li3": "Pipelines automatizados con GitHub Actions.",
    // Project
    "proj.convercia.status": "★ BETA PRIVADA",
    "proj.convercia.role": "FOUNDING ENGINEER · SAAS · LATAM",
    "proj.convercia.tagline":
      'Ventas en piloto automático por <b>WhatsApp</b>. Un agente con todo el contexto de tu tienda que conversa, recomienda y crea pedidos 24/7.',
    "proj.convercia.desc":
      'Ecommerce + AI + CRM en una sola plataforma. Catálogo nativo, inventario en tiempo real, pedidos automáticos, recuperación de carritos abandonados y multi-número de WhatsApp. <b>Tech Provider oficial de Meta</b>.',
    "proj.convercia.cta": "VISITA CONVERCIA.APP",
    // Misc
    "activity.streak": "RACHA ACTUAL",
    "activity.days": "DÍAS",
    "edu.degree": "INGENIERÍA EN SISTEMAS",
    "edu.school": "UNIVERSIDAD NACIONAL AUTÓNOMA DE HONDURAS · UNAH COPÁN",
    "footer.msg":
      'GRACIAS POR JUGAR · <span class="blink">PRESIONA START PARA CONTINUAR</span>',
    // CV viewer route (placeholder)
    "cv.soon.tag": "WIP",
    "cv.soon.title": "VISOR DE CV",
    "cv.soon.status": "PRÓXIMAMENTE",
    "cv.soon.desc":
      "El visor de CV en línea está en construcción. Mientras tanto, puedes descargar el PDF.",
    "cv.soon.download": "▼ DESCARGAR CV (PDF)",
    "cv.soon.back": "◂ VOLVER AL PERFIL",
  },
  en: {
    "hud.player": "PLAYER 1 · <b>@erickArita</b>",
    "hud.hp": "HP",
    "hud.score": "SCORE",
    "nav.stats": '<span class="dot"></span>STATS',
    "nav.tech": '<span class="dot"></span>TECH TREE',
    "nav.power": '<span class="dot"></span>POWER-UPS',
    "nav.projects": '<span class="dot"></span>PROJECTS',
    "nav.quests": '<span class="dot"></span>QUEST LOG',
    "nav.langs": '<span class="dot"></span>LANGS',
    "nav.metrics": '<span class="dot"></span>METRICS',
    "nav.edu": '<span class="dot"></span>EDU',
    "nav.contact": '<span class="dot"></span>CONTACT',
    "hero.hint": "◆ CLICK ASTEROIDS",
    "hero.tag": "CODING...",
    "hero.tagline": "▌SOFTWARE ENGINEER · HONDURAS",
    "hero.dialogue":
      '<b>HEY!</b> I\'m <span class="accent">Erick</span>, a full-stack software engineer from <span class="pink">Santa Rosa de Copán, Honduras</span>. I build end-to-end products with <span class="accent">.NET</span> + <span class="accent">React</span> + <span class="accent">Python</span>, design scalable architectures, and enjoy the <span class="pink">trade-offs</span> of large-scale distributed systems.',
    "cv.download": "▼ DOWNLOAD CV",
    "cv.view": "▸ VIEW CV",
    "sec.stats": "// PLAYER STATS",
    "sec.tech": "// TECH TREE",
    "sec.power": "// POWER-UPS · SPECIALIZATIONS",
    "sec.projects": "// PROJECTS · SIDE QUESTS",
    "sec.quests": "// QUEST LOG · WORK XP",
    "sec.langs": "// MOST USED LANGUAGES",
    "sec.metrics": "// GITHUB METRICS",
    "sec.activity": "// ACTIVITY MAP · 52 WEEKS",
    "sec.edu": "// EDUCATION",
    "sec.contact": "// FIND ME · CONTACT",
    "stats.class.lbl": "CLASS",
    "stats.class.val": "SOFTWARE<br>ENGINEER",
    "stats.class.sub": "Full-stack · backend-leaning",
    "stats.xp.lbl": "XP",
    "stats.xp.val": "5+ YRS",
    "stats.xp.sub": "end-to-end shipping",
    "stats.zone.lbl": "ZONE",
    "stats.zone.val": "GMT-6",
    "stats.zone.sub": "Honduras · remote-ready",
    "stats.lang.lbl": "LANGUAGES",
    "stats.lang.val": "ES/EN",
    "stats.lang.sub": "Native · B2 professional",
    "tier.s.title": "▌DAILY DRIVERS",
    "tier.s.desc": "The stack I ship to prod every day",
    "tier.a.title": "▌STRONG",
    "tier.a.desc": "Comfortable — shipped to prod many times",
    "tier.b.title": "▌FAMILIAR",
    "tier.b.desc": "Touched in specific projects",
    "power.1.title": "EVENT-DRIVEN AT SCALE",
    "power.1.desc":
      'Near real-time streaming with <b>Azure Event Hub</b> handling <b>millions of events/day</b>. Bidirectional ETL into a data warehouse with <b>medallion architecture</b>.',
    "power.2.title": "PLUGIN SDK ARCHITECTURE",
    "power.2.desc":
      'Designed an <b>SDK with plugin architecture</b> letting other devs extend the system with new flows, validations and integrations against external APIs and databases.',
    "power.3.title": "DYNAMIC FORM ENGINE",
    "power.3.desc":
      'Engine that creates <b>tables and forms dynamically</b> from definition documents (fields, types, validations, triggers, relations). Integration onboarding <b>from weeks to days</b>.',
    "power.4.title": "SAAS MULTITENANT",
    "power.4.desc":
      'SaaS apps (CRM, accounting, customs control) where multiple companies get their own instance with branches. Modular auth reused across products.',
    "power.5.title": "FRONTEND PERFORMANCE",
    "power.5.desc":
      'A <b>frontend caching strategy</b> that cut backend calls by <b>~50%</b> and improved perceived load times in apps with thousands of concurrent users.',
    "power.6.title": "TESTING &amp; CI/CD",
    "power.6.desc":
      'E2E coverage with <b>Playwright</b> and unit with <b>Vitest</b> across multiple products. <b>GitHub Actions</b> pipelines for continuous deploy to staging and production on Azure.',
    "quest.1.dur": "1 YR 7 MO",
    "quest.1.status": "★ ACTIVE",
    "quest.1.title": "NEXL — LEGAL-TECH PLATFORM",
    "quest.1.role": "SOFTWARE ENGINEER · CONTRACT",
    "quest.1.summary":
      "Data ingestion & administration platform that syncs information from multiple enterprise systems into a data warehouse in near real time.",
    "quest.1.li1":
      "Near real-time streaming with <b>Azure Event Hub</b> — millions of events/day.",
    "quest.1.li2":
      "Designed an <b>SDK with plugin architecture</b> to extend ETLs and integrations.",
    "quest.1.li3":
      "Dynamic tables/forms engine: integration onboarding <b>from weeks to days</b>.",
    "quest.1.li4":
      "Orchestrations with <b>Durable Functions</b>, Queue/Table Storage, retries and fault tolerance.",
    "quest.2.dur": "3 YRS 6 MO",
    "quest.2.title": "AROSOFT — SAAS MULTITENANT",
    "quest.2.role": "FULLSTACK (24) · FRONTEND (21–24)",
    "quest.2.summary":
      "Multitenant SaaS apps (CRM, accounting, Customs Control) with per-company instances and branches, end-to-end React + .NET on Azure.",
    "quest.2.li1": "Frontend cache that cut backend calls by <b>~50%</b>.",
    "quest.2.li2":
      "CRM modules: customers, sales, calendar, push, live maps with Google Maps.",
    "quest.2.li3": "Modular auth reused across apps; E2E coverage with <b>Playwright</b>.",
    "quest.2.li4": "<b>CI/CD</b> pipelines with GitHub Actions to Azure.",
    "quest.3.when": "APR 2023 — FEB 2024",
    "quest.3.dur": "~ 10 MO",
    "quest.3.title": "DTODO — TRANSPORT BACK OFFICE",
    "quest.3.role": "FRONTEND DEVELOPER",
    "quest.3.summary":
      "Back office for a transport app: accounting, driver payments, liquidity, roles & permissions, fleet performance reports.",
    "quest.3.li1":
      "Layered architecture focused on <b>scalability</b> with SOLID principles.",
    "quest.3.li2": "Fast, friendly UI + E2E with Playwright and unit with Vitest.",
    "quest.3.li3": "Automated pipelines with GitHub Actions.",
    "proj.convercia.status": "★ PRIVATE BETA",
    "proj.convercia.role": "FOUNDING ENGINEER · SAAS · LATAM",
    "proj.convercia.tagline":
      'Sales on autopilot via <b>WhatsApp</b>. An agent with full context of your store that chats, recommends and creates orders 24/7.',
    "proj.convercia.desc":
      'Ecommerce + AI + CRM in one platform. Native catalog, real-time inventory, automated orders, abandoned cart recovery and multi-number WhatsApp. <b>Official Meta Tech Provider</b>.',
    "proj.convercia.cta": "VISIT CONVERCIA.APP",
    "activity.streak": "CURRENT STREAK",
    "activity.days": "DAYS",
    "edu.degree": "SYSTEMS ENGINEERING",
    "edu.school": "NATIONAL AUTONOMOUS UNIVERSITY OF HONDURAS · UNAH COPÁN",
    "footer.msg":
      'THANKS FOR PLAYING · <span class="blink">PRESS START TO CONTINUE</span>',
    "cv.soon.tag": "WIP",
    "cv.soon.title": "CV VIEWER",
    "cv.soon.status": "COMING SOON",
    "cv.soon.desc":
      "The online CV viewer is under construction. Meanwhile, you can download the PDF.",
    "cv.soon.download": "▼ DOWNLOAD CV (PDF)",
    "cv.soon.back": "◂ BACK TO PROFILE",
  },
};

// --- Static / language-neutral structural content -------------------------

export const PROFILE = {
  name: "ERICK ARITA",
  level: "LVL 5+",
  cvPath: "/Cv.pdf",
  /** Language-specific CV PDFs (generated from the /cv design). */
  cvPathByLang: { es: "/Cv-es.pdf", en: "/Cv-en.pdf" } as Record<Locale, string>,
  cvFileNameByLang: {
    es: "Erick-Arita-CV-ES.pdf",
    en: "Erick-Arita-CV-EN.pdf",
  } as Record<Locale, string>,
};

export const NAV: [id: string, key: string][] = [
  ["stats", "nav.stats"],
  ["projects", "nav.projects"],
  ["tech", "nav.tech"],
  ["power", "nav.power"],
  ["quests", "nav.quests"],
  ["langs", "nav.langs"],
  ["metrics", "nav.metrics"],
  ["edu", "nav.edu"],
  ["contact", "nav.contact"],
];

export const SOCIALS = [
  { ico: "gh", label: "GITHUB", href: "https://github.com/erickArita", title: "GitHub" },
  { ico: "in", label: "LINKEDIN", href: "https://www.linkedin.com/in/erickarita/", title: "LinkedIn" },
  { ico: "em", label: "EMAIL", href: "mailto:erick.emao@gmail.com", title: "Email" },
  { ico: "tr", label: "TORRE", href: "https://torre.co/en/erickemao", title: "Torre" },
];

export const CONTACTS = [
  { ico: "in", label: "LINKEDIN", val: "linkedin.com/in/erickarita", href: "https://www.linkedin.com/in/erickarita/" },
  { ico: "gh", label: "GITHUB", val: "github.com/erickArita", href: "https://github.com/erickArita" },
  { ico: "@", label: "EMAIL", val: "erick.emao@gmail.com", href: "mailto:erick.emao@gmail.com" },
  { ico: "★", label: "TORRE", val: "torre.co/en/erickemao", href: "https://torre.co/en/erickemao" },
];

export const PROJECT = {
  name: "CONVERCIA",
  label: "LIVE",
  logo: "https://convercia.app/logo.png",
  href: "https://convercia.app/",
  statusKey: "proj.convercia.status",
  statusCls: "beta",
  roleKey: "proj.convercia.role",
  taglineKey: "proj.convercia.tagline",
  descKey: "proj.convercia.desc",
  ctaKey: "proj.convercia.cta",
  tags: ["NEXT.JS", "REACT", "PYTHON", "WHATSAPP CLOUD API", "AI AGENTS", "SAAS"],
};

export type TechTier = {
  rank: string;
  rankCls: string;
  boxCls: string;
  titleKey: string;
  descKey: string;
  titleColor: string;
  tagCls: string;
  tags: string[];
};

export const TECH_TIERS: TechTier[] = [
  {
    rank: "S",
    rankCls: "",
    boxCls: "pbox pink tier",
    titleKey: "tier.s.title",
    descKey: "tier.s.desc",
    titleColor: "var(--pink)",
    tagCls: "pk",
    tags: [
      "C# / .NET 10",
      "ASP.NET CORE",
      "ENTITY FRAMEWORK",
      "REACT",
      "TYPESCRIPT",
      "NEXT.JS",
      "AZURE FUNCTIONS",
      "DURABLE FUNCTIONS",
      "EVENT HUB",
      "SQL SERVER",
      "GITHUB ACTIONS",
      ".NET ASPIRE",
    ],
  },
  {
    rank: "A",
    rankCls: "cy",
    boxCls: "pbox tier",
    titleKey: "tier.a.title",
    descKey: "tier.a.desc",
    titleColor: "var(--cyan)",
    tagCls: "cy",
    tags: [
      "REDUX TOOLKIT QUERY",
      "ANT DESIGN",
      "TAILWIND",
      "VITE",
      "TANSTACK TABLE",
      "QUEUE / TABLE / BLOB STORAGE",
      "APP SERVICES",
      "POSTGRESQL",
      "FIRESTORE",
      "PLAYWRIGHT",
      "VITEST",
      "REACT TESTING LIBRARY",
      "DOCKER COMPOSE",
      "PODMAN",
      "LINUX",
    ],
  },
  {
    rank: "B",
    rankCls: "yl",
    boxCls: "pbox yellow tier",
    titleKey: "tier.b.title",
    descKey: "tier.b.desc",
    titleColor: "var(--yellow)",
    tagCls: "yl",
    tags: ["NODE.JS", "EXPRESS.JS", "PYTHON", "MYSQL", "GCP", "FIREBASE", "PDF RENDERER", "CHARTS"],
  },
];

export type PowerUp = {
  icon: string;
  bg: string;
  titleKey: string;
  descKey: string;
  tags: [cls: string, label: string][];
};

export const POWER_UPS: PowerUp[] = [
  { icon: "⤳", bg: "var(--cyan)", titleKey: "power.1.title", descKey: "power.1.desc", tags: [["cy", "EVENT HUB"], ["cy", "DURABLE FN"], ["cy", "MEDALLION"]] },
  { icon: "⧉", bg: "var(--pink)", titleKey: "power.2.title", descKey: "power.2.desc", tags: [["pk", "SDK DESIGN"], ["pk", "EXTENSIBILITY"], ["pk", "CLEAN ARCH"]] },
  { icon: "▤", bg: "var(--yellow)", titleKey: "power.3.title", descKey: "power.3.desc", tags: [["yl", "DSL"], ["yl", "METADATA-DRIVEN"]] },
  { icon: "◆", bg: "var(--green)", titleKey: "power.4.title", descKey: "power.4.desc", tags: [["gn", "CQRS"], ["gn", "MICROSERVICES"], ["gn", "AUTH"]] },
  { icon: "⤳", bg: "var(--orange)", titleKey: "power.5.title", descKey: "power.5.desc", tags: [["or", "CACHE"], ["or", "RTK QUERY"], ["or", "UX"]] },
  { icon: "△", bg: "#9b6dff", titleKey: "power.6.title", descKey: "power.6.desc", tags: [["", "PLAYWRIGHT"], ["", "VITEST"], ["", "GH ACTIONS"]] },
];

export type Quest = {
  when?: string;
  whenKey?: string;
  durKey: string;
  langLine: string;
  statusKey?: string;
  statusText?: string;
  statusCls: string;
  titleKey: string;
  roleKey: string;
  summaryKey: string;
  liKeys: string[];
  tags: [cls: string, label: string][];
};

export const QUESTS: Quest[] = [
  {
    when: "OCT 2024 — APR 2026",
    durKey: "quest.1.dur",
    langLine: "EN/EN",
    statusKey: "quest.1.status",
    statusCls: "live",
    titleKey: "quest.1.title",
    roleKey: "quest.1.role",
    summaryKey: "quest.1.summary",
    liKeys: ["quest.1.li1", "quest.1.li2", "quest.1.li3", "quest.1.li4"],
    tags: [["pk", ".NET 10"], ["pk", "EVENT HUB"], ["pk", "DURABLE FN"], ["pk", "REACT"], ["pk", "MEDALLION"]],
  },
  {
    when: "MAY 2021 — NOV 2024",
    durKey: "quest.2.dur",
    langLine: "ES",
    statusText: "CLEARED",
    statusCls: "",
    titleKey: "quest.2.title",
    roleKey: "quest.2.role",
    summaryKey: "quest.2.summary",
    liKeys: ["quest.2.li1", "quest.2.li2", "quest.2.li3", "quest.2.li4"],
    tags: [["cy", "REACT"], ["cy", "TYPESCRIPT"], ["cy", ".NET 6+"], ["cy", "AZURE"], ["cy", "CQRS"]],
  },
  {
    whenKey: "quest.3.when",
    durKey: "quest.3.dur",
    langLine: "ES",
    statusText: "CLEARED",
    statusCls: "",
    titleKey: "quest.3.title",
    roleKey: "quest.3.role",
    summaryKey: "quest.3.summary",
    liKeys: ["quest.3.li1", "quest.3.li2", "quest.3.li3"],
    tags: [["yl", "REACT"], ["yl", "TS"], ["yl", "PLAYWRIGHT"], ["yl", "VITEST"]],
  },
];

export const EDUCATION = { period: "2021 → DEC 2026" };

export const MARQUEE =
  "◆ NOW PLAYING: Streaming millions of events per day      ◆ Designing plugin SDKs      ◆ Shipping SaaS multitenant in Azure      ◆ React + .NET end-to-end      ◆ Playwright + Vitest everywhere      ◆ GMT-6 remote-ready      ";
