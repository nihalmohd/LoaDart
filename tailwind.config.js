// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nexa: ['"Nexa Bold"', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
