import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/documind/dashboard/',
          '/documind/chat/',
          '/documind/login',
          '/documind/signup',
        ],
      },
    ],
    sitemap: 'https://moh-ai-tech.com/sitemap.xml',
  }
}
