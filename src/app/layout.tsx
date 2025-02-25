import { Metadata } from 'next';
import { Layout } from '@widgets/layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ballwool',
  description: 'Social network marketplace',
  keywords: ['handmade', 'handmade marketplace', 'artisan crafts', 'unique gifts', 'handmade jewelry', 'handcrafted decor'],
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Layout>{children}</Layout>   
      </body>
    </html>
  );
}
