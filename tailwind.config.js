// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", ],
  theme: {
    extend: {
      colors: {
        'ludikids-turquesa': '#00a4a6',
        'ludikids-amarillo': '#f8ec81',
        'whatsapp-verde': '#25D366',
      },
      fontFamily: {
        // Usa los nombres de las variables CSS que definiste en layout.js
        'cuerpo': ['var(--font-nunito-sans)', 'sans-serif'], // Fuente principal del cuerpo
        'titulo': ['var(--font-fredoka)', 'cursive'],      // Fuente para títulos
      },
    },
  },
  plugins: [],
}