'use client';

import { motion } from 'framer-motion';          // ⬅️ NEW
import ProductForm from '@/components/admin/product-form';
import { updateProduct } from '@/actions/product';
import { productsData } from '@/lib/data-store';
import type { Product } from '@/types';
import PageHeader from '@/components/shared/page-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

async function getProductSsr(id: string): Promise<Product | null> {
  return productsData.get(id) || null;
}

export default function EditProductPage() {
  const { t } = useLanguage();
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getProductSsr(id).then(data => {
        setProduct(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  /* ──────────────────────────────
     Loading animation
  ────────────────────────────── */
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex h-48 items-center justify-center text-lg"
      >
        {t({ en: 'Loading...', ta: 'ஏற்றுகிறது...' })}
      </motion.div>
    );
  }

  /* ──────────────────────────────
     Error animation
  ────────────────────────────── */
  if (!product) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <PageHeader
          title={t({ en: 'Error: Product Not Found', ta: 'பிழை: தயாரிப்பு காணப்படவில்லை' })}
          className="text-left mb-8"
        />
        <p>
          {t({
            en: 'The product you are trying to edit does not exist.',
            ta: 'நீங்கள் திருத்த முயற்சிக்கும் தயாரிப்பு இல்லை.',
          })}
        </p>
        <Button asChild variant="link" className="mt-4 pl-0">
          <Link href="/admin/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t({ en: 'Back to Product Management', ta: 'தயாரிப்பு நிர்வாகத்திற்குத் திரும்பு' })}
          </Link>
        </Button>
      </motion.div>
    );
  }

  /* ──────────────────────────────
     Main edit page with animations
  ────────────────────────────── */
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header zoom‑in */}
      <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }}>
        <PageHeader
          title={t({ en: 'Edit Product', ta: 'தயாரிப்பைத் திருத்து' })}
          className="text-left mb-8"
        />
      </motion.div>

      {/* Form slide‑in */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
      >
        <ProductForm
          action={updateProduct}
          initialData={product}
          formTitle={t({ en: 'Update Product Details', ta: 'தயாரிப்பு விவரங்களைப் புதுப்பிக்கவும்' })}
          submitButtonText={t({ en: 'Save Changes', ta: 'மாற்றங்களைச் சேமி' })}
        />
      </motion.div>

      {/* Extra details link fade‑in */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Button asChild variant="outline">
          <Link href={`/admin/products/edit/${id}/details`}>
            {t({ en: 'Edit Full Explanation & Stack', ta: 'முழு விளக்கம் மற்றும் ஸ்டேக் திருத்து' })}
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

export const dynamic = 'force-dynamic';
