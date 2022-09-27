/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#5651e5",
          end: "#709dff",
        },
        text: "#1f2937",
        bg: "#ecf0f3",
      },
    },
  },
  plugins: [],
};
