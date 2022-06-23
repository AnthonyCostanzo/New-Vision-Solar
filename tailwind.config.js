/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        med: "1000px",
      },

      colors: {
        main: "#0acd82",
      },
      height: {
        half: "55%",
        hero: "70%",
      },
      animation: {
        fade: "fadeIn .5s ease-in",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { opacity: theme("opacity.5") },
          "100%": { backgroundColor: theme("opacity.100") },
        },
      }),
    },
  },
  plugins: [],
  // darkMode: "class",
};
