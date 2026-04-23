'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

const navLinks = [
  { label: 'Buy', href: '/properties?type=buy' },
  { label: 'Rent', href: '/properties?type=rent' },
  { label: 'Agents', href: '/agents' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

function CRMonogram({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="cr-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C870" />
          <stop offset="50%" stopColor="#C8A84A" />
          <stop offset="100%" stopColor="#A07830" />
        </linearGradient>
        <linearGradient id="cr-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#245035" />
          <stop offset="100%" stopColor="#1A3828" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="6" fill="url(#cr-bg)" />
      <polyline points="18,4 31,14 31,13" stroke="url(#cr-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polyline points="18,4 5,14 5,13" stroke="url(#cr-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="5" y1="14" x2="31" y2="14" stroke="url(#cr-gold)" strokeWidth="2" strokeLinecap="round" />
      <text x="18" y="29" textAnchor="middle" fill="url(#cr-gold)" fontSize="11" fontWeight="700" fontFamily="serif" letterSpacing="1">CR</text>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!userMenuOpen) return;
    const close = () => setUserMenuOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [userMenuOpen]);

  const transparent = isHomePage && !scrolled && !mobileOpen;
  const textColor = transparent ? 'text-white/90' : 'text-gray-700';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-white shadow-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '72px' }}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <CRMonogram size={36} />
            <div className="flex flex-col leading-none">
              <span
                className="font-brand text-[15px] font-bold transition-colors duration-300"
                style={{
                  color: transparent ? '#E8C870' : '#1A3828',
                  letterSpacing: '0.12em',
                }}
              >
                CHICS<span style={{ color: '#C8A84A' }}>RETREAT</span>
              </span>
              <span
                className="text-[9px] font-medium uppercase transition-colors duration-300"
                style={{
                  color: transparent ? 'rgba(255,255,255,0.5)' : '#A07830',
                  letterSpacing: '0.18em',
                }}
              >
                Luxury · Comfort · Everything
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:opacity-100 ${textColor}`}
                style={{ opacity: transparent ? 0.9 : undefined }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${textColor}`}
            >
              <Phone size={15} aria-hidden="true" />
              <span>+234 (0) 800 CHICS</span>
            </Link>
            <div className="w-px h-5 bg-gray-300 mx-1" aria-hidden="true" />

            {session ? (
              <div className="relative" onClick={e => e.stopPropagation()}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className={`flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${transparent ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'}`}
                  aria-haspopup="true"
                  aria-expanded={userMenuOpen}
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #C8A84A, #A07830)' }}>
                    {session.user?.name?.[0]?.toUpperCase() ?? 'U'}
                  </div>
                  <span className="max-w-[80px] truncate">{session.user?.name?.split(' ')[0]}</span>
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <Link href="/dashboard" className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      <LayoutDashboard size={15} aria-hidden="true" /> Dashboard
                    </Link>
                    <Link href="/portal" className="flex items-center gap-2.5 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-50">
                      <Phone size={15} aria-hidden="true" /> Tenant Portal
                    </Link>
                    <button
                      onClick={() => signOut({ callbackUrl: '/' })}
                      className="w-full flex items-center gap-2.5 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors border-t border-gray-50"
                    >
                      <LogOut size={15} aria-hidden="true" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className={`text-sm font-medium transition-colors px-3 py-1.5 rounded-lg ${transparent ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  Sign In
                </Link>
                <Link
                  href="/auth/signup"
                  className="btn-gold text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${transparent ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-gray-700 py-2 border-b border-gray-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              {session ? (
                <>
                  <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="w-full text-center py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700">
                    Dashboard
                  </Link>
                  <button onClick={() => signOut({ callbackUrl: '/' })} className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-red-500">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/login" onClick={() => setMobileOpen(false)} className="w-full text-center py-3 border border-gray-300 rounded-xl text-sm font-medium text-gray-700">
                    Sign In
                  </Link>
                  <Link href="/auth/signup" onClick={() => setMobileOpen(false)} className="btn-gold w-full text-center py-3 rounded-xl text-sm font-semibold text-white">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
