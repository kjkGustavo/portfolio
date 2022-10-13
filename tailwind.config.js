/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
        }
      },
      colors: {
        background: {
          primary: "#00031f",
        },
        tech: {
          docker: "#003F8C",
          reactjs: "#61DAFB",
          git: "#191717",
          javascript: "#F7E018"
        },
        socials: {
          github: "#191717",
          linkedin: "#0A66C2",
          twitter: "#1da1f2",
        },
        description: "#8193B2",
        subdescription: "#CBCBCB",
        border: {
          primary:"#30363D", 
          hover: "#40474F" 
        },
        bluehover: "#011276",
        card: {
          primary: "#1C1C1C",
          hover: "#202020"
        }
      },
      fontFamily: {
        "body": ["'Ubuntu'", "sans-serif"],
      }
    },
  },
  plugins: [],
}