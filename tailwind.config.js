/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,js,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0022a0',
        secondary: '#9face3',
        accent: '#fb004d',
        complement: '#b90a67',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}

