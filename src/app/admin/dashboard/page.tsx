import PageHeader from '@/components/shared/page-header';
import AnalyticsCard from '@/components/admin/analytics-card';
import { MOCK_ANALYTICS } from '@/lib/constants';
import { Users, Newspaper, Briefcase, MessageSquare } from 'lucide-react';
import { blogPostsData, careerOpeningsData, contactMessages, usersStore } from '@/lib/data-store';

async function getAnalyticsData() {
  // In a real app, these would be fetched from a database.
  return {
    totalUsers: usersStore.size, // Includes admin and default user
    totalBlogPosts: blogPostsData.size,
    totalContacts: contactMessages.length,
    totalCareers: careerOpeningsData.size,
  };
}


export default async function AdminDashboardPage() {
  const analytics = await getAnalyticsData();

  return (
    <div className="space-y-8">
      <PageHeader title="Admin Dashboard" description="Overview of Moh-AI Tech activities." className="text-left mb-6" />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <AnalyticsCard title="Total Users" value={analytics.totalUsers} icon={Users} description="Registered users in the system." />
        <AnalyticsCard title="Blog Posts" value={analytics.totalBlogPosts} icon={Newspaper} description="Published articles on the blog." />
        <AnalyticsCard title="Career Openings" value={analytics.totalCareers} icon={Briefcase} description="Active job listings." />
        <AnalyticsCard title="Contact Messages" value={analytics.totalContacts} icon={MessageSquare} description="Received contact inquiries." />
      </div>

      {/* Placeholder for more charts or recent activity feeds */}
      <div className="mt-8">
        <h2 className="text-2xl font-headline font-semibold mb-4">Recent Activity (Placeholder)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-6 bg-card rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Latest Blog Posts</h3>
            <p className="text-muted-foreground">List of recent blog posts will appear here.</p>
          </div>
          <div className="p-6 bg-card rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">New User Registrations</h3>
            <p className="text-muted-foreground">Feed of new user sign-ups will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
