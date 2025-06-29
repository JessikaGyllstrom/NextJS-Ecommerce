/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        sage: "var(--color-sage)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto", "sans-serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
        PlayfairDisplay: ["Playfair Display", "serif"],
      },
    },
    corePlugins: {
      preflight: false, // Disable Tailwind's base styles
    },
  },
  safelist: ["bg-sage", "text-sage"],
  plugins: [],
};
