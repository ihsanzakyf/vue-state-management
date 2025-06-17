import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brands: {
          'main-color': 'rgb(122, 50, 255)',
          'light-green': '#15AB8E',
        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['material-symbols']),
    }),
  ],
};
