"use client";

import { motion } from "framer-motion";

type Level = 1 | 2 | 3 | 4 | 5;
type Skill = { name: string; level: Level; years?: number };
type SkillGroup = { title: string; skills: Skill[] };

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Backend & APIs",
    skills: [
      { name: "Java",          level: 4, years: 3 },
      { name: "Spring Boot",   level: 4, years: 2 },
      { name: "REST APIs",     level: 4, years: 3 },
      { name: "Microservices", level: 3, years: 2 },
      { name: "OpenFeign",     level: 3, years: 1 },
      { name: ".NET / C#",     level: 3, years: 1 },
    ],
  },
  {
    title: "DevOps & Monitoring",
    skills: [
      { name: "Docker",          level: 4, years: 2 },
      { name: "Jenkins",         level: 3, years: 1 },
      { name: "GitHub Actions",  level: 3, years: 1 },
      { name: "Maven",           level: 3, years: 2 },
      { name: "Prometheus",      level: 3, years: 1 },
      { name: "Grafana",         level: 3, years: 1 },
      { name: "Nexus",           level: 3, years: 1 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular",      level: 4, years: 2 },
      { name: "TypeScript",   level: 4, years: 2 },
      { name: "HTML / CSS",   level: 4, years: 3 },
      { name: "Tailwind CSS", level: 3, years: 1 },
      { name: "Next.js",      level: 3, years: 1 },
    ],
  },
  {
    title: "Data & BI",
    skills: [
      { name: "Talend ETL",    level: 4, years: 2 },
      { name: "SQL",           level: 4, years: 3 },
      { name: "PostgreSQL",    level: 3, years: 1 },
      { name: "MySQL",         level: 3, years: 1 },
      { name: "Power BI",      level: 3, years: 1 },
      { name: "Data Quality",  level: 3, years: 1 },
    ],
  },
  {
    title: "Tools & Methods",
    skills: [
      { name: "Git",                level: 4, years: 3 },
      { name: "Jira",               level: 3, years: 2 },
      { name: "Scrum / Agile",      level: 3, years: 2 },
      { name: "Clean Architecture", level: 3, years: 1 },
      { name: "DDD Basics",         level: 2, years: 1 },
    ],
  },
];

const LEVEL_LABELS: Record<Level, string> = {
  1: "Beginner",
  2: "Basic",
  3: "Proficient",
  4: "Advanced",
  5: "Expert",
};

function SectionDivider({ label }: { label: string }) {
  return (
    <div
      style={{
        background: "var(--navy2)",
        borderTop: "1px solid var(--bd)",
        borderBottom: "1px solid var(--bd)",
        padding: "10px 28px",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div style={{ width: 3, height: 14, background: "var(--blue)", borderRadius: 2 }} />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 10,
          color: "var(--t3)",
          textTransform: "uppercase",
          letterSpacing: "0.10em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function SkillBar({ level }: { level: Level }) {
  const pct = (level / 5) * 100;
  return (
    <div
      style={{
        flex: 1,
        height: 3,
        background: "rgba(255,255,255,0.06)",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          height: "100%",
          background: "var(--blue-l)",
          borderRadius: 2,
        }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <SectionDivider label="Technical Skills" />

      <section
        id="skills"
        style={{
          background: "var(--navy)",
          padding: "64px 28px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: 36 }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 34,
              fontWeight: 700,
              color: "var(--t1)",
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            Technical Skills
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "var(--t2)",
              maxWidth: 540,
              lineHeight: 1.7,
            }}
          >
            Focused on backend engineering (Java/Spring), scalable architectures, and DevOps
            practices — plus strong full-stack delivery with Angular.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 16,
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.06, duration: 0.4 }}
              style={{
                background: "var(--navy2)",
                border: "1px solid var(--bd)",
                borderRadius: 12,
                padding: 20,
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "var(--t1)",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                  }}
                >
                  {group.title}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10,
                    color: "var(--blue-l)",
                    background: "var(--blue-dim)",
                    border: "1px solid var(--blue-bd)",
                    padding: "2px 9px",
                    borderRadius: 10,
                  }}
                >
                  {group.skills.length}
                </span>
              </div>

              {/* Skill rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {group.skills.map(skill => (
                  <div
                    key={skill.name}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        color: "var(--t1)",
                        minWidth: 110,
                        letterSpacing: "0.01em",
                      }}
                    >
                      {skill.name}
                    </span>

                    <SkillBar level={skill.level} />

                    {typeof skill.years === "number" && (
                      <span
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 10,
                          color: "var(--t3)",
                          minWidth: 24,
                          textAlign: "right",
                        }}
                      >
                        {skill.years}y
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
