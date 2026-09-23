// content/cv.ts
// SINGLE SOURCE OF TRUTH for the classic /cv document, in both languages.
// Ported 1:1 from the Claude Design handoff ("CV Erick Arita.html").
// Values may contain inline HTML (<b>…</b>) — rendered via dangerouslySetInnerHTML.
// To edit CV copy, edit only this file.

export type Locale = "es" | "en";

/** A string that differs per language. Plain strings are language-neutral. */
export type Bi = { es: string; en: string };

export const UI: Record<string, Bi> = {
  toolbarLabel: { es: "Idioma / Language:", en: "Idioma / Language:" },
  print: { es: "Imprimir / PDF", en: "Print / PDF" },
  secSummary: { es: "Resumen Profesional", en: "Professional Summary" },
  secSkills: { es: "Conocimientos Técnicos", en: "Technical Skills" },
  secExperience: { es: "Experiencia Profesional", en: "Professional Experience" },
  secEducation: { es: "Educación", en: "Education" },
  secLanguages: { es: "Idiomas", en: "Languages" },
};

export const HEADER = {
  name: "Erick Marley Arita Orellana",
  role: { es: "Software Engineer", en: "Software Engineer" } as Bi,
  location: "Santa Rosa de Copán, Honduras",
  timezone: "GMT-6",
  email: "erick.emao@gmail.com",
  links: [
    { label: "linkedin.com/in/erickarita", href: "https://www.linkedin.com/in/erickarita/" },
    { label: "github.com/erickArita", href: "https://github.com/erickArita" },
    { label: "convercia.app", href: "https://convercia.app/" },
  ],
};

export const SUMMARY: Bi = {
  es: "Software Engineer con <b>5+ años</b> construyendo soluciones de software de extremo a extremo, desde la planificación hasta producción. Participo activamente en la <b>toma de decisiones</b> y en el <b>diseño de arquitectura con criterio</b>, evaluando trade-offs y pensando a largo plazo. Escribo <b>código escalable y fácil de iterar</b>. Mi experiencia más reciente: <b>plataforma de ingestión de datos (legal-tech)</b> procesando millones de eventos/día en Azure. Trabajo bien en equipo distribuido y me comunico profesionalmente en inglés.",
  en: "Software Engineer with <b>5+ years</b> building software solutions end-to-end, from planning to production. I actively participate in <b>decision-making</b> and <b>architecture design with good judgment</b>, weighing trade-offs and thinking long-term. I write <b>scalable code that's easy to iterate on</b>. My most recent work: <b>data ingestion platform (legal-tech)</b> processing millions of events/day on Azure. I thrive on distributed teams and communicate professionally in English.",
};

export type SkillRow = { label: Bi; value: Bi };

export const SKILLS: SkillRow[] = [
  {
    label: { es: "Lenguajes", en: "Languages" },
    value: { es: "C#, JavaScript / TypeScript, Python, SQL", en: "C#, JavaScript / TypeScript, Python, SQL" },
  },
  {
    label: { es: "Frameworks", en: "Frameworks" },
    value: {
      es: ".NET Core (6 / 8 / 9 / 10), ASP.NET Core, Entity Framework, React, Next.js, Express.js",
      en: ".NET Core (6 / 8 / 9 / 10), ASP.NET Core, Entity Framework, React, Next.js, Express.js",
    },
  },
  {
    label: { es: "Cloud / Azure", en: "Cloud / Azure" },
    value: {
      es: "Azure Functions, Durable Functions, Event Hub, Queue Storage, Table Storage, Blob Storage, App Services, GCP, Firebase",
      en: "Azure Functions, Durable Functions, Event Hub, Queue Storage, Table Storage, Blob Storage, App Services, GCP, Firebase",
    },
  },
  {
    label: { es: "Bases de datos", en: "Databases" },
    value: { es: "SQL Server, PostgreSQL, MySQL, Firestore", en: "SQL Server, PostgreSQL, MySQL, Firestore" },
  },
  {
    label: { es: "Arquitectura", en: "Architecture" },
    value: {
      es: "DDD, CQRS, arquitectura orientada a eventos, microservicios, SaaS multitenant, sistemas distribuidos",
      en: "DDD, CQRS, event-driven architecture, microservices, multi-tenant SaaS, distributed systems",
    },
  },
  {
    label: { es: "Frontend", en: "Frontend" },
    value: {
      es: "React, Redux, Redux Toolkit Query, Ant Design, Tailwind, Vite, TanStack Table, PDF Renderer, charts",
      en: "React, Redux, Redux Toolkit Query, Ant Design, Tailwind, Vite, TanStack Table, PDF Renderer, charts",
    },
  },
  {
    label: { es: "Pruebas", en: "Testing" },
    value: { es: "Vitest, React Testing Library, Playwright (E2E)", en: "Vitest, React Testing Library, Playwright (E2E)" },
  },
  {
    label: { es: "DevOps / Tools", en: "DevOps / Tools" },
    value: {
      es: "GitHub Actions (CI/CD), .NET Aspire, Docker Compose, Podman, Linux (entornos de desarrollo y despliegue), Git, Jira, Slack",
      en: "GitHub Actions (CI/CD), .NET Aspire, Docker Compose, Podman, Linux (development and deployment environments), Git, Jira, Slack",
    },
  },
];

