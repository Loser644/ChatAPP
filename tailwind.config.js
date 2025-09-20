/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// ChatApp/tailwind.config.js
export default {
  darkMode: "class", // <-- important
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,jsx,ts,tsx}",
    "./packages/**/*.{js,jsx,ts,tsx}", // if you have shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


