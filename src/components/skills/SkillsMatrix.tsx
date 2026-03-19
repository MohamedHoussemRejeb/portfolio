"use client";

import FadeIn from "@/components/motion/FadeIn";
import { motion } from "framer-motion";
import SkillsRadar from "@/components/skills/SkillsRadar";

type Level = 1 | 2 | 3 | 4 | 5;

type Skill = {
  name: string;
  level: Level;
  years?: number;
};

type Group = {
  title: string;
  skills: Skill[];
};

const groups: Group[] = [
  {
    title: "Backend & APIs",
    skills: [
      { name: "Java", level: 4, years: 3 },
      { name: "Spring Boot", level: 4, years: 2 },
      { name: "REST APIs", level: 4, years: 3 },
      { name: "Microservices", level: 3, years: 2 },
      { name: "OpenFeign", level: 3, years: 1 },
      { name: ".NET", level: 3, years: 1 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Angular", level: 4, years: 2 },
      { name: "TypeScript", level: 4, years: 2 },
      { name: "Tailwind CSS", level: 3, years: 1 },
      { name: "Next.js", level: 3, years: 1 },
    ],
  },
  {
    title: "DevOps & Monitoring",
    skills: [
      { name: "Docker", level: 4, years: 2 },
      { name: "Jenkins", level: 3, years: 1 },
      { name: "GitHub Actions", level: 3, years: 1 },
      { name: "Prometheus", level: 3, years: 1 },
      { name: "Grafana", level: 3, years: 1 },
      { name: "Nexus", level: 3, years: 1 },
    ],
  },
  {
    title: "Data & BI",
    skills: [
      { name: "Talend ETL", level: 4, years: 2 },
      { name: "SQL", level: 4, years: 3 },
      { name: "PostgreSQL", level: 3, years: 1 },
      { name: "Power BI", level: 3, years: 1 },
      { name: "Data Quality", level: 3, years: 1 },
    ],
  },
  {
    title: "Tools & Methods",
    skills: [
      { name: "Git", level: 4, years: 3 },
      { name: "Jira", level: 3, years: 2 },
      { name: "Scrum", level: 3, years: 2 },
      { name: "Clean Architecture", level: 3, years: 1 },
      { name: "DDD Basics", level: 2, years: 1 },
    ],
  },
];

function LevelBar({ level }: { level: Level }) {
  const pct = (level / 5) * 100;
  return (
    <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-zinc-800 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full bg-blue-600 dark:bg-blue-400"
      />
    </div>
  );
}

export default function SkillsMatrix() {
  return (
    <div>
      <FadeIn>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Skills Matrix</h1>
          <p className="text-gray-700 dark:text-zinc-300 max-w-3xl">
            A structured view of my core skills with levels and experience. This page is designed to be recruiter-friendly:
            quick scan, clear strengths, and clean organization.
          </p>

          <div className="flex flex-wrap gap-2">
            <a
              href="/#skills"
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              ← Back to Home
            </a>
            <a
              href="/cv"
              className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              View CV
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Top: Radar + summary */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FadeIn>
          <div className="bg-white/80 dark:bg-zinc-950/70 backdrop-blur border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold">Strength Overview</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-zinc-400">
              High-level snapshot across key domains.
            </p>
            <div className="mt-6">
              <SkillsRadar
                axes={[
                  { label: "Backend", value: 4 },
                  { label: "Frontend", value: 3.5 },
                  { label: "DevOps", value: 3.5 },
                  { label: "Data", value: 3.5 },
                  { label: "Architecture", value: 3 },
                ]}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="bg-white/80 dark:bg-zinc-950/70 backdrop-blur border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold">What recruiters care about</h2>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-zinc-300">
              <li>• Strong Java/Spring Boot backend foundation</li>
              <li>• Microservices + observability (tracing/monitoring)</li>
              <li>• CI/CD automation + Dockerized workflows</li>
              <li>• Data engineering exposure (Talend, DQ, BI)</li>
            </ul>
          </div>
        </FadeIn>
      </div>

      {/* Matrix */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {groups.map((g, idx) => (
          <FadeIn key={g.title} delay={idx * 0.06}>
            <div className="bg-white/80 dark:bg-zinc-950/70 backdrop-blur border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 shadow hover:shadow-lg transition">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{g.title}</h3>
                <span className="text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
                  {g.skills.length} skills
                </span>
              </div>

              <div className="mt-5 space-y-4">
                {g.skills.map((s) => (
                  <div key={s.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-medium">{s.name}</div>
                      <div className="text-xs text-gray-500 dark:text-zinc-400">
                        Level {s.level}/5{typeof s.years === "number" ? ` • ${s.years}y` : ""}
                      </div>
                    </div>
                    <LevelBar level={s.level} />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
