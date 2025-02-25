import { ReactNode } from 'react';
import { Sidebar } from '@shared/components/sidebar/sidebar';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="flex gap-4 min-h-screen max-w-[1440px] mx-auto">
      <Sidebar />
      <main className="container">{children}</main>
    </div>
  );
};
