import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, TrendingUp, Globe, Heart, Shield } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ChicsRetreat — our story, values, and commitment to excellence in luxury real estate.',
};

const values = [
  { icon: Heart, title: 'Client First, Always', desc: 'Every decision we make starts with one question: what is best for our client? This principle guides everything.' },
  { icon: Shield, title: 'Integrity Without Compromise', desc: 'We operate with complete transparency. No hidden fees, no conflicted advice, no shortcuts.' },
  { icon: TrendingUp, title: 'Excellence in Execution', desc: 'Good enough is never good enough. We sweat every detail so our clients don\'t have to.' },
  { icon: Globe, title: 'Global Perspective', desc: 'We serve clients from every corner of the world, connecting them to the finest properties across America\'s most desirable markets.' },
];

const milestones = [
  { year: '2015', title: 'Founded in Lagos', desc: 'ChicsRetreat was established with a simple mission: give every client access to luxury, comfort, and everything in between.' },
  { year: '2017', title: 'Expanded to Abuja', desc: 'Opened our FCT office, extending our white-glove service to Nigeria\'s capital and its growing premium property market.' },
  { year: '2019', title: 'Port Harcourt Launch', desc: 'Entered the Garden City market, serving the energy sector\'s growing demand for luxury residential properties.' },
  { year: '2021', title: 'Digital Transformation', desc: 'Launched our digital platform, setting a new standard for virtual property tours and seamless remote transactions.' },
  { year: '2023', title: 'International Reach', desc: 'Established referral partnerships with luxury brokerages in 12 countries, connecting Nigerians with global real estate.' },
  { year: '2025', title: '$2.4B+ in Sales', desc: 'Today we manage over 340 active luxury listings and have helped 1,800+ families find their perfect home.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-80 sm:h-[480px]">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="ChicsRetreat Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,56,40,0.7), rgba(26,56,40,0.9))' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C8A84A' }}>
              Our Story
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
              Redefining Luxury Real Estate
            </h1>
            <p className="text-white/75 max-w-xl mx-auto text-lg">
              For 15 years, we&apos;ve believed that finding the perfect home should be as extraordinary as the homes themselves.
            </p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C8A84A' }}>
                Our Mission
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6" style={{ color: '#1A3828' }}>
                More Than a Transaction — A Transformation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ChicsRetreat was founded on a simple belief: that the most important financial decision of your life deserves more than a transactional relationship. We built a firm where every client works with a dedicated specialist — not a coordinator, not an assistant, but an expert who owns your outcome personally.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team combines decades of market experience with a genuine passion for architecture, design, and the communities where our clients choose to build their lives. We don&apos;t just sell homes. We help people find where they belong.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '1,800+', label: 'Clients Served' },
                  { value: '$2.4B+', label: 'In Sales' },
                  { value: '15+', label: 'Years of Expertise' },
                  { value: '40+', label: 'Specialist Agents' },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <p className="text-2xl font-bold font-heading mb-1" style={{ color: '#C8A84A' }}>{value}</p>
                    <p className="text-sm text-gray-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
                'https://images.unsplash.com/photo-1521791055366-0d553872952f?w=600&q=80',
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
                'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80',
              ].map((src, i) => (
                <div key={i} className={`relative rounded-2xl overflow-hidden ${i === 1 ? 'mt-6' : ''}`} style={{ height: '180px' }}>
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#C8A84A' }}>
              What We Stand For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading" style={{ color: '#1A3828' }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, #1A3828, #245035)' }}
                >
                  <Icon size={22} style={{ color: '#C8A84A' }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#C8A84A' }}>
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading" style={{ color: '#1A3828' }}>
              15 Years of Excellence
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ backgroundColor: '#E5E7EB' }} />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-center gap-6 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 inline-block max-w-xs">
                      <p className="font-bold mb-1" style={{ color: '#1A3828' }}>{m.title}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm z-10 shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #C8A84A, #A07830)' }}
                  >
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4" style={{ color: '#1A3828' }}>
            Ready to Work with the Best?
          </h2>
          <p className="text-gray-600 mb-8">
            Whether you&apos;re buying, selling, or investing, our team is ready to deliver results that exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/properties"
              className="px-8 py-4 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #1A3828, #245035)' }}
            >
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-all border-2"
              style={{ borderColor: '#C8A84A', color: '#C8A84A' }}
            >
              Contact an Agent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
