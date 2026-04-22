import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'LuxeEstates | Premium Real Estate',
    template: '%s | LuxeEstates',
  },
  description: 'Discover the world\'s finest properties. LuxeEstates connects buyers, sellers, and renters with extraordinary homes through expert guidance and white-glove service.',
  keywords: ['luxury real estate', 'homes for sale', 'premium properties', 'real estate agent'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'LuxeEstates',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
