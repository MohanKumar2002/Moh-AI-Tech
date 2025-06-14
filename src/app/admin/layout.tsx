import type { ReactNode } from 'react';
import ProtectedRoute from '@/components/admin/protected-route';
import AdminSidebar from '@/components/layout/admin-sidebar';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8 bg-muted/40 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
