/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
      colors: {
        jingga: '#FFA69E',
        hijau: '#6BD6C0',
        primary: '#5E6472',
        secondary: '#808080',
        putih: '#FAF3DD',
      },
    },
  },
  plugins: [],
};
