import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://chicsretreat.com'),
  title: {
    default: 'ChicsRetreat | Premium Real Estate',
    template: '%s | ChicsRetreat',
  },
  description:
    "Discover the world's finest properties. ChicsRetreat connects buyers, sellers, and renters with extraordinary homes through expert guidance and white-glove service.",
  keywords: ['luxury real estate', 'homes for sale', 'premium properties', 'real estate agent', 'luxury homes', 'buy rent property'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chicsretreat.com',
    siteName: 'ChicsRetreat',
    title: 'ChicsRetreat | Premium Real Estate',
    description: "Discover the world's finest luxury properties with ChicsRetreat.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ChicsRetreat Premium Real Estate' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chicsretreat',
    title: 'ChicsRetreat | Premium Real Estate',
    description: "Discover the world's finest luxury properties.",
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:text-white"
          style={{ background: '#C8A84A' }}
        >
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
