
'use client';

import PageHeader from '@/components/shared/page-header';
import ProductCard from '@/components/features/products/product-card';
import { productsData } from '@/lib/data-store'; // Using in-memory data
import type { Product } from '@/types';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';

async function getProductsSsr(): Promise<Product[]> {
  // Check if productsData is available
  if (!productsData) {
    console.warn("productsData from '@/lib/data-store' is undefined in getProductsSsr (products page). Returning empty array.");
    return [];
  }
  // Convert Map to Array
  return Array.from(productsData.values()).sort((a, b) => {
    const nameA = a.name?.en ?? ''; // Use ?? for null or undefined
    const nameB = b.name?.en ?? '';
    return nameA.localeCompare(nameB);
  });
}

export default function ProductsPage() {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProductsSsr();
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);


  return (
    <div className="space-y-12">
      <PageHeader
        title={t({ en: "Our AI-Powered Products", ta: "எங்கள் AI-இயங்கும் தயாரிப்புகள்" })}
        description={t({ en: "Discover innovative solutions designed to transform your work and unlock new potentials.", ta: "உங்கள் வேலையை மாற்றியமைக்கவும் புதிய திறன்களைத் திறக்கவும் வடிவமைக்கப்பட்ட புதுமையான தீர்வுகளைக் கண்டறியவும்." })}
      />
      {products.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">
          {t({ en: "No products yet. Check back soon!", ta: "இன்னும் தயாரிப்புகள் இல்லை. விரைவில் மீண்டும் பார்க்கவும்!" })}
        </p>
      )}
    </div>
  );
}

// Adding export const dynamic = 'force-dynamic'; if we want this page to always re-fetch,
// but since it's client-side fetching from a local store, it's less critical here.
// However, if data store changes frequently and needs to be reflected without full rebuilds in dev,
// making admin pages that modify this data 'force-dynamic' is more important.
