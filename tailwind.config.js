/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Syne', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#060912',
          900: '#0b1020',
          800: '#121933',
          700: '#1a2540',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)',
        'gradient-soft': 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(14,165,233,0.15) 100%)',
      },
      boxShadow: {
        glow: '0 0 60px rgba(124, 58, 237, 0.35)',
        'glow-sm': '0 0 32px rgba(14, 165, 233, 0.25)',
        card: '0 20px 50px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        blob: 'blob 18s ease-in-out infinite',
        'blob-slow': 'blob 26s ease-in-out infinite reverse',
        float: 'float 5.5s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(24px, -40px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
};
