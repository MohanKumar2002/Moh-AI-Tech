// 🧠 Home Page (cleaned spacing only)

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Brain, PlayCircle } from 'lucide-react';
import { toolsData } from '@/lib/data-store'; 
import { useLanguage } from '@/contexts/language-context';
import { getIconComponent } from '@/lib/icon-map';
import type { Tool } from '@/types'; 
import { useEffect, useState } from 'react';

async function getHomepageToolsSsr(): Promise<Tool[]> { 
  return Array.from(toolsData.values()).slice(0,3); 
}

export default function HomePage() {
  const { language, t } = useLanguage();
  const [homeTools, setHomeTools] = useState<Tool[]>([]); 

  useEffect(() => {
    getHomepageToolsSsr().then(setHomeTools); 
  }, []);

  return (
    <div className="space-y-14">
      {/* Hero Section */}
      <section className="text-center py-10 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-lg shadow-sm">
        <PageHeader
          title={t({ en: "Welcome to Moh-AI Tech", ta: "மோ-ஏஐ டெக்கிற்கு வரவேற்கிறோம்" })}
          description={t({ en: "Empowering Your Future with Cutting-Edge Artificial Intelligence Solutions.", ta: "உங்கள் எதிர்காலத்தை அதிநவீன செயற்கை நுண்ணறிவு தீர்வுகள் மூலம் மேம்படுத்துகிறோம்." })}
        />
        <p className="max-w-2xl mx-auto text-foreground mb-6">
          {t({
            en: "At Moh-AI Tech, we harness the power of artificial intelligence to build innovative tools...",
            ta: "மோ-ஏஐ டெக்கில், செயற்கை நுண்ணறிவின் ஆற்றலைப் பயன்படுத்தி..."
          })}
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild><Link href="/products">{t({ en: "Explore Our AI Tools", ta: "AI கருவிகளை பார்வையிடவும்" })}</Link></Button>
          <Button size="lg" variant="outline" asChild><Link href="/contact">{t({ en: "Get in Touch", ta: "தொடர்பு கொள்ளுங்கள்" })}</Link></Button>
        </div>
      </section>

      {/* Why Us Section */}
      <section>
        <h2 className="text-3xl font-headline font-semibold text-center mb-6">
          {t({ en: "Why Choose Moh-AI Tech?", ta: "ஏன் மோ-ஏஐ டெக்?" })}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Innovation at Core", ta: "மையத்தில் புதுமை", desc: "We are pioneers in AI..." },
            { icon: Brain, title: "Intelligent Solutions", ta: "நுண்ணறிவு தீர்வுகள்", desc: "Our products are designed..." },
            { icon: CheckCircle, title: "User-Centric Design", ta: "பயனர் மைய வடிவமைப்பு", desc: "We prioritize user experience..." }
          ].map(({ icon: Icon, title, ta, desc }, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-2"><Icon className="h-8 w-8 text-primary" /></div>
                <CardTitle className="font-headline">{t({ en: title, ta })}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">{t({ en: desc, ta: '' })}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="text-center py-10 bg-card rounded-lg shadow-sm">
        <h2 className="text-3xl font-headline font-semibold mb-4">{t({ en: "Our Flagship AI Tools", ta: "எங்கள் முதன்மை AI கருவிகள்" })}</h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-6">{t({ en: "Discover AI tools designed to enhance productivity and creativity.", ta: "AI கருவிகளை கண்டறியவும்." })}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {homeTools.map(tool => {
            const IconComponent = getIconComponent(tool.iconName);
            return (
              <Card key={tool.id} className="text-left hover:border-primary">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                    <CardTitle className="font-headline text-xl">{tool.name[language]}</CardTitle>
                  </div>
                  <CardDescription>{tool.description[language].substring(0, 90)}...</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href={`/products/${tool.id}`}>{t({ en: "Learn More", ta: "மேலும் அறிக" })} →</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-6">
          <Button variant="outline" asChild>
            <Link href="/products">{t({ en: "View All AI Tools", ta: "அனைத்து AI கருவிகள்" })}</Link>
          </Button>
        </div>
      </section>

      {/* About & Video Section */}
      <section className="py-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-headline font-semibold">{t({ en: "Discover Moh-AI Tech: Our Story", ta: "எங்கள் கதை" })}</h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">{t({ en: "Watch our company overview soon.", ta: "எங்கள் நிறுவன மேலோட்டத்தை விரைவில் பாருங்கள்." })}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video bg-muted rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center p-6">
              <PlayCircle className="h-14 w-14 text-primary mx-auto mb-3" />
              <p className="font-semibold">{t({ en: "Coming Soon", ta: "விரைவில்" })}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section className="flex flex-col md:flex-row items-center gap-8 py-12">
        <div className="md:w-1/2">
          <Image
            src="/images/general/home1.png"
            alt={t({ en: "AI Technology", ta: "AI தொழில்நுட்பம்"})}
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-headline font-semibold mb-4">
            {t({en: "Join the AI Revolution", ta: "AI புரட்சியில் இணையுங்கள்"})}
          </h2>
          <p className="text-muted-foreground mb-6">
            {t({
              en: "Moh-AI Tech is committed to making advanced AI accessible and beneficial for everyone. Whether you're looking to optimize business processes, enhance creative workflows, or simply explore the potential of artificial intelligence, we have the tools and expertise to help you succeed.",
              ta: "மேம்பட்ட AI-ஐ அனைவருக்கும் அணுகக்கூடியதாகவும் நன்மை பயக்கும் வகையிலும் மாற்றுவதில் Moh-AI Tech உறுதிபூண்டுள்ளது. நீங்கள் வணிக செயல்முறைகளை மேம்படுத்த விரும்பினாலும், படைப்பாற்றல் பணிப்பாய்வுகளை மேம்படுத்த விரும்பினாலும், அல்லது செயற்கை நுண்ணறிவின் திறனை ஆராய விரும்பினாலும், நீங்கள் வெற்றிபெற உதவும் கருவிகளும் நிபுணத்துவமும் எங்களிடம் உள்ளன."
            })}
          </p>
          <Button asChild>
            <Link href="/about">{t({en: "Learn More About Us", ta: "எங்களைப் பற்றி மேலும் அறிக"})}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
