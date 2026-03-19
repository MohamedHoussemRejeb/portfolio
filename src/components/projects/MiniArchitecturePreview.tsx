"use client";

type Props = { slug: string };

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontFamily: "'DM Mono', monospace",
      fontSize: 10, padding: "3px 9px", borderRadius: 4,
      background: "var(--blue-dim)", border: "1px solid var(--blue-bd)",
      color: "var(--blue-l)", letterSpacing: "0.03em",
    }}>
      {children}
    </span>
  );
}

function PreviewWrapper({ title, desc, chips, children }: {
  title: string; desc: string;
  chips: string[]; children: React.ReactNode;
}) {
  return (
    <div style={{
      background: "var(--navy3)", border: "1px solid var(--bd)",
      borderRadius: 12, padding: "18px 20px",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
      }}>
        <div style={{ width: 3, height: 14, background: "var(--blue)", borderRadius: 2 }} />
        <span style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: 12,
          fontWeight: 500, color: "var(--t1)", letterSpacing: "0.02em",
        }}>
          {title}
        </span>
      </div>
      <p style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: 12,
        color: "var(--t2)", marginBottom: 14, lineHeight: 1.6,
      }}>
        {desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {chips.map(c => <Chip key={c}>{c}</Chip>)}
      </div>
      <div style={{ overflowX: "auto" }}>
        {children}
      </div>
    </div>
  );
}

export default function MiniArchitecturePreview({ slug }: Props) {

  if (slug === "microservices") {
    return (
      <PreviewWrapper
        title="Architecture overview"
        desc="Gateway + discovery + config + async events + tracing."
        chips={["Client", "API Gateway", "Eureka", "Config Server", "Services", "Kafka", "Zipkin", "Keycloak"]}
      >
        <svg width="100%" viewBox="0 0 700 180" style={{ color: "var(--t1)" }}>
          {/* Row 1 */}
          {[
            { x: 10,  label: "Client" },
            { x: 160, label: "API Gateway" },
            { x: 320, label: "Eureka" },
            { x: 480, label: "Config Server" },
          ].map(b => (
            <g key={b.label}>
              <rect x={b.x} y="20" width="130" height="44" rx="8"
                fill="var(--blue-dim)" stroke="var(--blue-bd)" strokeWidth="1" />
              <text x={b.x + 65} y="47" textAnchor="middle"
                fontSize="12" fill="var(--blue-l)" fontFamily="DM Sans, sans-serif">
                {b.label}
              </text>
            </g>
          ))}

          {/* Row 2 */}
          {[
            { x: 100, label: "Services" },
            { x: 290, label: "Kafka" },
            { x: 480, label: "Zipkin" },
          ].map(b => (
            <g key={b.label}>
              <rect x={b.x} y="110" width="130" height="44" rx="8"
                fill="rgba(255,255,255,0.04)" stroke="var(--bd2)" strokeWidth="1" />
              <text x={b.x + 65} y="137" textAnchor="middle"
                fontSize="12" fill="var(--t2)" fontFamily="DM Sans, sans-serif">
                {b.label}
              </text>
            </g>
          ))}

          {/* Row 1 connectors */}
          <line x1="140" y1="42" x2="160" y2="42" stroke="var(--blue-l)" strokeWidth="1.5" opacity="0.4" />
          <line x1="290" y1="42" x2="320" y2="42" stroke="var(--blue-l)" strokeWidth="1.5" opacity="0.4" />
          <line x1="450" y1="42" x2="480" y2="42" stroke="var(--blue-l)" strokeWidth="1.5" opacity="0.4" />

          {/* Gateway → Row 2 */}
          <line x1="225" y1="64" x2="165" y2="110" stroke="var(--t2)" strokeWidth="1" opacity="0.3" strokeDasharray="4 3" />
          <line x1="225" y1="64" x2="355" y2="110" stroke="var(--t2)" strokeWidth="1" opacity="0.3" strokeDasharray="4 3" />
          <line x1="225" y1="64" x2="545" y2="110" stroke="var(--t2)" strokeWidth="1" opacity="0.3" strokeDasharray="4 3" />
        </svg>
      </PreviewWrapper>
    );
  }

  if (slug === "cicd") {
    return (
      <PreviewWrapper
        title="Pipeline overview"
        desc="Build → test → artifact → container → monitor."
        chips={["Git", "Jenkins", "Maven", "Nexus", "Docker", "Prometheus", "Grafana", "GitHub Actions"]}
      >
        <svg width="100%" viewBox="0 0 700 100" style={{ color: "var(--t1)" }}>
          {[
            { x: 10,  label: "Git",        color: true },
            { x: 125, label: "Jenkins",    color: true },
            { x: 240, label: "Maven",      color: false },
            { x: 355, label: "Nexus",      color: false },
            { x: 470, label: "Docker",     color: true },
            { x: 585, label: "Monitoring", color: false },
          ].map((b, i) => (
            <g key={b.label}>
              <rect x={b.x} y="22" width="100" height="44" rx="8"
                fill={b.color ? "var(--blue-dim)" : "rgba(255,255,255,0.04)"}
                stroke={b.color ? "var(--blue-bd)" : "var(--bd2)"}
                strokeWidth="1" />
              <text x={b.x + 50} y="49" textAnchor="middle"
                fontSize="11" fill={b.color ? "var(--blue-l)" : "var(--t2)"}
                fontFamily="DM Sans, sans-serif">
                {b.label}
              </text>
              {i < 5 && (
                <line x1={b.x + 100} y1="44" x2={b.x + 125} y2="44"
                  stroke="var(--blue-l)" strokeWidth="1.5" opacity="0.4" />
              )}
            </g>
          ))}
        </svg>
      </PreviewWrapper>
    );
  }

  if (slug === "data-catalog") {
    return (
      <PreviewWrapper
        title="System overview"
        desc="Angular UI + Spring Boot APIs for metadata governance."
        chips={["Angular", "Spring Boot", "REST APIs", "Metadata model", "Labels (compliance)", "Docker", "Jira"]}
      >
        <svg width="100%" viewBox="0 0 700 120" style={{ color: "var(--t1)" }}>
          {[
            { x: 40,  w: 180, label: "Angular UI",       color: true },
            { x: 270, w: 200, label: "Spring Boot API",  color: true },
            { x: 530, w: 120, label: "Database",         color: false },
          ].map(b => (
            <g key={b.label}>
              <rect x={b.x} y="22" width={b.w} height="50" rx="8"
                fill={b.color ? "var(--blue-dim)" : "rgba(255,255,255,0.04)"}
                stroke={b.color ? "var(--blue-bd)" : "var(--bd2)"}
                strokeWidth="1" />
              <text x={b.x + b.w / 2} y="52" textAnchor="middle"
                fontSize="12" fill={b.color ? "var(--blue-l)" : "var(--t2)"}
                fontFamily="DM Sans, sans-serif">
                {b.label}
              </text>
            </g>
          ))}

          {/* Connectors */}
          <line x1="220" y1="47" x2="270" y2="47" stroke="var(--blue-l)" strokeWidth="1.5" opacity="0.5" />
          <line x1="470" y1="47" x2="530" y2="47" stroke="var(--blue-l)" strokeWidth="1.5" opacity="0.5" />

          <text x="350" y="100" textAnchor="middle"
            fontSize="11" fill="var(--t3)" fontFamily="DM Mono, monospace">
            Source · Table · Field · Owner · Label
          </text>
        </svg>
      </PreviewWrapper>
    );
  }

  return null;
}