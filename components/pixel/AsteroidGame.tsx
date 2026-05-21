"use client";

import { useEffect, useRef } from "react";

type Asteroid = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  cells: number;
  radius: number;
  color: string;
  pattern: number[][];
};
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
};

/** Clickable pixel asteroids floating behind the hero. Calls onHit(points) on destroy. */
export default function AsteroidGame({ onHit }: { onHit: (pts: number) => void }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const onHitRef = useRef(onHit);
  onHitRef.current = onHit;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const stage = canvas.parentElement;
    if (!ctx || !stage) return;

    let W = 0,
      H = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const r = stage.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = false;
    };
    resize();
    window.addEventListener("resize", resize);

    const COLORS = ["#ff5fa2", "#4ff0d6", "#ffd23f", "#7aff66", "#ff8a3d", "#9b6dff"];
    const asteroids: Asteroid[] = [];
    const particles: Particle[] = [];

    function spawn() {
      const fromLeft = Math.random() < 0.5;
      const size = 3 + Math.floor(Math.random() * 3);
      const cells = 4 + Math.floor(Math.random() * 3);
      const radius = (size * cells) / 2;
      const x = fromLeft ? -radius : W + radius;
      const y = 20 + Math.random() * (H - 40);
      const sp = 0.4 + Math.random() * 0.8;
      const vx = (fromLeft ? 1 : -1) * sp;
      const vy = (Math.random() - 0.5) * 0.3;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const pattern: number[][] = [];
      for (let i = 0; i < cells; i++) {
        const row: number[] = [];
        const cx = (cells - 1) / 2;
        for (let j = 0; j < cells; j++) {
          const d = Math.hypot(i - cx, j - cx);
          const onShape = d <= cells / 2 - 0.2;
          row.push(onShape && Math.random() > 0.18 ? 1 : 0);
        }
        pattern.push(row);
      }
      asteroids.push({ x, y, vx, vy, size, cells, radius, color, pattern });
    }

    for (let i = 0; i < 4; i++) {
      spawn();
      const a = asteroids[asteroids.length - 1];
      a.x = Math.random() * W;
    }

    function drawAsteroid(a: Asteroid) {
      ctx!.save();
      ctx!.translate(a.x, a.y);
      ctx!.fillStyle = a.color;
      const s = a.size;
      const off = (-a.cells * s) / 2;
      for (let i = 0; i < a.cells; i++)
        for (let j = 0; j < a.cells; j++)
          if (a.pattern[i][j]) ctx!.fillRect(off + j * s, off + i * s, s, s);
      ctx!.fillStyle = "rgba(0,0,0,0.35)";
      for (let i = 0; i < a.cells; i++)
        for (let j = 0; j < a.cells; j++)
          if (a.pattern[i][j] && i + j > a.cells)
            ctx!.fillRect(off + j * s, off + i * s, s, s);
      ctx!.restore();
    }

    function explode(x: number, y: number, color: string) {
      for (let i = 0; i < 14; i++) {
        const ang = Math.random() * Math.PI * 2;
        const sp = 0.8 + Math.random() * 2.2;
        particles.push({
          x,
          y,
          vx: Math.cos(ang) * sp,
          vy: Math.sin(ang) * sp,
          life: 30 + Math.floor(Math.random() * 20),
          size: 2 + Math.floor(Math.random() * 3),
          color,
        });
      }
    }

    function popText(x: number, y: number, text: string) {
      const el = document.createElement("div");
      el.className = "pop-score";
      el.textContent = text;
      el.style.left = x + "px";
      el.style.top = y + "px";
      stage!.appendChild(el);
      window.setTimeout(() => el.remove(), 700);
    }

    function handleClick(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      if (cx < 0 || cy < 0 || cx > rect.width || cy > rect.height) return;
      for (let i = asteroids.length - 1; i >= 0; i--) {
        const a = asteroids[i];
        const d = Math.hypot(cx - a.x, cy - a.y);
        if (d <= a.radius + 6) {
          explode(a.x, a.y, a.color);
          asteroids.splice(i, 1);
          const pts = 10 * a.cells;
          onHitRef.current(pts);
          popText(cx, cy, "+" + pts);
          window.setTimeout(spawn, 400 + Math.random() * 800);
          return;
        }
      }
    }
    stage.addEventListener("click", handleClick);

    let last = performance.now();
    let raf = 0;
    function loop(now: number) {
      const dt = Math.min(50, now - last);
      last = now;
      ctx!.clearRect(0, 0, W, H);
      for (const a of asteroids) {
        a.x += a.vx * dt * 0.06;
        a.y += a.vy * dt * 0.06;
        if (a.x < -a.radius - 10) a.x = W + a.radius;
        if (a.x > W + a.radius + 10) a.x = -a.radius;
        if (a.y < -a.radius) a.y = H + a.radius;
        if (a.y > H + a.radius) a.y = -a.radius;
        drawAsteroid(a);
      }
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        p.life -= dt * 0.06;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = Math.max(0, p.life / 30);
        ctx!.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
        ctx!.globalAlpha = 1;
      }
      if (asteroids.length < 5 && Math.random() < 0.005) spawn();
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      stage.removeEventListener("click", handleClick);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={ref} id="asteroidCanvas" />;
}
