"use client";

export default function ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto">
      <svg width="900" height="260" viewBox="0 0 900 260" className="text-gray-900 dark:text-zinc-100">
        {/* Boxes */}
        <rect x="40" y="40" width="170" height="70" rx="14" fill="currentColor" opacity="0.08" />
        <rect x="260" y="40" width="170" height="70" rx="14" fill="currentColor" opacity="0.08" />
        <rect x="480" y="40" width="170" height="70" rx="14" fill="currentColor" opacity="0.08" />
        <rect x="700" y="40" width="170" height="70" rx="14" fill="currentColor" opacity="0.08" />

        <rect x="180" y="160" width="160" height="70" rx="14" fill="currentColor" opacity="0.08" />
        <rect x="370" y="160" width="160" height="70" rx="14" fill="currentColor" opacity="0.08" />
        <rect x="560" y="160" width="160" height="70" rx="14" fill="currentColor" opacity="0.08" />

        {/* Text */}
        <text x="125" y="80" textAnchor="middle" fontSize="14" opacity="0.9">Client</text>
        <text x="345" y="80" textAnchor="middle" fontSize="14" opacity="0.9">API Gateway</text>
        <text x="565" y="80" textAnchor="middle" fontSize="14" opacity="0.9">Eureka</text>
        <text x="785" y="80" textAnchor="middle" fontSize="14" opacity="0.9">Config Server</text>

        <text x="260" y="200" textAnchor="middle" fontSize="14" opacity="0.9">Services</text>
        <text x="450" y="200" textAnchor="middle" fontSize="14" opacity="0.9">Kafka</text>
        <text x="640" y="200" textAnchor="middle" fontSize="14" opacity="0.9">Zipkin</text>

        {/* Arrows */}
        <line x1="210" y1="75" x2="260" y2="75" stroke="currentColor" opacity="0.25" strokeWidth="2" />
        <line x1="430" y1="75" x2="480" y2="75" stroke="currentColor" opacity="0.25" strokeWidth="2" />
        <line x1="650" y1="75" x2="700" y2="75" stroke="currentColor" opacity="0.25" strokeWidth="2" />

        <line x1="345" y1="110" x2="260" y2="160" stroke="currentColor" opacity="0.25" strokeWidth="2" />
        <line x1="345" y1="110" x2="450" y2="160" stroke="currentColor" opacity="0.25" strokeWidth="2" />
        <line x1="345" y1="110" x2="640" y2="160" stroke="currentColor" opacity="0.25" strokeWidth="2" />

        <text x="260" y="220" textAnchor="middle" fontSize="12" opacity="0.6">Customer • Product • Order • Payment</text>
        <text x="450" y="220" textAnchor="middle" fontSize="12" opacity="0.6">Events (Order → Notification)</text>
        <text x="640" y="220" textAnchor="middle" fontSize="12" opacity="0.6">Tracing + Debugging</text>
      </svg>
    </div>
  );
}
