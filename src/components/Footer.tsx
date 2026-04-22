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
    { label: 'Saved Listings', href: '/dashboard/favorites' },
    { label: 'Owner Portal', href: '/portal' },
  ],
};

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#0A1F44' }}>
      {/* CTA Band */}
      <div className="border-b border-white/10" style={{ background: 'linear-gradient(135deg, #112a5a, #0A1F44)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-1">Ready to find your dream home?</h3>
            <p className="text-white/70 text-sm">Connect with a luxury specialist today.</p>
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
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
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
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}>
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold font-heading">
                Luxe<span style={{ color: '#C9A96E' }}>Estates</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              The world's premier luxury real estate platform. Connecting extraordinary people with exceptional properties since 2008.
            </p>
            <div className="space-y-2.5 text-sm text-white/60">
              <div className="flex items-center gap-2.5">
                <MapPin size={15} style={{ color: '#C9A96E' }} />
                <span>150 Park Avenue, New York, NY 10022</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} style={{ color: '#C9A96E' }} />
                <span>+1 (800) 555-LUXE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={15} style={{ color: '#C9A96E' }} />
                <span>hello@luxeestates.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[IconInstagram, IconLinkedin, IconTwitterX, IconFacebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
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
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
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
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} LuxeEstates. All rights reserved. Licensed Real Estate Broker.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
              <Link key={item} href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
