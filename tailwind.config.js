/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#22C55E",
        accent: "#F59E0B",
        background: "#0F172A",
        surface: "#1E293B",
        text: "#E2E8F0",
        error: "#EF4444",
        muted: "#94A3B8",
        border: "#334155",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
