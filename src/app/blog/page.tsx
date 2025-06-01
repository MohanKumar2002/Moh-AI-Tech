
'use client';

import PageHeader from '@/components/shared/page-header';
import BlogCard from '@/components/features/blog/blog-card';
import { blogPostsData } from '@/lib/data-store'; // Using in-memory data
import type { BlogPostMapping } from '@/types';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';

async function getBlogPostsSsr(): Promise<BlogPostMapping[]> {
  // In a real app, fetch this from a CMS or database
  // For now, convert Map to Array
  return Array.from(blogPostsData.values()).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}


export default function BlogPage() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState<BlogPostMapping[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getBlogPostsSsr();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);


  return (
    <div className="space-y-12">
      <PageHeader
        title={t({ en: "Moh-AI Tech Blog", ta: "மோ-ஏஐ டெக் வலைப்பதிவு" })}
        description={t({ en: "Insights, news, and updates from the world of Artificial Intelligence.", ta: "செயற்கை நுண்ணறிவு உலகத்திலிருந்து நுண்ணறிவுகள், செய்திகள் மற்றும் புதுப்பிப்புகள்." })}
      />
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg">
          {t({ en: "No blog posts yet. Check back soon!", ta: "இன்னும் வலைப்பதிவு இடுகைகள் இல்லை. விரைவில் மீண்டும் பார்க்கவும்!" })}
        </p>
      )}
    </div>
  );
}
