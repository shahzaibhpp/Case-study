import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // Figma palette - Bonbon NYC case study
        'figma-bg': '#fbf5f2',
        'figma-beige': '#f7efe6',
        'figma-pink': '#f7c7d1',
        'figma-pink-accent': '#e3b1b1',
        'figma-pink-border': '#ef9c9e',
        'figma-button': '#cab5a2',
        'figma-green': '#6a885d',
        'figma-text': '#1f1b18',
        'figma-gray': '#666',
        'figma-muted': '#9a8e8a',
        'figma-dot': '#888',
        'figma-footer-bg': '#f7f7f7'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config
