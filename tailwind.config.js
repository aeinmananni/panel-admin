/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors:{
          customColor:"var(--primary-color,#7367f0)"
       },
       boxShadow: {
        customShadow: '0 0 2px var(--primary-color), 0 0 8px var(--primary-color), 0 0 10px var(--primary-color)', // تعریف سایه
      },
    },
  },
  plugins: [],
}

