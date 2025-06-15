'use client';

import { useLanguage } from '@/contexts/language-context';

export default function RefundPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto p-6 text-sm leading-6">
      <h1 className="text-xl font-bold mb-4">
        {t({
          en: 'Refund & Cancellation Policy',
          ta: 'பணத்தைத் திரும்பப்பெறும் மற்றும் இரத்து கொள்கை'
        })}
      </h1>

      <p className="mb-4">
        {t({
          en: 'Thank you for choosing MOH AI TECH. Please read our refund and cancellation policy carefully before making any purchases or subscribing to our services.',
          ta: 'MOH AI TECH-ஐ தேர்ந்தெடுத்ததற்கு நன்றி. எங்கள் சேவைகளை வாங்குவதற்கு முன் பணத்தைத் திரும்பப்பெறும் மற்றும் இரத்து கொள்கையை தயவுசெய்து கவனமாகப் படிக்கவும்.'
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '1. Digital Services', ta: '1. டிஜிட்டல் சேவைகள்' })}</h2>
      <p>
        {t({
          en: 'All AI tools and services provided are digital and generate results instantly. As such, once a tool is accessed or a service is used, refunds will not be issued.',
          ta: 'எங்கள் AI கருவிகள் மற்றும் சேவைகள் அனைத்தும் உடனடி முடிவுகளை உருவாக்கும் டிஜிட்டல் சேவைகளாகும். ஒருமுறை கருவி அணுகப்பட்டால் அல்லது சேவை பயன்படுத்தப்பட்டால், பணத்தைத் திரும்ப அளிக்க முடியாது.'
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '2. Exceptions', ta: '2. விதிவிலக்குகள்' })}</h2>
      <p>
        {t({
          en: 'Refunds may be considered under specific conditions:',
          ta: 'கொடுக்கப்பட்ட சில சூழ்நிலைகளில் பணத்தைத் திரும்ப அளிக்க பரிசீலிக்கப்படும்:'
        })}
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          {t({ en: 'Duplicate payments made accidentally', ta: 'தவறுதலாக செய்யப்பட்ட இரட்டை கட்டணங்கள்' })}
        </li>
        <li>
          {t({ en: 'Payment was successful, but the service failed to load or function', ta: 'பணம் செலுத்தப்பட்டது ஆனால் சேவை சரியாக செயல்படவில்லை' })}
        </li>
      </ul>

      <h2 className="font-semibold mt-6">{t({ en: '3. Subscription Cancellation', ta: '3. சந்தாவை இரத்து செய்தல்' })}</h2>
      <p>
        {t({
          en: 'You may cancel your subscription at any time. Access to Pro features will remain active until the end of the billing cycle. No partial or prorated refunds will be issued.',
          ta: 'நீங்கள் எப்போது வேண்டுமானாலும் உங்கள் சந்தாவை இரத்து செய்யலாம். உங்கள் Pro அம்சங்கள் தற்போதைய பில்லிங் சுழற்சி முடியும்வரை செயலில் இருக்கும். பகுதியளவில் பணம் திருப்பி வழங்க முடியாது.'
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '4. Processing Time', ta: '4. செயலாக்க நேரம்' })}</h2>
      <p>
        {t({
          en: 'Approved refunds (in case of exceptions) will be processed within 7–10 business days.',
          ta: 'அங்கீகரிக்கப்பட்ட பணத்தைத் திரும்பப்பெறும் கோரிக்கைகள் (விதிவிலக்குகளுக்குள் வருபவை) 7–10 வேலை நாட்களுக்குள் செயலாக்கப்படும்.'
        })}
      </p>

      <h2 className="font-semibold mt-6">{t({ en: '5. Contact Us', ta: '5. எங்களை தொடர்புகொள்ள' })}</h2>
      <p>
        {t({
          en: 'For refund-related issues, please email us at:',
          ta: 'பணத்தைத் திரும்பப்பெறும் தொடர்பான பிரச்சனைகளுக்கு கீழ்காணும் முகவரியில் எங்களைத் தொடர்புகொள்ளவும்:'
        })}
      </p>
      <p className="mt-1">
        Email: <a href="mailto:moh.aitech@gmail.com" className="text-primary hover:underline">moh.aitech@gmail.com</a>
      </p>
    </div>
  );
}
