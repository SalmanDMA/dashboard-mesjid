/** @type {import('tailwindcss').Config} */
export default {
 content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
  extend: {
   colors: {
    primary: '#367bc9', // Ganti dengan warna utama baru
    primary_dark: '#7895CB', // biasanya di gunakan untuk background button atau text agak gelap
    secondary: '#C98436', // orange
    white: '#ffffff',
    black: '#000000',
   },
   boxShadow: {
    custom: '4px 0px 12px 8px rgba(74, 85, 162, 0.10)',
    customdua: '4px 4px 4px 0px rgba(120, 149, 203, 0.25)',
   },
   fontSize: {
    'heading-1': '48px',
    'heading-2': '40px',
    'heading-3': '32px',
    'heading-4': '24px',
    'heading-5': '16px',
    'heading-6': '8px',
    paragaph: '16px',
    small: '10px',
   },
  },
 },
 plugins: [require('daisyui')],
 daisyui: {
  themes: ['light', 'dark', 'cupcake', 'aqua'],
 },
};
