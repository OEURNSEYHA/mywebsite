/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'sans-serif'], // For headings
        body: ['Roboto', 'sans-serif'],    // For body text
      },
    },
  },
  plugins: [],
}

