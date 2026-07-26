import type { Config } from "tailwindcss";

const withOpacity = (varName: string) => `rgb(var(${varName}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: withOpacity("--bg"),
        surface: withOpacity("--surface"),
        fg: withOpacity("--fg"),
        "fg-soft": withOpacity("--fg-soft"),
        "fg-muted": withOpacity("--fg-muted"),
        line: withOpacity("--line"),
        "line-strong": withOpacity("--line-strong"),
        army: withOpacity("--army"),
        "army-soft": withOpacity("--army-soft"),
        amber: withOpacity("--amber"),
        "amber-soft": withOpacity("--amber-soft"),
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1040px",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "float-a": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(28px, -22px) scale(1.06)" },
        },
        "float-b": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-22px, 20px) scale(1.08)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "float-a": "float-a 9s ease-in-out infinite",
        "float-b": "float-b 11s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
