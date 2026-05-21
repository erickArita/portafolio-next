"use client";

import { useEffect, useRef } from "react";

/** Animated 32×32 pixel-art scene: a coder typing at a desk. Drawn on a canvas. */
export default function CoderAvatar() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.imageSmoothingEnabled = false;

    let tick = 0;
    const px = (x: number, y: number, w: number, h: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, w, h);
    };

    function draw() {
      const frame = Math.floor(tick / 8) % 2;
      const codeSeed = Math.floor(tick / 14);
      const cursorOn = Math.floor(tick / 6) % 2 === 0;

      // wall
      px(0, 0, 32, 18, "#2a1855");
      px(0, 18, 32, 14, "#15092b");
      px(4, 0, 24, 14, "#3a2270");

      // monitor
      px(6, 1, 20, 11, "#0c0420");
      px(7, 2, 18, 9, "#1a0d2e");
      px(8, 3, 16, 7, "#070314");

      // code lines
      const palette = ["#7aff66", "#4ff0d6", "#ffd23f", "#ff5fa2", "#9b6dff"];
      for (let r = 0; r < 5; r++) {
        let x = 9;
        const indent = (r * 3 + codeSeed) % 3;
        x += indent;
        const segs = 2 + ((r * 5 + codeSeed) % 3);
        for (let s = 0; s < segs; s++) {
          const w = 1 + ((r * 7 + s * 13 + codeSeed * 3) % 3);
          if (x + w > 23) break;
          const ci = (r + s + codeSeed) % palette.length;
          px(x, 4 + r, w, 1, palette[ci]);
          x += w + 1;
        }
      }
      if (cursorOn) px(22, 8, 1, 1, "#fff");
      px(24, 10, 1, 1, frame === 0 ? "#7aff66" : "#3a8a55");

      // monitor stand
      px(14, 12, 4, 1, "#0c0420");
      px(13, 13, 6, 1, "#0c0420");

      // desk
      px(0, 14, 32, 1, "#ff8a3d");
      px(0, 15, 32, 1, "#b15820");

      // mug
      px(2, 11, 4, 3, "#ff5fa2");
      px(2, 11, 4, 1, "#7a2a4d");
      px(6, 12, 1, 1, "#ff5fa2");
      if (frame === 0) {
        px(3, 9, 1, 1, "#8a7eb8");
        px(2, 8, 1, 1, "#5a4a7a");
      } else {
        px(4, 9, 1, 1, "#8a7eb8");
        px(3, 8, 1, 1, "#5a4a7a");
      }

      // plant
      px(27, 12, 4, 2, "#b15820");
      px(28, 11, 2, 1, "#7a3a18");
      px(28, 10, 1, 1, "#7aff66");
      px(29, 9, 1, 2, "#7aff66");
      px(30, 10, 1, 1, "#7aff66");
      px(28, 8, 1, 1, "#46b15c");
      px(29, 8, 1, 1, "#46b15c");

      // keyboard
      px(6, 16, 20, 2, "#1a0d2e");
      px(7, 16, 18, 1, "#3a3a55");
      for (let c = 0; c < 9; c++) px(7 + c * 2, 16, 1, 1, "#d8d8e8");

      // person — hair
      px(13, 4, 6, 1, "#2a1240");
      px(12, 5, 8, 1, "#2a1240");
      px(11, 6, 10, 2, "#2a1240");
      px(13, 5, 1, 1, "#6a4dba");
      px(17, 5, 1, 1, "#6a4dba");
      px(14, 6, 1, 1, "#4a2d8a");
      px(18, 6, 1, 1, "#4a2d8a");
      px(11, 8, 1, 1, "#ffd9b0");
      px(20, 8, 1, 1, "#ffd9b0");
      px(12, 8, 8, 1, "#2a1240");
      px(14, 9, 4, 1, "#c97e5a");

      // headphones
      px(13, 4, 6, 1, "#4ff0d6");
      px(11, 7, 1, 1, "#0c0420");
      px(20, 7, 1, 1, "#0c0420");

      // shoulders
      px(10, 10, 12, 1, "#4ff0d6");
      px(9, 11, 14, 1, "#4ff0d6");

      // arms
      px(8, 11, 1, 1, "#4ff0d6");
      px(8, 12, 2, 3, "#4ff0d6");
      px(8, 15, 2, 1, "#ffd9b0");
      px(23, 11, 1, 1, "#4ff0d6");
      px(22, 12, 2, 3, "#4ff0d6");
      px(22, 15, 2, 1, "#ffd9b0");

      // hands (typing)
      const lhy = frame === 0 ? 15 : 16;
      const rhy = frame === 0 ? 16 : 15;
      px(7, lhy, 3, 1, "#ffd9b0");
      px(22, rhy, 3, 1, "#ffd9b0");

      // chair
      px(10, 12, 12, 13, "#7a2a4d");
      px(11, 13, 10, 12, "#ff5fa2");
      px(11, 13, 1, 12, "#ff8ac3");
      px(12, 15, 8, 1, "#b13a72");
      px(12, 18, 8, 1, "#b13a72");
      px(12, 21, 8, 1, "#b13a72");
      px(12, 24, 8, 1, "#b13a72");
      px(13, 12, 6, 1, "#ff8ac3");
      px(8, 25, 16, 1, "#7a2a4d");
      px(8, 26, 16, 1, "#ff5fa2");
      px(8, 27, 16, 1, "#b13a72");
      px(15, 28, 2, 2, "#5a4a7a");
      px(15, 28, 1, 2, "#7a6aaa");
      px(9, 30, 14, 1, "#2a1d44");
      px(8, 31, 2, 1, "#1a0d2e");
      px(13, 31, 2, 1, "#1a0d2e");
      px(17, 31, 2, 1, "#1a0d2e");
      px(22, 31, 2, 1, "#1a0d2e");

      tick++;
    }

    draw();
    const id = window.setInterval(draw, 100);
    return () => window.clearInterval(id);
  }, []);

  return (
    <canvas
      ref={ref}
      width={32}
      height={32}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        imageRendering: "pixelated",
        background: "#1f1140",
      }}
    />
  );
}
