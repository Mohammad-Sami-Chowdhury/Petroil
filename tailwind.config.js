/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1140px",
      },
      backgroundImage: {
        banner: "url('/src/assets/banner.png')",
        bg1: "url('/src/assets/bg1.png')",
        bg2: "url('/src/assets/bg2.png')",
        bg3: "url('/src/assets/bg3.png')",
        bg4: "url('/src/assets/bg4.png')",
        blog1: "url('/src/assets/blog1.png')",
        blog2: "url('/src/assets/blog2.png')",
        blog3: "url('/src/assets/blog3.png')",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
