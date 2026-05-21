// app/api/og/languages.svg/route.ts
// Top languages by real bytes, drawn as chunky pixel bars.
import { getStatsSafe } from '@/lib/github';
import { PixelSVG, svgResponse } from '@/lib/pixel-svg';

export const runtime = 'edge';

const USERNAME = process.env.GH_USERNAME || 'erickArita';

export async function GET() {
  const s = await getStatsSafe(USERNAME);

  const W = 560,
    H = 260;
  const g = new PixelSVG(W, H);
  g.borderTopBottom('#ffd23f');

  g.text(20, 32, '// MOST USED LANGUAGES', { size: 14, color: '#ffd23f' });

  const CELLS = 30;
  s.topLangs.forEach((l, idx) => {
    const y = 60 + idx * 32;
    g.text(20, y + 14, l.name.toUpperCase().slice(0, 12), { size: 10, color: '#ece6ff' });
    g.rect(180, y, CELLS * 11 + 4, 22, '#0c0420');
    const filled = Math.max(1, Math.round((l.pct / 100) * CELLS));
    for (let c = 0; c < CELLS; c++) {
      g.rect(182 + c * 11, y + 2, 9, 18, c < filled ? l.color : '#1f1140');
    }
    g.text(W - 20, y + 14, l.pct.toFixed(1) + '%', { size: 10, color: '#8a7eb8', anchor: 'end' });
  });

  return svgResponse(g.toString());
}
