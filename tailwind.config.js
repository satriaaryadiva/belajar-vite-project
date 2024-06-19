/* eslint-disable no-undef */
/** @type {import('tailwindcss', ).Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Pixelify Sans"],
        kanit: ["Kanit"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
}
