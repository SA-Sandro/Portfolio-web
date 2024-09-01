/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens:{
        "xs": "340px",
      },
      backgroundImage: {
        "light-gradient":
          "linear-gradient(to right, #adeb76fc 45%, #222222 100%)",
        "dark-gradient":
          "linear-gradient(to right, #cfb532fc 45%, #222222 100%)",
      },
    },
  },
  plugins: [],
};
