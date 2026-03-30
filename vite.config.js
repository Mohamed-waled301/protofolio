import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** GitHub Pages: unknown paths serve 404.html — must match built index.html (with correct `base` asset URLs). */
function spa404Fallback() {
  return {
    name: 'spa-github-pages-404',
    closeBundle() {
      const dist = path.resolve(process.cwd(), 'dist');
      const indexHtml = path.join(dist, 'index.html');
      const notFoundHtml = path.join(dist, '404.html');
      if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, notFoundHtml);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), spa404Fallback()],
  base: '/protofolio/',
});
