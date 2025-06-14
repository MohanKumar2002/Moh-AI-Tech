'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import type { Product } from '@/types';
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { getIconComponent } from '@/lib/icon-map';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language, t } = useLanguage();
  const IconComponent = getIconComponent(product.iconName);

  return (
    <Card id={product.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      
      {/* ✅ Fixed Image Layout with aspect ratio */}
      {product.imageUrl && (
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name[language]}
            fill
            className="object-cover"
            data-ai-hint={product.dataAiHint || 'technology product'}
          />
        </div>
      )}

      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
          <CardTitle className="font-headline text-2xl">{product.name[language]}</CardTitle>
        </div>
        <CardDescription>{product.description[language]}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <h4 className="font-semibold mb-2 text-foreground">{t({ en: "Key Features:", ta: "முக்கிய அம்சங்கள்:" })}</h4>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {product.keyFeatures[language].map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {product.subscriptionOptions?.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <h5 className="font-semibold mb-2 text-foreground">{t({ en: "Subscription Plans:", ta: "சந்தா திட்டங்கள்:" })}</h5>
            <div className="flex flex-wrap gap-2">
              {product.subscriptionOptions.map(option => (
                <Badge key={option.type} variant="secondary" className="font-normal">
                  {option.type === 'monthly'
                    ? `${t({ en: "Monthly", ta: "மாதாந்திரம்" })}: $${option.price.toFixed(2)}`
                    : `${t({ en: "Yearly", ta: "வருடாந்திரம்" })}: $${option.price.toFixed(2)}`}
                  <span className="ml-1 text-xs opacity-80">
                    {option.type === 'yearly' ? '/yr' : '/mo'}
                  </span>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
  <Link href={`/products/${product.id}`}>
    {t({ en: "Learn More / Request Demo", ta: "மேலும் அறிக / டெமோ கோரிக்கை" })}
  </Link>
</Button>

      </CardFooter>
    </Card>
  );
}
