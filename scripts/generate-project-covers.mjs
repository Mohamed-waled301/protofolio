/**
 * One-off / repeatable: writes 800×450 PNG covers into public/images/projects/
 * (slug filenames from project titles). Run: node scripts/generate-project-covers.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PNG } from 'pngjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'images', 'projects');

const covers = [
  { file: 'strict-page.png', top: [99, 102, 241], bottom: [14, 165, 233] },
  { file: 'kids-learning-webpage.png', top: [251, 146, 60], bottom: [236, 72, 153] },
  { file: 'appexy-phone.png', top: [30, 64, 175], bottom: [56, 189, 248] },
  { file: 'restaurant-campaign-page.png', top: [185, 28, 28], bottom: [251, 191, 36] },
  { file: 'furni-landing-page.png', top: [120, 53, 15], bottom: [217, 119, 6] },
];

function writeGradientPng(filename, rgbTop, rgbBottom) {
  const w = 800;
  const h = 450;
  const png = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) {
    const t = h <= 1 ? 0 : y / (h - 1);
    const r = Math.round(rgbTop[0] * (1 - t) + rgbBottom[0] * t);
    const g = Math.round(rgbTop[1] * (1 - t) + rgbBottom[1] * t);
    const b = Math.round(rgbTop[2] * (1 - t) + rgbBottom[2] * t);
    for (let x = 0; x < w; x++) {
      const idx = (w * y + x) << 2;
      png.data[idx] = r;
      png.data[idx + 1] = g;
      png.data[idx + 2] = b;
      png.data[idx + 3] = 255;
    }
  }
  const buf = PNG.sync.write(png);
  const dest = path.join(outDir, filename);
  fs.writeFileSync(dest, buf);
  console.log('wrote', dest, `(${(buf.length / 1024).toFixed(1)} KB)`);
}

fs.mkdirSync(outDir, { recursive: true });
for (const { file, top, bottom } of covers) {
  writeGradientPng(file, top, bottom);
}
