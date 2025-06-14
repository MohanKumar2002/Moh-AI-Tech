import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/page-header';
import { careerOpeningsData } from '@/lib/data-store';
import type { CareerOpening } from '@/types';
import { PlusCircle, Edit, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import DeleteButton from '@/components/admin/delete-button';
import { deleteCareerOpening } from '@/actions/career';


async function getCareerOpenings(): Promise<CareerOpening[]> {
  return Array.from(careerOpeningsData.values()).sort((a,b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
}

export default async function ManageCareersPage() {
  const openings = await getCareerOpenings();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <PageHeader title="Manage Career Openings" className="text-left mb-0" />
        <Button asChild>
          <Link href="/admin/careers/add">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Opening
          </Link>
        </Button>
      </div>

      {openings.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {openings.map(opening => (
            <Card key={opening.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-lg">{opening.title}</CardTitle>
                <CardDescription className="text-xs flex flex-wrap gap-x-3 gap-y-1">
                    <span className="flex items-center"><MapPin className="h-3 w-3 mr-1"/>{opening.location}</span>
                    <span className="flex items-center"><Briefcase className="h-3 w-3 mr-1"/>{opening.type}</span>
                    <span>Dept: {opening.department}</span>
                    <span>Posted: {new Date(opening.postedDate).toLocaleDateString()}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{opening.description}</p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 border-t pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/careers/edit/${opening.id}`}>
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </Link>
                </Button>
                <DeleteButton itemId={opening.id} itemName={opening.title} deleteAction={deleteCareerOpening} itemTypeLabel="career opening" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">No career openings found. Add one to get started!</p>
      )}
    </div>
  );
}
