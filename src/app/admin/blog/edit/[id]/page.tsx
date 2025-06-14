
'use client';

import BlogForm from '@/components/admin/blog-form';
import { updateBlogPost } from '@/actions/blog';
import { blogPostsData } from '@/lib/data-store';
import type { BlogPostMapping } from '@/types';
import PageHeader from '@/components/shared/page-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';


async function getBlogPostSsr(id: string): Promise<BlogPostMapping | null> {
  return blogPostsData.get(id) || null;
}

export default function EditBlogPostPage() {
  const { t } = useLanguage();
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';

  const [post, setPost] = useState<BlogPostMapping | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getBlogPostSsr(id).then(data => {
        setPost(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>{t({ en: "Loading...", ta: "ஏற்றுகிறது..." })}</div>;
  }

  if (!post) {
    return (
      <div>
        <PageHeader 
            title={t({ en: "Error: Post Not Found", ta: "பிழை: இடுகை காணப்படவில்லை" })} 
            className="text-left mb-8" 
        />
        <p>{t({ en: "The blog post you are trying to edit does not exist.", ta: "நீங்கள் திருத்த முயற்சிக்கும் வலைப்பதிவு இடுகை இல்லை." })}</p>
        <Button asChild variant="link" className="mt-4 pl-0">
            <Link href="/admin/blog"><ArrowLeft className="mr-2 h-4 w-4"/>{t({ en: "Back to Blog Management", ta: "வலைப்பதிவு நிர்வாகத்திற்குத் திரும்பு" })}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <PageHeader 
        title={t({ en: "Edit Blog Post", ta: "வலைப்பதிவு இடுகையைத் திருத்து" })} 
        className="text-left mb-8" 
      />
      <BlogForm 
        action={updateBlogPost} 
        initialData={post}
        formTitle={t({ en: "Update Post Details", ta: "இடுகை விவரங்களைப் புதுப்பிக்கவும்" })}
        submitButtonText={t({ en: "Save Changes", ta: "மாற்றங்களைச் சேமி" })}
      />
    </div>
  );
}
