'use client';

import { useParams } from 'next/navigation';
import { productsData } from '@/lib/data-store';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { getIconComponent } from '@/lib/icon-map';

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const { language, t } = useLanguage();

  useEffect(() => {
    if (typeof id === 'string') {
      const prod = productsData.get(id);
      setProduct(prod || null);
    }
  }, [id]);

  if (!product) {
    return <div className="text-center mt-10 text-muted-foreground">{t({ en: "Product not found.", ta: "தயாரிப்பு காணப்படவில்லை." })}</div>;
  }

  const IconComponent = getIconComponent(product.iconName);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Title + Icon */}
      <div className="flex items-center gap-4">
        {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
        <h1 className="text-2xl font-bold">{product.name[language]}</h1>
      </div>

      {/* Description */}
      <p className="text-muted-foreground text-lg">{product.description[language]}</p>

      {/* Features */}
      <div>
        <h2 className="font-semibold text-xl mt-6 mb-2">
          {t({ en: "Key Features", ta: "முக்கிய அம்சங்கள்" })}
        </h2>
        <ul className="list-disc ml-6 space-y-2 text-sm">
          {product.keyFeatures[language].map((feature: string, idx: number) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Pricing */}
      {product.subscriptionOptions?.length > 0 && (
        <div>
          <h2 className="font-semibold text-xl mt-6 mb-2">
            {t({ en: "Pricing", ta: "விலைப்பட்டியல்" })}
          </h2>
          <ul className="list-none ml-0 space-y-1 text-sm">
            {product.subscriptionOptions.map((opt: any) => (
              <li key={opt.type}>
                {opt.type === 'monthly'
                  ? t({ en: "Monthly", ta: "மாதந்தோறும்" })
                  : t({ en: "Yearly", ta: "வருடந்தோறும்" })}: ₹{opt.price}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-10">
        <Button asChild size="lg">
          <Link href={`/schedule?product=${id}`}>
            {t({ en: "Schedule a Meeting / Request Demo", ta: "மீட்டிங் ஒதுக்கவும் / டெமோ கோரிக்கையிடவும்" })}
          </Link>
        </Button>
      </div>
    </div>
  );
}
