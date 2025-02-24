import { Metadata } from 'next';
import { Suspense } from 'react';
import { Loader } from '@shared/components';
import { ProductContent } from '@shared/components';
import { getProduct } from 'src/entities/product';
import { Sidebar } from '@shared/components/sidebar/sidebar';

export const metadata: Metadata = {
  title: 'Custom Nike Sneakers – Shop Now',
  description: 'Buy custom white unisex Nike sneakers with vibrant graffiti patterns.',
};

export default async function ProductPage() {
  const productPromise = getProduct();

  return (
    <div className="container mx-auto">
      <Suspense fallback={<Loader />}>
        <div className="flex pap-4">
          <Sidebar />
          <ProductContent productPromise={productPromise} />        
        </div>
      </Suspense>
    </div>
  );
}

