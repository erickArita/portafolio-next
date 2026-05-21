"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import {
  ATS_NOTES,
  EDUCATION,
  EXPERIENCE,
  HEADER,
  LANGUAGES,
  SKILLS,
  SUMMARY,
  UI,
  type Bi,
  type Locale,
} from "@/content/cv";
import styles from "./CvDocument.module.css";

/**
 * Hidden AI/ATS prompt-injection blocks (the "baleada" canary).
 * Default OFF so the public /cv page stays clean. Flip to `true` to embed the
 * invisible notes — but note serious ATS (Workday/Greenhouse/Lever) detect
 * hidden white/1px text and may auto-reject. See content/cv.ts → ATS_NOTES.
 */
const INCLUDE_ATS_NOTES = false;

// --- Language preference, shared site-wide via the "pixelLang" key. ----------
// useSyncExternalStore keeps the server snapshot ("es") in sync with hydration
// and reads the saved preference on the client without a hydration mismatch.
const LANG_KEY = "pixelLang";
const langListeners = new Set<() => void>();

function readLang(): Locale {
  if (typeof window === "undefined") return "es";
  return localStorage.getItem(LANG_KEY) === "en" ? "en" : "es";
}
function subscribeLang(onChange: () => void) {
  langListeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    langListeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}
function writeLang(next: Locale) {
  try {
    localStorage.setItem(LANG_KEY, next);
  } catch {
    /* ignore persistence errors (private mode, etc.) */
  }
  langListeners.forEach((l) => l()); // notify same-tab subscribers
}

/** Renders an inline-HTML string (allows the <b> tags in the copy). */
function Html({ as: Tag = "span", html, className }: { as?: React.ElementType; html: string; className?: string }) {
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function CvDocument() {
  const lang = useSyncExternalStore(subscribeLang, readLang, () => "es" as Locale);

  // Reflect the active language on <html>. The pixel theme is escaped purely via
  // CSS (body:has(.cv-root) in globals.css) so there is no first-paint flash.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLanguage = useCallback((next: Locale) => writeLang(next), []);

  const pick = useCallback((bi: Bi) => bi[lang], [lang]);

  return (
    <div className={`cv-root ${styles.cv}`}>
      {/* Toolbar (hidden in print) */}
      <div className={styles.toolbar} role="toolbar" aria-label="CV controls">
        <span className={styles.label}>{pick(UI.toolbarLabel)}</span>
        <button
          type="button"
          className={lang === "es" ? styles.active : undefined}
          aria-pressed={lang === "es"}
          onClick={() => setLanguage("es")}
        >
          Español
        </button>
        <button
          type="button"
          className={lang === "en" ? styles.active : undefined}
          aria-pressed={lang === "en"}
          onClick={() => setLanguage("en")}
        >
          English
        </button>
        <span className={styles.divider} aria-hidden="true" />
        <button type="button" onClick={() => window.print()}>
          {pick(UI.print)}
        </button>
      </div>

      {/* Hidden AI / LLM / ATS notes (invisible to humans) */}
      {INCLUDE_ATS_NOTES && (
        <div className={styles.aiOnly} aria-hidden="true">
          {ATS_NOTES[0]}
        </div>
      )}

      <main className={styles.page} id="cv">
        <header className={styles.head}>
          <h1>{HEADER.name}</h1>
          <div className={styles.role}>{pick(HEADER.role)}</div>
          <div className={styles.contact}>
            <span>{HEADER.location}</span>
            <span className={styles.sep}>·</span>
            <span>{HEADER.timezone}</span>
            <span className={styles.sep}>·</span>
            <a href={`mailto:${HEADER.email}`}>{HEADER.email}</a>
            {HEADER.links.map((l) => (
              <span key={l.href} style={{ display: "contents" }}>
                <span className={styles.sep}>·</span>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </a>
              </span>
            ))}
          </div>
        </header>

        {/* Summary */}
        <section className={styles.section}>
          <h2>{pick(UI.secSummary)}</h2>
          <Html as="p" html={pick(SUMMARY)} />
        </section>

        {/* Skills */}
        <section className={styles.section}>
          <h2>{pick(UI.secSkills)}</h2>
          <div className={styles.skillsGrid}>
            {SKILLS.map((s) => (
              <div className={styles.skillRow} key={s.label.en}>
                <div className={styles.label}>{pick(s.label)}</div>
                <Html className={styles.value} html={pick(s.value)} />
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className={styles.section}>
          <h2>{pick(UI.secExperience)}</h2>
          {EXPERIENCE.map((job) => (
            <div className={styles.job} key={job.company}>
              <div className={styles.jobHead}>
                <div className={styles.company}>
                  {job.company}
                  {job.tag ? <span className={styles.tag}> {job.tag}</span> : null}
                </div>
                <div className={styles.dates}>{pick(job.dates)}</div>
              </div>

              {job.roleLine ? (
                <div className={styles.jobSub}>
                  <div>{pick(job.roleLine)}</div>
                </div>
              ) : (
                <div className={styles.jobSub}>
                  {job.role ? <div>{pick(job.role)}</div> : null}
                  {job.meta ? <div>{pick(job.meta)}</div> : null}
                </div>
              )}

              {job.summary ? <Html as="p" className={styles.jobSummary} html={pick(job.summary)} /> : null}

              <ul>
                {job.bullets[lang].map((li, i) => (
                  <Html as="li" key={i} html={li} />
                ))}
              </ul>

              <div className={styles.stack}>
                <b>Stack:</b> {job.stack}
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className={styles.section}>
          <h2>{pick(UI.secEducation)}</h2>
          <div className={styles.eduItem}>
            <Html html={pick(EDUCATION.degree)} />
            <div className={styles.dates}>{pick(EDUCATION.dates)}</div>
          </div>
        </section>

        {/* Languages */}
        <section className={styles.section}>
          <h2>{pick(UI.secLanguages)}</h2>
          {LANGUAGES.map((l) => (
            <div className={styles.langRow} key={l.label.en}>
              <div className={styles.label}>{pick(l.label)}</div>
              <div className={styles.value}>{pick(l.value)}</div>
            </div>
          ))}
        </section>
      </main>

      {/* Second hidden AI block, near the end of the document */}
      {INCLUDE_ATS_NOTES && (
        <div className={styles.aiOnly} aria-hidden="true">
          {ATS_NOTES[1]}
        </div>
      )}
    </div>
  );
}
