/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // very important
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5044E5', // 💜 your color
      },
    },
  },
  plugins: [],
}
