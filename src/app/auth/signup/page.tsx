'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SignupPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [role, setRole] = useState<'buyer' | 'seller' | 'tenant'>('buyer');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 1500);
  };

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold font-heading mb-2" style={{ color: '#1A3828' }}>Account Created!</h2>
          <p className="text-gray-500 text-sm mb-6">Welcome to ChicsRetreat. Your account is ready — start exploring extraordinary properties.</p>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-all"
            style={{ background: 'linear-gradient(135deg, #C8A84A, #A07830)' }}
          >
            Browse Properties <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left: Image */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
          alt="Luxury Estate"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, white 0%, transparent 20%)' }} />
        <div className="absolute top-1/2 -translate-y-1/2 left-12 max-w-xs">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="text-3xl font-bold font-heading text-white mb-2">340+</p>
            <p className="text-white/70 text-sm">Premium properties available across New York, Los Angeles, Miami, and San Francisco.</p>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-24 sm:px-8">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2.5 mb-10">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="cr-sg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E8C870" /><stop offset="50%" stopColor="#C8A84A" /><stop offset="100%" stopColor="#A07830" />
                </linearGradient>
                <linearGradient id="cr-sbg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#245035" /><stop offset="100%" stopColor="#1A3828" />
                </linearGradient>
              </defs>
              <rect width="36" height="36" rx="6" fill="url(#cr-sbg)" />
              <polyline points="18,4 31,14 31,13" stroke="url(#cr-sg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <polyline points="18,4 5,14 5,13" stroke="url(#cr-sg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="5" y1="14" x2="31" y2="14" stroke="url(#cr-sg)" strokeWidth="2" strokeLinecap="round" />
              <text x="18" y="29" textAnchor="middle" fill="url(#cr-sg)" fontSize="11" fontWeight="700" fontFamily="serif" letterSpacing="1">CR</text>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-brand text-[15px] font-bold" style={{ color: '#1A3828', letterSpacing: '0.12em' }}>
                CHICS<span style={{ color: '#C8A84A' }}>RETREAT</span>
              </span>
              <span className="text-[9px] uppercase font-medium" style={{ color: '#A07830', letterSpacing: '0.15em' }}>
                Luxury · Comfort · Everything
              </span>
            </div>
          </Link>

          <h1 className="text-3xl font-bold font-heading mb-2" style={{ color: '#1A3828' }}>Create your account</h1>
          <p className="text-gray-500 text-sm mb-8">Join thousands of clients finding their perfect luxury property.</p>

          {/* Role Selector */}
          <div className="flex rounded-xl border border-gray-200 overflow-hidden mb-6">
            {([
              { value: 'buyer', label: 'Buyer' },
              { value: 'seller', label: 'Seller' },
              { value: 'tenant', label: 'Tenant' },
            ] as const).map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setRole(value)}
                className="flex-1 py-2.5 text-sm font-medium transition-all"
                style={role === value
                  ? { background: '#1A3828', color: '#fff' }
                  : { background: '#f9fafb', color: '#6b7280' }
                }
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">First Name *</label>
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="First"
                    className="w-full pl-9 pr-3 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Last"
                  className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Email Address *</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full pl-9 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Phone Number</label>
              <div className="relative">
                <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full pl-9 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Password *</label>
              <div className="relative">
                <Lock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={show ? 'text' : 'password'}
                  required
                  minLength={8}
                  placeholder="Min. 8 characters"
                  className="w-full pl-9 pr-10 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {show ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <input type="checkbox" required id="terms" className="mt-0.5 accent-amber-500" />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                I agree to the{' '}
                <Link href="#" className="font-medium hover:underline" style={{ color: '#C8A84A' }}>Terms of Service</Link>
                {' '}and{' '}
                <Link href="#" className="font-medium hover:underline" style={{ color: '#C8A84A' }}>Privacy Policy</Link>.
                I understand I may receive property alerts and market updates.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #C8A84A, #A07830)' }}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <><span>Create Account</span><ArrowRight size={16} /></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center"><span className="px-3 text-xs text-gray-400 bg-white">or sign up with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {['Google', 'Apple'].map(provider => (
              <button
                key={provider}
                className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
              >
                {provider === 'Google' ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                )}
                {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-semibold hover:underline" style={{ color: '#C8A84A' }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
