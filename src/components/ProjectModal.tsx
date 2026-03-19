"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import MiniArchitecturePreview from "@/components/projects/MiniArchitecturePreview";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
  caseStudySlug?: string;
};

export default function ProjectModal({
  open, onClose, title, description, tech, image, github, demo, caseStudySlug,
}: Props) {

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 999,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "16px",
        }}>
          {/* Overlay */}
          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute", inset: 0,
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "relative",
              width: "100%", maxWidth: 860,
              maxHeight: "88vh",
              background: "var(--navy2)",
              border: "1px solid var(--bd2)",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Sticky header */}
            <div style={{
              padding: "20px 24px",
              borderBottom: "1px solid var(--bd)",
              background: "var(--navy2)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 16,
              flexShrink: 0,
            }}>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 22, fontWeight: 700,
                  color: "var(--t1)", lineHeight: 1.3,
                  marginBottom: 10,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13, color: "var(--t2)",
                  lineHeight: 1.7, whiteSpace: "pre-line",
                }}>
                  {description}
                </p>
              </div>
              <button onClick={onClose} style={{
                flexShrink: 0,
                background: "transparent",
                border: "1px solid var(--bd2)",
                borderRadius: 7, color: "var(--t2)",
                padding: "6px 12px", cursor: "pointer",
                fontSize: 14, fontFamily: "'DM Sans', sans-serif",
              }}>
                ✕
              </button>
            </div>

            {/* Scrollable body */}
            <div style={{ overflowY: "auto", flex: 1, padding: "20px 24px" }}>

              {/* Image */}
              {image && (
                <div style={{
                  borderRadius: 10, overflow: "hidden",
                  border: "1px solid var(--bd)",
                  marginBottom: 20,
                  background: "var(--navy3)",
                }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image} alt={title}
                    style={{ width: "100%", maxHeight: "45vh", objectFit: "contain", display: "block" }}
                  />
                </div>
              )}

              {/* Tech chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                {tech.map(t => (
                  <span key={t} style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11, padding: "4px 10px",
                    borderRadius: 5,
                    background: "var(--blue-dim)",
                    border: "1px solid var(--blue-bd)",
                    color: "var(--blue-l)",
                    letterSpacing: "0.03em",
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Architecture preview */}
              {caseStudySlug && (
                <div style={{ marginBottom: 20 }}>
                  <MiniArchitecturePreview slug={caseStudySlug} />
                </div>
              )}

              {/* Actions */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, paddingTop: 10, borderTop: "1px solid var(--bd)" }}>
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" style={{
                    background: "var(--blue)", color: "#fff",
                    padding: "10px 20px", borderRadius: 7,
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    fontWeight: 500, textDecoration: "none",
                    letterSpacing: "0.03em",
                  }}>
                    ↗ GitHub
                  </a>
                )}
                {demo && (
                  <a href={demo} target="_blank" rel="noopener noreferrer" style={{
                    background: "transparent", color: "var(--t1)",
                    border: "1px solid var(--bd2)",
                    padding: "10px 20px", borderRadius: 7,
                    fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                    textDecoration: "none", letterSpacing: "0.03em",
                  }}>
                    Live Demo
                  </a>
                )}
                {caseStudySlug && (
                  <Link href={`/projects/${caseStudySlug}`}
                    onClick={onClose}
                    style={{
                      background: "transparent", color: "var(--t1)",
                      border: "1px solid var(--bd2)",
                      padding: "10px 20px", borderRadius: 7,
                      fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                      textDecoration: "none", letterSpacing: "0.03em",
                      display: "inline-flex", alignItems: "center", gap: 6,
                    }}>
                    Read case study →
                  </Link>
                )}
                <button onClick={onClose} style={{
                  background: "transparent", color: "var(--t2)",
                  border: "1px solid var(--bd)",
                  padding: "10px 20px", borderRadius: 7,
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                  cursor: "pointer", letterSpacing: "0.03em",
                }}>
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}