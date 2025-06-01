
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/language-context';

interface DeleteButtonProps {
  itemId: string;
  itemName: string;
  deleteAction: (id: string) => Promise<{ success: boolean; message: string }>;
  itemTypeLabel?: string; // e.g., "blog post", "career opening"
}

export default function DeleteButton({ itemId, itemName, deleteAction, itemTypeLabel = "item", }: DeleteButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const itemTypeLabelTranslated = itemTypeLabel === "item" 
    ? t({ en: "item", ta: "உருப்படி" })
    : itemTypeLabel === "blog post" 
    ? t({ en: "blog post", ta: "வலைப்பதிவு இடுகை" })
    : itemTypeLabel === "career opening"
    ? t({ en: "career opening", ta: "வேலை வாய்ப்பு" })
    : itemTypeLabel;


  const handleDelete = async () => {
    setIsDeleting(true);
    const result = await deleteAction(itemId);
    setIsDeleting(false);
    toast({
      title: result.success ? t({ en: 'Success', ta: 'வெற்றி' }) : t({ en: 'Error', ta: 'பிழை' }),
      description: result.message, // Action messages might not be translated
      variant: result.success ? 'default' : 'destructive',
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm" disabled={isDeleting}>
          <Trash2 className="mr-2 h-4 w-4" />
          {isDeleting ? t({ en: 'Deleting...', ta: 'அழிக்கப்படுகிறது...' }) : t({ en: 'Delete', ta: 'அழி' })}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t({ en: "Are you sure?", ta: "நீங்கள் உறுதியாக இருக்கிறீர்களா?" })}</AlertDialogTitle>
          <AlertDialogDescription>
            {t({ en: "This action cannot be undone. This will permanently delete the", ta: "இந்த செயலைச் செயல்தவிர்க்க முடியாது. இது நிரந்தரமாக நீக்கும்" })} {itemTypeLabelTranslated} {t({ en: "titled", ta: "தலைப்பிடப்பட்ட"})} "{itemName}".
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isDeleting}>{t({ en: "Cancel", ta: "ரத்துசெய்" })}</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} disabled={isDeleting} className="bg-destructive hover:bg-destructive/90">
            {isDeleting ? t({ en: 'Deleting...', ta: 'அழிக்கப்படுகிறது...' }) : t({ en: 'Yes, delete', ta: 'ஆம், அழி' })}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
