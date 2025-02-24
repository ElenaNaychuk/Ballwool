import fs from 'fs/promises';
import path from 'path';

export async function getProduct() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const filePath = path.join(process.cwd(), 'public/data/product.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}