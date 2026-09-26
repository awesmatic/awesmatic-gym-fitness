/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light-mode neutrals: cool "concrete & chalk" base, not warm cream.
        "gray-20": "#EEF0EE",
        "gray-50": "#E1E4E1",
        "gray-100": "#C7CCC8",
        "gray-500": "#171A18",

        // Dark-mode surfaces
        "dark-50": "#14161A",
        "dark-100": "#1C1F23",
        "dark-200": "#2A2E33",
        "dark-text": "#EEF0EE",

        // Signal magenta — primary accent (links, highlights, active states)
        "primary-100": "#FFE1EC",
        "primary-300": "#FF8FB3",
        "primary-500": "#FF2D6B",

        // Brass gold — secondary accent (buttons, CTAs)
        "secondary-400": "#FFC24D",
        "secondary-500": "#FFB020",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF2D6B 0%, #FFB020 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        dmsans: ["Manrope", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        montserrat: ["Space Grotesk", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
