'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Search, MapPin, Star, ArrowRight,
  TrendingUp, Shield, Award, Users, Home, Building2, TreePine, Waves
} from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { properties, agents, testimonials, blogPosts } from '@/lib/data';

const propertyTypes = [
  { label: 'Houses', icon: Home, href: '/properties?propertyType=house' },
  { label: 'Apartments', icon: Building2, href: '/properties?propertyType=apartment' },
  { label: 'Villas', icon: TreePine, href: '/properties?propertyType=villa' },
  { label: 'Waterfront', icon: Waves, href: '/properties?tag=Waterfront' },
];

const stats = [
  { value: '$2.4B+', label: 'Properties Sold' },
  { value: '1,800+', label: 'Happy Clients' },
  { value: '340+', label: 'Active Listings' },
  { value: '15+', label: 'Years Experience' },
];

export default function HomePage() {
  const router = useRouter();
  const [listingType, setListingType] = useState<'buy' | 'rent'>('buy');
  const [location, setLocation] = useState('');

  const featuredProperties = properties.filter(p => p.featured);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set('type', listingType);
    if (location) params.set('location', location);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90"
            alt="Luxury Estate"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(10,31,68,0.65) 0%, rgba(10,31,68,0.5) 50%, rgba(10,31,68,0.85) 100%)' }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 text-white/90 border border-white/20 backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#C9A96E' }} />
              340+ Premium Listings Available
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 font-heading">
              Find Your Perfect{' '}
              <span style={{ color: '#C9A96E' }}>Luxury Home</span>
            </h1>
            <p className="text-lg text-white/75 max-w-xl mx-auto leading-relaxed">
              Discover extraordinary properties curated by the world&apos;s most trusted luxury real estate specialists.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex border-b border-gray-100">
                {(['buy', 'rent'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setListingType(type)}
                    className="flex-1 py-3.5 text-sm font-semibold transition-all"
                    style={
                      listingType === type
                        ? { background: 'linear-gradient(135deg, #0A1F44, #112a5a)', color: '#fff' }
                        : { background: '#f9fafb', color: '#6b7280' }
                    }
                  >
                    {type === 'buy' ? 'Buy Property' : 'Rent Property'}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSearch} className="p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-2.5 bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-100 transition-all">
                    <MapPin size={18} className="text-gray-400 flex-shrink-0" />
                    <input
                      type="text"
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                      placeholder="City, ZIP code, or address..."
                      className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)', minWidth: '140px' }}
                  >
                    <Search size={16} />
                    Search
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Any Price', 'Studio+', '1 Bed+', '2 Beds+', '3 Beds+'].map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors border border-transparent hover:border-amber-200"
                    >
                      {filter}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="px-3 py-1 text-xs font-medium text-amber-600 bg-amber-50 rounded-lg border border-amber-200 hover:bg-amber-100"
                  >
                    + More Filters
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8 flex justify-center flex-wrap gap-3">
            {propertyTypes.map(({ label, icon: Icon, href }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white border border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <Icon size={15} />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 text-xs">
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/40" />
          Scroll
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ backgroundColor: '#0A1F44' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold font-heading mb-1" style={{ color: '#C9A96E' }}>{value}</p>
                <p className="text-sm text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#C9A96E' }}>
                Hand-Picked Selection
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading" style={{ color: '#0A1F44' }}>
                Featured Properties
              </h2>
            </div>
            <Link
              href="/properties"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
              style={{ color: '#C9A96E' }}
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProperties.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #0A1F44, #112a5a)' }}
            >
              Browse All Properties <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#C9A96E' }}>
              Simple Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading" style={{ color: '#0A1F44' }}>
              Your Journey Starts Here
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div
              className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A96E, transparent)' }}
            />
            {[
              {
                step: '01', icon: Search, title: 'Search & Filter',
                desc: 'Use our powerful search engine to filter thousands of listings by location, price, type, and amenities.',
              },
              {
                step: '02', icon: Users, title: 'Meet Your Agent',
                desc: 'Get matched with a dedicated luxury specialist who knows your target market inside and out.',
              },
              {
                step: '03', icon: Award, title: 'Close the Deal',
                desc: 'With expert negotiation and seamless transaction management, we handle every detail.',
              },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative text-center group">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #0A1F44, #112a5a)' }}
                >
                  <Icon size={28} style={{ color: '#C9A96E' }} />
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest" style={{ color: '#C9A96E' }}>
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-3 font-heading" style={{ color: '#0A1F44' }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden h-52">
                    <Image src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80" alt="Luxury interior" fill className="object-cover" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-36">
                    <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" alt="Modern home" fill className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 mt-10">
                  <div className="relative rounded-2xl overflow-hidden h-36">
                    <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80" alt="Pool" fill className="object-cover" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-52">
                    <Image src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" alt="Estate" fill className="object-cover" />
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-4 right-4 rounded-2xl p-5 shadow-xl text-white z-10"
                style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
              >
                <p className="text-3xl font-bold font-heading">15+</p>
                <p className="text-sm font-medium text-white/80">Years of Excellence</p>
              </div>
            </div>

            <div className="lg:pl-8">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A96E' }}>
                Why LuxeEstates
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-5" style={{ color: '#0A1F44' }}>
                A Different Standard of Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We don&apos;t just list properties — we curate experiences. Our team of certified luxury specialists combines deep market intelligence with personalised, white-glove service.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Shield, title: 'Verified Listings Only', desc: 'Every property is personally vetted by our agents for accuracy and quality.' },
                  { icon: TrendingUp, title: 'Market-Leading Results', desc: 'Our clients consistently close at better prices than market average.' },
                  { icon: Award, title: 'Award-Winning Team', desc: 'Recognized as the top luxury brokerage five years running.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FAF7F2' }}>
                      <Icon size={20} style={{ color: '#C9A96E' }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-0.5">{title}</h4>
                      <p className="text-sm text-gray-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #0A1F44, #112a5a)' }}
              >
                Learn Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section className="py-20" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#C9A96E' }}>
                Expert Guidance
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading" style={{ color: '#0A1F44' }}>
                Meet Our Specialists
              </h2>
            </div>
            <Link href="/agents" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: '#C9A96E' }}>
              All Agents <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent) => (
              <Link
                key={agent.id}
                href={`/agents#agent-${agent.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-semibold text-base">{agent.name}</p>
                    <p className="text-white/70 text-xs">{agent.title}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="flex items-center gap-1 font-medium text-gray-700">
                      <Star size={13} className="fill-amber-400 text-amber-400" />
                      {agent.rating}
                      <span className="text-gray-400 font-normal">({agent.reviews})</span>
                    </span>
                    <span className="text-gray-500">{agent.experience} yrs exp.</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {agent.specialties.slice(0, 2).map(s => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-full text-amber-700 bg-amber-50 border border-amber-100">{s}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20" style={{ backgroundColor: '#0A1F44' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#C9A96E' }}>
              Client Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className="rounded-2xl p-6 sm:p-8 border border-white/10"
                style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.06)' : 'rgba(201,169,110,0.08)' }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.photo} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.location} · Worked with {t.agentName}</p>
                  </div>
                  <p className="ml-auto text-white/30 text-xs flex-shrink-0">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#C9A96E' }}>
                Market Insights
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading" style={{ color: '#0A1F44' }}>
                From Our Blog
              </h2>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: '#C9A96E' }}>
              All Articles <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: '#C9A96E' }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2 leading-snug line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>{post.readTime} min · {post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
            alt="Luxury Home"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(10,31,68,0.88)' }} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#C9A96E' }}>
            Stay Ahead of the Market
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
            Get Exclusive Listings First
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Join 12,000+ discerning buyers and investors who receive our curated weekly digest of off-market deals and market insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3.5 rounded-xl text-sm border border-white/20 text-white placeholder-white/40 outline-none focus:border-amber-400 transition-all backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white flex-shrink-0 hover:opacity-90 transition-all"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
            >
              Subscribe
            </button>
          </form>
          <p className="text-white/30 text-xs mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </>
  );
}
