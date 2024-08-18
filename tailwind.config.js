/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Switzer', 'sans-serif'], // Keep Switzer as the default sans-serif font
        'clash-grotesk': ['Clash Grotesk', 'sans-serif'], // Use the new font family
      },
    },
  },
  plugins: [],
}
