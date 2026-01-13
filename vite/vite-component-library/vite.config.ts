import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ["__tests__/**/*.test.tsx"],
    parallel: true,
    setupFiles: ['./vitest.setup.ts'],
  },
})
