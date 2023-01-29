/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '5xl': '1920px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
