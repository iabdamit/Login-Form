/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Main/*.html', './Main/*.js'],
  theme: {
    extend: {
      boxShadow: {
        'custom': '3px 8px 15px 3px rgba(0, 0, 0, 0.1), 0 -2px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      textDecoder: {
        'underline': 'underline',
      },
    },
  },
  plugins: [],
}

