import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';
const maxSizeKB = 500;
const targetMaxWidth = 1920; // 1080p is usually enough for web images

async function optimizeImage(filePath) {
  const stats = fs.statSync(filePath);
  const sizeMB = stats.size / (1024 * 1024);

  if (sizeMB > 0.5) { // Only process images larger than 0.5MB
      console.log(`Optimizing: ${filePath} (${sizeMB.toFixed(2)} MB)`);
      const tempPath = filePath + '.tmp';
      
      try {
          // 1. Read metadata to check width
          const image = sharp(filePath);
          const metadata = await image.metadata();

          let pipeline = sharp(filePath);
          
          // 2. Resize only if width is larger than target
          if (metadata.width > targetMaxWidth) {
              pipeline = pipeline.resize(targetMaxWidth);
          }

          // 3. Compress based on format
          if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
              pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
          } else if (metadata.format === 'png') {
              pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
          } else {
              // Fallback to webp if it's something else we support
              pipeline = pipeline.webp({ quality: 80 });
          }

          await pipeline.toFile(tempPath);
          
          // 4. Compare sizes - only replace if it's actually smaller
          const newStats = fs.statSync(tempPath);
          if (newStats.size < stats.size) {
              fs.unlinkSync(filePath);
              fs.renameSync(tempPath, filePath);
              console.log(`  Done: ${(newStats.size / (1024 * 1024)).toFixed(2)} MB`);
          } else {
              fs.unlinkSync(tempPath);
              console.log(`  Skipped: New file was not smaller.`);
          }
      } catch (err) {
          console.error(`  Error processing ${filePath}:`, err);
      }
  }
}

async function walk(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            await walk(fullPath);
        } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
            await optimizeImage(fullPath);
        }
    }
}

console.log('Starting image optimization...');
(async () => {
    await walk(assetsDir);
    process.exit(0);
})();
