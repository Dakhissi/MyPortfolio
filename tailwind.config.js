/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        // => @media (min-width: 475px) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // Modern Professional Color Palette: Blue and Dark Navy
        'primary': {
          100: '#3b82f6',
          200: '#60a5fa',
          300: '#93c5fd',
          400: '#bfdbfe',
          500: '#dbeafe',
          600: '#eff6ff'
        },
        'accent': {
          100: '#10b981',
          200: '#34d399',
          300: '#6ee7b7',
          400: '#9deccc',
          500: '#c6f6d5',
          600: '#d1fae5'
        },
        'surface': {
          100: '#0f172a',
          200: '#1e293b',
          300: '#334155',
          400: '#475569',
          500: '#64748b',
          600: '#94a3b8'
        },
        'on-background': '#f8fafc',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ccchaos': "url('/ccchaos.svg')",
      },
    },
    fontFamily: {
      'body': ['"Inter"', 'Helvetica', 'sans-serif']
    }
  },
  plugins: [],
}
