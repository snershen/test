import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

"scripts"; {
  "build"; "vite build",
  "preview"; "vite preview",
  "deploy"; "gh-pages -d dist"
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/React-week2/",
});

