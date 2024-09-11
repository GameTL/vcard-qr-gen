// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FFA500',  // Orange color
        blue: '#0000FF',    // Blue color
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #FFA500 0%, white 40%, white 60%, #0000FF 100%)',
      },
    },
  },
  plugins: [],
}



