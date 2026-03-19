"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["about", "projects", "skills", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(11,24,41,0.97)" : "var(--navy)",
      borderBottom: "1px solid var(--bd)",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "background 0.3s",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 28px",
        height: 58, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Brand */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ background: "none", border: "none", cursor: "pointer",
            fontFamily: "'DM Mono', monospace", fontSize: 14, color: "var(--t1)" }}>
          <span style={{ color: "var(--blue-l)" }}>&lt;</span>MH.Rejeb{" "}
          <span style={{ color: "var(--blue-l)" }}>/&gt;</span>
        </button>

        {/* Desktop nav — always visible on wide screens */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <button key={href} onClick={() => handleNav(href)}
                  style={{
                    background: isActive ? "var(--blue-dim)" : "transparent",
                    border: "1px solid var(--bd2)",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 11, fontWeight: 500,
                    color: isActive ? "var(--blue-l)" : "var(--t1)",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    padding: "7px 16px",
                    borderRadius: 7,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--blue-dim)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--blue-bd)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--blue-l)";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--bd2)";
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--t1)";
                    }
                  }}
                >
                  {label}
                </button>
              );
            })}

            <a href="/Mohamed-Houssem-Rejeb_CV.pdf" target="_blank" rel="noopener noreferrer"
              style={{
                marginLeft: 8, background: "var(--blue)", color: "#fff",
                border: "none", padding: "7px 17px", borderRadius: 6,
                fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 500,
                cursor: "pointer", letterSpacing: "0.04em", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 6,
              }}>
              ↓ CV
            </a>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button onClick={() => setOpen(v => !v)}
            style={{
              background: "transparent", border: "1px solid var(--bd2)",
              borderRadius: 6, color: "var(--t1)", padding: "6px 10px",
              cursor: "pointer", fontSize: 14,
            }}>
            {open ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && open && (
        <div style={{
          borderTop: "1px solid var(--bd)", padding: "16px 28px 20px",
          background: "var(--navy2)",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_LINKS.map(({ label, href }) => (
              <button key={href} onClick={() => handleNav(href)}
                style={{
                  background: "transparent", border: "none", cursor: "pointer",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "var(--t2)",
                  textAlign: "left", padding: "10px 0",
                  borderBottom: "1px solid var(--bd)", letterSpacing: "0.04em",
                }}>
                {label}
              </button>
            ))}
            <a href="/Mohamed-Houssem-Rejeb_CV.pdf"
              style={{
                marginTop: 12, background: "var(--blue)", color: "#fff",
                padding: "10px 18px", borderRadius: 7,
                fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500,
                textDecoration: "none", textAlign: "center", display: "block",
              }}>
              ↓ Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}