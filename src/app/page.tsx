import { Metadata } from 'next';

import { ProductContent } from '@shared/components';
import { Sidebar } from '@shared/components/sidebar/sidebar';
import { getProduct } from 'src/entities/product';
import { ErrorPage } from '@shared/components/errorPage/errorPage';

export const metadata: Metadata = {
  title: 'Custom Nike Sneakers – Shop Now',
  description: 'Buy custom white unisex Nike sneakers with vibrant graffiti patterns.',
};

export default async function ProductPage() {

  const product = await getProduct();

  if(!product) {
    return <ErrorPage />
  }

  return (
    <div className="container mx-auto">
        <div className="flex pap-4">
            <Sidebar />
            <ProductContent product={product}/>     
        </div>
    </div>
  );
}

