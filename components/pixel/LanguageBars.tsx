"use client";

import type { Lang } from "@/lib/github";

const NEON = ["#9b6dff", "#4ff0d6", "#ffd23f", "#ff5fa2", "#7aff66", "#ff8a3d"];
const CELLS = 30;

/** Chunky pixel language bars. Uses the neon palette to match the design. */
export default function LanguageBars({ langs }: { langs: Lang[] }) {
  return (
    <div className="lang-stack">
      {langs.map((l, idx) => {
        const color = NEON[idx % NEON.length];
        const filled = Math.max(1, Math.round((l.pct / 100) * CELLS));
        return (
          <div className="lang" key={l.name}>
            <div className="lname">{l.name}</div>
            <div className="lbar">
              {Array.from({ length: CELLS }, (_, i) => (
                <i
                  key={i}
                  style={i < filled ? { background: color } : undefined}
                />
              ))}
            </div>
            <div className="lpct">{Math.round(l.pct)}%</div>
          </div>
        );
      })}
    </div>
  );
}
