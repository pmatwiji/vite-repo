/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'ViteRepo',
      formats: ['umd'],
      fileName: (format) => `vite-repo.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom/client', '@mui/material', '@mui/material/styles'],
      output: {
        globals: {
          'react': 'React',
          'react-dom/client': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          '@mui/material/styles': 'MaterialUI'
        },
        format: 'umd',
        name: 'ViteRepo',
        indent: true,
        compact: false,
        banner: `
          var ReactDOM = window.ReactDOM.createRoot ? window.ReactDOM : window.ReactDOM.default;
        `
      }
    },
    minify: false
  },
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env': '{}',
  }
})