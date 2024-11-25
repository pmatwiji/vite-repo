/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'ViteRepo',
      formats: ['umd'],
      fileName: (format) => `vite-repo.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@mui/material/styles'],
      output: {
        globals: {
          'react': 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          '@mui/material/styles': 'MaterialUI'
        }
      }
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
  }
})