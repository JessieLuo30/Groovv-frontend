import('tailwindcss').Config

module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./my-project/src/img/landingBG.jpg",
      },
    },
  },
  plugins: [],
}
