
'use client';

import TeamMemberForm from '@/components/admin/team-form';
import { updateTeamMember } from '@/actions/team';
import { teamMembersData } from '@/lib/data-store';
import type { TeamMember } from '@/types';
import PageHeader from '@/components/shared/page-header';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

async function getTeamMemberSsr(id: string): Promise<TeamMember | null> {
  return teamMembersData.get(id) || null;
}

export default function EditTeamMemberPage() {
  const { t } = useLanguage();
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : '';

  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getTeamMemberSsr(id).then(data => {
        setMember(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>{t({ en: "Loading...", ta: "ஏற்றுகிறது..." })}</div>;
  }

  if (!member) {
    return (
      <div>
        <PageHeader 
            title={t({ en: "Error: Team Member Not Found", ta: "பிழை: குழு உறுப்பினர் காணப்படவில்லை" })} 
            className="text-left mb-8" 
        />
        <p>{t({ en: "The team member you are trying to edit does not exist.", ta: "நீங்கள் திருத்த முயற்சிக்கும் குழு உறுப்பினர் இல்லை." })}</p>
        <Button asChild variant="link" className="mt-4 pl-0">
            <Link href="/admin/team"><ArrowLeft className="mr-2 h-4 w-4"/>{t({ en: "Back to Team Management", ta: "குழு நிர்வாகத்திற்குத் திரும்பு" })}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <PageHeader 
        title={t({ en: "Edit Team Member", ta: "குழு உறுப்பினரைத் திருத்து" })} 
        className="text-left mb-8" 
      />
      <TeamMemberForm 
        action={updateTeamMember} 
        initialData={member}
        formTitle={t({ en: "Update Member Details", ta: "உறுப்பினர் விவரங்களைப் புதுப்பிக்கவும்" })}
        submitButtonText={t({ en: "Save Changes", ta: "மாற்றங்களைச் சேமி" })}
      />
    </div>
  );
}

export const dynamic = 'force-dynamic';

