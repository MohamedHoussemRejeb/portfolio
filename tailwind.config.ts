import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:  "#0B1829",
        navy2: "#102035",
        navy3: "#162B45",
        navy4: "#1C3456",
        "blue-accent": "#2563EB",
        "blue-light":  "#3B82F6",
      },
      fontFamily: {
        sans:  ["DM Sans", "system-ui", "sans-serif"],
        mono:  ["DM Mono", "Courier New", "monospace"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      gridTemplateColumns: {
        "hero": "1fr 340px",
      },
    },
  },
  plugins: [],
};

export default config;
