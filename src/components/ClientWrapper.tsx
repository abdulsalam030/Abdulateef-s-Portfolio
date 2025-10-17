'use client';

import ThemeProvider from '@/lib/hooks/use-theme';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
