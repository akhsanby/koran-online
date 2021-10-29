const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
