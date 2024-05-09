// tailwind.config.js
// import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    './src/app/**/*.tsx',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: []
}

export default config
