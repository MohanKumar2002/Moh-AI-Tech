import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/page-header';
import { blogPostsData } from '@/lib/data-store';
import type { BlogPostMapping } from '@/types';
import { PlusCircle, Edit } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import DeleteButton from '@/components/admin/delete-button';
import { deleteBlogPost } from '@/actions/blog';

async function getBlogPosts(): Promise<BlogPostMapping[]> {
  return Array.from(blogPostsData.values()).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function ManageBlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <PageHeader title="Manage Blog Posts" className="text-left mb-0" />
        <Button asChild>
          <Link href="/admin/blog/add">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Post
          </Link>
        </Button>
      </div>

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {posts.map(post => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="text-xs">
                  Slug: {post.slug} | By: {post.author} | Date: {new Date(post.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 border-t pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/blog/edit/${post.id}`}>
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </Link>
                </Button>
                <DeleteButton itemId={post.id} itemName={post.title} deleteAction={deleteBlogPost} itemTypeLabel="blog post" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">No blog posts found. Add one to get started!</p>
      )}
    </div>
  );
}
