import fs from 'fs/promises';
import path from 'path';
import { ProductItemDto } from '../model/types';

export async function getProduct(): Promise<ProductItemDto | null> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const filePath = path.join(process.cwd(), 'public/data/product.json');
    const data = await fs.readFile(filePath, 'utf-8');
  
    return JSON.parse(data);
  } catch (error) {
    console.error("Ошибка загрузки:", error);
    
    return null;
  }
}