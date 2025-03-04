/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Enable dark mode with 'class' instead of media queries
    theme: {
      extend: {
        colors: {
          background: 'var(--background)',
          'background-alt': 'var(--background-alt)',
          text: 'var(--text)',
          'text-light': 'var(--text-light)',
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)',
        }
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      }
    },
    plugins: [],
  }