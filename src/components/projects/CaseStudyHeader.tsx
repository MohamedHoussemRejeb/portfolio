"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyHeader({ c }: { c: CaseStudy }) {
  return (
    <div className="bg-white/80 dark:bg-zinc-950/70 backdrop-blur border border-gray-200 dark:border-zinc-800 rounded-2xl p-8 shadow">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-xs inline-flex px-3 py-1 rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900">
          {c.badge}
        </div>

        <Link
          href="/#projects"
          className="text-sm px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          ← Back
        </Link>
      </div>

      <h1 className="mt-4 text-4xl font-bold">{c.title}</h1>
      <p className="mt-3 text-gray-700 dark:text-zinc-300 max-w-4xl">{c.subtitle}</p>

      <div className="mt-4 text-sm text-gray-600 dark:text-zinc-400">
        {c.period} • {c.role}
      </div>

      {/* Links */}
      <div className="mt-6 flex flex-wrap gap-3">
        {c.links?.github && (
          <a
            href={c.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            GitHub
          </a>
        )}
        {c.links?.demo && (
          <a
            href={c.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Live Demo
          </a>
        )}
        {c.links?.video && (
          <a
            href={c.links.video}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Demo Video
          </a>
        )}
      </div>

      {/* KPIs */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {c.kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-4"
          >
            <div className="text-xs text-gray-500 dark:text-zinc-400">{k.label}</div>
            <div className="mt-1 font-semibold">{k.value}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
