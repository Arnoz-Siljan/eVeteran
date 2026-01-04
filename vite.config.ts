import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  // Nastavite 'base' na ime vašega GitHub repozitorija
  // Če je URL: https://username.github.io/repo-name/, potem je base: '/repo-name/'
  // Če je URL: https://username.github.io/, potem je base: '/'
  base: '/eVeteran/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': dirname(__dirname) + '/src',
    },
  },
})

// npm i --save-dev @types/node