import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import { mergeConfig } from 'vitest/config'
import type { UserConfig } from 'vite'

// Base Vite configuration for React projects
export const baseViteConfig = defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [], // override this in consumer
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
    },
  },
})

export function mergeViteConfig(config: UserConfig) {
  return mergeConfig(baseViteConfig, config)
}
