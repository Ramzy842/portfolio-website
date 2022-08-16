/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      dropShadow: {
        "marvomics": "0 0 30px 10px rgba(207, 12, 12, 0.29)",
        syfp: "0px 0px 30px 10px rgba(207, 12, 12, 0.29)",
        tebsi: "0px 0px 30px 10px rgba(255, 255, 255, 1)",
      },
      boxShadow:{
        'dropdown': "4px 2px 1px #2D9CDB"
      },
      colors: {
        primary: "#D4F1F4",
        "filter-dropdown": "#202E30",
        "view-code": "#00B0FE",
        "prev-next": "#294450",
      },
      backgroundImage: {
        main: "linear-gradient(180deg, #09161C 0%, #000000 100%);",
        title: "linear-gradient(93.17deg, #0078FE 26.37%, #00FFD1 94.62%);",
        footer: "linear-gradient(90.05deg, #007CFE 14.21%, #9A18FF 86.56%)",
        github: "linear-gradient(124.56deg, #00C2FF 0%, #0066FF 100%)",
      },
    },
  },
  plugins: [],
};
