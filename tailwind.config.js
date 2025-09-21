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
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // skin: {
        //   bg: "var(--bg-color)",
        //   text: "var(--text-color)",
        //   miniBG: "var(--mini-bg-color)",
        // },
      },
    },
  },
  plugins: [],
}


{/* <label for="textColorPicker">Choose text color:</label>
<input type="color" id="textColorPicker" value="#000000" />

<p class="text-skin-text mt-4">This text changes color!</p>

<script>
  const colorPicker = document.getElementById('textColorPicker');

  colorPicker.addEventListener('input', (event) => {
    document.documentElement.style.setProperty('--text-color', event.target.value);
  });
</script> */}
