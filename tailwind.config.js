/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: [
        "./components/**/*.{js,vue,ts}",
        "./src/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./*.vue",
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "dark-blue": "#392317",
                primary: "#1f141f",
                secondary: "#e05a00",
                "primary-dark": "#392317",
            },
            fontSize: {
                "10px": ["0.625rem", "1rem"],
                "11px": ["0.6875rem", "1rem"],
                "12px": ["0.75rem", "1rem"],
                "13px": ["0.8125rem", "1rem"],
                "14px": ["0.875rem", "1.25rem"],
                "16px": ["1rem", "1.5rem"],
                "18px": ["1.125rem", "1.75rem"],
                "20px": ["1.25rem", "1.75rem"],
                "22px": ["1.375rem", "2rem"],
                "24px": ["1.5rem", "2rem"],
                "26px": ["1.625rem", "2rem"],
                "30px": ["1.875rem", "2.5rem"],
                "32px": ["2rem", "2.5rem"],
                "36px": ["2.25rem", "2.5rem"],
                "40px": ["2.5rem", "2.5rem"],
                "48px": ["3rem", "1"],
                "50px": ["3.125rem", "1"],
                "52px": ["3.25rem", "1"],
                "58px": ["3.625rem", "1"],
                "70px": ["4.375rem", "1"],
            },
            screens: {
                sm: "576px",
            },
        },
    },
    plugins: [],
};
