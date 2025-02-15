const flowbite = require("flowbite-react/tailwind")
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      xxl: "1536px",
      xxxl: "2000px",
    },
    fontFamily: {
      customFont: ["raleway", "ralewayBlack", "ralewayBold"],
      // Add more custom font families as needed
    },
    extend: {
      colors: {
        azulBooster: "#0E2378",
        azulClaroBooster: "#5AC6D3",
        azulClaritoBooster: "#DBF3F9",
        violetaBooster: "#9B00A7",
      },
    },
  },
  plugins: [flowbite.plugin()],
}
