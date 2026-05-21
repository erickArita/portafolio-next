"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ElementType,
} from "react";
import { dict, type Locale } from "@/content/profile";

export type { Locale };

type Transition = { from: Locale; to: Locale } | null;

type Ctx = {
  lang: Locale;
  t: (key: string) => string;
  switchLang: () => void;
};

const I18nContext = createContext<Ctx | null>(null);

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Locale>("es");
  const [transition, setTransition] = useState<Transition>(null);

  // Restore saved language after hydration (initial render matches server: "es")
  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      localStorage.getItem("pixelLang")) as Locale | null;
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (transition) document.body.classList.add("lang-switching");
    else document.body.classList.remove("lang-switching");
  }, [transition]);

  const t = useCallback((key: string) => dict[lang][key] ?? key, [lang]);

  const switchLang = useCallback(() => {
    const next: Locale = lang === "es" ? "en" : "es";
    setTransition({ from: lang, to: next });
    // Swap the text midway through the animation
    window.setTimeout(() => {
      setLang(next);
      localStorage.setItem("pixelLang", next);
    }, 380);
    // Clean up overlays
    window.setTimeout(() => setTransition(null), 1100);
  }, [lang]);

  const value = useMemo<Ctx>(() => ({ lang, t, switchLang }), [lang, t, switchLang]);

  return (
    <I18nContext.Provider value={value}>
      {children}
      {transition && <LangTransition from={transition.from} to={transition.to} />}
    </I18nContext.Provider>
  );
}

function LangTransition({ from, to }: { from: Locale; to: Locale }) {
  const cells = useMemo(
    () =>
      Array.from({ length: 160 }, () => ({
        delay: (Math.random() * 0.4).toFixed(3) + "s",
      })),
    [],
  );
  return (
    <>
      <div className="lang-mosaic">
        {cells.map((c, i) => (
          <span key={i} style={{ animationDelay: c.delay }} />
        ))}
      </div>
      <div className="lang-sweep" />
      <div className="lang-banner">
        <span className="lb-from">{from.toUpperCase()}</span>
        <span className="lb-arrow">▸</span>
        <span className="lb-to">{to.toUpperCase()}</span>
      </div>
    </>
  );
}

/** Renders a translated (HTML) string into the given tag, reactive to language. */
export function T({
  k,
  as = "span",
  className,
  style,
}: {
  k: string;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { t } = useI18n();
  const Tag = as;
  return (
    <Tag
      className={className}
      style={style}
      data-t={k}
      dangerouslySetInnerHTML={{ __html: t(k) }}
    />
  );
}
