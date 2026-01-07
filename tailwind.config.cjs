/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--bg-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--glass-bg)",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "var(--text-primary)",
        "vs-primary": "var(--text-primary)",
        "vs-purple": "#430B8A",
        "vs-blue": "#0985DF",
        "vs-glow": "#7AD7FF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
