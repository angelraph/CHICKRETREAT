'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Clock, User, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';

const categories = ['All', 'Market Trends', 'Buying Guide', 'Investment Tips', 'Lifestyle'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [subEmail, setSubEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: subEmail }),
      });
      setSubStatus(res.ok ? 'success' : 'error');
    } catch {
      setSubStatus('error');
    }
  };
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1).filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative pt-24 pb-16" style={{ backgroundColor: '#0A1F44' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A96E' }}>
            Insights & Resources
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-4">
            Real Estate Intelligence
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Expert analysis, market trends, and practical guides from our team of luxury specialists.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 text-sm font-medium rounded-full border transition-all"
              style={activeCategory === cat
                ? { background: '#0A1F44', color: '#fff', borderColor: '#0A1F44' }
                : { background: '#fff', color: '#6b7280', borderColor: '#e5e7eb' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.id}`} className="group block mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="relative h-64 lg:h-full min-h-[320px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white" style={{ backgroundColor: '#C9A96E' }}>
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center" style={{ backgroundColor: '#FAF7F2' }}>
              <span className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A96E' }}>
                {featured.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-4 group-hover:text-amber-700 transition-colors" style={{ color: '#0A1F44' }}>
                {featured.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><User size={14} />{featured.author}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} />{featured.readTime} min read</span>
                <span>{featured.date}</span>
              </div>
              <div className="mt-6 flex items-center gap-1.5 font-semibold text-sm group-hover:gap-2.5 transition-all" style={{ color: '#C9A96E' }}>
                Read Article <ArrowRight size={15} />
              </div>
            </div>
          </div>
        </Link>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {rest.map(post => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: '#C9A96E' }}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors font-heading">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs text-gray-500 flex items-center gap-1">
                      <Tag size={10} />{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><User size={11} />{post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{post.readTime} min · {post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #0A1F44, #112a5a)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
            Never Miss a Market Insight
          </h2>
          <p className="text-white/70 mb-6 max-w-md mx-auto text-sm">
            Get our weekly digest of market analysis, investment opportunities, and exclusive listings delivered to your inbox.
          </p>
          {subStatus === 'success' ? (
            <p className="text-green-300 font-semibold text-sm py-2">You&apos;re subscribed! Market insights coming your way.</p>
          ) : (
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={subEmail}
                onChange={e => setSubEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-amber-400 transition-all"
              />
              <button
                type="submit"
                disabled={subStatus === 'loading'}
                className="px-5 py-3 rounded-xl text-sm font-semibold text-white flex-shrink-0 disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
              >
                {subStatus === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
          )}
          {subStatus === 'error' && <p className="text-red-300 text-xs mt-2">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </div>
  );
}
