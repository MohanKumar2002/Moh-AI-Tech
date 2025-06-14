
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/language-context';
import PageHeader from '@/components/shared/page-header';
import { productsData } from '@/lib/data-store';
import type { Product } from '@/types';

export default function EditProductDetailsPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  const [explanationEn, setExplanationEn] = useState('');
  const [explanationTa, setExplanationTa] = useState('');
  const [stackEn, setStackEn] = useState('');
  const [stackTa, setStackTa] = useState('');

  useEffect(() => {
    if (typeof id === 'string') {
      const data = productsData.get(id);
      if (data) {
        setProduct(data);
        // Load existing details if previously stored in product
        setExplanationEn((data as any)?.details?.en?.explanation || '');
        setExplanationTa((data as any)?.details?.ta?.explanation || '');
        setStackEn((data as any)?.details?.en?.stack || '');
        setStackTa((data as any)?.details?.ta?.stack || '');
      }
    }
  }, [id]);

  const handleSave = () => {
    if (!product || typeof id !== 'string') return;

    // Extend product with "details"
    const updatedProduct = {
      ...product,
      details: {
        en: { explanation: explanationEn, stack: stackEn },
        ta: { explanation: explanationTa, stack: stackTa }
      }
    };

    productsData.set(id, updatedProduct);
    alert('✅ Details updated successfully!');
    router.push('/admin/products');
  };

  if (!product) {
    return <div className="text-center mt-10 text-destructive">Product not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <PageHeader
        title={t({ en: `Edit Details for "${product.name.en}"`, ta: `"${product.name.ta}" இற்கான விவரங்களைத் திருத்து` })}
        className="text-left"
      />

      {/* English Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">English</h2>
        <div>
          <Label>Full Explanation</Label>
          <Textarea
            rows={6}
            value={explanationEn}
            onChange={e => setExplanationEn(e.target.value)}
            placeholder="Detailed explanation in English..."
          />
        </div>
        <div>
          <Label>Tech Stack</Label>
          <Textarea
            rows={4}
            value={stackEn}
            onChange={e => setStackEn(e.target.value)}
            placeholder="E.g., Next.js, Node.js, OpenAI API..."
          />
        </div>
      </section>

      {/* Tamil Section */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">தமிழ்</h2>
        <div>
          <Label>முழுமையான விளக்கம்</Label>
          <Textarea
            rows={6}
            value={explanationTa}
            onChange={e => setExplanationTa(e.target.value)}
            placeholder="தயாரிப்பு குறித்த முழு விளக்கம்..."
          />
        </div>
        <div>
          <Label>பயன்படுத்திய தொழில்நுட்பங்கள்</Label>
          <Textarea
            rows={4}
            value={stackTa}
            onChange={e => setStackTa(e.target.value)}
            placeholder="உதா: Next.js, Node.js, OpenAI API..."
          />
        </div>
      </section>

      <Button onClick={handleSave} className="mt-4">
        {t({ en: "Save Details", ta: "விவரங்களை சேமிக்கவும்" })}
      </Button>
    </div>
  );
}
