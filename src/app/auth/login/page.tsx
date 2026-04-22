'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-24 sm:px-8">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}>
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold font-heading" style={{ color: '#0A1F44' }}>
              Luxe<span style={{ color: '#C9A96E' }}>Estates</span>
            </span>
          </Link>

          <h1 className="text-3xl font-bold font-heading mb-2" style={{ color: '#0A1F44' }}>Welcome back</h1>
          <p className="text-gray-500 text-sm mb-8">Sign in to access your saved properties and dashboard.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">Email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Password</label>
                <Link href="#" className="text-xs hover:underline" style={{ color: '#C9A96E' }}>Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={show ? 'text' : 'password'}
                  required
                  placeholder="Your password"
                  className="w-full pl-10 pr-10 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  {show ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <><span>Sign In</span><ArrowRight size={16} /></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
            <div className="relative flex justify-center"><span className="px-3 text-xs text-gray-400 bg-white">or continue with</span></div>
          </div>

          {/* Social */}
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
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="font-semibold hover:underline" style={{ color: '#C9A96E' }}>
              Create one
            </Link>
          </p>

          {/* Owner Portal */}
          <div className="mt-6 p-4 rounded-2xl border border-amber-100 bg-amber-50 text-center">
            <p className="text-xs font-semibold text-amber-800 mb-1">Property Owner or Tenant?</p>
            <Link href="/portal" className="text-xs text-amber-600 hover:underline font-medium">
              Access the Owner/Tenant Portal →
            </Link>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80"
          alt="Luxury Home"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, white 0%, transparent 20%)' }} />
        <div className="absolute bottom-12 left-12 right-12">
          <blockquote className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <p className="text-white text-sm italic leading-relaxed mb-3">
              &ldquo;LuxeEstates found us our dream home in Beverly Hills. The process was seamless and Alexandra was incredible throughout.&rdquo;
            </p>
            <p className="text-white/70 text-xs font-medium">— David Thompson, Beverly Hills</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
