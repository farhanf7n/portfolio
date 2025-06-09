import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      keyframes: {
        'grow-bar': {
          '0%': { height: '0px' },
          '50%': { height: '100px' },
          '100%': { height: '0px' },
        },
        blink: {
          '0%, 100%': { opacity: '1', easing: 'circOut' },
          '50%': { opacity: '0', easing: 'circOut' },
        },
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        linkedin: {
          DEFAULT: '#0076B2',
          dark: '#000000',
        },
        twitter: {
          DEFAULT: '#1da1f2',
          dark: '#53bcf9',
        },
        mastodon: {
          DEFAULT: '#595aff',
          dark: '#7475ff',
        },
        bluesky: {
          DEFAULT: '#1083FE',
          dark: '#3698FF',
        },
        github: {
          DEFAULT: '#27272a',
          dark: '#f4f4f5',
        },
        dribbble: {
          DEFAULT: '#ea4c89',
          dark: '#f377a9',
        },
      },
      borderRadius: {
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'grow-bar': 'grow-bar 2s ease-in-out infinite',
        blink: 'blink 1s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
