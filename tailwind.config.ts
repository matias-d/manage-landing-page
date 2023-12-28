import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
         // Primary Colors
         "primary-bright-red": "hsl(12, 88%, 59%)",
         "primary-dark-blue": "hsl(228, 39%, 23%)",
 
         // Neutral Colors
         "neutral-dark-grayish-blue": "hsl(227, 12%, 61%)",
         "neutral-very-dark-blue": "hsl(233, 12%, 13%)",
         "neutral-very-pale-red": "hsl(13, 100%, 96%)",
         "neutral-very-light-gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage : {
        'pattern-desktop' : 'url(/images/bg-tablet-pattern.svg)',
        'pattern-mobile' : 'url(/images/bg-simplify-section-mobile.svg)',
        'pattern-tablet' : 'url(/images/bg-simplify-section-desktop.svg)'
      },
      backgroundPosition : {
        'bottom-4': 'left top 1rem',
      }
    },
  },
  plugins: [],
}
export default config
