// app/api/og/quest-log.svg/route.ts
// Work-experience log for the GitHub profile README. Static content (?lang=es|en).
import { QUESTS, dict, type Locale } from '@/content/profile';
import { PixelSVG, PIX, tagColor, plainText, svgResponse } from '@/lib/pixel-svg';

export const runtime = 'edge';

export async function GET(req: Request) {
  const lang: Locale = new URL(req.url).searchParams.get('lang') === 'es' ? 'es' : 'en';

  const W = 720,
    H = 380;
  const g = new PixelSVG(W, H);
  g.borderTopBottom(PIX.cyan);

  g.text(20, 34, '// QUEST LOG · WORK XP', { size: 14, color: PIX.cyan });

  const x = 20;
  const cardW = W - 40;
  const cardH = 92;
  QUESTS.forEach((q, i) => {
    const y = 56 + i * (cardH + 10);
    const border = tagColor(q.tags[0]?.[0] ?? '');
    g.card(x, y, cardW, cardH, border);

    const title = plainText(dict[lang][q.titleKey] ?? q.titleKey);
    const role = plainText(dict[lang][q.roleKey] ?? q.roleKey);
    const tags = q.tags.map(([, label]) => label).join(' · ');
    const period = q.when ?? (q.whenKey ? plainText(dict[lang][q.whenKey]) : '');
    const dur = plainText(dict[lang][q.durKey] ?? q.durKey);
    const status = plainText(q.statusKey ? dict[lang][q.statusKey] : q.statusText ?? '');
    const statusColor = q.statusCls === 'live' ? PIX.pink : PIX.green;

    // left: title / role / tags
    g.text(x + 18, y + 30, title, { size: 12, color: PIX.ink });
    g.text(x + 18, y + 52, role, { size: 9, color: PIX.cyan });
    g.text(x + 18, y + 76, tags, { size: 8, color: PIX.muted });

    // right: period / duration / status
    g.text(x + cardW - 18, y + 30, period, { size: 8, color: PIX.yellow, anchor: 'end' });
    g.text(x + cardW - 18, y + 48, dur, { size: 8, color: PIX.muted, anchor: 'end' });
    g.text(x + cardW - 18, y + 72, status, { size: 9, color: statusColor, anchor: 'end' });
  });

  return svgResponse(g.toString());
}
