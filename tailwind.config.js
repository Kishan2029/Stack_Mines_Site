/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navBg": "var(--grayNavbar)",
        "calBg": "var(--calBagCol)",
        "betButtonBg":"var(--BetButtonBagCol)", 
        "mineBagCol": "var(--mineBagCol)"
      },
    },
  },
  plugins: [],
}