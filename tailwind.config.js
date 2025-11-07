/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'markabinet': {
          50: '#f0f3ff',
          100: '#e6ecff',
          500: '#243B97',
          600: '#243B97',
          700: '#1e3280',
          800: '#1a2969',
          900: '#161f52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}