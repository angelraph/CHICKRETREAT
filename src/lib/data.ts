export type PropertyType = 'house' | 'apartment' | 'condo' | 'villa' | 'penthouse' | 'townhouse';
export type ListingType = 'buy' | 'rent';

export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  listingType: ListingType;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  description: string;
  images: string[];
  features: string[];
  tags: string[];
  agentId: string;
  lat: number;
  lng: number;
  featured: boolean;
  newListing: boolean;
  openHouse?: string;
  garage: number;
  lotSize?: number;
}

export interface Agent {
  id: string;
  name: string;
  title: string;
  photo: string;
  phone: string;
  email: string;
  bio: string;
  experience: number;
  listings: number;
  sold: number;
  rating: number;
  reviews: number;
  specialties: string[];
  social: { linkedin?: string; instagram?: string; twitter?: string };
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  photo: string;
  rating: number;
  text: string;
  date: string;
  agentName: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  tags: string[];
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Oceanfront Modern Villa',
    address: '2847 Coastal Highway',
    city: 'Malibu',
    state: 'CA',
    zip: '90265',
    price: 4850000,
    listingType: 'buy',
    propertyType: 'villa',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6200,
    yearBuilt: 2021,
    description: 'A breathtaking oceanfront masterpiece designed by award-winning architects. This contemporary villa features floor-to-ceiling windows, an infinity pool overlooking the Pacific, and bespoke finishes throughout. The open-plan living spaces seamlessly blend indoor and outdoor living with retractable glass walls opening to expansive terraces.',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    features: ['Infinity Pool', 'Home Theater', 'Wine Cellar', 'Smart Home', 'Ocean Views', 'Chef Kitchen', 'Spa', 'Private Beach Access'],
    tags: ['Luxury', 'Oceanfront', 'New'],
    agentId: '1',
    lat: 34.0259,
    lng: -118.7798,
    featured: true,
    newListing: true,
    garage: 3,
    lotSize: 12000,
  },
  {
    id: '2',
    title: 'Manhattan Penthouse Suite',
    address: '432 Park Avenue, Floor 88',
    city: 'New York',
    state: 'NY',
    zip: '10022',
    price: 7200000,
    listingType: 'buy',
    propertyType: 'penthouse',
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 4800,
    yearBuilt: 2019,
    description: 'Perched atop one of Manhattan\'s most iconic towers, this extraordinary penthouse offers 360-degree city views through its 11-foot floor-to-ceiling windows. Featuring hand-selected Italian marble, bespoke millwork, and a private rooftop terrace, this residence defines luxury urban living.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    ],
    features: ['Private Rooftop Terrace', 'Concierge', 'Fitness Center', 'City Views', 'Italian Marble', 'Doorman', 'Valet Parking'],
    tags: ['Luxury', 'Penthouse', 'City Views'],
    agentId: '2',
    lat: 40.7589,
    lng: -73.9741,
    featured: true,
    newListing: false,
    garage: 2,
  },
  {
    id: '3',
    title: 'Beverly Hills Estate',
    address: '1200 Sunset Boulevard',
    city: 'Beverly Hills',
    state: 'CA',
    zip: '90210',
    price: 9500000,
    listingType: 'buy',
    propertyType: 'house',
    bedrooms: 7,
    bathrooms: 8,
    sqft: 9800,
    yearBuilt: 2018,
    description: 'An extraordinary estate behind private gates in the coveted flats of Beverly Hills. This palatial residence spans nearly 10,000 square feet and sits on over an acre of lush landscaped grounds. Features include a grand ballroom, screening room, resort-style pool, and staff quarters.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    ],
    features: ['Grand Ballroom', 'Screening Room', 'Tennis Court', 'Guest House', 'Resort Pool', 'Gated Entry', 'Staff Quarters'],
    tags: ['Luxury', 'Estate', 'Featured'],
    agentId: '1',
    lat: 34.0736,
    lng: -118.4004,
    featured: true,
    newListing: false,
    garage: 4,
    lotSize: 45000,
  },
  {
    id: '4',
    title: 'Modern Downtown Condo',
    address: '500 Brickell Key Drive, Unit 2401',
    city: 'Miami',
    state: 'FL',
    zip: '33131',
    price: 1250000,
    listingType: 'buy',
    propertyType: 'condo',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2100,
    yearBuilt: 2022,
    description: 'A stunning high-rise condo in the heart of Brickell with panoramic bay and city views. This fully updated residence features an open floor plan, gourmet kitchen with SubZero appliances, and resort-style building amenities including a rooftop pool and spa.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
    ],
    features: ['Bay Views', 'Rooftop Pool', 'Gym', 'Concierge', 'Smart Home', 'Private Balcony'],
    tags: ['New', 'Bay Views', 'Open House'],
    agentId: '3',
    lat: 25.7617,
    lng: -80.1918,
    featured: true,
    newListing: true,
    openHouse: 'Sun, Apr 27 · 1–4 PM',
    garage: 2,
  },
  {
    id: '5',
    title: 'Scottsdale Desert Retreat',
    address: '8900 N Pima Road',
    city: 'Scottsdale',
    state: 'AZ',
    zip: '85258',
    price: 2800000,
    listingType: 'buy',
    propertyType: 'house',
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 5600,
    yearBuilt: 2020,
    description: 'A masterfully designed desert contemporary home nestled against the iconic McDowell Mountains. Clean lines, natural materials, and expansive retractable walls create a seamless indoor-outdoor living experience. The resort-style backyard features a negative-edge pool, covered ramada, and built-in BBQ.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80',
    ],
    features: ['Mountain Views', 'Negative-Edge Pool', 'Smart Home', 'Outdoor Kitchen', 'Casita', '4-Car Garage'],
    tags: ['Luxury', 'Mountain Views'],
    agentId: '2',
    lat: 33.6292,
    lng: -111.8943,
    featured: false,
    newListing: false,
    garage: 4,
    lotSize: 22000,
  },
  {
    id: '6',
    title: 'Chelsea Luxury Apartment',
    address: '245 W 14th Street, Unit 8C',
    city: 'New York',
    state: 'NY',
    zip: '10011',
    price: 14500,
    listingType: 'rent',
    propertyType: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    yearBuilt: 2017,
    description: 'Elegant two-bedroom apartment in the heart of Chelsea with designer finishes throughout. Features an open kitchen with waterfall island, in-unit washer/dryer, and a private terrace with High Line views. Full-service building with doorman, gym, and rooftop.',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
    ],
    features: ['High Line Views', 'Private Terrace', 'Gym', 'Doorman', 'In-Unit W/D', 'Rooftop Access'],
    tags: ['Luxury', 'Terrace', 'Available Now'],
    agentId: '3',
    lat: 40.7406,
    lng: -74.0002,
    featured: true,
    newListing: true,
    garage: 1,
  },
  {
    id: '7',
    title: 'Pacific Heights Townhouse',
    address: '2900 Broadway',
    city: 'San Francisco',
    state: 'CA',
    zip: '94115',
    price: 3750000,
    listingType: 'buy',
    propertyType: 'townhouse',
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3800,
    yearBuilt: 2015,
    description: 'An impeccably renovated Victorian-meets-modern townhouse in prestigious Pacific Heights. Original architectural details harmonize with contemporary updates: chef\'s kitchen, spa-like primary suite, and a roof deck with stunning Bay views. Walking distance to top restaurants and boutiques.',
    images: [
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    ],
    features: ['Bay Views', 'Roof Deck', 'Chef Kitchen', 'Period Details', 'Wine Room', 'Smart Home'],
    tags: ['Luxury', 'Bay Views', 'Open House'],
    agentId: '1',
    lat: 37.7920,
    lng: -122.4367,
    featured: false,
    newListing: false,
    openHouse: 'Sat, Apr 26 · 2–5 PM',
    garage: 2,
  },
  {
    id: '8',
    title: 'Brickell Waterfront Condo',
    address: '1000 Brickell Bay Dr, Unit 3200',
    city: 'Miami',
    state: 'FL',
    zip: '33131',
    price: 8500,
    listingType: 'rent',
    propertyType: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1650,
    yearBuilt: 2020,
    description: 'Stunning waterfront condo with breathtaking views of Biscayne Bay. Modern open floor plan with floor-to-ceiling windows, Italian cabinetry, and premium finishes. Resort-style amenities include pool deck, spa, fitness center, and valet parking.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
    ],
    features: ['Bay Views', 'Valet Parking', 'Pool', 'Spa', 'Fitness Center', 'Concierge'],
    tags: ['Waterfront', 'Available Now'],
    agentId: '2',
    lat: 25.7617,
    lng: -80.1920,
    featured: false,
    newListing: true,
    garage: 1,
  },
];

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Alexandra Reeves',
    title: 'Luxury Property Specialist',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    phone: '+1 (310) 555-0191',
    email: 'alexandra@luxeestates.com',
    bio: 'With over 15 years of experience in luxury real estate, Alexandra has closed more than $500M in transactions across Los Angeles, Beverly Hills, and Malibu. Her deep market expertise and white-glove service have earned her a reputation as one of the most trusted names in California luxury real estate.',
    experience: 15,
    listings: 42,
    sold: 380,
    rating: 4.9,
    reviews: 127,
    specialties: ['Luxury Homes', 'Oceanfront', 'Investment Properties'],
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '2',
    name: 'Marcus Chen',
    title: 'Senior Real Estate Advisor',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    phone: '+1 (212) 555-0134',
    email: 'marcus@luxeestates.com',
    bio: 'Marcus brings a unique perspective combining Wall Street financial acumen with deep real estate expertise. Specializing in New York City and the Hamptons, he has advised Fortune 500 executives, celebrities, and international investors on their most important real estate decisions.',
    experience: 12,
    listings: 38,
    sold: 290,
    rating: 4.8,
    reviews: 98,
    specialties: ['Penthouses', 'Investment', 'New Development'],
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: '3',
    name: 'Sofia Martinez',
    title: 'Residential & Luxury Rentals',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    phone: '+1 (305) 555-0278',
    email: 'sofia@luxeestates.com',
    bio: 'Sofia is Miami\'s go-to specialist for luxury waterfront properties and high-end rentals. Born and raised in Miami, she has an intimate knowledge of every neighborhood and building in the city. Her bilingual expertise and international network make her uniquely positioned to serve both domestic and global clients.',
    experience: 10,
    listings: 55,
    sold: 210,
    rating: 4.9,
    reviews: 84,
    specialties: ['Waterfront', 'Luxury Rentals', 'New Development'],
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '4',
    name: 'James Whitfield',
    title: 'Estate & Development Expert',
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
    phone: '+1 (415) 555-0356',
    email: 'james@luxeestates.com',
    bio: 'James has spent two decades helping clients navigate San Francisco\'s competitive and nuanced real estate market. His background in architecture gives him an eye for quality that clients trust implicitly. James has been named SF\'s Top Agent five years running by the San Francisco Business Times.',
    experience: 20,
    listings: 29,
    sold: 450,
    rating: 5.0,
    reviews: 156,
    specialties: ['Architecture', 'Historic Properties', 'SF Bay Area'],
    social: { linkedin: '#', instagram: '#', twitter: '#' },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'David & Emma Thompson',
    location: 'Beverly Hills, CA',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'Alexandra exceeded every expectation we had. Finding our dream home in Beverly Hills felt impossible until she took over. Her market knowledge, negotiation skills, and attention to detail are simply unmatched. We closed $400K under asking price on a property we\'d been eyeing for months.',
    date: 'March 2025',
    agentName: 'Alexandra Reeves',
  },
  {
    id: '2',
    name: 'Robert Kim',
    location: 'Manhattan, NY',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    text: 'Marcus helped me find an off-market penthouse that wasn\'t even listed yet. His network is extraordinary. The entire process from first showing to closing took just 6 weeks — record time for a transaction of this size. I\'ve already referred three colleagues to him.',
    date: 'February 2025',
    agentName: 'Marcus Chen',
  },
  {
    id: '3',
    name: 'Isabella Santos',
    location: 'Miami, FL',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
    rating: 5,
    text: 'Sofia is an absolute gem. She understood exactly what I was looking for in a Miami rental and found me a stunning waterfront condo within two days of our first meeting. Her local knowledge is unbeatable and she made the whole process stress-free.',
    date: 'April 2025',
    agentName: 'Sofia Martinez',
  },
  {
    id: '4',
    name: 'Michael & Priya Patel',
    location: 'San Francisco, CA',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    rating: 5,
    text: 'James\'s architectural background made all the difference when evaluating properties in Pacific Heights. He spotted structural issues that saved us from making a costly mistake — and then found us an absolute gem two weeks later. His expertise is worth every penny.',
    date: 'January 2025',
    agentName: 'James Whitfield',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '2025 Luxury Real Estate Market Outlook: What Buyers Need to Know',
    excerpt: 'The luxury real estate market is entering a new phase. Here\'s what high-net-worth buyers should expect in the coming year and how to position yourself for success.',
    content: '',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80',
    category: 'Market Trends',
    author: 'Marcus Chen',
    date: 'April 15, 2025',
    readTime: 8,
    tags: ['Market Trends', 'Luxury', 'Investment'],
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Buying Your First Luxury Home',
    excerpt: 'Stepping into the luxury market for the first time? Our comprehensive guide walks you through every step — from securing financing to closing the deal on your dream property.',
    content: '',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
    category: 'Buying Guide',
    author: 'Alexandra Reeves',
    date: 'April 8, 2025',
    readTime: 12,
    tags: ['Buying Guide', 'First Time', 'Tips'],
  },
  {
    id: '3',
    title: 'Top 5 Miami Neighborhoods for Real Estate Investment in 2025',
    excerpt: 'Miami continues to attract global capital. We break down the five neighborhoods offering the best combination of appreciation potential and rental yields right now.',
    content: '',
    image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&q=80',
    category: 'Investment Tips',
    author: 'Sofia Martinez',
    date: 'March 28, 2025',
    readTime: 6,
    tags: ['Investment', 'Miami', 'Neighborhoods'],
  },
  {
    id: '4',
    title: 'How Smart Home Technology is Transforming Luxury Real Estate',
    excerpt: 'From AI-powered climate control to biometric security systems, we explore how cutting-edge technology is redefining what luxury means in modern real estate.',
    content: '',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'Lifestyle',
    author: 'James Whitfield',
    date: 'March 20, 2025',
    readTime: 7,
    tags: ['Smart Home', 'Technology', 'Luxury'],
  },
  {
    id: '5',
    title: 'Negotiation Secrets: How We Save Clients Millions',
    excerpt: 'The best real estate negotiations happen before you ever make an offer. Here are the insider strategies our agents use to consistently close deals at below-asking prices.',
    content: '',
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80',
    category: 'Buying Guide',
    author: 'Alexandra Reeves',
    date: 'March 12, 2025',
    readTime: 10,
    tags: ['Negotiation', 'Strategy', 'Tips'],
  },
  {
    id: '6',
    title: 'New York City\'s Ultra-Luxury Market: A Deep Dive',
    excerpt: 'The market above $10 million in Manhattan operates by different rules. Our NYC specialist reveals what drives values, who\'s buying, and how to navigate this rarified tier.',
    content: '',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    category: 'Market Trends',
    author: 'Marcus Chen',
    date: 'March 5, 2025',
    readTime: 9,
    tags: ['New York', 'Ultra-Luxury', 'Market'],
  },
];

export function formatPrice(price: number, listingType: ListingType): string {
  if (listingType === 'rent') {
    return `$${price.toLocaleString()}/mo`;
  }
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(price % 1000000 === 0 ? 0 : 1)}M`;
  }
  return `$${price.toLocaleString()}`;
}

export function getAgentById(id: string): Agent | undefined {
  return agents.find(a => a.id === id);
}
