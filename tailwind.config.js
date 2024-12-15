/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./mix-blend-mode/index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef3f2",
          100: "#ffe4e1",
          200: "#ffcec8",
          300: "#ffada2",
          400: "#fd705e",
          500: "#f6523d",
          600: "#e3351f",
          700: "#bf2916",
          800: "#9e2516",
          900: "#832519",
          950: "#470f08",
        },
      },
    },
  },
  plugins: [],
}
