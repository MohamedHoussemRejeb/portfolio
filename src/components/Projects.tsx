"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProjectModal from "@/components/ProjectModal";

type Category = "All" | "Backend" | "DevOps" | "Data" | "Mobile" | "Desktop" | "Web" | "Infra";
type Badge = "Featured" | "Production-like";

type Project = {
  title: string;
  company: string;
  category: Exclude<Category, "All">;
  badge: Badge;
  impact: string;
  whatIBuilt: string;
  result: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
  caseStudySlug?: string;
};

const CATEGORIES: Category[] = ["All", "Backend", "DevOps", "Data", "Web", "Mobile", "Desktop", "Infra"];

const PROJECTS: Project[] = [
  {
    title: "DataOps & Data Intelligence Platform",
    company: "Talys Consulting · PFE",
    category: "Data",
    badge: "Featured",
    impact: "Built a DataOps platform combining ETL workflows, data quality rules, and full-stack components for data-driven operations.",
    whatIBuilt: "Talend ETL pipelines (ingest/transform/validate/consolidate), Spring Boot REST APIs, SQL-based data rules, Angular integration in an Agile setup.",
    result: "Improved data reliability and traceability through automated validation workflows and structured pipelines.",
    tech: ["Talend", "Java", "Spring Boot", "SQL", "REST", "Angular", "Git", "Scrum"],
    image: "/projects/talys.png",
    // no case study yet
  },
  {
    title: "Secure Server Room Access Management",
    company: "Ennakl Automobiles",
    category: "Web",
    badge: "Featured",
    impact: "Digitized and secured access management with traceability, intervention logging, and e-signature for accountability.",
    whatIBuilt: "Spring Boot backend + Angular frontend, access tracking (entry/exit), intervention details, and a digital signature module.",
    result: "More reliable access audit trail + smoother operational monitoring for a security-sensitive environment.",
    tech: ["Java", "Spring Boot", "Angular", "REST", "SQL", "Digital Signature", "Git"],
    image: "/projects/ennakl.png",
    // no case study yet
  },
  {
    title: "BCT Online Website Modernization",
    company: "Central Bank of Tunisia",
    category: "Web",
    badge: "Production-like",
    impact: "Enhanced an institutional website with improved UI/UX and full-stack features using modern web practices.",
    whatIBuilt: "Spring Boot + Angular features, UI improvements, responsive HTML/CSS/JS refinements, end-to-end delivery.",
    result: "Better usability and a more maintainable structure aligned with stakeholder feedback.",
    tech: ["Spring Boot", "Angular", "HTML", "CSS", "JavaScript", "REST"],
    image: "/projects/bct.png",
    // no case study yet
  },
  {
    title: "E-Commerce Microservices Platform",
    company: "Personal Project",
    category: "Backend",
    badge: "Production-like",
    impact: "Production-like microservices platform with async messaging, centralized config, tracing, and secure API access.",
    whatIBuilt: "Config Server, Eureka Discovery, API Gateway, Kafka-based notifications, OpenFeign sync calls, and Zipkin tracing.",
    result: "Improved scalability and observability with distributed tracing + service discovery.",
    tech: ["Spring Boot", "Kafka", "Eureka", "API Gateway", "Zipkin", "Keycloak", "Docker"],
    image: "/projects/microservices-architecture.png",
    github: "https://github.com/",
    caseStudySlug: "microservices",
  },
  {
    title: "DevOps CI/CD Pipeline",
    company: "Personal Project",
    category: "DevOps",
    badge: "Featured",
    impact: "Reduced build & deployment friction by automating CI/CD pipelines and adding monitoring & artifact management.",
    whatIBuilt: "Jenkins pipelines (build/test/deploy), GitHub Actions replication, Nexus repository, Prometheus + Grafana monitoring.",
    result: "Repeatable releases and faster feedback cycles with versioned artifacts and real-time visibility.",
    tech: ["Jenkins", "GitHub Actions", "Docker", "Nexus", "Prometheus", "Grafana", "Maven"],
    image: "/projects/devops-cicd.png",
    caseStudySlug: "cicd",
  },
  {
    title: "SaaS Data Catalog — DATS Connexion",
    company: "Personal Project · MVP",
    category: "Data",
    badge: "Featured",
    impact: "Built an MVP SaaS Data Catalog to centralize metadata, improve governance, and expose structured APIs.",
    whatIBuilt: "Catalog CRUD (sources/tables/fields), compliance-style labeling, and REST APIs for integration.",
    result: "Accelerated data discovery and reduced manual effort for audits/analytics preparation.",
    tech: ["Java", "Spring Boot", "Angular", "REST", "Docker", "Jira"],
    image: "/projects/data-catalog-architecture.png",
    caseStudySlug: "data-catalog",
  },
  {
    title: "IT & Infrastructure Operations",
    company: "OMV",
    category: "Infra",
    badge: "Production-like",
    impact: "Enterprise IT operations: system administration support, asset management, and network infrastructure testing.",
    whatIBuilt: "Hardware inventory support, network stability testing across floors, device setup/troubleshooting, BitLocker usage.",
    result: "Improved operational reliability through structured support and infrastructure validation tasks.",
    tech: ["IT Operations", "Networking", "Asset Management", "Windows", "Security Basics"],
    image: "/projects/omv.png",
  },
  {
    title: "Public Transport Management",
    company: "Personal Project",
    category: "Mobile",
    badge: "Featured",
    impact: "Cross-platform transport management app delivered with Scrum practices and clean collaboration workflows.",
    whatIBuilt: "Flutter UI screens, backlog + sprint structure, Git collaboration, and REST integration patterns.",
    result: "Faster iteration and clearer delivery through traceable tasks and consistent branching strategy.",
    tech: ["Flutter", "Scrum", "Jira", "Git", "REST"],
    image: "/projects/bookit-mobile-main.png",
  },
  {
    title: "Internal Intranet Web App",
    company: "Tunisie Telecom",
    category: "Web",
    badge: "Production-like",
    impact: "Built an internal intranet web application to improve internal communication and information sharing.",
    whatIBuilt: "Core UI features and pages using PHP + HTML/CSS/JS, requirement alignment with internal users, basic database interaction.",
    result: "A clearer and more usable internal platform supporting employee workflows.",
    tech: ["PHP", "HTML", "CSS", "JavaScript", "Web App"],
    image: "/projects/tt.png",
  },
  {
    title: "Printing House Management",
    company: "Academic Project",
    category: "Desktop",
    badge: "Production-like",
    impact: "Desktop management system covering the full printing-house workflow with a rich UI.",
    whatIBuilt: "Orders, stock, clients, invoicing flows, validation rules, forms/tables UI, and database persistence.",
    result: "Improved organization with centralized tracking and reduced manual work via structured workflows.",
    tech: ["C++", "Qt", "GUI", "SQL"],
    image: "/projects/printing-house-dashboard.png",
  },
];

