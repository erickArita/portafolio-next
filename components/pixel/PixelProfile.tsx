"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Stats } from "@/lib/github";
import {
  CONTACTS,
  EDUCATION,
  MARQUEE,
  NAV,
  POWER_UPS,
  PROFILE,
  PROJECT,
  QUESTS,
  SOCIALS,
  TECH_TIERS,
} from "@/content/profile";
import { I18nProvider, T, useI18n } from "./i18n";
import AsteroidGame from "./AsteroidGame";
import CoderAvatar from "./CoderAvatar";
import ParallaxStars from "./ParallaxStars";
import Heatmap from "./Heatmap";
import LanguageBars from "./LanguageBars";
import Konami from "./Konami";

export default function PixelProfile({ stats }: { stats: Stats }) {
  return (
    <I18nProvider>
      <Content stats={stats} />
    </I18nProvider>
  );
}

function fmt(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K+";
  return n.toLocaleString();
}

function Content({ stats }: { stats: Stats }) {
  const { t, lang, switchLang } = useI18n();
  const [score, setScore] = useState(0);
  const [activeId, setActiveId] = useState("stats");

  // Persisted arcade score
  useEffect(() => {
    const saved = parseInt(localStorage.getItem("pixelScore") || "0", 10);
    if (saved) setScore(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("pixelScore", String(score));
  }, [score]);

  // Active nav highlight
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActiveId(en.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    NAV.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Spread helper: reactive translated HTML
  const h = (k: string) => ({ dangerouslySetInnerHTML: { __html: t(k) } });

  return (
    <>
      <ParallaxStars />
      <Konami />

      <div className="wrap">
        {/* STICKY TOP BAR */}
        <header className="topbar">
        {/* HUD */}
        <div className="hud">
          <div className="player" {...h("hud.player")} />
          <div className="hp">
            <T as="span" k="hud.hp" />
            <span className="heart" />
            <span className="heart" />
            <span className="heart" />
            <span className="heart" />
            <span className="heart" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div className="clock">
              <T as="span" k="hud.score" />{" "}
              <span style={{ color: "var(--ink)" }}>
                {String(score).padStart(4, "0")}
              </span>
            </div>
            <button
              className="lang-toggle"
              onClick={switchLang}
              title="Cambiar idioma / Switch language"
            >
              <span className="lt-flag" />
              <span>{lang === "es" ? "ES ▸ EN" : "EN ▸ ES"}</span>
            </button>
          </div>
        </div>

        {/* NAV */}
        <nav className="nav">
          <div className="nav-inner">
            {NAV.map(([id, key]) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeId === id ? "active" : ""}
                {...h(key)}
              />
            ))}
          </div>
        </nav>
        </header>

        {/* HERO */}
        <div className="hero-stage">
          <T as="div" className="hint" k="hero.hint" />
          <AsteroidGame onHit={(pts) => setScore((s) => s + pts)} />
          <section className="hero" style={{ position: "relative", zIndex: 2 }}>
            <div
              className="avatar-frame"
              style={{ animation: "idle 2.4s steps(2) infinite" }}
            >
              <T as="div" className="avatar-tag" k="hero.tag" />
              <CoderAvatar />
            </div>

            <div className="hero-text">
              <div className="name-line">
                <h1>{PROFILE.name}</h1>
                <span className="lvl">{PROFILE.level}</span>
              </div>
              <T as="p" className="tagline" k="hero.tagline" />

              <div className="socials">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener" : undefined}
                    title={s.title}
                  >
                    <span className={`s-ico ${s.ico}`} />
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>

              <div className="cv-actions">
                <a
                  className="cv-btn"
                  href={PROFILE.cvPathByLang[lang]}
                  download={PROFILE.cvFileNameByLang[lang]}
                >
                  {t("cv.download")}
                </a>
                <Link className="cv-btn alt" href="/cv">
                  {t("cv.view")}
                </Link>
              </div>

              <div className="dialogue" {...h("hero.dialogue")} />
            </div>
          </section>
        </div>

        {/* PLAYER STATS */}
        <section className="section" id="stats">
          <div className="sec-head">
            <span className="glyph" />
            <T as="h2" k="sec.stats" />
          </div>
          <div className="pbox">
            <div className="stats-grid">
              <Stat lbl="stats.class.lbl" val="stats.class.val" sub="stats.class.sub" valClass="cy" />
              <Stat lbl="stats.xp.lbl" val="stats.xp.val" sub="stats.xp.sub" valClass="pk" />
              <Stat lbl="stats.zone.lbl" val="stats.zone.val" sub="stats.zone.sub" valClass="yl" />
              <Stat lbl="stats.lang.lbl" val="stats.lang.val" sub="stats.lang.sub" valClass="gn" />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="sec-head">
            <span className="glyph orange" />
            <T as="h2" k="sec.projects" />
          </div>
          <div className="projects-grid">
            <div className="pbox project">
              <div className="logo-frame" data-label={PROJECT.label}>
                <ProjectLogo src={PROJECT.logo} />
              </div>
              <div className="info">
                <h3>
                  {PROJECT.name}
                  <span className={`status ${PROJECT.statusCls}`} {...h(PROJECT.statusKey)} />
                </h3>
                <T as="div" className="role" k={PROJECT.roleKey} />
                <p className="tagline" {...h(PROJECT.taglineKey)} />
                <p {...h(PROJECT.descKey)} />
                <div className="tags" style={{ marginTop: 6 }}>
                  {PROJECT.tags.map((tag) => (
                    <span className="tag pk" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="visit"
                  href={PROJECT.href}
                  target="_blank"
                  rel="noopener"
                  {...h(PROJECT.ctaKey)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* TECH TREE */}
        <section className="section" id="tech">
          <div className="sec-head">
            <span className="glyph pink" />
            <T as="h2" k="sec.tech" />
          </div>
          <div className="tier-grid">
            {TECH_TIERS.map((tier) => (
              <div className={tier.boxCls} key={tier.rank}>
                <div className="tier-head">
                  <span className={`tier-rank ${tier.rankCls}`.trim()}>{tier.rank}</span>
                  <div>
                    <T as="h3" k={tier.titleKey} style={{ color: tier.titleColor }} />
                    <T as="p" className="mono-xs muted" k={tier.descKey} style={{ marginTop: 6 }} />
                  </div>
                </div>
                <div className="tags">
                  {tier.tags.map((x) => (
                    <span className={`tag ${tier.tagCls}`} key={x}>
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* POWER-UPS */}
        <section className="section" id="power">
          <div className="sec-head">
            <span className="glyph green" />
            <T as="h2" k="sec.power" />
          </div>
          <div className="powerups">
            {POWER_UPS.map((p) => (
              <div className="pbox power" key={p.titleKey}>
                <div className="pu-icon" style={{ background: p.bg }}>
                  {p.icon}
                </div>
                <T as="h3" k={p.titleKey} />
                <T as="p" k={p.descKey} />
                <div className="tags" style={{ marginTop: 12 }}>
                  {p.tags.map(([cls, label]) => (
                    <span className={`tag ${cls}`.trim()} key={label}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUEST LOG */}
        <section className="section" id="quests">
          <div className="sec-head">
            <span className="glyph" />
            <T as="h2" k="sec.quests" />
          </div>
          {QUESTS.map((q, i) => (
            <div className="pbox quest" key={q.titleKey} style={i > 0 ? { marginTop: 24 } : undefined}>
              <div className="meta">
                {q.whenKey ? (
                  <T as="span" className="when" k={q.whenKey} />
                ) : (
                  <span className="when">{q.when}</span>
                )}
                <T as="span" k={q.durKey} />
                <br />
                {q.langLine}
                <br />
                {q.statusKey ? (
                  <T as="span" className={`stat-pill ${q.statusCls}`.trim()} k={q.statusKey} />
                ) : (
                  <span className={`stat-pill ${q.statusCls}`.trim()}>{q.statusText}</span>
                )}
              </div>
              <div>
                <T as="h3" k={q.titleKey} />
                <T as="div" className="role" k={q.roleKey} />
                <T as="p" className="summary" k={q.summaryKey} />
                <ul>
                  {q.liKeys.map((k) => (
                    <li key={k} {...h(k)} />
                  ))}
                </ul>
                <div className="tags" style={{ marginTop: 14 }}>
                  {q.tags.map(([cls, label]) => (
                    <span className={`tag ${cls}`.trim()} key={label}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* LANGUAGES */}
        <section className="section" id="langs">
          <div className="sec-head">
            <span className="glyph yellow" />
            <T as="h2" k="sec.langs" />
          </div>
          <div className="pbox yellow">
            <LanguageBars langs={stats.topLangs} />
          </div>
        </section>

        {/* METRICS */}
        <section className="section" id="metrics">
          <div className="sec-head">
            <span className="glyph green" />
            <T as="h2" k="sec.metrics" />
          </div>
          <div className="metrics">
            <Metric tone="cy" num={fmt(stats.commits)} label="COMMITS / YR" icon={ICON_COMMITS} />
            <Metric tone="pk" num={fmt(stats.prs)} label="PULL REQUESTS" icon={ICON_PRS} />
            <Metric tone="yl" num={stats.repos.toString()} label="REPOSITORIES" icon={ICON_REPOS} />
            <Metric tone="gn" num={fmt(stats.stars)} label="STARS" icon={ICON_STARS} />
          </div>
        </section>

        {/* ACTIVITY */}
        <section className="section">
          <div className="sec-head">
            <span className="glyph orange" />
            <T as="h2" k="sec.activity" />
          </div>
          <div className="pbox activity">
            <div className="a-head">
              <div className="mono-sm" style={{ color: "var(--cyan)" }}>
                <T as="span" k="activity.streak" /> ·{" "}
                <span style={{ color: "var(--ink)" }}>
                  {stats.streak} {t("activity.days")}
                </span>
              </div>
              <div className="legend">
                LESS <i /> <i className="l1" /> <i className="l2" /> <i className="l3" />{" "}
                <i className="l4" /> MORE
              </div>
            </div>
            <Heatmap weeks={stats.weeks} />
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section" id="edu">
          <div className="sec-head">
            <span className="glyph pink" />
            <T as="h2" k="sec.edu" />
          </div>
          <div className="pbox">
            <div className="between">
              <div>
                <T as="h3" k="edu.degree" style={{ color: "var(--ink)", fontSize: 12 }} />
                <T as="p" className="mono-sm muted" k="edu.school" style={{ marginTop: 8 }} />
              </div>
              <div className="mono-sm" style={{ color: "var(--yellow)" }}>
                {EDUCATION.period}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section" id="contact">
          <div className="sec-head">
            <span className="glyph" />
            <T as="h2" k="sec.contact" />
          </div>
          <div className="contact">
            {CONTACTS.map((c) => (
              <ContactLink key={c.label} {...c} />
            ))}
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-wrap">
          <div className="marquee">
            <span>{MARQUEE}</span>
            <span aria-hidden>{MARQUEE}</span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="foot">
          <div>◆ ◆ ◆</div>
          <T as="div" k="footer.msg" style={{ marginTop: 10 }} />
        </div>
      </div>
    </>
  );
}

function Stat({
  lbl,
  val,
  sub,
  valClass,
}: {
  lbl: string;
  val: string;
  sub: string;
  valClass: string;
}) {
  return (
    <div className="stat">
      <T as="span" className="label" k={lbl} />
      <T as="div" className={`val ${valClass}`} k={val} />
      <T as="div" className="sub" k={sub} />
    </div>
  );
}

function Metric({
  tone,
  num,
  label,
  icon,
}: {
  tone: string;
  num: string;
  label: string;
  icon: string;
}) {
  return (
    <div className={`pbox metric ${tone}`}>
      <span className="icon" aria-hidden style={{ background: icon }} />
      <div className="num">{num}</div>
      <span className="nm">{label}</span>
    </div>
  );
}

function ContactLink({
  href,
  ico,
  label,
  val,
}: {
  href: string;
  ico: string;
  label: string;
  val: string;
}) {
  const external = href.startsWith("http");
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}>
      <span className="ico">{ico}</span>
      <span>
        <span className="lbl">{label}</span>
        <span className="val">{val}</span>
      </span>
    </a>
  );
}

function ProjectLogo({ src }: { src: string }) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div
        style={{
          fontFamily: "var(--font-press), monospace",
          fontSize: 14,
          color: "#ff5fa2",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        C<br />
        VRCA
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="Convercia logo" onError={() => setError(true)} />;
}

// Pixel icons (CSS multi-gradient backgrounds) for the metric cards
const ICON_COMMITS =
  "linear-gradient(var(--cyan),var(--cyan)) 4px 4px/28px 28px no-repeat," +
  "linear-gradient(#0c0420,#0c0420) 10px 10px/16px 4px no-repeat," +
  "linear-gradient(#0c0420,#0c0420) 10px 18px/16px 4px no-repeat," +
  "linear-gradient(#0c0420,#0c0420) 10px 26px/12px 4px no-repeat";
const ICON_PRS =
  "linear-gradient(var(--pink),var(--pink)) 4px 6px/28px 24px no-repeat," +
  "linear-gradient(#0c0420,#0c0420) 8px 14px/20px 4px no-repeat," +
  "linear-gradient(#0c0420,#0c0420) 8px 22px/12px 4px no-repeat";
const ICON_REPOS =
  "linear-gradient(var(--yellow),var(--yellow)) 8px 4px/4px 28px no-repeat," +
  "linear-gradient(var(--yellow),var(--yellow)) 16px 4px/4px 28px no-repeat," +
  "linear-gradient(var(--yellow),var(--yellow)) 24px 4px/4px 28px no-repeat," +
  "linear-gradient(var(--yellow),var(--yellow)) 4px 28px/28px 4px no-repeat";
const ICON_STARS =
  "linear-gradient(var(--green),var(--green)) 4px 14px/28px 4px no-repeat," +
  "linear-gradient(var(--green),var(--green)) 4px 22px/28px 4px no-repeat," +
  "linear-gradient(var(--green),var(--green)) 14px 4px/4px 28px no-repeat," +
  "linear-gradient(var(--green),var(--green)) 22px 4px/4px 28px no-repeat";
