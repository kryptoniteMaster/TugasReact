// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biru: {
          100: "#78B7D0"
        },
        abu: {
          100: "#424242"
        }
      }
    },
  },
  plugins: [],
};