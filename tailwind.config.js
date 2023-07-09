/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'brick': {
        50: '#DEC8CB',
        100: '#D1A1A8',
        200: '#C4838B',
        300: '#B56C76',
        400: '#A3535E',
        500: '#8E3B46',
        600: '#7C2B36',
        700: '#651923',
        800: '#521019',
        900: '#3A0A10',
        950: '#29060B',
      },
      'aqua': {
        50: '#DBEDF5',
        100: '#AACADA',
        200: '#82A8BB',
        300: '#628A9D',
        400: '#46697A',
        500: '#2D4C5C',
        600: '#193A4A',
        700: '#102D3C',
        800: '#0A2430',
        900: '#051822',
        950: '#04121A',
      },

    },
  },
  plugins: [],
}

