/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "#ced9e3",
        deepskyblue: {
          "100": "#3ebcf7",
          "200": "#1cb0f6",
        },
        darkslategray: {
          "100": "#2e4051",
          "200": "rgba(46, 64, 81, 0.6)",
        },
        gray: "#371b34",
        white: "#fff",
        black: "#000",
        gainsboro: "#dedede",
        whitesmoke: "#f1f4f7",
      },
      fontFamily: {
        vazirmatn: "Vazirmatn",
        "text-xl-regular": "Inter",
        inherit: "inherit",
      },
      borderRadius: {
        "8xs": "5px",
        "16xl": "35px",
        "56xl": "75px",
        "46xl": "65px",
      },
    },
    fontSize: {
      "3xl": "22px",
      "17xl": "36px",
      xl: "20px",
      lg: "18px",
      "5xl": "24px",
      "31xl": "50px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
