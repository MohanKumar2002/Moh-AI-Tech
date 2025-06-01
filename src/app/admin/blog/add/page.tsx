
'use client';
import BlogForm from '@/components/admin/blog-form';
import { createBlogPost } from '@/actions/blog';
import PageHeader from '@/components/shared/page-header';
import { useLanguage } from '@/contexts/language-context';

export default function AddBlogPostPage() {
  const { t } = useLanguage();
  return (
    <div>
      <PageHeader 
        title={t({ en: "Add New Blog Post", ta: "புதிய வலைப்பதிவு இடுகையைச் சேர்" })} 
        className="text-left mb-8" 
      />
      <BlogForm 
        action={createBlogPost} 
        formTitle={t({ en: "Create New Post", ta: "புதிய இடுகையை உருவாக்கு" })}
        submitButtonText={t({ en: "Create Post", ta: "இடுகையை உருவாக்கு" })}
      />
    </div>
  );
}
