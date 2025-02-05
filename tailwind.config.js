/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinForkKnife: {
          "0%": { transform: "rotate(0deg)", opacity:"1"},
          "50%": { content: "url('/fork_knife.svg')", transform: "rotate(180deg)", opacity:"0.5"},
          "100%": { content: "url('/fork_knife.svg')", transform: "rotate(360deg)", opacity:"0"},
        },
      },
      animation: {
        spinForkKnife: "spinForkKnife 2s linear infinite",
      },
      colors: {
        orangeAccent: "#FFA500", // Canlı Turuncu
      },
    },
  },
  plugins: [],
};
