/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pokemon: {
          red: '#FF6B6B',
          blue: '#4ECDC4',
          yellow: '#FFE66D',
          green: '#95E1D3',
          purple: '#A8E6CF',
        },
        background: '#F7F7F7',
        text: '#2C3E50',
      },
      fontFamily: {
        pokemon: ['Pokemon Solid', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
} 