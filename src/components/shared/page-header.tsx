import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string | ReactNode;
  className?: string;
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h1 className="text-4xl font-headline font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
