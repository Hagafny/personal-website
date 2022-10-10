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
      },
      animation: {
        wave: "wave 2.5s infinite",
        slideIn: "slideIn 0.8s",
      },
    },
    plugins: [require("tailwindcss-animate")],
  },
};
