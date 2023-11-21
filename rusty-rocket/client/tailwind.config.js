/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rust: "#D7907B",
        space: "#0A0A0A",
      },
      fontFamily: {
        audiowide: ["Audiowide", "sans-serif"],
      },
    },
  },
  plugins: [],
};
