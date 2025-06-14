
'use client';
import TeamMemberForm from '@/components/admin/team-form';
import { createTeamMember } from '@/actions/team';
import PageHeader from '@/components/shared/page-header';
import { useLanguage } from '@/contexts/language-context';

export default function AddTeamMemberPage() {
  const { t } = useLanguage();
  return (
    <div>
      <PageHeader 
        title={t({ en: "Add New Team Member", ta: "புதிய குழு உறுப்பினரைச் சேர்" })} 
        className="text-left mb-8" 
      />
      <TeamMemberForm 
        action={createTeamMember} 
        formTitle={t({ en: "Create New Team Member", ta: "புதிய குழு உறுப்பினரை உருவாக்கு" })}
        submitButtonText={t({ en: "Create Member", ta: "உறுப்பினரை உருவாக்கு" })}
      />
    </div>
  );
}

