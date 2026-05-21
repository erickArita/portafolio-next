"use client";

const PALETTE = ["#1f1140", "#1d3d2a", "#2b6b3f", "#46b15c", "#7aff66"];

function level(count: number): number {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

/** 52-week contribution heatmap. Cells are laid out column-major via CSS. */
export default function Heatmap({ weeks }: { weeks: number[][] }) {
  const last52 = weeks.slice(-52);
  const cells = last52.flat();
  return (
    <div className="heatmap">
      {cells.map((count, i) => (
        <b key={i} style={{ background: PALETTE[level(count)] }} />
      ))}
    </div>
  );
}
