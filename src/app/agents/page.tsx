import Image from 'next/image';
import Link from 'next/link';
import { Star, Phone, Mail, Award, TrendingUp, Users } from 'lucide-react';
import { IconInstagram, IconLinkedin, IconTwitterX } from '@/components/SocialIcons';
import { agents } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Agents',
  description: 'Meet the luxury real estate specialists at ChicsRetreat. Expert agents with decades of experience.',
};

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative pt-24 pb-16 overflow-hidden" style={{ backgroundColor: '#1A3828' }}>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt=""
            fill
            quality={85}
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C8A84A' }}>
            The ChicsRetreat Team
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            Meet Your Specialists
          </h1>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            Our agents are more than brokers — they're trusted advisors with deep market knowledge, extensive networks, and an unwavering commitment to your success.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, value: '40+', label: 'Expert Agents' },
              { icon: Award, value: '15+', label: 'Industry Awards' },
              { icon: TrendingUp, value: '$2.4B+', label: 'Total Sales Volume' },
              { icon: Star, value: '4.9/5', label: 'Average Rating' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1A3828' }}>
                  <Icon size={18} style={{ color: '#C8A84A' }} />
                </div>
                <p className="text-2xl font-bold font-heading" style={{ color: '#1A3828' }}>{value}</p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agents Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              id={`agent-${agent.id}`}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Photo */}
                <div className="relative w-full sm:w-52 h-64 sm:h-auto flex-shrink-0">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw, 208px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div>
                      <h2 className="text-xl font-bold font-heading" style={{ color: '#1A3828' }}>{agent.name}</h2>
                      <p className="text-sm font-medium" style={{ color: '#C8A84A' }}>{agent.title}</p>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-amber-700">{agent.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{agent.bio}</p>

                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-100">
                    {[
                      { label: 'Experience', value: `${agent.experience} yrs` },
                      { label: 'Active', value: `${agent.listings} listings` },
                      { label: 'Sold', value: `${agent.sold}+` },
                    ].map(({ label, value }) => (
                      <div key={label} className="text-center bg-gray-50 rounded-xl py-2 px-1">
                        <p className="font-bold text-sm" style={{ color: '#1A3828' }}>{value}</p>
                        <p className="text-xs text-gray-400">{label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {agent.specialties.map(s => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full text-amber-700 bg-amber-50 border border-amber-100">{s}</span>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={`tel:${agent.phone}`}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #1A3828, #245035)' }}
                    >
                      <Phone size={13} /> Call
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-700 hover:border-amber-400 transition-all"
                    >
                      <Mail size={13} /> Email
                    </a>
                    <div className="flex gap-1.5 ml-auto">
                      {agent.social.linkedin && (
                        <a href={agent.social.linkedin} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 transition-all">
                          <IconLinkedin size={14} />
                        </a>
                      )}
                      {agent.social.instagram && (
                        <a href={agent.social.instagram} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-pink-500 hover:border-pink-200 transition-all">
                          <IconInstagram size={14} />
                        </a>
                      )}
                      {agent.social.twitter && (
                        <a href={agent.social.twitter} className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-200 transition-all">
                          <IconTwitterX size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Team CTA */}
      <div className="py-16" style={{ backgroundColor: '#F5F0E8' }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4" style={{ color: '#1A3828' }}>
            Join the ChicsRetreat Team
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Are you a top-performing agent looking to elevate your career? We offer unmatched resources, a global network, and a culture of excellence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #C8A84A, #A07830)' }}
          >
            Learn About Careers
          </Link>
        </div>
      </div>
    </div>
  );
}
