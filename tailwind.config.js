/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-magic': "radial-gradient(circle at center center, transparent 0%, rgb(33,33,33) 99%), repeating-linear-gradient(0deg, rgba(163, 163, 163,0.2) 0px, rgba(163, 163, 163,0.2) 1px, transparent 1px, transparent 6px), repeating-linear-gradient(90deg, rgba(163, 163, 163,0.2) 0px, rgba(163, 163, 163,0.2) 1px, transparent 1px, transparent 6px), linear-gradient(90deg, rgb(33,33,33), rgb(33,33,33))",
      },
    },
  },
  plugins: [],
}