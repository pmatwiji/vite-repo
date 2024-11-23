/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: './',
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({ rollupTypes: true })
  ],
  define: {
    'process.env': {},
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'ViteRepo',
      formats: ['umd'],
      fileName: (format) => `vite-repo.${format}.js`
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