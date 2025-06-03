
'use client';
import ProductForm from '@/components/admin/product-form';
import { createProduct } from '@/actions/product';
import PageHeader from '@/components/shared/page-header';
import { useLanguage } from '@/contexts/language-context';

export default function AddProductPage() {
  const { t } = useLanguage();
  return (
    <div>
      <PageHeader 
        title={t({ en: "Add New Product", ta: "புதிய தயாரிப்பைச் சேர்" })} 
        className="text-left mb-8" 
      />
      <ProductForm 
        action={createProduct} 
        formTitle={t({ en: "Create New Product", ta: "புதிய தயாரிப்பை உருவாக்கு" })}
        submitButtonText={t({ en: "Create Product", ta: "தயாரிப்பை உருவாக்கு" })}
      />
    </div>
  );
}
