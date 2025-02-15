import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // necessary because vite expects imported monorepo modules to be ESM
  // alternatively, could convert the UI package to a JIT package
  // but compiled packages help for caching
  resolve: {
    alias: {
      '@repo/ui': resolve(__dirname, '../../packages/ui/src'),
    },
  },
  optimizeDeps: {
    include: ['@repo/ui'],
  },
})
