import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // For Next.js
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // For Vite
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue,mdx}'
  ],
  darkMode: ['class', '[data-theme="dark"]']
}
export default config
