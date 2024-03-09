module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        lime: { 400: "#c6df5d", A100: "#e5ff76", A100_e5: "#e5ff76e5" },
        gray: { 50: "#fff7f7", 200: "#f0f0f0", 900: "#1e1e1e", "900_01": "#242424" },
        light_green: { 800: "#5b6436", "800_d8": "#5b6436d8" },
        white: { A700_01: "#ffffff", A700: "#fffdfd" },
        black: { 900: "#100000", "900_01": "#000000" },
      },
      boxShadow: {
        xs: "0px 5px  56px 0px #6472323d",
        sm: "0px 4px  46px 0px #0000003f",
        md: "5px 8px  4px 0px #0000003f",
      },
      fontFamily: { abhayalibreextrabold: "Abhaya Libre ExtraBold", inter: "Inter" },
      backgroundImage: { gradient: "linear-gradient(167deg, #ffffff9b,#00000030)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
