import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'button': 'rgba(186, 250, 61, 1)',
        'custom': 'rgba(0, 13, 10, 1)',
        'customgreen': 'rgba(186, 250, 61, 1)' 
      },
      textColor: {
        'custom': 'rgba(0, 13, 10, 1)',
        'customgreen': 'rgba(186, 250, 61, 1)' 
      },
      borderColor: {
        'custom': 'rgba(124, 167, 41, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
