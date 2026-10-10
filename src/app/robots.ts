import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://moh-ai-tech.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/documind/dashboard/',
        '/documind/chat/',
        '/api/',
        '/admin/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
