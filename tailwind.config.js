module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#FBEDE2",
        secondary:"#cce3ff",
        accent:"#1f1f1f",
        black: "#1f1f1f",
        vert: "#09CAA7",
        
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
