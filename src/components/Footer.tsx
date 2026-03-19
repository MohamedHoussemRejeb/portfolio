export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy2)",
        borderTop: "1px solid var(--bd)",
        padding: "18px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          color: "var(--t3)",
          letterSpacing: "0.04em",
        }}
      >
        © {new Date().getFullYear()} Mohamed Houssem Rejeb
      </span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          color: "var(--t3)",
        }}
      >
        Built with{" "}
        <span style={{ color: "var(--blue-l)" }}>Next.js</span>
        {" · "}
        <span style={{ color: "var(--blue-l)" }}>Tailwind CSS</span>
        {" · "}
        <span style={{ color: "var(--blue-l)" }}>Framer Motion</span>
      </span>
    </footer>
  );
}
