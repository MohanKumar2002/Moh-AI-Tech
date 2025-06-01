
'use client'; // Keep client for potential future hooks, but data fetching is server-side compatible

import Image from 'next/image';
import Link from 'next/link';
import { blogPostsData } from '@/lib/data-store';
import type { BlogPostMapping } from '@/types';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


// This function can be kept for generating static params if needed, but we'll fetch data client side for simplicity with context
// export async function generateStaticParams() {
//   const posts = Array.from(blogPostsData.values());
//   return posts.map(post => ({
//     slug: post.slug,
//   }));
// }

// Fetches data on the client side
async function getPostBySlug(slug: string): Promise<BlogPostMapping | undefined> {
  return Array.from(blogPostsData.values()).find(post => post.slug === slug);
}


export default function BlogPostPage() {
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const slug = pathname.split('/').pop() || '';
  
  const [post, setPost] = useState<BlogPostMapping | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      getPostBySlug(slug).then(data => {
        setPost(data || null);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [slug]);

  // Metadata generation needs to be handled differently if page is fully client-rendered
  // For now, we'll remove generateMetadata or adapt it if we switch to proper SSR/SSG for this page.
  // For dynamic title based on client-fetched data:
  useEffect(() => {
    if (post?.title) {
      document.title = `${post.title} | ${t(APP_NAME_TRANSLATIONS)}`;
    } else if (!loading && !post) {
       document.title = `${t({en: "Post Not Found", ta: "இடுகை காணப்படவில்லை"})} | ${t(APP_NAME_TRANSLATIONS)}`;
    }
  }, [post, loading, t, language]);

  const APP_NAME_TRANSLATIONS = { en: "Moh-AI Tech Blog", ta: "மோ-ஏஐ டெக் வலைப்பதிவு" };


  if (loading) {
    return (
       <div className="text-center py-10">
        <p>{t({en: "Loading post...", ta: "இடுகை ஏற்றப்படுகிறது..."})}</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold mb-4">{t({ en: "Post not found", ta: "இடுகை காணப்படவில்லை" })}</h1>
        <Button asChild variant="outline">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t({ en: "Back to Blog", ta: "வலைப்பதிவுக்குத் திரும்பு" })}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto py-8">
      <div className="mb-6">
        <Button asChild variant="ghost" className="mb-4 text-primary hover:text-primary/80 pl-0">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t({ en: "Back to Blog", ta: "வலைப்பதிவுக்குத் திரும்பு" })}
          </Link>
        </Button>
        <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4 text-primary">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
          <span className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            {new Date(post.date).toLocaleDateString(language === 'ta' ? 'ta-IN' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span className="flex items-center">
            <UserCircle className="h-4 w-4 mr-1.5" />
            {t({ en: "By", ta: "எழுதியவர்" })} {post.author}
          </span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map(tag => (
               <Badge key={tag} variant="secondary" className="text-xs flex items-center">
                 <Tag className="h-3 w-3 mr-1"/> {tag}
               </Badge>
            ))}
          </div>
        )}
      </div>

      {post.imageUrl && (
        <div className="relative w-full h-72 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            layout="fill" 
            objectFit="cover" 
            data-ai-hint={post.dataAiHint || "article banner"}
            priority
          />
        </div>
      )}
      
      <Separator className="my-8" />

      <div
        className="prose prose-lg dark:prose-invert max-w-none text-foreground space-y-6 
                   prose-headings:font-headline prose-headings:text-primary 
                   prose-a:text-accent prose-a:hover:text-accent/80
                   prose-strong:text-foreground/90"
        dangerouslySetInnerHTML={{ __html: post.content }} // Content is assumed to be pre-translated or language-neutral
      />
      
      <Separator className="my-12" />

      <div className="text-center">
         <Button asChild variant="default">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t({ en: "Explore More Articles", ta: "மேலும் கட்டுரைகளை ஆராயுங்கள்" })}
          </Link>
        </Button>
      </div>
    </article>
  );
}

// Removed generateMetadata as it's complex with client-side data fetching for dynamic routes + context.
// Title is set dynamically in useEffect.
// For full SEO with SSR/SSG, a different data fetching strategy would be needed for this page.
