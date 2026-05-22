// app/api/og/card.svg/route.ts
// Hero / profile card for the top of the GitHub profile README.
import { PROFILE } from '@/content/profile';
import { PixelSVG, PIX, svgResponse } from '@/lib/pixel-svg';

export const runtime = 'edge';

export async function GET() {
  const W = 720,
    H = 210;
  const g = new PixelSVG(W, H, PIX.dark);
  g.borderTopBottom(PIX.pink);

  // --- Avatar (pixel "coder" scene, static frame) ---
  const ax = 28,
    ay = 25,
    s = 5,
    box = 32 * s;
  g.rect(ax, ay, box, box, '#1f1140');
  drawCoder(g, ax, ay, s);
  // pink frame
  g.rect(ax - 4, ay - 4, box + 8, 4, PIX.pink);
  g.rect(ax - 4, ay + box, box + 8, 4, PIX.pink);
  g.rect(ax - 4, ay, 4, box, PIX.pink);
  g.rect(ax + box, ay, 4, box, PIX.pink);

  // --- Text block ---
  const tx = 232;
  g.text(tx, 70, PROFILE.name, { size: 24, color: PIX.ink });
  g.text(tx, 96, '@erickArita', { size: 10, color: PIX.muted });
  g.text(tx, 128, 'SOFTWARE ENGINEER · HONDURAS', { size: 11, color: PIX.cyan });
  g.text(tx, 152, '.NET · REACT · PYTHON', { size: 10, color: PIX.ink });

  // LVL badge
  g.card(tx, 168, 104, 28, PIX.yellow, PIX.dark);
  g.text(tx + 14, 187, PROFILE.level, { size: 11, color: PIX.yellow });

  return svgResponse(g.toString());
}

/**
 * Static frame (tick 0) of the animated coder avatar from components/pixel/CoderAvatar.tsx,
 * emitted as scaled SVG rects at offset (ox, oy).
 */
function drawCoder(g: PixelSVG, ox: number, oy: number, s: number) {
  const px = (x: number, y: number, w: number, h: number, color: string) =>
    g.rect(ox + x * s, oy + y * s, w * s, h * s, color);

  const frame = 0;
  const codeSeed = 0;
  const cursorOn = true;

  // wall
  px(0, 0, 32, 18, '#2a1855');
  px(0, 18, 32, 14, '#15092b');
  px(4, 0, 24, 14, '#3a2270');

  // monitor
  px(6, 1, 20, 11, '#0c0420');
  px(7, 2, 18, 9, '#1a0d2e');
  px(8, 3, 16, 7, '#070314');

  // code lines
  const palette = ['#7aff66', '#4ff0d6', '#ffd23f', '#ff5fa2', '#9b6dff'];
  for (let r = 0; r < 5; r++) {
    let x = 9;
    const indent = (r * 3 + codeSeed) % 3;
    x += indent;
    const segs = 2 + ((r * 5 + codeSeed) % 3);
    for (let seg = 0; seg < segs; seg++) {
      const w = 1 + ((r * 7 + seg * 13 + codeSeed * 3) % 3);
      if (x + w > 23) break;
      const ci = (r + seg + codeSeed) % palette.length;
      px(x, 4 + r, w, 1, palette[ci]);
      x += w + 1;
    }
  }
  if (cursorOn) px(22, 8, 1, 1, '#fff');
  px(24, 10, 1, 1, frame === 0 ? '#7aff66' : '#3a8a55');

  // monitor stand
  px(14, 12, 4, 1, '#0c0420');
  px(13, 13, 6, 1, '#0c0420');

  // desk
  px(0, 14, 32, 1, '#ff8a3d');
  px(0, 15, 32, 1, '#b15820');

  // mug
  px(2, 11, 4, 3, '#ff5fa2');
  px(2, 11, 4, 1, '#7a2a4d');
  px(6, 12, 1, 1, '#ff5fa2');
  px(3, 9, 1, 1, '#8a7eb8');
  px(2, 8, 1, 1, '#5a4a7a');

  // plant
  px(27, 12, 4, 2, '#b15820');
  px(28, 11, 2, 1, '#7a3a18');
  px(28, 10, 1, 1, '#7aff66');
  px(29, 9, 1, 2, '#7aff66');
  px(30, 10, 1, 1, '#7aff66');
  px(28, 8, 1, 1, '#46b15c');
  px(29, 8, 1, 1, '#46b15c');

  // keyboard
  px(6, 16, 20, 2, '#1a0d2e');
  px(7, 16, 18, 1, '#3a3a55');
  for (let c = 0; c < 9; c++) px(7 + c * 2, 16, 1, 1, '#d8d8e8');

  // person — hair
  px(13, 4, 6, 1, '#2a1240');
  px(12, 5, 8, 1, '#2a1240');
  px(11, 6, 10, 2, '#2a1240');
  px(13, 5, 1, 1, '#6a4dba');
  px(17, 5, 1, 1, '#6a4dba');
  px(14, 6, 1, 1, '#4a2d8a');
  px(18, 6, 1, 1, '#4a2d8a');
  px(11, 8, 1, 1, '#ffd9b0');
  px(20, 8, 1, 1, '#ffd9b0');
  px(12, 8, 8, 1, '#2a1240');
  px(14, 9, 4, 1, '#c97e5a');

  // headphones
  px(13, 4, 6, 1, '#4ff0d6');
  px(11, 7, 1, 1, '#0c0420');
  px(20, 7, 1, 1, '#0c0420');

  // shoulders
  px(10, 10, 12, 1, '#4ff0d6');
  px(9, 11, 14, 1, '#4ff0d6');

  // arms
  px(8, 11, 1, 1, '#4ff0d6');
  px(8, 12, 2, 3, '#4ff0d6');
  px(8, 15, 2, 1, '#ffd9b0');
  px(23, 11, 1, 1, '#4ff0d6');
  px(22, 12, 2, 3, '#4ff0d6');
  px(22, 15, 2, 1, '#ffd9b0');

  // hands (typing)
  px(7, 15, 3, 1, '#ffd9b0');
  px(22, 16, 3, 1, '#ffd9b0');

  // chair
  px(10, 12, 12, 13, '#7a2a4d');
  px(11, 13, 10, 12, '#ff5fa2');
  px(11, 13, 1, 12, '#ff8ac3');
  px(12, 15, 8, 1, '#b13a72');
  px(12, 18, 8, 1, '#b13a72');
  px(12, 21, 8, 1, '#b13a72');
  px(12, 24, 8, 1, '#b13a72');
  px(13, 12, 6, 1, '#ff8ac3');
  px(8, 25, 16, 1, '#7a2a4d');
  px(8, 26, 16, 1, '#ff5fa2');
  px(8, 27, 16, 1, '#b13a72');
  px(15, 28, 2, 2, '#5a4a7a');
  px(15, 28, 1, 2, '#7a6aaa');
  px(9, 30, 14, 1, '#2a1d44');
  px(8, 31, 2, 1, '#1a0d2e');
  px(13, 31, 2, 1, '#1a0d2e');
  px(17, 31, 2, 1, '#1a0d2e');
  px(22, 31, 2, 1, '#1a0d2e');
}
