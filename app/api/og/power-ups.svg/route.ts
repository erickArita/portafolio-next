// app/api/og/power-ups.svg/route.ts
// Specializations grid for the GitHub profile README. Static content (?lang=es|en).
import { POWER_UPS, dict, type Locale } from '@/content/profile';
import { PixelSVG, PIX, resolveColor, plainText, svgResponse } from '@/lib/pixel-svg';

export const runtime = 'edge';

export async function GET(req: Request) {
  const lang: Locale = new URL(req.url).searchParams.get('lang') === 'es' ? 'es' : 'en';

  const W = 720,
    H = 380;
  const g = new PixelSVG(W, H);
  g.borderTopBottom(PIX.green);

  g.text(20, 34, '// POWER-UPS · SPECIALIZATIONS', { size: 14, color: PIX.green });

  const cols = 2;
  const cardW = (W - 60) / cols;
  const cardH = 92;
  POWER_UPS.forEach((p, i) => {
    const x = 20 + (i % cols) * (cardW + 10);
    const y = 56 + Math.floor(i / cols) * (cardH + 10);
    const color = resolveColor(p.bg);
    g.card(x, y, cardW, cardH, color);

    // icon block
    g.rect(x + 16, y + 18, 20, 20, color);

    const title = plainText(dict[lang][p.titleKey] ?? p.titleKey);
    g.text(x + 48, y + 33, title, { size: 10, color: PIX.ink });

    const tags = p.tags.map(([, label]) => label).join(' · ');
    g.text(x + 16, y + 66, tags, { size: 8, color: PIX.muted });
  });

  return svgResponse(g.toString());
}
