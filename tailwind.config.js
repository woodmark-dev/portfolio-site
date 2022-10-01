/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Titillium Web", "sans-serif"],
      mont: ["Montserrat Alternates", "sans-serif"],
    },
    backgroundImage: () => ({
      "logo-dark-mode": "url('../src/logo/logo-dark.png')",
      "logo-light-mode": "url('../src/logo/logo-light.png')",
    }),
    extend: {
      spacing: {
        75: "18.75rem",
        100: "25rem",
        120: "30rem",
        140: "35rem",
        145: "36.5rem",
        155: "38.75rem",
        170: "42.5rem",
        200: "50rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
