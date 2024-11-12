/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-', // Prefixo 'tw-' para todas as classes do Tailwind
  important: false, // Pode ser verdadeiro caso queira dar maior prioridade aos estilos do Tailwind
  darkMode: 'class', // Ativa o modo escuro com uma classe 'dark'
  content: [
    './**/*.{html,js,jsx}', // Certifica-se de que o Tailwind irá processar os arquivos corretos
    // Adicione outros diretórios ou arquivos conforme necessário, ex: './src/**/*.{html,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poly: ['"poly"', 'serif'], // Personalizando a fonte
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
