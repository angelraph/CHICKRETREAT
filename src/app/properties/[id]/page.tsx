'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  MapPin, Bed, Bath, Square, Heart, Share2, ChevronLeft,
  ChevronRight, Phone, Mail, Star, Calendar, Car, Maximize2,
  CheckCircle2, ArrowLeft, Tag
} from 'lucide-react';
import { properties, getAgentById, formatPrice } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = properties.find(p => p.id === id);

  if (!property) notFound();

  const agent = getAgentById(property.agentId);
  const [activeImg, setActiveImg] = useState(0);
  const [liked, setLiked] = useState(false);
  const [msgSent, setMsgSent] = useState(false);
  const [message, setMessage] = useState(`Hi, I'm interested in ${property.title}. Please contact me.`);

  const similar = properties.filter(p => p.id !== property.id && p.propertyType === property.propertyType).slice(0, 3);

  const tagColors: Record<string, string> = {
    'New': '#10b981', 'Luxury': '#f59e0b', 'Open House': '#3b82f6',
    'Featured': '#8b5cf6', 'Waterfront': '#06b6d4', 'Penthouse': '#ef4444',
  };

  return (
    <div className="min-h-screen bg-white pt-18">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/properties" className="flex items-center gap-1 hover:text-amber-600 transition-colors font-medium">
          <ArrowLeft size={15} />
          All Properties
        </Link>
        <span>/</span>
        <span className="text-gray-900 line-clamp-1">{property.title}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Image Gallery */}
            <div className="rounded-2xl overflow-hidden">
              <div className="relative h-72 sm:h-96 lg:h-[480px]">
                <Image
                  src={property.images[activeImg]}
                  alt={property.title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  priority
                />
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-white px-3 py-1 rounded-full" style={{ backgroundColor: tagColors[tag] || '#6b7280' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  >
                    <Heart size={18} className={liked ? 'fill-rose-500 text-rose-500' : 'text-gray-600'} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
                    <Share2 size={18} className="text-gray-600" />
                  </button>
                </div>
                {/* Nav Arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImg(i => (i - 1 + property.images.length) % property.images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setActiveImg(i => (i + 1) % property.images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow hover:bg-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
                {/* Listing Type Badge */}
                <div className="absolute bottom-4 right-4">
                  <span
                    className="text-sm font-bold px-3 py-1.5 rounded-full text-white"
                    style={{ backgroundColor: property.listingType === 'rent' ? '#7c3aed' : '#C9A96E' }}
                  >
                    For {property.listingType === 'rent' ? 'Rent' : 'Sale'}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 p-3 bg-gray-50 border-t border-gray-100">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className="relative h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all"
                    style={{ borderColor: activeImg === i ? '#C9A96E' : 'transparent' }}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Title + Price */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                <h1 className="text-2xl sm:text-3xl font-bold font-heading" style={{ color: '#0A1F44' }}>
                  {property.title}
                </h1>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    {property.listingType === 'rent' ? 'Monthly Rent' : 'Asking Price'}
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#C9A96E' }}>
                    {formatPrice(property.price, property.listingType)}
                  </p>
                </div>
              </div>
              <p className="flex items-center gap-1.5 text-gray-500">
                <MapPin size={16} style={{ color: '#C9A96E' }} />
                {property.address}, {property.city}, {property.state} {property.zip}
              </p>
              {property.openHouse && (
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-blue-700 bg-blue-50 border border-blue-200">
                  <Calendar size={14} />
                  Open House: {property.openHouse}
                </div>
              )}
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Bed, label: 'Bedrooms', value: property.bedrooms },
                { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
                { icon: Maximize2, label: 'Square Feet', value: property.sqft.toLocaleString() },
                { icon: Car, label: 'Garage Spaces', value: property.garage },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                  <Icon size={22} className="mx-auto mb-2" style={{ color: '#C9A96E' }} />
                  <p className="text-lg font-bold" style={{ color: '#0A1F44' }}>{value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-4 font-heading" style={{ color: '#0A1F44' }}>
                About This Property
              </h2>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-5 pt-5 border-t border-gray-100 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span className="text-gray-400">Property Type</span>
                  <span className="font-medium capitalize">{property.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Year Built</span>
                  <span className="font-medium">{property.yearBuilt}</span>
                </div>
                {property.lotSize && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lot Size</span>
                    <span className="font-medium">{property.lotSize.toLocaleString()} sqft</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-400">Listing Type</span>
                  <span className="font-medium capitalize">For {property.listingType === 'rent' ? 'Rent' : 'Sale'}</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-4 font-heading" style={{ color: '#0A1F44' }}>
                Features & Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.features.map(feature => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} style={{ color: '#C9A96E' }} className="flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-4 font-heading" style={{ color: '#0A1F44' }}>Location</h2>
              <div
                className="w-full h-56 rounded-xl flex items-center justify-center text-gray-400 text-sm"
                style={{ background: 'linear-gradient(135deg, #e8f4fd, #dbeafe)' }}
              >
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2 text-blue-400" />
                  <p className="font-medium text-blue-600">{property.address}</p>
                  <p className="text-xs">{property.city}, {property.state} {property.zip}</p>
                  <p className="text-xs text-gray-400 mt-2">Map integration available with Google Maps API key</p>
                </div>
              </div>
            </div>

            {/* Mortgage Estimator */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-4 font-heading" style={{ color: '#0A1F44' }}>
                Mortgage Estimator
              </h2>
              {property.listingType === 'buy' ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: '20% Down', months: 360, rate: 6.8 },
                    { label: '10% Down', months: 360, rate: 7.0 },
                    { label: '5% Down', months: 360, rate: 7.25 },
                  ].map(({ label, months, rate }) => {
                    const principal = property.price * (1 - parseInt(label) / 100);
                    const monthlyRate = rate / 100 / 12;
                    const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
                    return (
                      <div key={label} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 mb-1">{label} · {rate}% rate</p>
                        <p className="text-xl font-bold" style={{ color: '#C9A96E' }}>
                          ${Math.round(payment).toLocaleString()}<span className="text-sm font-normal text-gray-400">/mo</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">30-year fixed estimate</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-gray-500">Mortgage estimator applies to properties for sale only.</p>
              )}
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            {agent && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9A96E' }}>
                  Listed By
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-amber-100">
                    <Image src={agent.photo} alt={agent.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{agent.name}</p>
                    <p className="text-xs text-gray-500">{agent.title}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span className="text-xs font-medium text-gray-700">{agent.rating}</span>
                      <span className="text-xs text-gray-400">({agent.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                {msgSent ? (
                  <div className="text-center py-6">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 size={24} className="text-green-600" />
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">Message Sent!</p>
                    <p className="text-sm text-gray-500">{agent.name} will reach out to you shortly.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={e => { e.preventDefault(); setMsgSent(true); }}
                    className="space-y-3"
                  >
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 transition-all"
                    />
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-amber-400 transition-all resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
                    >
                      Send Message
                    </button>
                  </form>
                )}

                <div className="flex gap-2 mt-3">
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium border border-gray-200 hover:border-amber-400 transition-all text-gray-700"
                  >
                    <Phone size={14} /> Call
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium border border-gray-200 hover:border-amber-400 transition-all text-gray-700"
                  >
                    <Mail size={14} /> Email
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Similar Properties */}
        {similar.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-heading mb-8" style={{ color: '#0A1F44' }}>
              Similar Properties
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {similar.map(p => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
