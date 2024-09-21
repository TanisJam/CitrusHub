/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#1E232A',
        dark: '#121826',
        'dark-blue': '#1C2741',
        'medium-blue': '#2E3D61',
        'ligth-blue': '#596A94',
        accent: '#E97D2E',
        light: '#E4EAF6',
        gray: '#ABB1BE',
        'alert-red': '#EC1111',
        'alert-green': '#00CC2D',
      },
      fontFamily: {
        jetbrain: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  plugins: [daisyui],
};
