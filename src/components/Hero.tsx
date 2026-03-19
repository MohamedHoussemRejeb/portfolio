"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const STATS = [
  { value: "5+", label: "Internships" },
  { value: "10+", label: "Projects" },
  { value: "3y", label: "Java / Spring" },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: "var(--navy)",
        padding: "72px 28px 64px",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      }} />

      {/* Blue glow top-right */}
      <div style={{
        position: "absolute", top: -80, right: -80, zIndex: 0,
        width: 420, height: 420, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Soft glow bottom-left */}
      <div style={{
        position: "absolute", bottom: -60, left: -60, zIndex: 0,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Dots top-left */}
      <svg style={{ position: "absolute", top: 24, left: 24, zIndex: 0, opacity: 0.18 }}
        width="80" height="80" viewBox="0 0 80 80">
        {[0,1,2,3].map(row =>
          [0,1,2,3].map(col => (
            <circle key={`${row}-${col}`}
              cx={col * 20 + 10} cy={row * 20 + 10} r="1.5"
              fill="var(--blue-l)" />
          ))
        )}
      </svg>

      {/* Dots bottom-right */}
      <svg style={{ position: "absolute", bottom: 24, right: 24, zIndex: 0, opacity: 0.12 }}
        width="100" height="100" viewBox="0 0 100 100">
        {[0,1,2,3,4].map(row =>
          [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`}
              cx={col * 20 + 10} cy={row * 20 + 10} r="1.5"
              fill="var(--blue-l)" />
          ))
        )}
      </svg>

      {/* Bottom accent line */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 0,
        height: 1,
        background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)",
      }} />

      {/* ── CONTENT ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 340px",
          gap: 52,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--blue-dim)", border: "1px solid var(--blue-bd)",
              borderRadius: 20, padding: "5px 15px",
              fontFamily: "'DM Sans', sans-serif", fontSize: 11,
              color: "var(--blue-l)", letterSpacing: "0.05em",
              textTransform: "uppercase", marginBottom: 24,
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "#10B981", flexShrink: 0, display: "inline-block",
              animation: "pulse-dot 2.4s ease-in-out infinite",
            }} />
            Open to opportunities · Based in Germany
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 34, fontWeight: 300,
              color: "var(--t2)", letterSpacing: "-0.01em",
              lineHeight: 1, marginBottom: 2,
            }}>
              Mohamed Houssem
            </div>
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 52, fontWeight: 700,
              color: "var(--t1)", letterSpacing: "-0.03em",
              lineHeight: 1.05, marginBottom: 14,
            }}>
              Rejeb
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13, color: "var(--blue-l)",
              fontWeight: 500, letterSpacing: "0.06em",
              textTransform: "uppercase", marginBottom: 16,
            }}
          >
            Software Engineer — Backend &amp; Systems
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14, color: "var(--t2)",
              lineHeight: 1.8, maxWidth: 480, marginBottom: 10,
            }}
          >
            Building scalable systems, clean APIs, and data-driven architectures.
            Focused on delivering production-quality software in collaborative,
            Agile environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12, color: "var(--blue-l)",
              opacity: 0.65, letterSpacing: "0.02em", marginBottom: 32,
            }}
          >
            Java · Spring Boot · Angular · Microservices · DevOps
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "var(--blue)", color: "#fff", border: "none",
                padding: "11px 22px", borderRadius: 7,
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                fontWeight: 500, cursor: "pointer", letterSpacing: "0.03em",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "#1d4ed8")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--blue)")}
            >
              → View Projects
            </button>

            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "transparent", color: "var(--t1)",
                border: "1px solid var(--bd2)", padding: "11px 22px",
                borderRadius: 7, fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, cursor: "pointer", letterSpacing: "0.03em",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--blue-bd)";
                (e.currentTarget as HTMLButtonElement).style.background = "var(--blue-dim)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--bd2)";
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              About me
            </button>

            
            <a
              href="https://www.linkedin.com/in/mohamedhoussem-rejeb/"
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "transparent", color: "var(--t1)",
                border: "1px solid var(--bd2)", padding: "11px 22px",
                borderRadius: 7, fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, cursor: "pointer", letterSpacing: "0.03em",
                textDecoration: "none", display: "inline-flex",
                alignItems: "center", gap: 6, transition: "border-color 0.2s",
              }}
            >
              ↗ LinkedIn
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: 14 }}
        >
          {/* Profile card */}
          <div style={{
            background: "var(--navy3)", border: "1px solid var(--bd)",
            borderRadius: 14, overflow: "hidden",
          }}>
            <div style={{
              width: "100%", height: 170, background: "var(--navy4)",
              borderBottom: "1px solid var(--bd)",
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative",
            }}>
              {

                <Image
                  src="/photo.jpg"
                  alt="Mohamed Houssem Rejeb"
                  width={88} height={88}
                  style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid var(--blue-bd)" }}
                />
              }
              <div style={{
                width: 88, height: 88, borderRadius: "50%",
                background: "var(--blue-dim)", border: "2px solid var(--blue-bd)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 26, fontWeight: 600, color: "var(--blue-l)",
              }}>
                MR
              </div>
            </div>

            <div style={{ padding: "14px 18px" }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, fontWeight: 500,
                color: "var(--t1)", marginBottom: 5,
              }}>
                Mohamed Houssem Rejeb
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11, color: "var(--t2)",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "#10B981", flexShrink: 0, display: "inline-block",
                }} />
                Hesse, Germany · Open to relocation
              </div>
            </div>
          </div>

          {/* Stats */}
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
            gap: "1px", background: "var(--bd)",
            border: "1px solid var(--bd)", borderRadius: 12, overflow: "hidden",
          }}>
            {STATS.map(s => (
              <div key={s.label} style={{
                background: "var(--navy2)", padding: "16px 10px", textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 22, fontWeight: 700,
                  color: "var(--t1)", letterSpacing: "-0.02em",
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10, color: "var(--t3)",
                  textTransform: "uppercase", letterSpacing: "0.07em", marginTop: 4,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Availability */}
          <div style={{
            background: "var(--navy3)", border: "1px solid var(--blue-bd)",
            borderRadius: 10, padding: "13px 16px",
            display: "flex", alignItems: "flex-start", gap: 10,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#10B981", flexShrink: 0, marginTop: 3,
              display: "inline-block",
              animation: "pulse-dot 2.4s ease-in-out infinite",
            }} />
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 12, color: "var(--t2)", lineHeight: 1.5,
            }}>
              <span style={{ color: "#10B981", fontWeight: 500 }}>Available now</span>
              {" "}· Open to junior / mid software engineering roles in{" "}
              <strong style={{ color: "var(--t1)", fontWeight: 500 }}>
                Germany &amp; Luxembourg
              </strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}