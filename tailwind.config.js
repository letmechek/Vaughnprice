/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'vp-navy': {
          dark: '#0A0E27',
          DEFAULT: '#141B3D',
          light: '#1A2447',
        },
        'vp-cyan': '#06B6D4',
        'vp-coral': '#FF6B6B',
        'vp-amber': '#F59E0B',
        'vp-purple': '#8B5CF6',
        'vp-lime': '#84CC16',
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '30': '7.5rem', // 120px
        '40': '10rem', // 160px
        '45': '11.25rem', // 180px
      },
      maxWidth: {
        container: '1280px',
      },
      fontSize: {
        display: '72px',
        h1: '64px',
        h2: '48px',
        h3: '32px',
      },
      boxShadow: {
        glow: '0 10px 60px rgba(6, 182, 212, 0.2)',
      },
    },
  },
  plugins: [],
}
