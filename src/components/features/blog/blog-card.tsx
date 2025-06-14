import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BlogPostMapping } from '@/types';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';

interface BlogCardProps {
  post: BlogPostMapping;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      
      {/* ✅ Fixed Image Layout with aspect ratio */}
      {post.imageUrl && (
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image 
              src={post.imageUrl} 
              alt={post.title} 
              fill 
              className="object-cover"
              data-ai-hint={post.dataAiHint || "article theme"}
            />
          </div>
        </Link>
      )}

      <CardHeader>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="font-headline text-xl hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </Link>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mt-2">
          <span className="flex items-center">
            <CalendarDays className="h-3.5 w-3.5 mr-1" />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            })}
          </span>
          <span className="flex items-center">
            <UserCircle className="h-3.5 w-3.5 mr-1" />
            {post.author}
          </span>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <CardDescription>{post.excerpt}</CardDescription>

        {post.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded-full flex items-center">
                <Tag className="h-3 w-3 mr-1"/> {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button variant="outline" asChild>
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
