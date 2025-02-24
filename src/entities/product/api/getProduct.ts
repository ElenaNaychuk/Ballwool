import fs from 'fs/promises';
import path from 'path';

export async function getProduct() {
  const filePath = path.join(process.cwd(), 'public/data/product.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}