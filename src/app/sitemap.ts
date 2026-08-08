import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://moh-ai-tech.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-08-08'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-08-08'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Blog posts
    {
      url: `${baseUrl}/blog/spinguard-v01-ai-vibration-monitoring`,
      lastModified: new Date('2026-08-08'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/building-hr-agent-resume-screening`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/why-msmes-need-custom-ai`,
      lastModified: new Date('2026-07-02'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/playbook`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/refund`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/documind`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/documind/terms`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/documind/privacy`,
      lastModified: new Date('2026-07-01'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/documind/pricing`,
      lastModified: new Date('2026-08-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