function SectionDivider({ label }: { label: string }) {
  return (
    <div style={{
      background: "var(--navy2)",
      borderTop: "1px solid var(--bd)",
      borderBottom: "1px solid var(--bd)",
      padding: "10px 28px",
      display: "flex", alignItems: "center", gap: 10,
    }}>
      <div style={{ width: 3, height: 14, background: "var(--blue)", borderRadius: 2, flexShrink: 0 }} />
      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 10, color: "var(--t3)",
        textTransform: "uppercase", letterSpacing: "0.10em",
      }}>
        {label}
      </span>
    </div>
  );
}

function BadgePill({ value }: { value: Badge }) {
  const isFeatured = value === "Featured";
  return (
    <span style={{
      fontFamily: "'DM Sans', sans-serif",
      fontSize: 9, padding: "3px 9px", borderRadius: 4,
      background: isFeatured ? "rgba(245,158,11,0.12)" : "rgba(16,185,129,0.10)",
      border: `1px solid ${isFeatured ? "rgba(245,158,11,0.28)" : "rgba(16,185,129,0.22)"}`,
      color: isFeatured ? "#F59E0B" : "#10B981",
      textTransform: "uppercase", letterSpacing: "0.04em",
      whiteSpace: "nowrap", flexShrink: 0,
    }}>
      {value}
    </span>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textAlign: "left",
        background: "var(--navy2)",
        border: `1px solid ${hovered ? "var(--blue-bd)" : "var(--bd)"}`,
        borderRadius: 12, overflow: "hidden",
        cursor: "pointer",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "border-color 0.2s, transform 0.2s",
        width: "100%",
      }}
    >
      {/* Image */}
      <div style={{
        width: "100%", height: 160,
        background: "var(--navy3)",
        borderBottom: "1px solid var(--bd)",
        position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11, color: "var(--t3)",
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            {project.category}
          </div>
        )}
        <div style={{
          position: "absolute", top: 10, left: 10,
          background: "rgba(11,24,41,0.75)",
          backdropFilter: "blur(4px)",
          border: "1px solid var(--blue-bd)",
          borderRadius: 4, padding: "3px 8px",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 9, color: "var(--blue-l)",
          textTransform: "uppercase", letterSpacing: "0.07em",
        }}>
          {project.category}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 18px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "var(--t3)", letterSpacing: "0.04em", marginBottom: 4 }}>
              {project.company}
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: "var(--t1)", lineHeight: 1.4 }}>
              {project.title}
            </div>
          </div>
          <BadgePill value={project.badge} />
        </div>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "var(--t2)", lineHeight: 1.6, marginBottom: 12 }}>
          {project.impact}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
          {project.tech.slice(0, 6).map(t => (
            <span key={t} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 9, padding: "2px 7px", borderRadius: 3,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--bd)",
              color: "var(--t3)", letterSpacing: "0.03em",
            }}>
              {t}
            </span>
          ))}
        </div>

        <div style={{ borderTop: "1px solid var(--bd)", paddingTop: 10, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "var(--blue-l)", letterSpacing: "0.02em" }}>
            View details →
          </span>

          {project.caseStudySlug ? (
            <Link
              href={`/projects/${project.caseStudySlug}`}
              onClick={e => e.stopPropagation()}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, color: "var(--t2)",
                border: "1px solid var(--bd2)",
                padding: "4px 10px", borderRadius: 4,
                textDecoration: "none", letterSpacing: "0.03em",
              }}
            >
              Case study →
            </Link>
          ) : (
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "var(--t3)" }}>—</span>
          )}
        </div>
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Category>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter(p => p.category === active);
  }, [active]);

  return (
    <>
      <SectionDivider label="Featured Projects" />

      <section id="projects" style={{ background: "var(--navy)", padding: "64px 28px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: 32 }}>
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 34, fontWeight: 700, color: "var(--t1)", letterSpacing: "-0.02em", marginBottom: 6 }}>
              Featured Projects
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "var(--t2)" }}>
              Professional internships · production-like architectures · academic projects
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {CATEGORIES.map(c => {
              const isActive = c === active;
              return (
                <button key={c} onClick={() => setActive(c)} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  padding: "6px 14px", borderRadius: 5, fontSize: 11,
                  cursor: "pointer",
                  border: isActive ? "1px solid var(--blue)" : "1px solid var(--bd)",
                  color: isActive ? "#fff" : "var(--t2)",
                  background: isActive ? "var(--blue)" : "transparent",
                  letterSpacing: "0.04em", transition: "all 0.15s",
                }}>
                  {c}
                </button>
              );
            })}
          </motion.div>
        </div>

        <AnimatePresence mode="popLayout">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} onClick={() => setSelected(p)} />
            ))}
          </div>
        </AnimatePresence>
      </section>

      <ProjectModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
        description={selected ? `${selected.impact}\n\nWhat I built: ${selected.whatIBuilt}\n\nResult: ${selected.result}` : ""}
        tech={selected?.tech ?? []}
        image={selected?.image}
        github={selected?.github}
        demo={selected?.demo}
        caseStudySlug={selected?.caseStudySlug}
      />
    </>
  );
}