// lib/pixel-svg.ts
// Tiny pixel-art SVG drawing primitives — used by all /api/og/* routes.

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
      // Browser cache 1h, CDN cache 1h with stale-while-revalidate 1 day
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
