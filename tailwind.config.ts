import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          // Dark Mode - Deep Void Black
          void: '#020617',      // Slate 950 - Main background
          dark: '#0f172a',      // Slate 900 - Secondary surfaces
          surface: '#1e293b',   // Slate 800 - Cards/elevated
          
          // Primary Accent - Electric Purple/Indigo (AI Vibes)
          primary: '#6366f1',   // Indigo 500
          primaryLight: '#818cf8', // Indigo 400
          primaryDark: '#4f46e5',  // Indigo 600
          
          // Secondary Accent - Neon Green/Cyan (Success/Speed)
          neon: '#22d3ee',      // Cyan 400
          neonLight: '#67e8f9', // Cyan 300
          neonDark: '#06b6d4',  // Cyan 500
          
          // Legacy support
          navy: '#0f172a',
          teal: '#22d3ee',
          tealDark: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ai-mesh': 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M0 20L20 0L40 20L20 40z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;
