import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { IconInstagram, IconLinkedin, IconTwitterX, IconFacebook } from '@/components/SocialIcons';

const footerLinks = {
  Properties: [
    { label: 'Homes for Sale', href: '/properties?type=buy' },
    { label: 'Homes for Rent', href: '/properties?type=rent' },
    { label: 'Luxury Listings', href: '/properties?tag=Luxury' },
    { label: 'New Listings', href: '/properties?tag=New' },
    { label: 'Open Houses', href: '/properties?tag=Open+House' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Agents', href: '/agents' },
    { label: 'Blog & Resources', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ],
  Account: [
    { label: 'Sign In', href: '/auth/login' },
    { label: 'Create Account', href: '/auth/signup' },
    { label: 'Saved Listings', href: '/dashboard' },
    { label: 'Owner Portal', href: '/portal' },
  ],
};

function CRMonogramFooter() {
  return (
    <svg width="40" height="40" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="cr-gold-f" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C870" />
          <stop offset="50%" stopColor="#C8A84A" />
          <stop offset="100%" stopColor="#A07830" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="6" fill="rgba(255,255,255,0.08)" />
      <polyline points="18,4 31,14 31,13" stroke="url(#cr-gold-f)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="18,4 5,14 5,13" stroke="url(#cr-gold-f)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="5" y1="14" x2="31" y2="14" stroke="url(#cr-gold-f)" strokeWidth="2" strokeLinecap="round" />
      <text x="18" y="29" textAnchor="middle" fill="url(#cr-gold-f)" fontSize="11" fontWeight="700" fontFamily="serif" letterSpacing="1">CR</text>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1A3828' }}>
      {/* CTA Band */}
      <div className="border-b border-white/10" style={{ background: 'linear-gradient(135deg, #245035, #1A3828)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-1">Ready to find your dream home?</h3>
            <p className="text-white/70 text-sm">Connect with a ChicsRetreat luxury specialist today.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
            >
              Talk to an Agent
            </Link>
            <Link
              href="/properties"
              className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <CRMonogramFooter />
              <div className="flex flex-col leading-none">
                <span className="font-brand text-[15px] font-bold" style={{ color: '#E8C870', letterSpacing: '0.12em' }}>
                  CHICS<span style={{ color: '#C8A84A' }}>RETREAT</span>
                </span>
                <span className="text-[9px] font-medium uppercase" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.18em' }}>
                  Luxury · Comfort · Everything
                </span>
              </div>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Nigeria&apos;s premier luxury real estate platform. Connecting extraordinary people with exceptional properties through expert guidance and white-glove service.
            </p>
            <div className="space-y-2.5 text-sm text-white/55">
              <div className="flex items-center gap-2.5">
                <MapPin size={15} style={{ color: '#C8A84A' }} />
                <span>Lagos, Abuja &amp; Port Harcourt, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} style={{ color: '#C8A84A' }} />
                <span>+234 (0) 800 CHICS</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} style={{ color: '#C8A84A' }} />
                <span>chicsretreat@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: IconFacebook, href: 'https://facebook.com/Chicsretreat', label: 'Facebook' },
                { Icon: IconTwitterX, href: 'https://twitter.com/Chicsretreat', label: 'Twitter' },
                { Icon: IconLinkedin, href: 'https://linkedin.com/company/Chicsretreat', label: 'LinkedIn' },
                { Icon: IconInstagram, href: 'https://instagram.com/Chicsretreat', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold mb-4 uppercase font-brand" style={{ color: '#C8A84A', letterSpacing: '0.15em' }}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ChicsRetreat. All rights reserved. Licensed Real Estate Broker.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
              <Link key={item} href="#" className="text-xs text-white/35 hover:text-white/70 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
