"use client";

import { useEffect } from "react";

const SEQ = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

/** Konami code (↑↑↓↓←→←→BA) → rainbow cheat-mode easter egg. */
export default function Konami() {
  useEffect(() => {
    let i = 0;

    function activateBoost() {
      document.body.style.transition = "filter .2s steps(4)";
      document.body.style.filter = "hue-rotate(0deg) saturate(1.4)";
      let t = 0;
      const id = window.setInterval(() => {
        t += 30;
        document.body.style.filter = `hue-rotate(${t}deg) saturate(1.4)`;
        if (t >= 360) {
          window.clearInterval(id);
          document.body.style.filter = "";
        }
      }, 80);

      const b = document.createElement("div");
      b.textContent = "★ CHEAT MODE UNLOCKED ★";
      b.style.cssText = `
        position:fixed;left:50%;top:40%;transform:translate(-50%,-50%);
        z-index:9999;font-family:var(--font-press),monospace;font-size:24px;
        color:#ffd23f;background:#0c0420;padding:20px 24px;
        box-shadow:0 -4px 0 #ff5fa2,0 4px 0 #ff5fa2,-4px 0 0 #ff5fa2,4px 0 0 #ff5fa2,8px 8px 0 rgba(0,0,0,.6);
        text-shadow:3px 3px 0 #ff5fa2;`;
      document.body.appendChild(b);
      window.setTimeout(() => b.remove(), 2200);
    }

    function onKey(e: KeyboardEvent) {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (k === SEQ[i]) {
        i++;
        if (i === SEQ.length) {
          i = 0;
          activateBoost();
        }
      } else {
        i = k === SEQ[0] ? 1 : 0;
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return null;
}
