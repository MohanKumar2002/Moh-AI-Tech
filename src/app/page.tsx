'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Brain, PlayCircle } from 'lucide-react';
import { productsData } from '@/lib/data-store';
import { useLanguage } from '@/contexts/language-context';
import { getIconComponent } from '@/lib/icon-map';
import type { Product } from '@/types';
import { useEffect, useState } from 'react';

async function getHomepageProductsSsr(): Promise<Product[]> {
  return Array.from(productsData.values()).slice(0, 3);
}

export default function HomePage() {
  const { language, t } = useLanguage();
  const [homeProducts, setHomeProducts] = useState<Product[]>([]);

  useEffect(() => {
    getHomepageProductsSsr().then(setHomeProducts);
  }, []);

  const pageHeaderTitle = t({
    en: "Welcome to Moh-AI Tech",
    ta: "மோ-ஏஐ டெக்கிற்கு வரவேற்கிறோம்"
  });
  const pageHeaderDescription = t({
    en: "Empowering Your Future with Cutting-Edge Artificial Intelligence Solutions.",
    ta: "உங்கள் எதிர்காலத்தை அதிநவீன செயற்கை நுண்ணறிவு தீர்வுகள் மூலம் மேம்படுத்துகிறோம்."
  });
  const exploreProductsText = t({ en: "Explore Our AI Products", ta: "எங்கள் AI தயாரிப்புகளை ஆராயுங்கள்" });
  const getInTouchText = t({ en: "Get in Touch", ta: "தொடர்பு கொள்ளுங்கள்" });

  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-lg shadow-sm">
        <PageHeader title={pageHeaderTitle} description={pageHeaderDescription} />
        <p className="max-w-2xl mx-auto text-foreground mb-8">
          {t({
            en: "At Moh-AI Tech, we harness the power of artificial intelligence to build innovative Products that drive efficiency, foster creativity, and unlock new possibilities for businesses and individuals alike.",
            ta: "மோ-ஏஐ டெக்கில், செயற்கை நுண்ணறிவின் ஆற்றலைப் பயன்படுத்தி செயல்திறனை அதிகரிக்கும், படைப்பாற்றலை வளர்க்கும், மற்றும் வணிகங்களுக்கும் தனிநபர்களுக்கும் புதிய சாத்தியக்கூறுகளைத் திறக்கும் புதுமையான கருவிகளை உருவாக்குகிறோம்."
          })}
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link href="/products">{exploreProductsText}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">{getInTouchText}</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-headline font-semibold text-center mb-10">
          {t({ en: "Why Choose Moh-AI Tech?", ta: "ஏன் மோ-ஏஐ டெக்?" })}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: Zap,
            title: t({ en: "Innovation at Core", ta: "மையத்தில் புதுமை" }),
            description: t({
              en: "We are pioneers in AI, constantly pushing the boundaries of technology to deliver state-of-the-art solutions.",
              ta: "நாங்கள் செயற்கை நுண்ணறிவில் முன்னோடிகள், அதிநவீன தீர்வுகளை வழங்க தொழில்நுட்பத்தின் எல்லைகளை தொடர்ந்து விரிவாக்குகிறோம்."
            })
          }, {
            icon: Brain,
            title: t({ en: "Intelligent Solutions", ta: "நுண்ணறிவு தீர்வுகள்" }),
            description: t({
              en: "Our products are designed with deep intelligence to understand your needs and provide smart, effective results.",
              ta: "எங்கள் தயாரிப்புகள் உங்கள் தேவைகளைப் புரிந்துகொண்டு புத்திசாலித்தனமான, பயனுள்ள முடிவுகளை வழங்க வடிவமைக்கப்பட்டுள்ளன."
            })
          }, {
            icon: CheckCircle,
            title: t({ en: "User-Centric Design", ta: "பயனர் மைய வடிவமைப்பு" }),
            description: t({
              en: "We prioritize user experience, ensuring our Products are intuitive, easy to use, and deliver tangible value.",
              ta: "பயனர் அனுபவத்திற்கு நாங்கள் முன்னுரிமை அளிக்கிறோம், எங்கள் கருவிகள் உள்ளுணர்வுடன், பயன்படுத்த எளிதானவை மற்றும் உறுதியான மதிப்பை வழங்குவதை உறுதிசெய்கிறோம்."
            })
          }].map((item, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center py-12 bg-card rounded-lg shadow-sm">
        <h2 className="text-3xl font-headline font-semibold mb-6">
          {t({ en: "Our Flagship AI Products", ta: "எங்கள் முதன்மை AI தயாரிப்புகள்" })}
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-8">
          {t({
            en: "Discover a suite of AI-powered products designed to enhance productivity and creativity.",
            ta: "உற்பத்தித்திறன் மற்றும் படைப்பாற்றலை மேம்படுத்த வடிவமைக்கப்பட்ட AI-இயங்கும் தயாரிப்புகளின் தொகுப்பைக் கண்டறியவும்."
          })}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {homeProducts.map(product => {
            const IconComponent = getIconComponent(product.iconName);
            return (
              <Card key={product.id} className="text-left hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {IconComponent && <IconComponent className="h-7 w-7 text-primary" />}
                    <CardTitle className="font-headline text-xl">{product.name[language]}</CardTitle>
                  </div>
                  <CardDescription>{product.description[language].substring(0, 100)}...</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={`/products/${product.id}`}>{t({ en: "Learn More", ta: "மேலும் அறிக" })} →</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-8">
          <Button variant="outline" asChild>
            <Link href="/products">{t({ en: "View All AI Products", ta: "அனைத்து AI தயாரிப்புகளையும் காண்க" })}</Link>
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-headline font-semibold">
            {t({ en: "Discover Moh-AI Tech: Our Story", ta: "மோ-ஏஐ டெக்கைக் கண்டறியுங்கள்: எங்கள் கதை" })}
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            {t({
              en: "Get a glimpse into our mission, vision, and the innovative spirit that drives us. Watch our company overview.",
              ta: "எங்கள் நோக்கம், பார்வை மற்றும் எங்களை இயக்கும் புதுமையான உணர்வைப் பற்றிய ஒரு பார்வையைப் பெறுங்கள். எங்கள் நிறுவனத்தின் மேலோட்டத்தைப் பாருங்கள்."
            })}
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video bg-muted rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center text-foreground p-8">
              <PlayCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="font-semibold">{t({ en: "Company Overview Video Coming Soon", ta: "நிறுவனத்தின் மேலோட்ட வீடியோ விரைவில்" })}</p>
              <p className="text-sm text-muted-foreground">{t({ en: "You'll be able to watch our story here.", ta: "எங்கள் கதையை இங்கே பார்க்க முடியும்." })}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center py-12 bg-card rounded-lg shadow-sm">
        <h2 className="text-3xl font-headline font-semibold mb-6">
          {t({en: "Our Flagship AI Products", ta: "எங்கள் முதன்மை AI கருவிகள்"})} 
        </h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-8">
          {t({
            en: "Discover a suite of AI-powered Products designed to enhance productivity and creativity.",
            ta: "உற்பத்தித்திறன் மற்றும் படைப்பாற்றலை மேம்படுத்த வடிவமைக்கப்பட்ட AI-இயங்கும் கருவிகளின் தொகுப்பைக் கண்டறியவும்."
          })}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {homeProducts.map(tool => { 
             const IconComponent = getIconComponent(tool.iconName);
             return (
               <Card key={tool.id} className="text-left hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {IconComponent && <IconComponent className="h-7 w-7 text-primary" />}
                    <CardTitle className="font-headline text-xl">{tool.name[language]}</CardTitle>
                  </div>
                  <CardDescription>{tool.description[language].substring(0,100)}...</CardDescription>
                </CardHeader>
                <CardContent>
                   <Button variant="link" asChild className="p-0 h-auto">
                      <Link href={`/Products/${tool.id}`}>{t({en: "Learn More", ta: "மேலும் அறிக"})} &rarr;</Link>
                   </Button>
                </CardContent>
              </Card>
             );
          })}
        </div>
         <div className="mt-8">
            <Button variant="outline" asChild>
                <Link href="/Products">{t({en: "View All AI Products", ta: "அனைத்து AI கருவிகளையும் காண்க"})}</Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
