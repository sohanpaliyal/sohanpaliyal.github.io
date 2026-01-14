import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
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
                "hero-pattern": "url('/herobg.png')",
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
            },
        },
    },
    plugins: [typography],
};
