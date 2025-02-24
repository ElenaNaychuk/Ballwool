import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {

  return (
    <div className="min-h-screen">
      <main className="container mx-auto">{children}</main>
    </div>
  );
};
