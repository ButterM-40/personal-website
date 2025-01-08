import fs from 'fs';
import path from 'path';

export function getCarouselImages() {
  const imagesDirectory = path.join(process.cwd(), 'public/images/ImageCarousel');
  const imageFiles = fs.readdirSync(imagesDirectory);
  
  return imageFiles.map(file => `/images/ImageCarousel/${file}`);
} 