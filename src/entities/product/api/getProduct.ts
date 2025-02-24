export async function getProduct() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const res = await fetch('http://localhost:3000/api/product', { cache: 'no-store' });

  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}