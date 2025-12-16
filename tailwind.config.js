/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        apple: {
          base: "var(--bg-base)",
          surface: "var(--bg-surface)",
          "surface-highlight": "var(--bg-surface-highlight)",
          border: "var(--border-color)",
          text: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            muted: "var(--text-muted)",
          },
        },
      },
    },
  },
  plugins: [],
};
