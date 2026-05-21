// app/api/og/metrics.svg/route.ts
// 2×3 grid of arcade-style metric cards.
import { getStatsSafe } from '@/lib/github';
import { PixelSVG, svgResponse } from '@/lib/pixel-svg';

export const runtime = 'edge';

const USERNAME = process.env.GH_USERNAME || 'erickArita';

export async function GET() {
  const s = await getStatsSafe(USERNAME);

  const W = 720,
    H = 220;
  const g = new PixelSVG(W, H);
  g.borderTopBottom('#7aff66');

  g.text(20, 32, '// GITHUB METRICS · LIVE', { size: 14, color: '#7aff66' });
  g.text(W - 20, 32, `UPDATED ${new Date().toISOString().slice(0, 10)}`, {
    size: 8,
    color: '#8a7eb8',
    anchor: 'end',
  });

  const cards = [
    { num: s.commits.toLocaleString(), label: 'COMMITS / YR', color: '#4ff0d6' },
    { num: s.prs.toLocaleString(), label: 'PULL REQUESTS', color: '#ff5fa2' },
    { num: s.repos.toString(), label: 'REPOSITORIES', color: '#ffd23f' },
    { num: s.stars.toLocaleString(), label: 'STARS', color: '#9b6dff' },
    { num: s.reviews.toString(), label: 'PR REVIEWS', color: '#ff8a3d' },
    { num: s.streak + ' D', label: 'CURRENT STREAK', color: '#7aff66' },
  ];

  const cardW = (W - 60) / 3,
    cardH = 70;
  cards.forEach((c, i) => {
    const x = 20 + (i % 3) * (cardW + 10);
    const y = 60 + Math.floor(i / 3) * (cardH + 10);
    g.card(x, y, cardW, cardH, c.color);
    g.text(x + 16, y + 36, c.num, { size: 22, color: c.color });
    g.text(x + 16, y + 56, c.label, { size: 8, color: '#8a7eb8' });
  });

  return svgResponse(g.toString());
}
