'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="theme-btn opacity-50" disabled>
        <span>🌙</span>
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      className="theme-btn"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span>{isDark ? '☀️' : '🌙'}</span>
    </button>
  );
}
