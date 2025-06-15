'use client';

import { useLanguage } from '@/contexts/language-context';

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto p-6 text-sm leading-6">
      <h1 className="text-xl font-bold mb-4">
        {t({
          en: 'Privacy Policy',
          ta: 'தனியுரிமைக் கொள்கை'
        })}
      </h1>

      <p className="mb-4">
        {t({
          en: 'MOH AI TECH is committed to safeguarding your privacy. This policy describes how we collect, use, and protect your information.',
          ta: 'MOH AI TECH உங்கள் தனியுரிமையை பாதுகாக்க உறுதியளிக்கிறது. உங்கள் தகவலை எவ்வாறு சேகரிக்கிறோம், பயன்படுத்துகிறோம் மற்றும் பாதுகாக்கிறோம் என்பதை இந்தக் கொள்கை விளக்குகிறது.'
        })}
      </p>

      <h2 className="font-semibold mt-6">
        {t({ en: '1. Information We Collect', ta: '1. எங்களால் சேகரிக்கப்படும் தகவல்கள்' })}
      </h2>
      <ul className="list-disc ml-6 mt-2">
        <li>
          {t({
            en: 'Basic user details (name, email) collected via Firebase Authentication',
            ta: 'Firebase அத்தாட்சிப்படுத்தலின் மூலம் பெறப்படும் அடிப்படை பயனர் விவரங்கள் (பெயர், மின்னஞ்சல்)'
          })}
        </li>
        <li>
          {t({
            en: 'Prompt inputs and tool usage activity logs',
            ta: 'உங்கள் உத்தரவுகள் மற்றும் கருவி பயன்பாட்டு செயல்பாட்டு பதிவுகள்'
          })}
        </li>
        <li>
          {t({
            en: 'We do not permanently store uploaded personal files',
            ta: 'நீங்கள் பதிவேற்றும் தனிப்பட்ட கோப்புகளை எங்களால் நிரந்தரமாகச் சேமிக்கப்படவில்லை'
          })}
        </li>
      </ul>

      <h2 className="font-semibold mt-6">
        {t({ en: '2. How We Use Your Data', ta: '2. உங்கள் தகவல்களை எவ்வாறு பயன்படுத்துகிறோம்' })}
      </h2>
      <p>
        {t({
          en: 'Your data helps us enhance service quality, track usage for improvements, and enforce fair usage limits.',
          ta: 'சேவையின் தரத்தை மேம்படுத்த, பயன்பாட்டைப் பதிவுசெய்ய மற்றும் சம அளவிலான பயன்பாட்டை உறுதி செய்ய உங்கள் தகவல் பயன்படுகிறது.'
        })}
      </p>

      <h2 className="font-semibold mt-6">
        {t({ en: '3. Data Sharing', ta: '3. தரவுப் பகிர்வு' })}
      </h2>
      <p>
        {t({
          en: 'We do not sell or share your personal data with any third party. Only anonymized, aggregated data may be used for platform optimization.',
          ta: 'நாங்கள் உங்கள் தனிப்பட்ட தரவுகளை மூன்றாம் தரப்பு நிறுவனங்களுடன் பகிரவோ அல்லது விற்கவோ மாட்டோம். ஒளிக்கப்பட்ட, ஒருங்கிணைக்கப்பட்ட தரவுகள் மட்டுமே மேம்படுத்தலுக்காக பயன்படுத்தப்படும்.'
        })}
      </p>

      <h2 className="font-semibold mt-6">
        {t({ en: '4. Cookies', ta: '4. குக்கீகள்' })}
      </h2>
      <p>
        {t({
          en: 'We use cookies solely to manage user login sessions and enhance authentication reliability.',
          ta: 'பயனர் உள்நுழைவு அமர்வுகளை நிர்வகிக்க மற்றும் அத்தாட்சிப்படுத்தலை நம்பகமாக்க குக்கீகளை மட்டுமே பயன்படுத்துகிறோம்.'
        })}
      </p>

      <h2 className="font-semibold mt-6">
        {t({ en: '5. Your Rights', ta: '5. உங்கள் உரிமைகள்' })}
      </h2>
      <p>
        {t({
          en: 'You may request access, correction, or deletion of your data at any time by contacting us.',
          ta: 'நீங்கள் எப்போது வேண்டுமானாலும் உங்கள் தரவை அணுக, திருத்த, அல்லது நீக்க எங்களை தொடர்புகொள்ளலாம்.'
        })}
      </p>

      <h2 className="font-semibold mt-6">
        {t({ en: '6. Contact', ta: '6. தொடர்புக்கு' })}
      </h2>
      <p>
        {t({
          en: 'For any privacy-related inquiries, please contact:',
          ta: 'தனியுரிமை தொடர்பான கேள்விகளுக்கு கீழ்கண்ட முகவரியை அணுகவும்:'
        })}
      </p>
      <p className="mt-1">
        Email: <a href="mailto:moh.aitech@gmail.com" className="text-primary hover:underline">moh.aitech@gmail.com</a>
      </p>
    </div>
  );
}
