import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#111318",
        muted: "#69707d",
        line: "#e5e7eb",
        accent: "#2563eb",
        green: "#54ad62",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.035), 0 5px 20px rgba(16, 24, 40, 0.025)",
      },
    },
  },
  plugins: [],
};

export default config;
