/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('./src/assets/login.png')",
        'signup': "url('./src/assets/signup.png')",
      },
      height: {
        '128': '38rem',
      }
    },
  },
  plugins: [],
}

