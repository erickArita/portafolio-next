// lib/pixel-svg.ts
// Tiny pixel-art SVG drawing primitives — used by all /api/og/* routes.

/** Shared pixel-art palette (literal hex — CSS vars don't resolve inside a standalone SVG). */
export const PIX = {
  cyan: '#4ff0d6',
  pink: '#ff5fa2',
  yellow: '#ffd23f',
  green: '#7aff66',
  orange: '#ff8a3d',
  purple: '#9b6dff',
  ink: '#ece6ff',
  muted: '#8a7eb8',
  line: '#4a2d8a',
  bg: '#15092b',
  dark: '#0c0420',
} as const;

const VAR_MAP: Record<string, string> = {
  'var(--cyan)': PIX.cyan,
  'var(--pink)': PIX.pink,
  'var(--yellow)': PIX.yellow,
  'var(--green)': PIX.green,
  'var(--orange)': PIX.orange,
  'var(--ink)': PIX.ink,
  'var(--muted)': PIX.muted,
  'var(--line)': PIX.line,
};

/** Maps a `var(--name)` token to its hex; passes literal colors (e.g. `#9b6dff`) through. */
export const resolveColor = (v: string): string => VAR_MAP[v] ?? v;

/** Tag short-class (cy/pk/yl/gn/or) → hex. */
export const tagColor = (cls: string): string =>
  ({ cy: PIX.cyan, pk: PIX.pink, yl: PIX.yellow, gn: PIX.green, or: PIX.orange }[cls] ?? PIX.line);

/**
 * Dictionary strings carry inline HTML (for the React side). For SVG text we want
 * plain text: strip tags and decode the entities we use. `text()` re-escapes after.
 */
export const plainText = (s: string): string =>
  s
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');

export class PixelSVG {
  parts: string[] = [];
  W: number;
  H: number;
  constructor(W: number, H: number, bg = '#15092b') {
    this.W = W;
    this.H = H;
    this.rect(0, 0, W, H, bg);
  }
  rect(x: number, y: number, w: number, h: number, color: string, attrs = '') {
    this.parts.push(
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${color}"${attrs ? ' ' + attrs : ''}/>`,
    );
  }
  text(
    x: number,
    y: number,
    t: string,
    opts: {
      size?: number;
      color?: string;
      anchor?: 'start' | 'middle' | 'end';
      family?: string;
    } = {},
  ) {
    const {
      size = 11,
      color = '#ece6ff',
      anchor = 'start',
      family = "'Press Start 2P','Courier New',monospace",
    } = opts;
    const safe = String(t).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]!));
    this.parts.push(
      `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" fill="${color}" text-anchor="${anchor}">${safe}</text>`,
    );
  }
  borderTopBottom(color: string) {
    for (let i = 0; i < this.W; i += 8) {
      this.rect(i, 0, 4, 4, color);
      this.rect(i, this.H - 4, 4, 4, color);
    }
  }
  card(x: number, y: number, w: number, h: number, color: string, fill = '#1f1140') {
    this.rect(x, y, w, h, fill);
    for (let xx = x; xx < x + w; xx += 4) {
      this.rect(xx, y, 4, 2, color);
      this.rect(xx, y + h - 2, 4, 2, color);
    }
    for (let yy = y; yy < y + h; yy += 4) {
      this.rect(x, yy, 2, 4, color);
      this.rect(x + w - 2, yy, 2, 4, color);
    }
  }
  toString() {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.W} ${this.H}" width="${this.W}" height="${this.H}" shape-rendering="crispEdges">\n${this.parts.join('\n')}\n</svg>\n`;
  }
}

export const svgResponse = (svg: string) =>
  new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      // Short TTL so GitHub's camo image proxy re-fetches the README cards often
      // (browser/camo 5 min, CDN 5 min, serve-stale up to 1h while revalidating).
      'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=3600',
    },
  });
