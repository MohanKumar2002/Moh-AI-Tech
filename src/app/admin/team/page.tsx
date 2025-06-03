
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/shared/page-header';
import { teamMembersData } from '@/lib/data-store';
import type { TeamMember } from '@/types';
import { PlusCircle, Edit, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import DeleteButton from '@/components/admin/delete-button';
import { deleteTeamMember } from '@/actions/team';

async function getTeamMembers(): Promise<TeamMember[]> {
  return Array.from(teamMembersData.values()).sort((a, b) => a.name.en.localeCompare(b.name.en));
}

export default async function ManageTeamPage() {
  const members = await getTeamMembers();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <PageHeader title="Manage Team Members" className="text-left mb-0" />
        <Button asChild>
          <Link href="/admin/team/add">
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Member
          </Link>
        </Button>
      </div>

      {members.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {members.map(member => (
            <Card key={member.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                    {member.imageUrl && (
                        <Image 
                            src={member.imageUrl} 
                            alt={member.name.en} 
                            width={60} 
                            height={60} 
                            className="rounded-full border"
                            data-ai-hint={member.imageUrl.startsWith('https://placehold.co') ? (member.dataAiHint || 'portrait person') : undefined}
                        />
                    )}
                  <div>
                    <CardTitle className="font-headline text-lg line-clamp-2">{member.name.en}</CardTitle>
                    <CardDescription className="text-xs">ID: {member.id}</CardDescription>
                  </div>
                </div>
                 <p className="text-sm text-primary font-medium">{member.role.en}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{member.bio.en}</p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 border-t pt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/team/edit/${member.id}`}>
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </Link>
                </Button>
                <DeleteButton itemId={member.id} itemName={member.name.en} deleteAction={deleteTeamMember} itemTypeLabel="team member" />
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">No team members found. Add one to get started!</p>
      )}
    </div>
  );
}

export const dynamic = 'force-dynamic';
