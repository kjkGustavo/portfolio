/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#00031f"
        },
        socials: {
          github: "#191717",
          linkedin: "#1da1f2",
          twitter: "#1da1f2",
        }
      },
      fontFamily: {
        'body': ['"Ubuntu"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}