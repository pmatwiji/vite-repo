/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({ rollupTypes: true })
  ],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'test',
      formats: ['umd'],
      fileName: (format) => `test.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
