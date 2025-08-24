/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce': 'bounce 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'crypto-pulse': 'crypto-pulse 4s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 8s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'typewriter': 'typewriter 2s steps(20) forwards',
        'blink': 'blink 1s infinite',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'fade-in-scale': 'fadeInScale 0.8s ease-out forwards',
        'glitch': 'glitch 0.3s ease-in-out infinite',
      },
      keyframes: {
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeInScale: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          }
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 20px rgba(16, 185, 129, 0.5)',
          },
          '100%': {
            'box-shadow': '0 0 40px rgba(16, 185, 129, 0.8)',
          }
        },
        'gradient-shift': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '25%': { 'background-position': '100% 0%' },
          '50%': { 'background-position': '100% 100%' },
          '75%': { 'background-position': '0% 100%' }
        },
        'crypto-pulse': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.3' },
          '50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '0.8' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' }
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
        }
      },
      backgroundSize: {
        '300%': '300%',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'crypto-blue': '#3b82f6',
        'crypto-purple': '#8b5cf6',
        'crypto-cyan': '#06b6d4',
        'crypto-pink': '#ec4899',
        'crypto-yellow': '#f59e0b',
        'crypto-orange': '#f97316',
      }
    },
  },
  plugins: [],
  safelist: [
    // Color classes for dynamic usage
    'text-blue-400', 'text-purple-400', 'text-indigo-400', 'text-cyan-400', 'text-yellow-400', 'text-orange-400', 'text-pink-400', 'text-red-400', 'text-emerald-400',
    'bg-blue-500', 'bg-purple-500', 'bg-indigo-500', 'bg-cyan-500', 'bg-yellow-500', 'bg-orange-500', 'bg-pink-500', 'bg-red-500', 'bg-emerald-500',
    'from-blue-500', 'from-purple-500', 'from-indigo-500', 'from-cyan-500', 'from-yellow-500', 'from-orange-500', 'from-pink-500', 'from-red-500', 'from-emerald-500',
    'to-blue-400', 'to-purple-400', 'to-indigo-400', 'to-cyan-400', 'to-yellow-400', 'to-orange-400', 'to-pink-400', 'to-red-400', 'to-emerald-400',
    'border-blue-500', 'border-purple-500', 'border-indigo-500', 'border-cyan-500', 'border-yellow-500', 'border-orange-500', 'border-pink-500', 'border-red-500', 'border-emerald-500',
    'shadow-blue-500', 'shadow-purple-500', 'shadow-indigo-500', 'shadow-cyan-500', 'shadow-yellow-500', 'shadow-orange-500', 'shadow-pink-500', 'shadow-red-500', 'shadow-emerald-500',
    // Opacity variants
    'bg-blue-500/10', 'bg-purple-500/10', 'bg-indigo-500/10', 'bg-cyan-500/10', 'bg-yellow-500/10', 'bg-orange-500/10', 'bg-pink-500/10', 'bg-red-500/10', 'bg-emerald-500/10',
    'bg-blue-500/20', 'bg-purple-500/20', 'bg-indigo-500/20', 'bg-cyan-500/20', 'bg-yellow-500/20', 'bg-orange-500/20', 'bg-pink-500/20', 'bg-red-500/20', 'bg-emerald-500/20',
    'border-blue-500/30', 'border-purple-500/30', 'border-indigo-500/30', 'border-cyan-500/30', 'border-yellow-500/30', 'border-orange-500/30', 'border-pink-500/30', 'border-red-500/30', 'border-emerald-500/30',
    'border-blue-500/50', 'border-purple-500/50', 'border-indigo-500/50', 'border-cyan-500/50', 'border-yellow-500/50', 'border-orange-500/50', 'border-pink-500/50', 'border-red-500/50', 'border-emerald-500/50',
    'shadow-blue-500/25', 'shadow-purple-500/25', 'shadow-indigo-500/25', 'shadow-cyan-500/25', 'shadow-yellow-500/25', 'shadow-orange-500/25', 'shadow-pink-500/25', 'shadow-red-500/25', 'shadow-emerald-500/25',
    'shadow-blue-500/50', 'shadow-purple-500/50', 'shadow-indigo-500/50', 'shadow-cyan-500/50', 'shadow-yellow-500/50', 'shadow-orange-500/50', 'shadow-pink-500/50', 'shadow-red-500/50', 'shadow-emerald-500/50',
  ]
};