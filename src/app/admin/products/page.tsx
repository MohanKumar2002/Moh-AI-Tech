
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/page-header';
import { productsData } from '@/lib/data-store';
import type { Product } from '@/types';
import { PlusCircle, Edit, Package } from 'lucide-react'; // Using Package as a generic product icon
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import DeleteButton from '@/components/admin/delete-button';
import { deleteProduct } from '@/actions/product';
import { getIconComponent } from '@/lib/icon-map';

async function getProducts(): Promise<Product[]> {
  return Array.from(productsData.values()).sort((a, b) => a.name.en.localeCompare(b.name.en));
}

export default async function ManageProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <PageHeader title="Manage Products" className="text-left mb-0" />
        <Button asChild>
          <Link href="/admin/products/add">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Product
          </Link>
        </Button>
      </div>

      {products.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {products.map(product => {
            const IconComponent = getIconComponent(product.iconName);
            return (
              <Card key={product.id} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                    <CardTitle className="font-headline text-lg line-clamp-2">{product.name.en}</CardTitle>
                  </div>
                  <CardDescription className="text-xs">ID: {product.id}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {product.imageUrl && (
                    <div className="relative h-40 w-full mb-2 rounded overflow-hidden border">
                      <Image src={product.imageUrl} alt={product.name.en} layout="fill" objectFit="cover" data-ai-hint={product.dataAiHint || 'product image'}/>
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground line-clamp-3">{product.description.en}</p>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/products/edit/${product.id}`}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Link>
                  </Button>
                  <DeleteButton itemId={product.id} itemName={product.name.en} deleteAction={deleteProduct} itemTypeLabel="product" />
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">No products found. Add one to get started!</p>
      )}
    </div>
  );
}

export const dynamic = 'force-dynamic'; // Ensure data is fresh
