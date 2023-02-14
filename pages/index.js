import ProductItem from '@/components/product_item';
import data from '@/utils/data';
import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}