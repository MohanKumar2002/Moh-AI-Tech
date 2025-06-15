
'use client';

import Image from 'next/image';
import PageHeader from '@/components/shared/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Users as TeamIcon } from 'lucide-react'; 
import type { TeamMember } from '@/types';
import { teamMembersData } from '@/lib/data-store'; // Changed import
import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';

async function getTeamMembersSsr(): Promise<TeamMember[]> {
  return Array.from(teamMembersData.values());
}


export default function AboutUsPage() {
  const { language, t } = useLanguage();
  const [members, setMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    getTeamMembersSsr().then(setMembers);
  }, []);


  return (
    <div className="space-y-16">
      <PageHeader
        title={t({ en: "About Moh-AI Tech", ta: "மோ-ஏஐ டெக் பற்றி" })}
        description={t({ en: "Pioneering the future of intelligence, one innovation at a time.", ta: "அறிவின் எதிர்காலத்தை ஒரு நேரத்தில் ஒரு புதுமையுடன் முன்னோடியாக உருவாக்குகிறோம்." })}
      />

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-headline font-semibold mb-4">{t({ en: "Our Story", ta: "எங்கள் கதை" })}</h2>
          <p className="text-muted-foreground mb-4">
            {t({ 
              en: "Founded on the belief that artificial intelligence can solve humanity's most pressing challenges, Moh-AI Tech emerged from a collective passion for innovation and a desire to make a tangible impact. Our journey began with a small team of visionary researchers and engineers dedicated to democratizing AI.",
              ta: "செயற்கை நுண்ணறிவு மனிதகுலத்தின் மிக அவசரமான சவால்களைத் தீர்க்க முடியும் என்ற நம்பிக்கையில் நிறுவப்பட்டது, மோ-ஏஐ டெக் புதுமைக்கான ஒரு கூட்டு ஆர்வத்திலிருந்தும் ஒரு உறுதியான தாக்கத்தை உருவாக்கும் விருப்பத்திலிருந்தும் உருவானது. எங்கள் பயணம் AI-ஐ ஜனநாயகப்படுத்துவதற்காக அர்ப்பணிக்கப்பட்ட ஒரு சிறிய தொலைநோக்கு ஆராய்ச்சியாளர்கள் மற்றும் பொறியாளர்கள் குழுவுடன் தொடங்கியது."
            })}
          </p>
          <p className="text-muted-foreground">
            {t({
              en: "Today, we are a growing force in the AI landscape, committed to developing ethical, reliable, and transformative AI solutions that empower businesses and individuals worldwide. We believe in collaboration, continuous learning, and a future where technology and humanity co-exist to create extraordinary outcomes.",
              ta: "இன்று, நாங்கள் AI உலகில் வளர்ந்து வரும் ஒரு சக்தியாக இருக்கிறோம், உலகெங்கிலும் உள்ள வணிகங்கள் மற்றும் தனிநபர்களுக்கு அதிகாரம் அளிக்கும் நெறிமுறை, நம்பகமான மற்றும் மாற்றத்தக்க AI தீர்வுகளை உருவாக்குவதில் நாங்கள் உறுதியாக உள்ளோம். ஒத்துழைப்பு, தொடர்ச்சியான கற்றல் மற்றும் தொழில்நுட்பமும் மனிதகுலமும் இணைந்து அசாதாரணமான விளைவுகளை உருவாக்கும் எதிர்காலத்தை நாங்கள் நம்புகிறோம்."
            })}
          </p>
        </div>
        <div>
          <Image 
            src="/images/team-working-banner.jpeg" 
            alt={t({ en: "Moh-AI Tech Team Working", ta: "மோ-ஏஐ டெக் குழு வேலை செய்கிறது" })}
            width={600} 
            height={400} 
            className="rounded-lg shadow-xl"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader className="items-center text-center">
            <div className="p-3 bg-primary/10 rounded-full mb-3">
                <Target className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="font-headline text-2xl">{t({ en: "Our Mission", ta: "எங்கள் நோக்கம்" })}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              {t({
                en: "To democratize artificial intelligence by creating powerful, accessible, and ethical AI tools that drive innovation, enhance human potential, and solve real-world problems.",
                ta: "புதுமையை ஊக்குவிக்கும், மனித திறனை மேம்படுத்தும் மற்றும் நிஜ உலகப் பிரச்சனைகளைத் தீர்க்கும் சக்திவாய்ந்த, அணுகக்கூடிய மற்றும் நெறிமுறை AI கருவிகளை உருவாக்குவதன் மூலம் செயற்கை நுண்ணறிவை ஜனநாயகப்படுத்துவது."
              })}
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="items-center text-center">
             <div className="p-3 bg-accent/10 rounded-full mb-3">
                <Eye className="h-10 w-10 text-accent" />
             </div>
            <CardTitle className="font-headline text-2xl">{t({ en: "Our Vision", ta: "எங்கள் பார்வை" })}</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">
              {t({
                en: "To be a global leader in AI innovation, shaping a future where intelligent technology seamlessly integrates with daily life to create a smarter, more efficient, and equitable world.",
                ta: "AI புதுமையில் உலகளாவிய தலைவராக இருக்க வேண்டும், புத்திசாலித்தனமான தொழில்நுட்பம் அன்றாட வாழ்க்கையுடன் தடையின்றி ஒருங்கிணைந்து ஒரு புத்திசாலித்தனமான, திறமையான மற்றும் சமமான உலகத்தை உருவாக்கும் எதிர்காலத்தை வடிவமைப்பது."
              })}
            </p>
          </CardContent>
        </Card>
      </section>

 <section>
  <h2 className="text-3xl font-headline font-semibold text-center mb-10">
    {t({ en: "Meet Our Team", ta: "எங்கள் அணியைச் சந்திக்கவும்" })}
  </h2>
  <div
    className={`grid gap-8 ${
      members.length === 1
        ? 'place-items-center' // center single card
        : 'sm:grid-cols-2 lg:grid-cols-3' // grid layout for 2+ members
    }`}
  >
    {members.map((member: TeamMember) => (
      <Card
        key={member.id}
        className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <CardHeader className="items-center">
          <Image
            src={member.imageUrl}
            alt={member.name[language]}
            width={120}
            height={120}
            className="rounded-full mb-4 border-4 border-primary/20"
            data-ai-hint={
              member.imageUrl.startsWith('https://placehold.co')
                ? member.dataAiHint || 'portrait person'
                : undefined
            }
          />
          <CardTitle className="font-headline text-xl">
            {member.name[language]}
          </CardTitle>
          <p className="text-sm text-primary font-medium">
            {member.role[language]}
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            {member.bio[language]}
          </p>
        </CardContent>
      </Card>
    ))}
  </div>
</section>

      
      <section className="text-center py-12 bg-card rounded-lg shadow-sm">
        <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
            <TeamIcon className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-3xl font-headline font-semibold mb-4">{t({ en: "Join Our Journey", ta: "எங்கள் பயணத்தில் இணையுங்கள்" })}</h2>
        <p className="max-w-xl mx-auto text-muted-foreground mb-6">
          {t({
            en: "We are always looking for passionate and talented individuals to join our mission. Explore our careers page or get in touch to learn more about how you can contribute to the future of AI with Moh-AI Tech.",
            ta: "எங்கள் பணியில் சேர ஆர்வமுள்ள மற்றும் திறமையான நபர்களை நாங்கள் எப்போதும் தேடுகிறோம். எங்கள் வேலைவாய்ப்பு பக்கத்தை ஆராயுங்கள் அல்லது மோ-ஏஐ டெக் உடன் AI இன் எதிர்காலத்திற்கு நீங்கள் எவ்வாறு பங்களிக்க முடியும் என்பதைப் பற்றி மேலும் அறிய எங்களைத் தொடர்பு கொள்ளுங்கள்."
          })}
        </p>
        <div className="space-x-4">
            <Link href="/careers" className="text-primary hover:underline">{t({ en: "View Careers", ta: "வேலைவாய்ப்புகளைக் காண்க" })}</Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/contact" className="text-primary hover:underline">{t({ en: "Contact Us", ta: "எங்களைத் தொடர்புகொள்ளவும்" })}</Link>
        </div>
      </section>
    </div>
  );
}
