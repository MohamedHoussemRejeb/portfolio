import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import MiniArchitecturePreview from "@/components/projects/MiniArchitecturePreview";

type PageProps = {
  params: { slug?: string } | Promise<{ slug?: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const c = params?.slug ? getCaseStudy(params.slug) : null;
  if (!c) return {};
  return {
    title: `${c.title} | Case Study`,
    description: c.subtitle,
  };
}

export default async function CaseStudyPage(props: PageProps) {
  const params = await props.params;
  const slug = params?.slug;
  if (!slug) return notFound();
  const c = getCaseStudy(slug);
  if (!c) return notFound();

  return (
    <main style={{ background: "var(--navy)", minHeight: "100vh", padding: "48px 28px 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Back button */}
        <Link href="/#projects" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "'DM Sans', sans-serif", fontSize: 12,
          color: "var(--t2)", textDecoration: "none",
          border: "1px solid var(--bd)", borderRadius: 6,
          padding: "6px 14px", marginBottom: 32,
          transition: "color 0.2s",
        }}>
          ← Back to projects
        </Link>

        {/* Header card */}
        <div style={{
          background: "var(--navy2)", border: "1px solid var(--bd)",
          borderRadius: 16, padding: "32px 36px", marginBottom: 28,
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: 10,
              padding: "4px 12px", borderRadius: 4,
              background: c.badge === "Featured" ? "rgba(245,158,11,0.12)" : "rgba(16,185,129,0.10)",
              border: `1px solid ${c.badge === "Featured" ? "rgba(245,158,11,0.28)" : "rgba(16,185,129,0.22)"}`,
              color: c.badge === "Featured" ? "#F59E0B" : "#10B981",
              textTransform: "uppercase", letterSpacing: "0.06em",
            }}>
              {c.badge}
            </span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--t3)" }}>
              {c.period} · {c.role}
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 36, fontWeight: 700, color: "var(--t1)",
            letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 12,
          }}>
            {c.title}
          </h1>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 14,
            color: "var(--t2)", lineHeight: 1.75, marginBottom: 24,
          }}>
            {c.subtitle}
          </p>

          {/* Links */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
            {c.links?.github && (
              <a href={c.links.github} target="_blank" rel="noopener noreferrer" style={{
                background: "var(--blue)", color: "#fff",
                padding: "9px 20px", borderRadius: 7,
                fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                fontWeight: 500, textDecoration: "none", letterSpacing: "0.03em",
              }}>↗ GitHub</a>
            )}
            {c.links?.demo && (
              <a href={c.links.demo} target="_blank" rel="noopener noreferrer" style={{
                background: "transparent", color: "var(--t1)",
                border: "1px solid var(--bd2)",
                padding: "9px 20px", borderRadius: 7,
                fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                textDecoration: "none", letterSpacing: "0.03em",
              }}>Live Demo</a>
            )}
          </div>

          {/* KPIs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {c.kpis.map(k => (
              <div key={k.label} style={{
                background: "var(--navy3)", border: "1px solid var(--bd)",
                borderRadius: 10, padding: "14px 16px",
              }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "var(--t3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                  {k.label}
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500, color: "var(--blue-l)" }}>
                  {k.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <Section title="Summary">
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "var(--t2)", lineHeight: 1.8, marginBottom: 16 }}>
            {c.summary}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {c.stack.map(t => (
              <span key={t} style={{
                fontFamily: "'DM Mono', monospace", fontSize: 11,
                padding: "4px 10px", borderRadius: 5,
                background: "var(--blue-dim)", border: "1px solid var(--blue-bd)",
                color: "var(--blue-l)", letterSpacing: "0.03em",
              }}>{t}</span>
            ))}
          </div>
        </Section>

        {/* Architecture */}
        <Section title="Architecture">
          <div style={{ background: "var(--navy2)", border: "1px solid var(--bd)", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <MiniArchitecturePreview slug={slug} />
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {c.architecture.map(a => (
              <li key={a} style={{ display: "flex", gap: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "var(--t2)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--blue-l)", flexShrink: 0 }}>→</span> {a}
              </li>
            ))}
          </ul>
        </Section>

        {/* Context */}
        <Section title="Context">
          <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {c.context.map(x => (
              <li key={x} style={{ display: "flex", gap: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "var(--t2)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--blue-l)", flexShrink: 0 }}>→</span> {x}
              </li>
            ))}
          </ul>
        </Section>

        {/* What I did */}
        <Section title="What I did">
          <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {c.responsibilities.map(x => (
              <li key={x} style={{ display: "flex", gap: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "var(--t2)", lineHeight: 1.6 }}>
                <span style={{ color: "var(--blue-l)", flexShrink: 0 }}>→</span> {x}
              </li>
            ))}
          </ul>
        </Section>

        {/* Challenges */}
        <Section title="Challenges & Solutions">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {c.challenges.map(ch => (
              <div key={ch.problem} style={{
                background: "var(--navy2)", border: "1px solid var(--bd)",
                borderRadius: 12, padding: "20px 22px",
              }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Problem
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "var(--t2)", lineHeight: 1.6, marginBottom: 16 }}>
                  {ch.problem}
                </p>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500, color: "#10B981", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                  Solution
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "var(--t2)", lineHeight: 1.6 }}>
                  {ch.solution}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Results */}
        <Section title="Results">
          <ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {c.results.map(r => (
              <li key={r} style={{ display: "flex", gap: 10, fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "var(--t2)", lineHeight: 1.6 }}>
                <span style={{ color: "#10B981", flexShrink: 0 }}>✓</span> {r}
              </li>
            ))}
          </ul>
        </Section>

      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        marginBottom: 18,
      }}>
        <div style={{ width: 3, height: 18, background: "var(--blue)", borderRadius: 2, flexShrink: 0 }} />
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 22, fontWeight: 700, color: "var(--t1)",
          letterSpacing: "-0.01em",
        }}>
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}