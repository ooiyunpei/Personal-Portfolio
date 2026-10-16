/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        jomhuria: ["Jomhuria", "cursive"],
        teachers: ["Teachers", "sans-serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        portfolio: {
          bg: "#C9CEC7",       // Hero & Testimonials light grey/green
          sage: "#93A291",     // About Me & Help section sage green
          dark: "#1A1D1A",     // Education, Projects & Footer dark tone
          card: "#262925",
        }
      }
    },
  },
  plugins: [],
}