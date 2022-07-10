/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './packages/renderer/index.html',
    './packages/renderer/src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}
