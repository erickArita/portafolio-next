// app/api/og/stats.svg/route.ts
// Compact one-row banner (great as a hero banner under the name in a README).
import { getStatsSafe } from '@/lib/github';
import { PixelSVG, svgResponse } from '@/lib/pixel-svg';

export const runtime = 'edge';

const USERNAME = process.env.GH_USERNAME || 'erickArita';

export async function GET() {
  const s = await getStatsSafe(USERNAME);

  const W = 720,
    H = 80;
  const g = new PixelSVG(W, H, '#0c0420');
  g.borderTopBottom('#ff5fa2');

  const items = [
    { v: s.commits.toLocaleString(), l: 'COMMITS', c: '#4ff0d6' },
    { v: s.prs.toString(), l: 'PRS', c: '#ff5fa2' },
    { v: s.stars.toLocaleString(), l: 'STARS', c: '#ffd23f' },
    { v: s.repos.toString(), l: 'REPOS', c: '#9b6dff' },
    { v: s.streak + 'D', l: 'STREAK', c: '#7aff66' },
  ];
  const colW = W / items.length;
  items.forEach((it, i) => {
    const cx = i * colW + colW / 2;
    g.text(cx, 42, it.v, { size: 18, color: it.c, anchor: 'middle' });
    g.text(cx, 62, it.l, { size: 8, color: '#8a7eb8', anchor: 'middle' });
  });

  return svgResponse(g.toString());
}
