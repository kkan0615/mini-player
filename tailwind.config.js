module.exports = {
  content: [
    '../../index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        'bs-primary': '#0d6efd', // bootstrap 5 default coors
        'bs-secondary': '#6c757d', // bootstrap 5 default coors
        'bs-success': '#198754', // bootstrap 5 default coors
        'bs-info': '#0dcaf0', // bootstrap 5 default coors
        'bs-warning': '#ffc107', // bootstrap 5 default coors
        'bs-danger': '#dc3545', // bootstrap 5 default coors
        'bs-light': '#f8f9fa', // bootstrap 5 default coors
        'bs-dark': '#212529', // bootstrap 5 default coors
        'app-sidebar': '#1c2742', // app sidebar colors
        'general-background-dark': '#313131',
        'general-background': '#fff',
        'background-a': {
          light: '#181818',
          DEFAULT: '#181818',
          dark: '#181818',
        },
        'background-solid': {
          light: '#212121',
          DEFAULT: '#212121',
          dark: '#212121',
        },
        /* Only For this app */
        'player-menu-bar': {
          light: '#181818',
          DEFAULT: '#181818',
          dark: '#181818',
        },
        'YOUTUBE': '#cd201f',
        'TWITCH': '#9147ff',
        'EX_URL': '#405de6',
        'IN_PC': '#fffc00',
      }, // colors end
      width: {
        '62': '15.5rem'
      }, // width ends
    },
  },
  plugins: [],
}
