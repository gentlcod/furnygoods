/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '9999': '9999',
      },
      screens: {
        'ipad-pro' : {'max' : '1024px'}
        
      }
    },
  },
  plugins: [],
}