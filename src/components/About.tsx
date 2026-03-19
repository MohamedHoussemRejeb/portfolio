"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TAGS = [
  "Clean Architecture",
  "Agile / Scrum",
  "Team collaboration",
  "Problem solver",
  "Continuous learner",
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--navy)",
        padding: "80px 28px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* ── LEFT: Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: "var(--navy3)",
            border: "1px solid var(--bd)",
            borderRadius: 16,
            overflow: "hidden",
            minHeight: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/*
            ADD YOUR PHOTO:
            1. Copy your photo to /public/photo.jpg
            2. Replace the placeholder div below with:

            <Image
              src="/photo.jpg"
              alt="Mohamed Houssem Rejeb"
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          */}
          <div style={{ textAlign: "center", padding: 40 }}>
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: "var(--blue-dim)",
                border: "3px solid var(--blue-bd)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 18px",
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 40,
                fontWeight: 700,
                color: "var(--blue-l)",
              }}
            >
              MR
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                color: "var(--t3)",
                letterSpacing: "0.06em",
              }}
            >
              
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--blue-l)",
              opacity: 0.5,
              marginBottom: 6,
              letterSpacing: "0.04em",
            }}
          >
            &lt;about&gt;
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 36,
              fontWeight: 700,
              color: "var(--t1)",
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Who I am
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: "var(--t2)",
              lineHeight: 1.85,
              marginBottom: 16,
            }}
          >
            Junior Software Engineer with a strong foundation in Java, Spring Boot,
            and Angular. Experienced in building scalable full-stack applications,
            microservices architectures, and data-driven systems.
          </p>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: "var(--t2)",
              lineHeight: 1.85,
              marginBottom: 16,
            }}
          >
            I have worked on real-world professional and academic projects involving
            REST APIs, backend business logic, CI/CD pipelines, DevOps automation,
            and data engineering with Talend ETL. I worked at companies including
            Talys Consulting, Ennakl Automobiles, the Central Bank of Tunisia, OMV,
            and Tunisie Telecom.
          </p>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: "var(--t2)",
              lineHeight: 1.85,
              marginBottom: 28,
            }}
          >
            I value clean, maintainable code, strong system design, and pragmatic
            problem-solving. Currently based in{" "}
            <span style={{ color: "var(--t1)", fontWeight: 500 }}>Germany</span> —
            open to opportunities in{" "}
            <span style={{ color: "var(--t1)", fontWeight: 500 }}>
              Germany &amp; Luxembourg
            </span>
            .
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {TAGS.map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 11,
                  padding: "5px 13px",
                  borderRadius: 5,
                  background: "var(--blue-dim)",
                  border: "1px solid var(--blue-bd)",
                  color: "var(--blue-l)",
                  letterSpacing: "0.03em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "var(--blue-l)",
              opacity: 0.5,
              marginTop: 20,
              letterSpacing: "0.04em",
            }}
          >
            &lt;/about&gt;
          </div>
        </motion.div>
      </div>
    </section>
  );
}
