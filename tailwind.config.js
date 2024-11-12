/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-', 
  important: false, 
  darkMode: 'class', 
  content: [
  './src/**/*.{html,js,jsx,ts,tsx}',  // Adicione os caminhos dos seus arquivos
    './public/**/*.html',   
  ],
  theme: {
    extend: {
      fontFamily: {
        poly: ['"poly"', 'serif'], 
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      // Adiciona variante customizada para o Firefox
      addVariant('firefox', ':-moz-any(&)');
    },
  ],
};
