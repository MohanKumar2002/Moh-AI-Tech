'use client';

import { useLanguage } from '@/contexts/language-context';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto p-6 text-sm leading-6">
      <h1 className="text-xl font-bold mb-4">
        {t({
          en: 'Terms & Conditions',
          ta: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்'
        })}
      </h1>

      <p className="mb-4">
        {t({
          en: "Welcome to MOH AI TECH. By accessing or using our services, you agree to comply with and be bound by the following terms. Please read them carefully.",
          ta: "MOH AI TECH-ஐ வரவேற்கிறோம். எங்கள் சேவைகளை அணுகுவதோ அல்லது பயன்படுத்துவதோ மூலம், நீங்கள் பின்வரும் விதிமுறைகளை ஒத்துக்கொள்கிறீர்கள். தயவுசெய்து அவற்றை கவனமாக படிக்கவும்."
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '1. Ownership', ta: '1. உரிமை' })}</h2>
      <p>
        {t({
          en: "MOH AI TECH is a government-registered sole proprietorship under MSME Reg. No. UDYAM-TN-14-0088280. All intellectual property associated with our tools, services, and brand belongs to MOH AI TECH.",
          ta: "MOH AI TECH என்பது இந்திய அரசால் பதிவு செய்யப்பட்ட தனிநபர் உரிமையுள்ள நிறுவனம் (MSME Reg. No. UDYAM-TN-14-0088280). எங்கள் கருவிகள், சேவைகள் மற்றும் பிராண்டுடன் தொடர்புடைய அனைத்து அறிவுசார் சொத்துகளும் MOH AI TECH-க்கு சொந்தமானவை."
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '2. Tool Usage', ta: '2. கருவிகளின் பயன்பாடு' })}</h2>
      <p>
        {t({
          en: "Our AI tools are provided for educational, personal, research, or professional purposes. Misuse—including illegal, unethical, or harmful activities—is strictly prohibited. We reserve the right to suspend or terminate access for violations.",
          ta: "எங்கள் AI கருவிகள் கல்வி, தனிப்பட்ட, ஆராய்ச்சி அல்லது தொழில்முறை பயன்பாட்டிற்காக வழங்கப்படுகின்றன. சட்டவிரோதமான, ஒழுக்கமற்ற அல்லது தீங்கான நடவடிக்கைகள் உள்ளிட்ட தவறான பயன்பாடு கண்டிப்பாகத் தடைசெய்யப்படுகிறது. விதிமுறைகளை மீறினால் அணுகலை இடைநிறுத்த அல்லது ரத்துசெய்ய எங்களுக்கு உரிமை உண்டு."
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '3. User Accounts', ta: '3. பயனர் கணக்குகள்' })}</h2>
      <p>
        {t({
          en: "Users are responsible for maintaining the confidentiality of their account credentials. All activity under your account is considered your responsibility. Notify us immediately if you suspect unauthorized access.",
          ta: "உங்கள் கணக்கின் விபரங்களை இரகசியமாக வைத்திருக்க பயனர் பொறுப்பாளியாக இருக்கிறீர்கள். உங்கள் கணக்கில் நடைபெறும் அனைத்து நடவடிக்கைகளுக்கும் நீங்கள் பொறுப்பாக இருக்கிறீர்கள். அனுமதியின்றி அணுகல் இருந்தால் உடனடியாக எங்களைத் தொடர்புகொள்ளுங்கள்."
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '4. Content Ownership & Responsibility', ta: '4. உள்ளடக்க உரிமையும் பொறுப்பும்' })}</h2>
      <p>
        {t({
          en: "Content generated through our platform may involve AI output. Users retain rights over their input and any legally permitted usage of generated content. We do not monitor or claim ownership over user-generated content.",
          ta: "எங்கள் தளத்தின் மூலம் உருவாகும் உள்ளடக்கம் AI வெளியீட்டை உள்ளடக்கியிருக்கலாம். பயனர்கள் தங்கள் உள்ளீடுகளுக்கும், சட்டப்படி அனுமதிக்கப்பட்ட பயன்பாட்டிற்கும் உரிமையைத் தக்கவைத்திருக்கிறார்கள். பயனர் உருவாக்கிய உள்ளடக்கத்திற்கு எங்கள் உரிமை இல்லை அல்லது கண்காணிக்கப்படவில்லை."
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '5. Modifications & Termination', ta: '5. மாற்றங்களும் நிறைவேற்றலும்' })}</h2>
      <p>
        {t({
          en: "We may update these terms at any time without prior notice. It is your responsibility to review them regularly. Continued use of our services after changes implies your acceptance of the revised terms.",
          ta: "இந்த விதிமுறைகள் எப்போது வேண்டுமானாலும் முன்நறுப்பில்லாமல் புதுப்பிக்கப்படலாம். அவற்றை அடிக்கடி பார்வையிடுவது உங்கள் பொறுப்பு. மாற்றங்களுக்குப் பிறகு எங்கள் சேவைகளை தொடர்ந்து பயன்படுத்துவது, புதுப்பிக்கப்பட்ட விதிகளை ஏற்கின்றீர்கள் என்பதை குறிக்கிறது."
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '6. Disclaimers & Limitations', ta: '6. பொறுப்புவிலகலும் வரம்புகளும்' })}</h2>
      <p>
        {t({
          en: "We do not guarantee uninterrupted service, accuracy of AI outputs, or suitability for any particular purpose. Use at your own risk. We are not liable for losses incurred due to platform usage.",
          ta: "தொடர்ச்சியான சேவை, AI வெளியீடுகளின் துல்லியம், அல்லது குறிப்பிட்ட நோக்கத்திற்கான பொருத்தத்தை நாங்கள் உத்திரவாதமளிக்கவில்லை. உங்கள் சொந்த ஆபத்தில் பயன்படுத்துங்கள். எங்கள் தளத்தின் பயன்பாட்டால் ஏற்படும் இழப்புகளுக்கு நாங்கள் பொறுப்பேற்க முடியாது."
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '7. Governing Law', ta: '7. சட்ட ஒழுங்குகள்' })}</h2>
      <p>
        {t({
          en: "These terms are governed by the laws of India. Any disputes arising shall be subject to jurisdiction in the courts of Tamil Nadu, India.",
          ta: "இந்த விதிமுறைகள் இந்தியாவின் சட்டங்களுக்கு உட்பட்டவை. ஏற்படும் எந்தவொரு சிக்கலும் தமிழ்நாட்டிலுள்ள நீதிமன்றங்களில் தீர்க்கப்படும்."
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '8. Contact Information', ta: '8. தொடர்பு தகவல்' })}</h2>
      <p>
        {t({
          en: "For questions, concerns, or legal inquiries, contact us at:",
          ta: "கேள்விகள், சந்தேகங்கள் அல்லது சட்ட தொடர்பான விசாரணைகளுக்கு எங்களைத் தொடர்புகொள்ளவும்:"
        })}
      </p>
      <p className="mt-1">Email: <a href="mailto:moh.aitech@gmail.com" className="text-primary hover:underline">moh.aitech@gmail.com</a></p>
    </div>
  );
}