export type Job = {
  company: string;
  /** Static muted tag after the company name, e.g. "(contract)". */
  tag?: string;
  dates: Bi;
  role?: Bi;
  /** Right side of the sub line (employment type / team note). */
  meta?: Bi;
  /** Single-role line shown instead of role/meta (Arosoft). */
  roleLine?: Bi;
  summary?: Bi;
  bullets: { es: string[]; en: string[] };
  stack: string;
};

export const EXPERIENCE: Job[] = [
  {
    company: "Convercia",
    tag: "(private beta)",
    dates: { es: "Actual", en: "Current" },
    role: { es: "Founding Engineer", en: "Founding Engineer" },
    meta: { es: "SaaS · LATAM", en: "SaaS · LATAM" },
    summary: {
      es: "Plataforma de ecommerce, IA y CRM que automatiza ventas y atención por WhatsApp para tiendas online.",
      en: "Ecommerce, AI and CRM platform that automates sales and customer conversations through WhatsApp for online stores.",
    },
    bullets: {
      es: [
        "Construyo end-to-end una plataforma SaaS de ecommerce, CRM e IA con catálogo, inventario y pedidos.",
        "Integré <b>WhatsApp Cloud API</b> para conversaciones comerciales, recomendaciones y recuperación de carritos.",
      ],
      en: [
        "Build end-to-end a SaaS platform for ecommerce, CRM and AI with catalog, inventory and order management.",
        "Integrated <b>WhatsApp Cloud API</b> for sales conversations, product recommendations and abandoned-cart recovery.",
      ],
    },
    stack: "Next.js, React, Python, WhatsApp Cloud API, AI agents, SaaS",
  },
  {
    company: "Nexl",
    tag: "(contract)",
    dates: { es: "Oct 2024 a Abr 2026 · 1 año 7 meses", en: "Oct 2024 to Apr 2026 · 1 yr 7 mos" },
    role: { es: "Software Engineer", en: "Software Engineer" },
    meta: { es: "Jornada completa · Comunicación en inglés", en: "Full-time · English-speaking team" },
    summary: {
      es: "Plataforma de ingestión y administración de datos (legal-tech) que sincroniza información de múltiples sistemas empresariales hacia un data warehouse en tiempo casi real.",
      en: "Data ingestion and management platform (legal-tech) syncing data from multiple enterprise systems into a data warehouse in near real time.",
    },
    bullets: {
      es: [
        "Implementé el <b>data warehouse</b> y ETL bidireccional para una plataforma de ingesta near real-time con <b>millones de eventos/día</b>.",
        "Diseñé desde cero un <b>SDK de plugins</b> para extender integraciones, validaciones y flujos de datos.",
        "Implementé y validé en staging un ETL capaz de exportar <b>gigabytes de datos</b>; propuse los cambios que DevOps desplegó en producción con Terraform.",
        "Desarrollé el MVP con <b>.NET Aspire</b>, Azure Functions/Durable Functions, Event Hub, Queue/Table/Blob Storage, Azure SQL, App Service y Application Insights.",
        "Participé en decisiones de arquitectura, medallion/streaming y CI/CD con GitHub Actions.",
      ],
      en: [
        "Implemented the <b>data warehouse</b> and bidirectional ETL for a near-real-time ingestion platform processing <b>millions of events/day</b>.",
        "Designed a <b>plugin SDK from scratch</b> to extend integrations, validations and data workflows.",
        "Implemented and validated in staging an ETL capable of exporting <b>gigabytes of data</b>; proposed changes later deployed to production by DevOps with Terraform.",
        "Developed the MVP with <b>.NET Aspire</b>, Azure Functions/Durable Functions, Event Hub, Queue/Table/Blob Storage, Azure SQL, App Service and Application Insights.",
        "Contributed to architecture decisions, medallion/streaming strategy and GitHub Actions CI/CD.",
      ],
    },
    stack:
      "C#, .NET 10, SQL Server, Azure Functions, Azure Durable Functions, Azure Event Hub, Azure Queue/Table/Blob Storage, Azure SQL, App Service, Application Insights, Entity Framework, .NET Aspire, Terraform, React, Medallion Architecture, GitHub Actions CI/CD, Clean Architecture.",
  },
  {
    company: "Arosoft",
    dates: { es: "May 2021 a Nov 2024 · 3 años 6 meses", en: "May 2021 to Nov 2024 · 3 yrs 6 mos" },
    roleLine: {
      es: "Fullstack Developer (May 2024 a Nov 2024) · Frontend Developer (May 2021 a May 2024)",
      en: "Fullstack Developer (May 2024 to Nov 2024) · Frontend Developer (May 2021 to May 2024)",
    },
    bullets: {
      es: [
        "Comencé como frontend y evolucioné a backend/full-stack desarrollando con <b>C#, ASP.NET Core/.NET 6+, REST APIs, Entity Framework Core</b> y SQL Server.",
        "Construí desde cero el módulo de seguimiento de actividades: prospectos, conversión a clientes, análisis, notificaciones y recordatorios.",
        "Desarrollé APIs para un ERP contable multitenant y el módulo de transacciones monetarias basado en <b>partida doble</b>, revisado por un contador.",
        "Implementé permisos <b>RBAC</b>, autenticación con <b>Auth0/FusionAuth</b> y reportes ejecutivos; colaboré directamente con Product Owner y clientes.",
        "Implementé caché frontend que redujo aprox. <b>50%</b> las llamadas al backend; participé en pruebas E2E y CI/CD hacia Azure.",
      ],
      en: [
        "Started as a frontend developer and transitioned to backend/full-stack development with <b>C#, ASP.NET Core/.NET 6+, REST APIs, Entity Framework Core</b> and SQL Server.",
        "Built from scratch the customer activity-tracking module covering prospects, conversion to customers, analytics, notifications and reminders.",
        "Developed APIs for a multi-tenant accounting ERP and the monetary transaction module based on <b>double-entry bookkeeping</b>, reviewed by an accountant.",
        "Implemented <b>RBAC</b> permissions, authentication with <b>Auth0/FusionAuth</b> and executive reports; worked directly with the Product Owner and customers.",
        "Implemented frontend caching that reduced backend calls by approx. <b>50%</b>; contributed to E2E testing and CI/CD to Azure.",
      ],
    },
    stack:
      "React, TypeScript, C#, ASP.NET Core/.NET 6+, REST APIs, Entity Framework Core, SQL Server, Azure, Auth0, FusionAuth, OAuth, RBAC, GCP, Firestore, GitHub Actions CI/CD, Clean Architecture, CQRS.",
  },
];

export const EDUCATION = {
  degree: {
    es: "<b>Ingeniería en Sistemas</b> · Universidad Nacional Autónoma de Honduras (UNAH), Copán<br/><b>Bachillerato Técnico en Informática</b> · completado",
    en: "<b>B.Sc. in Computer Science / Systems Engineering</b> · Universidad Nacional Autónoma de Honduras (UNAH), Copán<br/><b>Technical High School Diploma in Computer Science</b> · completed",
  } as Bi,
  dates: {
    es: "Desde 2021 · en curso, graduación esperada Dic 2026",
    en: "Since 2021 · in progress, expected graduation Dec 2026",
  } as Bi,
};

export const LANGUAGES: SkillRow[] = [
  {
    label: { es: "Español", en: "Spanish" },
    value: { es: "Nativo", en: "Native" },
  },
  {
    label: { es: "Inglés", en: "English" },
    value: {
      es: "Intermedio alto (B2) · Comunicación profesional diaria en equipo internacional",
      en: "Upper-intermediate (B2) · Daily professional communication on an international team",
    },
  },
];

// ---------------------------------------------------------------------------
