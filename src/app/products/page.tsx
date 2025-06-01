
'use client';

import PageHeader from '@/components/shared/page-header';
import ProductCard from '@/components/features/products/product-card';
import { PRODUCTS_DATA } from '@/lib/constants';
import { useLanguage } from '@/contexts/language-context';

export default function ProductsPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <PageHeader
        title={t({ en: "Our AI-Powered Products", ta: "எங்கள் AI-இயங்கும் தயாரிப்புகள்" })}
        description={t({ en: "Discover innovative solutions designed to transform your work and unlock new potentials.", ta: "உங்கள் வேலையை மாற்றியமைக்கவும் புதிய திறன்களைத் திறக்கவும் வடிவமைக்கப்பட்ட புதுமையான தீர்வுகளைக் கண்டறியவும்." })}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS_DATA.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
