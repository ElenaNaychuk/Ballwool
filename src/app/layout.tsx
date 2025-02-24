import { Layout } from '@widgets/layout';
import './globals.css';

export const metadata = {
  title: 'Custom Nike Sneakers',
  description: 'Buy custom-made Nike Air Force sneakers with vibrant graffiti...',
  openGraph: {
    title: "Custom Nike Sneakers",
  }
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
