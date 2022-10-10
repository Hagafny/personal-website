/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#5651e5",
          light: "#709dff",
        },
        text: "#1f2937",
        bg: "#ecf0f3",
      },
      keyframes: {
        wave: {
          "0%, 60%, 100%": { transform: "rotate( 0.0deg)" },
          "10%, 30%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
        },
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "none",
          },
        },
        fadeRight: {
          "0%": { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
          "50%, 100%": {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
        },
        headings: {
          "0%, 50%": {
            transform: "translateY(50%) scale(1.5)",
          },
          "100%": {
            transform: "none",
          },
        },
        subtitle: {
          "0%, 50%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        wave: "wave 2.5s infinite",
        slideIn: "slideIn 0.8s",
        fadeRight: "fadeRight 2.7s cubic-bezier(0.74, 0, 0.9, 1) both",
        headings: "headings 5s both",
        subtitle: "subtitle 5s both",
      },
    },
    plugins: [require("tailwindcss-animate")],
  },
};
