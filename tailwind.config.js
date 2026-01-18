/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        '--bg-color': '#121212',
        '--dark-1': '#1e1e1e',
        '--dark-2': '#222222',
        '--dark-3': '#272727',
        '--dark-4': '#323232',
        '--dark-5': '#5b5b5b',
        'secondary-color': '#000',  // Darker secondary color
        'text-color': '#D1D5DB',
        'darker-text-color': '#000E14',
        'success-color': '#10b92a',
        'neutral-color': '#7a817b',
        'error-color': '#d11414',
      },
      screens: {
        'xs': '500px', // Extra small screen (custom)
        'sm': '640px', // Small screen (default Tailwind)
        'md': '768px', // Medium screen (default Tailwind)
        'lg': '976px', // Large screen (custom)
        'xl': '1200px', // Extra large screen (custom)
      },
    },
  },
  plugins: [],
}