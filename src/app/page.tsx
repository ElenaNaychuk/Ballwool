import { Metadata } from 'next';
import { Suspense } from 'react';
import { ErrorPage } from '@shared/components/errorPage/errorPage';
import { ProductContent } from '@shared/components';
import { getCachedProduct } from 'src/entities/product/api/getCachedProduct';

export async function generateMetadata(): Promise<Metadata> {
  const product = await getCachedProduct();

  if(!product) {
    return {
      title: 'Ballwool',
      description: 'Social network marketplace',
    }
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images,
    },
  };
}

export default async function ProductPage() {

  const product = await getCachedProduct();
    
  if(!product) {
    return <ErrorPage />
  }

  return (
    <div className="container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductContent product={product} />
      </Suspense>     
    </div>
  );
}

