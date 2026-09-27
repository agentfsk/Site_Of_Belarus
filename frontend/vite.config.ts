import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves the site from a sub-path (/<repo>/), so the build needs
  // a matching base. Left unset locally, the dev server and preview stay on "/".
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
})
