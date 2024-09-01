const { transform } = require("next/dist/build/swc");
const { Rowdies } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
        blink: "blink 0.5s infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        blink: {
          "0%, 100%": { color: "yellow" },
          "50%": { color: "red" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shop-background": "url('/buycard-bg.jpg')",
      },
      colors: {
        "blog-color-1": "#F2E1AE",
        "blog-color-2": "#F4E3C8",
        "blog-color-3": "#F2B441",
        "blog-color-4": "#F29D7E",
        "blog-color-5": "#D92B2B",
        "logo-color-1": "#5BA683",
      },
      fontFamily: {
        Matemasie: ["Matemasie", "sans-serif"],
        Rowdies: ["Rowdies", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
