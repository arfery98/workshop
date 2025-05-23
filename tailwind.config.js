/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,vue,,html,md,mdx,svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screen: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1024px",
          '2xl': "1024px",
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}