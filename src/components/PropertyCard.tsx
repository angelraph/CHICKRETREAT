'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Bed, Bath, Square, MapPin, Tag } from 'lucide-react';
import { Property, formatPrice } from '@/lib/data';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'horizontal';
}

const tagColors: Record<string, string> = {
  'New': 'bg-emerald-500',
  'Luxury': 'bg-amber-500',
  'Open House': 'bg-blue-500',
  'Featured': 'bg-purple-500',
  'Waterfront': 'bg-cyan-500',
  'Penthouse': 'bg-rose-500',
  'Available Now': 'bg-green-500',
};

export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const [liked, setLiked] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (variant === 'horizontal') {
    return (
      <Link href={`/properties/${property.id}`} className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="relative w-48 sm:w-64 flex-shrink-0">
          <Image
            src={imgError ? 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80' : property.images[0]}
            alt={property.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        </div>
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 text-base leading-tight group-hover:text-amber-600 transition-colors">{property.title}</h3>
              <span className="font-bold text-amber-600 flex-shrink-0 text-base">{formatPrice(property.price, property.listingType)}</span>
            </div>
            <p className="text-gray-500 text-sm flex items-center gap-1 mb-3">
              <MapPin size={13} />
              {property.address}, {property.city}, {property.state}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1"><Bed size={14} /> {property.bedrooms} bed</span>
              <span className="flex items-center gap-1"><Bath size={14} /> {property.bathrooms} bath</span>
              <span className="flex items-center gap-1"><Square size={14} /> {property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
          <div className="flex gap-1.5 mt-3">
            {property.tags.slice(0, 2).map(tag => (
              <span key={tag} className={`text-xs font-medium text-white px-2 py-0.5 rounded-full ${tagColors[tag] || 'bg-gray-500'}`}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="property-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imgError ? 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80' : property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setImgError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {property.tags.slice(0, 2).map(tag => (
            <span key={tag} className={`text-xs font-semibold text-white px-2.5 py-1 rounded-full backdrop-blur-sm ${tagColors[tag] || 'bg-gray-600'}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Favorite */}
        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
          aria-label="Save property"
        >
          <Heart size={16} className={liked ? 'fill-rose-500 text-rose-500' : 'text-gray-500'} />
        </button>

        {/* Open House */}
        {property.openHouse && (
          <div className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
            Open House: {property.openHouse}
          </div>
        )}

        {/* Listing Type Badge */}
        <div className="absolute bottom-3 right-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${property.listingType === 'rent' ? 'bg-purple-600 text-white' : 'bg-amber-500 text-white'}`}>
            For {property.listingType === 'rent' ? 'Rent' : 'Sale'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <Link href={`/properties/${property.id}`}>
            <h3 className="font-semibold text-gray-900 text-base leading-tight hover:text-amber-600 transition-colors line-clamp-1">
              {property.title}
            </h3>
          </Link>
        </div>
        <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
          <MapPin size={13} className="flex-shrink-0" />
          <span className="line-clamp-1">{property.city}, {property.state} {property.zip}</span>
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <Bed size={14} className="text-amber-500" />
            {property.bedrooms} <span className="hidden sm:inline">beds</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={14} className="text-amber-500" />
            {property.bathrooms} <span className="hidden sm:inline">baths</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Square size={14} className="text-amber-500" />
            {property.sqft.toLocaleString()} <span className="hidden sm:inline">sqft</span>
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-0.5">
              {property.listingType === 'rent' ? 'Monthly Rent' : 'Asking Price'}
            </p>
            <p className="text-xl font-bold" style={{ color: '#C9A96E' }}>
              {formatPrice(property.price, property.listingType)}
            </p>
          </div>
          <Link
            href={`/properties/${property.id}`}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
            style={{ background: 'linear-gradient(135deg, #0A1F44, #112a5a)' }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
