
import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { LucideProps } from 'lucide-react';
import { 
  FileSignature, 
  MessageCircle, 
  Video, 
  ScanText, 
  AlignLeft, 
  Package, // For admin sidebar product management
  Briefcase, // For admin sidebar career management
  Newspaper, // For admin sidebar blog management
  Users, // For admin sidebar team management
  LayoutDashboard // For admin sidebar dashboard
} from 'lucide-react';

export const LUCIDE_ICON_MAP: Record<string, ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>> = {
  FileSignature,
  MessageCircle,
  Video,
  ScanText,
  AlignLeft,
  Package,
  Briefcase,
  Newspaper,
  Users,
  LayoutDashboard,
  // Add other icons by their string name as they are used
};

// Helper to get an icon component, falling back to a default if not found
export const getIconComponent = (iconName?: string): ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>> => {
  return LUCIDE_ICON_MAP[iconName || 'Package'] || Package; // Default to Package icon
};
