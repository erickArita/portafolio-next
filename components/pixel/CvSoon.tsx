"use client";

import Link from "next/link";
import { PROFILE } from "@/content/profile";
import { I18nProvider, T, useI18n } from "./i18n";

export default function CvSoon() {
  return (
    <I18nProvider>
      <Inner />
    </I18nProvider>
  );
}

function Inner() {
  const { t, lang, switchLang } = useI18n();
  return (
    <div className="wrap" style={{ display: "grid", placeItems: "center", minHeight: "80vh" }}>
      <div
        className="pbox yellow"
        style={{ maxWidth: 560, width: "100%", padding: 36, textAlign: "center" }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <T as="span" className="avatar-tag" style={{ position: "static" }} k="cv.soon.tag" />
          <button className="lang-toggle" onClick={switchLang}>
            <span className="lt-flag" />
            <span>{lang === "es" ? "ES ▸ EN" : "EN ▸ ES"}</span>
          </button>
        </div>

        <T as="h2" k="cv.soon.title" style={{ marginTop: 28 }} />
        <T
          as="div"
          k="cv.soon.status"
          style={{
            marginTop: 16,
            fontFamily: "var(--font-press), monospace",
            fontSize: 22,
            color: "var(--yellow)",
            textShadow: "3px 3px 0 var(--pink)",
          }}
        />
        <T
          as="p"
          k="cv.soon.desc"
          style={{ marginTop: 22, fontSize: 22, lineHeight: 1.35, color: "var(--ink)" }}
        />

        <div
          className="cv-actions"
          style={{ marginTop: 28, justifyContent: "center" }}
        >
          <a className="cv-btn" href={PROFILE.cvPath} download>
            {t("cv.soon.download")}
          </a>
          <Link className="cv-btn alt" href="/">
            {t("cv.soon.back")}
          </Link>
        </div>
      </div>
    </div>
  );
}
