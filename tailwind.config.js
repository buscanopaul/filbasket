/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fiba: ["Fiba", "sans-serif"],
        robotoMonoBold: ["RobotoMonoBold", "sans-serif"],
        robotoMono: ["RobotoMono"],
      },
      colors: {
        "primary-color": "#F2B80E",
        "secondary-color": "#0D1440",
      },
    },
  },
  plugins: [],
};
