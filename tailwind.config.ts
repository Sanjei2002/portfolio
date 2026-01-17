import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        dracula: {
          bg: "#282a36",
          current: "#44475a",
          fg: "#f8f8f2",
          comment: "#6272a4",
          cyan: "#8be9fd",
          green: "#50fa7b",
          orange: "#ffb86c",
          pink: "#ff79c6",
          purple: "#bd93f9",
          red: "#ff5555",
          yellow: "#f1fa8c",
        },
        blueprint: {
          bg: "#f6f8fb",
          base: "#0f172a",
          line: "#38bdf8",
          accent: "#0078D4",
          grid: "#cbd5e1",
          fg: "#1f2937",
          muted: "#6b7280",
        },
      },
    },
  },
  plugins: [],
};

export default config;
