"use client";

type Axis = { label: string; value: number }; // value in 0..5

export default function SkillsRadar({ axes }: { axes: Axis[] }) {
  const size = 320;
  const r = 120;
  const cx = size / 2;
  const cy = size / 2;

  const clamp = (v: number) => Math.max(0, Math.min(5, v));
  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const points = axes.map((a, i) => {
    const angle = -90 + (360 / axes.length) * i; // start top
    const rr = (clamp(a.value) / 5) * r;
    const x = cx + rr * Math.cos(toRad(angle));
    const y = cy + rr * Math.sin(toRad(angle));
    return { x, y, angle, label: a.label };
  });

  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ");

  const rings = [1, 2, 3, 4, 5].map((lvl) => {
    const rr = (lvl / 5) * r;
    const ringPts = axes.map((_, i) => {
      const angle = -90 + (360 / axes.length) * i;
      const x = cx + rr * Math.cos(toRad(angle));
      const y = cy + rr * Math.sin(toRad(angle));
      return `${x},${y}`;
    });
    return ringPts.join(" ");
  });

  return (
    <div className="w-full flex justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* rings */}
        {rings.map((ring, idx) => (
          <polygon
            key={idx}
            points={ring}
            fill="none"
            stroke="currentColor"
            opacity={0.15}
          />
        ))}

        {/* axes lines */}
        {points.map((p, idx) => (
          <line
            key={idx}
            x1={cx}
            y1={cy}
            x2={cx + r * Math.cos(toRad(p.angle))}
            y2={cy + r * Math.sin(toRad(p.angle))}
            stroke="currentColor"
            opacity={0.15}
          />
        ))}

        {/* value polygon */}
        <polygon
          points={polygon}
          fill="currentColor"
          opacity={0.12}
        />
        <polygon
          points={polygon}
          fill="none"
          stroke="currentColor"
          opacity={0.35}
          strokeWidth={2}
        />

        {/* labels */}
        {points.map((p, idx) => {
          const labelR = r + 28;
          const lx = cx + labelR * Math.cos(toRad(p.angle));
          const ly = cy + labelR * Math.sin(toRad(p.angle));
          return (
            <text
              key={idx}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="12"
              opacity={0.75}
            >
              {p.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
