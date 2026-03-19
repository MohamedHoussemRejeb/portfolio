"use client";

import { motion } from "framer-motion";

const CONTACT_ITEMS = [
  {
    type: "Email",
    label: "mohamedhoussem.rejeb@gmail.com",
    href: "mailto:mohamedhoussem.rejeb@gmail.com?subject=Opportunity%20-%20Software%20Engineer",
    icon: "@",
  },
  {
    type: "LinkedIn",
    label: "mohamedhoussem-rejeb",
    href: "https://www.linkedin.com/in/mohamedhoussem-rejeb/",
    icon: "in",
  },
  {
    type: "GitHub",
    label: "MohamedHoussemRejeb",
    href: "https://github.com/MohamedHoussemRejeb?tab=repositories",
    icon: "{}",
  },
];

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

export default function Contact() {
  return (
    <>
      <SectionDivider label="Contact" />

      <section
        id="contact"
        style={{
          background: "var(--navy)",
          padding: "64px 28px 80px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
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
            Let's connect
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: "var(--t2)",
              lineHeight: 1.7,
            }}
          >
            Looking for a junior software engineering opportunity — I respond quickly.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
            marginBottom: 24,
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {CONTACT_ITEMS.map((item, i) => (
            <motion.a
              key={item.type}
              href={item.href}
              target={item.type !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -2 }}
              style={{
                background: "var(--navy2)",
                border: "1px solid var(--bd)",
                borderRadius: 12,
                padding: 20,
                cursor: "pointer",
                textDecoration: "none",
                display: "block",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--blue-bd)")
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--bd)")
              }
            >
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 18,
                  color: "var(--blue-l)",
                  marginBottom: 10,
                  opacity: 0.7,
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  color: "var(--t3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 6,
                }}
              >
                {item.type}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--t1)",
                  wordBreak: "break-all",
                }}
              >
                {item.label}
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <a
            href="/Mohamed-Houssem-Rejeb_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--blue)",
              color: "#fff",
              padding: "11px 24px",
              borderRadius: 7,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.03em",
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              transition: "background 0.2s",
            }}
            onMouseEnter={e =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "#1d4ed8")
            }
            onMouseLeave={e =>
              ((e.currentTarget as HTMLAnchorElement).style.background = "var(--blue)")
            }
          >
            ↓ Download CV
          </a>

          <a
            href="mailto:mohamedhoussem.rejeb@esprit.tn?subject=Opportunity%20-%20Software%20Engineer"
            style={{
              background: "transparent",
              color: "var(--t1)",
              border: "1px solid var(--bd2)",
              padding: "11px 24px",
              borderRadius: 7,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              textDecoration: "none",
              letterSpacing: "0.03em",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--blue-bd)";
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--blue-dim)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--bd2)";
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            Send an email →
          </a>
        </motion.div>
      </section>
    </>
  );
}
