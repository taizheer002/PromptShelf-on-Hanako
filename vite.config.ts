
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 浏览器环境没有 process；把 NODE_ENV 替换为 production，
  // 避免 React 产物的 process.env.NODE_ENV 检查在 iframe 里抛 ReferenceError
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
    lib: {
      entry: path.resolve(__dirname, 'ui', 'Panel.tsx'),
      formats: ['es'],
      fileName: () => 'panel.js',
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => assetInfo.name?.endsWith('.css') ? 'panel.css' : '[name][extname]',
      },
    },
  },
});
