'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Heart, User, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Buy', href: '/properties?type=buy' },
  { label: 'Rent', href: '/properties?type=rent' },
  { label: 'Agents', href: '/agents' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === '/');
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparent = isHomePage && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white shadow-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18" style={{ height: '72px' }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}>
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors duration-300 font-heading ${
                transparent ? 'text-white' : 'text-navy'
              }`}
              style={{ color: transparent ? '#fff' : '#0A1F44' }}
            >
              Luxe<span style={{ color: '#C9A96E' }}>Estates</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                  transparent ? 'text-white/90 hover:text-white' : 'text-gray-700'
                }`}
                style={{ '--hover-color': '#C9A96E' } as React.CSSProperties}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                transparent ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              <Phone size={15} />
              <span>+1 (800) 555-LUXE</span>
            </Link>
            <div className="w-px h-5 bg-gray-300 mx-1" />
            <Link
              href="/auth/login"
              className={`text-sm font-medium transition-colors px-3 py-1.5 rounded-lg ${
                transparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              transparent ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-gray-700 hover:text-amber-600 py-2 border-b border-gray-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/auth/login"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:border-amber-400"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
