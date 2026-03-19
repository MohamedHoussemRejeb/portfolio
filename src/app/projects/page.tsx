import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

export default function ProjectsIndexPage() {
  return (
    <main className="px-6 py-20 max-w-6xl mx-auto">
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Case Studies</h1>
        <p className="mt-4 text-gray-700 dark:text-zinc-300">
          Deep dives into selected projects — architecture decisions, technical challenges,
          and real-world results.
        </p>
      </header>

      {/* Grid */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        {caseStudies.map((c) => (
          <Link
            key={c.slug}
            href={`/projects/${c.slug}`}
            className="group bg-white/80 dark:bg-zinc-950/70 backdrop-blur
                       border border-gray-200 dark:border-zinc-800
                       rounded-2xl overflow-hidden shadow
                       hover:shadow-2xl transition-all"
          >
            {/* ✅ Architecture preview (if exists) */}
            {c.architectureImage && (
              <div className="relative h-44 overflow-hidden border-b border-gray-200 dark:border-zinc-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.architectureImage}
                  alt={`${c.title} architecture diagram`}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {/* Badge */}
              <div className="inline-flex text-xs px-3 py-1 rounded-full
                              border border-gray-200 dark:border-zinc-800
                              bg-gray-50 dark:bg-zinc-900">
                {c.badge}
              </div>

              {/* Title */}
              <h2 className="mt-4 text-xl font-semibold">{c.title}</h2>

              {/* Subtitle */}
              <p className="mt-2 text-gray-700 dark:text-zinc-300">
                {c.subtitle}
              </p>

              {/* Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {c.stack.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full
                               border border-gray-200 dark:border-zinc-800
                               bg-white/60 dark:bg-zinc-900/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 text-sm font-medium text-blue-600 dark:text-blue-400">
                Read case study →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
