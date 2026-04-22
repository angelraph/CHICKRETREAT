'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart, Eye, Bell, Settings, Home, FileText,
  MapPin, Bed, Bath, Square, ArrowRight, Star, Clock, TrendingUp
} from 'lucide-react';
import { properties, formatPrice } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';

const tabs = [
  { id: 'favorites', label: 'Saved Properties', icon: Heart },
  { id: 'viewed', label: 'Recently Viewed', icon: Eye },
  { id: 'alerts', label: 'Property Alerts', icon: Bell },
];

const mockAlerts = [
  { id: 1, label: '3+ Bed Houses in Beverly Hills', criteria: 'Beverly Hills, CA · $2M–$6M · 3+ beds', active: true, matched: 4 },
  { id: 2, label: 'Manhattan Penthouses', criteria: 'Manhattan, NY · $5M+ · Penthouse', active: true, matched: 2 },
  { id: 3, label: 'Miami Waterfront Rentals', criteria: 'Miami, FL · For Rent · $5K–$15K/mo', active: false, matched: 7 },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('favorites');
  const favorites = properties.filter(p => p.featured).slice(0, 4);
  const recentlyViewed = properties.slice(0, 3);

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-bold font-heading shadow-lg"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
            >
              A
            </div>
            <div>
              <h1 className="text-2xl font-bold font-heading" style={{ color: '#0A1F44' }}>
                Welcome back, Alexandra
              </h1>
              <p className="text-sm text-gray-500">Last active: Today at 9:41 AM</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              href="/properties"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C9A96E, #b8924a)' }}
            >
              <Home size={15} /> Browse Properties
            </Link>
            <button className="p-2.5 rounded-xl border border-gray-200 bg-white hover:border-amber-400 transition-all text-gray-500">
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Heart, label: 'Saved Properties', value: '12', trend: '+2 this week', color: '#ef4444' },
            { icon: Eye, label: 'Properties Viewed', value: '47', trend: '+8 this week', color: '#3b82f6' },
            { icon: Bell, label: 'Active Alerts', value: '3', trend: '13 new matches', color: '#C9A96E' },
            { icon: FileText, label: 'Inquiries Sent', value: '5', trend: '2 responses', color: '#10b981' },
          ].map(({ icon: Icon, label, value, trend, color }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <TrendingUp size={14} className="text-green-500" />
              </div>
              <p className="text-2xl font-bold font-heading mb-0.5" style={{ color: '#0A1F44' }}>{value}</p>
              <p className="text-xs text-gray-400">{label}</p>
              <p className="text-xs mt-1 text-green-600 font-medium">{trend}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Tab Bar */}
          <div className="flex border-b border-gray-100">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-4 text-sm font-medium transition-all border-b-2"
                style={activeTab === id
                  ? { color: '#C9A96E', borderBottomColor: '#C9A96E', backgroundColor: '#fffbf5' }
                  : { color: '#6b7280', borderBottomColor: 'transparent' }
                }
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            {/* Favorites Tab */}
            {activeTab === 'favorites' && (
              <>
                {favorites.length === 0 ? (
                  <div className="text-center py-16">
                    <Heart size={40} className="mx-auto mb-3 text-gray-200" />
                    <p className="font-semibold text-gray-400">No saved properties yet</p>
                    <p className="text-sm text-gray-400 mt-1">Click the heart icon on any listing to save it here.</p>
                    <Link href="/properties" className="mt-4 inline-block text-sm font-medium hover:underline" style={{ color: '#C9A96E' }}>
                      Browse properties
                    </Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {favorites.map(p => (
                      <div key={p.id} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
                        <div className="relative h-40">
                          <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          <div className="absolute top-2 right-2">
                            <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center">
                              <Heart size={13} className="fill-rose-500 text-rose-500" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 left-2">
                            <span className="text-xs font-bold text-white px-2 py-0.5 rounded-full" style={{ backgroundColor: '#C9A96E' }}>
                              {formatPrice(p.price, p.listingType)}
                            </span>
                          </div>
                        </div>
                        <div className="p-3">
                          <p className="font-semibold text-gray-900 text-sm line-clamp-1">{p.title}</p>
                          <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5 mb-2">
                            <MapPin size={10} />{p.city}, {p.state}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><Bed size={11} />{p.bedrooms}</span>
                            <span className="flex items-center gap-1"><Bath size={11} />{p.bathrooms}</span>
                            <span className="flex items-center gap-1"><Square size={11} />{p.sqft.toLocaleString()}</span>
                          </div>
                          <Link
                            href={`/properties/${p.id}`}
                            className="mt-3 w-full flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-semibold text-white hover:opacity-90"
                            style={{ background: 'linear-gradient(135deg, #0A1F44, #112a5a)' }}
                          >
                            View Details <ArrowRight size={11} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Recently Viewed Tab */}
            {activeTab === 'viewed' && (
              <div className="space-y-3">
                {recentlyViewed.map((p, i) => (
                  <Link
                    key={p.id}
                    href={`/properties/${p.id}`}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
                  >
                    <div className="relative w-20 h-14 rounded-xl overflow-hidden flex-shrink-0">
                      <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm line-clamp-1">{p.title}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                        <MapPin size={10} />{p.city}, {p.state}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-sm" style={{ color: '#C9A96E' }}>{formatPrice(p.price, p.listingType)}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1 justify-end mt-0.5">
                        <Clock size={10} />
                        {i === 0 ? '2 hrs ago' : i === 1 ? 'Yesterday' : '3 days ago'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Alerts Tab */}
            {activeTab === 'alerts' && (
              <div className="space-y-3">
                {mockAlerts.map(alert => (
                  <div key={alert.id} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: alert.active ? '#fffbf5' : '#f9fafb' }}
                    >
                      <Bell size={16} style={{ color: alert.active ? '#C9A96E' : '#9ca3af' }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{alert.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{alert.criteria}</p>
                      {alert.active && (
                        <p className="text-xs font-medium mt-1.5" style={{ color: '#10b981' }}>
                          {alert.matched} new matches
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${alert.active ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}>
                        {alert.active ? 'Active' : 'Paused'}
                      </span>
                    </div>
                  </div>
                ))}
                <button
                  className="w-full mt-2 py-3 border-2 border-dashed border-gray-200 rounded-xl text-sm font-medium text-gray-400 hover:border-amber-300 hover:text-amber-600 transition-all"
                >
                  + Create New Alert
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Recommended */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold font-heading" style={{ color: '#0A1F44' }}>
              Recommended For You
            </h2>
            <Link href="/properties" className="text-sm font-medium hover:underline" style={{ color: '#C9A96E' }}>
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 3).map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
