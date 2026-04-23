'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, Grid3X3, List, X, ChevronDown, Search } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import { properties, Property, ListingType, PropertyType } from '@/lib/data';

const propertyTypeOptions: { value: PropertyType | ''; label: string }[] = [
  { value: '', label: 'All Types' },
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'condo', label: 'Condo' },
  { value: 'villa', label: 'Villa' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'townhouse', label: 'Townhouse' },
];

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'size-desc', label: 'Largest First' },
];

function PropertiesContent() {
  const searchParams = useSearchParams();

  const [listingType, setListingType] = useState<ListingType | 'all'>('all');
  const [propertyType, setPropertyType] = useState<PropertyType | ''>('');
  const [minBeds, setMinBeds] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const type = searchParams.get('type') as ListingType | null;
    if (type) setListingType(type);
    const pType = searchParams.get('propertyType') as PropertyType | null;
    if (pType) setPropertyType(pType);
    const loc = searchParams.get('location');
    if (loc) setSearchQuery(loc);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...properties];

    if (listingType !== 'all') {
      result = result.filter(p => p.listingType === listingType);
    }
    if (propertyType) {
      result = result.filter(p => p.propertyType === propertyType);
    }
    if (minBeds > 0) {
      result = result.filter(p => p.bedrooms >= minBeds);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.city.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q) ||
        p.zip.includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q)
      );
    }

    const buyMax = listingType === 'rent' ? 50000 : 10000000;
    result = result.filter(p => p.price <= maxPrice || p.price <= buyMax);

    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'size-desc': result.sort((a, b) => b.sqft - a.sqft); break;
      default: result.sort((a, b) => (b.newListing ? 1 : 0) - (a.newListing ? 1 : 0));
    }

    return result;
  }, [listingType, propertyType, minBeds, maxPrice, sortBy, searchQuery]);

  const clearFilters = () => {
    setListingType('all');
    setPropertyType('');
    setMinBeds(0);
    setMaxPrice(10000000);
    setSearchQuery('');
    setSortBy('newest');
  };

  const hasActiveFilters = listingType !== 'all' || propertyType !== '' || minBeds > 0 || searchQuery !== '';

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F0E8' }}>
      {/* Page Header */}
      <div className="pt-24 pb-10" style={{ backgroundColor: '#1A3828' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-2">
            Property Listings
          </h1>
          <p className="text-white/60 text-sm">
            {filtered.length} properties found {searchQuery && `near "${searchQuery}"`}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2.5 border border-gray-200 focus-within:border-amber-400 transition-all">
              <Search size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by city, ZIP, address..."
                className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none"
              />
            </div>

            {/* Buy/Rent Toggle */}
            <div className="flex rounded-xl overflow-hidden border border-gray-200 flex-shrink-0">
              {(['all', 'buy', 'rent'] as const).map(type => (
                <button
                  key={type}
                  onClick={() => setListingType(type)}
                  className="px-4 py-2.5 text-sm font-medium capitalize transition-all"
                  style={listingType === type
                    ? { background: '#1A3828', color: '#fff' }
                    : { background: '#f9fafb', color: '#6b7280' }
                  }
                >
                  {type === 'all' ? 'All' : type === 'buy' ? 'Buy' : 'Rent'}
                </button>
              ))}
            </div>

            {/* Property Type */}
            <select
              value={propertyType}
              onChange={e => setPropertyType(e.target.value as PropertyType | '')}
              className="px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-700 outline-none focus:border-amber-400 transition-all flex-shrink-0"
            >
              {propertyTypeOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Bedrooms */}
            <select
              value={minBeds}
              onChange={e => setMinBeds(Number(e.target.value))}
              className="px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl text-gray-700 outline-none focus:border-amber-400 transition-all flex-shrink-0"
            >
              <option value={0}>Any Beds</option>
              <option value={1}>1+ Beds</option>
              <option value={2}>2+ Beds</option>
              <option value={3}>3+ Beds</option>
              <option value={4}>4+ Beds</option>
              <option value={5}>5+ Beds</option>
            </select>

            {/* More Filters Button */}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl border border-gray-200 hover:border-amber-400 transition-all flex-shrink-0"
              style={{ color: filtersOpen ? '#C8A84A' : '#374151' }}
            >
              <SlidersHorizontal size={16} />
              Filters {hasActiveFilters && <span className="w-2 h-2 rounded-full bg-amber-500" />}
            </button>
          </div>

          {/* Expanded Filters */}
          {filtersOpen && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-2">Max Price</label>
                  <input
                    type="range"
                    min={100000}
                    max={10000000}
                    step={100000}
                    value={maxPrice}
                    onChange={e => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>$100K</span>
                    <span className="font-medium text-amber-600">${(maxPrice / 1000000).toFixed(1)}M</span>
                    <span>$10M+</span>
                  </div>
                </div>
                <div className="flex items-end">
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600 font-medium"
                    >
                      <X size={14} />
                      Clear All Filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">{filtered.length}</span> properties found
          </p>
          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="pl-3 pr-8 py-2 text-sm bg-white border border-gray-200 rounded-xl text-gray-700 outline-none appearance-none cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            {/* View Toggle */}
            <div className="flex rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className="p-2 transition-colors"
                style={viewMode === 'grid' ? { background: '#1A3828', color: '#fff' } : { color: '#6b7280' }}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className="p-2 transition-colors"
                style={viewMode === 'list' ? { background: '#1A3828', color: '#fff' } : { color: '#6b7280' }}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Property Grid/List */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl font-bold text-gray-300 mb-2">No properties found</p>
            <p className="text-gray-400 text-sm mb-4">Try adjusting your filters</p>
            <button onClick={clearFilters} className="text-amber-600 font-medium text-sm hover:underline">
              Clear all filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map(p => <PropertyCard key={p.id} property={p} variant="horizontal" />)}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense>
      <PropertiesContent />
    </Suspense>
  );
}
