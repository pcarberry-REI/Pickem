import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  // Use relative base when building for GitHub Pages
  // so assets work at /<repo>/ paths.
  base: process.env.GITHUB_PAGES ? '/'+(process.env.GITHUB_REPOSITORY?.split('/')[1]||'')+'/' : '/',
})
