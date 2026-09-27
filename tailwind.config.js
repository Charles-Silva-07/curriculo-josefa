/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        cream: "#FFFDF9",
        ink: "#272727",
        muted: "#666666",
        rose: { DEFAULT: "#B86F6F", deep: "#9C5A5A", soft: "#F5E9E6" },
        beige: { DEFAULT: "#EAD8C8", light: "#F6EEE6" },
        gold: { DEFAULT: "#C9A66B", deep: "#A8864C" },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(39, 39, 39, 0.12)",
        lift: "0 24px 60px -20px rgba(39, 39, 39, 0.22)",
        photo: "0 40px 80px -30px rgba(90, 50, 40, 0.45)",
      },
    },
  },
  plugins: [],
};
