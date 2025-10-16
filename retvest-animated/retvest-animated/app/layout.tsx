
--------------------------------------------------

------------------------------------------------```tsx
import './globals.css';
import { Providers } from './providers';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'RetVest – Invest with Purpose',
  description: 'Goal-based investing, monthly income, local business funding.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
