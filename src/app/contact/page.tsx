import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ChicsRetreat. Our luxury real estate specialists are available Monday–Saturday, 8AM–8PM EST.',
  openGraph: {
    title: 'Contact ChicsRetreat',
    description: 'Reach our team of luxury real estate specialists. Offices in New York, Los Angeles, and Miami.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative pt-24 pb-16" style={{ backgroundColor: '#1A3828' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C8A84A' }}>
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            We&apos;re Here to Help
          </h1>
          <p className="text-white/70 max-w-lg mx-auto">
            Whether you have a question, want to view a property, or are ready to begin your real estate journey — our team is standing by.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ContactForm />
      </div>
    </div>
  );
}
