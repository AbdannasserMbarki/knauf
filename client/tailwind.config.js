/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D3E50',
        accent: '#FFCB05',
        success: '#4CAF50',
        danger: '#F44336',
        background: '#F9FAFB',
        cards: '#FFFFFF',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        text: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
