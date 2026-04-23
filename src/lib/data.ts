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
    email: 'chicsretreat@gmail.com',
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
    email: 'chicsretreat@gmail.com',
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
    email: 'chicsretreat@gmail.com',
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
    email: 'chicsretreat@gmail.com',
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
    content: `<p>The luxury real estate market is entering 2025 in a fundamentally different position than it occupied just two years ago. After the rate-shock correction of 2023, the market has found its footing — and for buyers with the capital and conviction to act, the window of opportunity is unusually attractive.</p>
<h2>The Rate Environment Is Finally Cooperating</h2>
<p>The Federal Reserve's pivot toward rate cuts, which began in late 2024, has already filtered through to jumbo mortgage markets. Rates on loans above $2 million have declined meaningfully from their 2023 peaks, reducing carrying costs for financed purchases. For cash buyers — who represent the majority of transactions above $5M — the impact is indirect but real: lower rates bring more financed buyers back into the pool, tightening competition on desirable properties.</p>
<h2>Inventory Remains the Key Constraint</h2>
<p>Despite broad market softness in the $1M–$2M range, the true luxury segment — properties above $3M — continues to suffer from severe inventory constraints. Owners of exceptional properties have little incentive to sell into a market where finding an equivalent replacement would be difficult and expensive. This dynamic shows no signs of reversing in 2025.</p>
<p>Markets most affected by this scarcity: Malibu oceanfront, Beverly Hills flats, Manhattan penthouses above $10M, and Florida's coastal barrier islands. In these markets, properties that come to market are often sold within days — sometimes before they appear on public databases.</p>
<h2>New Construction Creates Opportunities</h2>
<p>The most interesting story of 2025 may be the delivery pipeline. A significant number of ultra-luxury condominium projects conceived before the 2022 rate spike are now completing, particularly in Miami, New York, and Los Angeles. This creates negotiating leverage that hasn't existed in the resale market for years.</p>
<p>Developers who pre-sold at 2021–2022 price points may be willing to negotiate on parking, storage, and closing costs to clear remaining inventory. Buyers who engage early — before these buildings achieve stabilized occupancy — can capture meaningful value.</p>
<h2>The Geographic Shift Continues</h2>
<p>Sun Belt markets that surged during the pandemic era have undergone a healthy correction. Austin, Phoenix, and Nashville saw double-digit price growth followed by retrenchment — and are now attractively priced relative to their long-term fundamentals. Remote work normalization means buyers are no longer choosing between career and lifestyle.</p>
<p>Meanwhile, New York and California markets are seeing a quiet resurgence of interest from buyers who left during the pandemic and have been priced out of the markets they moved to. The appeal of world-class culture, walkability, and professional infrastructure is proving durable.</p>
<h2>What Sophisticated Buyers Are Doing Right Now</h2>
<p>The buyers we're advising at ChicsRetreat are taking a portfolio approach to real estate. Rather than concentrating capital in a single property, many are diversifying across markets — pairing a primary residence with a rental income property in a high-yield market like Miami or a vacation property in a mountain or coastal destination.</p>
<p>Whatever your strategy, the consistent advice from our team is this: work with an agent who has genuine market relationships. In the luxury segment, the best opportunities never reach the open market. They're transacted quietly between agents who trust each other and whose clients' needs align. That network is the most valuable asset we offer.</p>`,
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
    content: `<p>Entering the luxury real estate market for the first time is both exhilarating and daunting. The properties are extraordinary. The stakes are high. The process involves nuances that simply don't apply in the mass market. After 15 years guiding first-time luxury buyers through transactions from $2M to $20M, here is what I wish every client knew before we started.</p>
<h2>Understand the Financing Landscape First</h2>
<p>Jumbo mortgages — loans above the conforming limit, currently around $766,550 in most markets — operate by different rules than conventional mortgages. Lenders require more documentation, larger reserves, and impose stricter debt-to-income requirements. The approval process takes longer.</p>
<p>Before you tour a single property, get pre-approved. Not pre-qualified — actually pre-approved. This means submitting your full financial picture to a lender who specializes in jumbo lending. In competitive luxury markets, sellers will not consider an offer from a buyer who can't demonstrate financing certainty. Cash is even better: if you have the option to close in cash and refinance later, that flexibility can be worth hundreds of thousands in negotiating leverage.</p>
<h2>Choose Your Agent Carefully</h2>
<p>The luxury market is small, relationship-driven, and deeply dependent on trust. The agent you choose will determine which properties you see, how sellers perceive your offer, and ultimately what you pay. This is not a market where you want to work with a generalist who dabbles in the high end occasionally.</p>
<p>Ask prospective agents: How many transactions above your target price have you closed in the past 12 months? What off-market opportunities are you currently aware of? Can you provide references from buyers at my price point? The answers will tell you everything.</p>
<h2>Define What You Actually Need</h2>
<p>Luxury properties are often so compelling that buyers lose sight of their actual requirements. I've seen clients fall in love with extraordinary estates that were too large to maintain, too far from schools, or in HOA structures they hadn't fully understood. Before viewing anything, write down your non-negotiables and stick to them.</p>
<p>Consider: proximity to work, schools, and airports; property type (estate vs. condo vs. urban townhouse); indoor/outdoor living priorities; privacy requirements; and your appetite for renovation versus turnkey condition. Properties requiring renovation are almost always underpriced relative to turnkey equivalents — but renovation in the luxury segment can easily run $1,000–$2,000 per square foot for quality work.</p>
<h2>Commission a Pre-Offer Inspection</h2>
<p>Many luxury buyers are reluctant to commission inspections before making an offer, fearing they'll lose money if the deal falls through. This is a false economy. A thorough inspection by a specialist who understands high-end construction can identify issues that would cost millions to remediate — roofing, foundation, mechanical systems, and environmental concerns like mold or soil contamination are common in older luxury properties.</p>
<p>In competitive situations, consider commissioning a pre-inspection and offering to waive the inspection contingency in your offer. This substantially strengthens your position while still protecting you from material surprises.</p>
<h2>Understand the Full Cost of Ownership</h2>
<p>The purchase price is only the beginning. Before you make an offer, understand the ongoing carrying costs: property taxes (which can be $50,000–$200,000+ per year on high-value properties), homeowner's association fees, insurance (luxury properties often require specialized coverage), and staffing costs if the property requires a housekeeper, groundskeeper, or property manager.</p>
<p>For properties in California, Proposition 13 means reassessment at purchase — your taxes will be based on the purchase price, not the prior owner's basis. In Florida, homestead exemption provides meaningful savings for primary residents. These details matter when comparing the economics of competing properties.</p>`,
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
    content: `<p>Miami's real estate market has matured remarkably in the past decade. What was once a market driven primarily by South American capital flight has become a globally recognized investment destination attracting buyers from New York, California, Europe, and Asia. The best opportunities are still ahead — if you know where to look.</p>
<h2>1. Coconut Grove: The Undervalued Classic</h2>
<p>Coconut Grove is Miami's oldest neighborhood and, I would argue, its most undervalued. Mature tree canopies, a walkable village center, and a genuinely diverse mix of architecture — from mid-century modern to new construction — make it unique among Miami's neighborhoods. It doesn't have the flash of Brickell or South Beach, but the fundamentals are compelling.</p>
<p>Prices per square foot in the Grove remain 20–30% below comparable neighborhoods, and the pipeline of new luxury construction is limited by the neighborhood's low-density zoning. Waterfront single-family homes on the bay are trading at $3M–$8M, with strong rental demand from the tech and creative communities relocating to Miami.</p>
<h2>2. Edgewater: The Next Brickell</h2>
<p>A decade ago, Edgewater was a transitional neighborhood of aging apartment buildings between downtown and Wynwood. Today, it hosts some of the most striking new luxury towers in the city, and the transformation is accelerating. Its Biscayne Bay frontage — largely undeveloped compared to Brickell's densely built waterfront — creates an unusual opportunity: bay views at prices that still lag Brickell by 15–25%.</p>
<p>The investor case here is straightforward: new towers from premier developers are commanding $700–$900 per square foot on pre-sales. As the neighborhood's amenity base fills in, those numbers will converge with Brickell's $1,000+ pricing. Buyers who act before that convergence happens capture the spread.</p>
<h2>3. Coral Gables: The Stability Play</h2>
<p>If you're seeking capital preservation combined with reliable rental income, Coral Gables is the market's most consistent performer. The city's strict architectural standards and limited new development create enduring scarcity. The University of Miami anchors demand, and the presence of major multinational corporations in Brickell has pushed executive housing demand into the Gables' beautiful historic neighborhoods.</p>
<p>Single-family homes in the $2M–$4M range are particularly attractive for investors who want to offer furnished rentals to corporate relocations. Gross yields of 5–6% are achievable — exceptional for the quality of property involved.</p>
<h2>4. South of Fifth: The Luxury Rental Crown Jewel</h2>
<p>South of Fifth is the quiet, refined residential pocket at the southern tip of South Beach that has attracted the city's most sophisticated residents for thirty years. Unlike the tourist-heavy stretches of Ocean Drive, SoFi is genuinely livable — walkable to world-class restaurants, steps from the beach, and protected from the noise of the entertainment district.</p>
<p>Luxury condos here trade at $1,500–$2,500+ per square foot, the highest in Miami outside of Fisher Island. Monthly rental rates for furnished units run $15,000–$40,000, making even a $3M unit cash-flow positive when occupied.</p>
<h2>5. Brickell Key: The Best-Kept Secret</h2>
<p>Brickell Key is a man-made island connected to the Brickell financial district by a single bridge. The island's exclusivity, security, and bayfront setting have made it a perennial favorite with international buyers who value privacy above all else — yet it consistently trades at a discount to mainland Brickell.</p>
<p>The opportunity to buy at pre-renovation prices in the older buildings and benefit from the subsequent value increase is real. Watch for motivated sellers — they represent the best risk/reward in the Miami market right now.</p>`,
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
    content: `<p>When I began my career in real estate twenty years ago, a "smart home" meant a good security system and perhaps a built-in sound system. Today, the technology infrastructure of a luxury home is as important to sophisticated buyers as the kitchen or master suite. Understanding what's genuinely valuable — and what's expensive novelty — is essential knowledge for anyone in this market.</p>
<h2>The Control Layer: Where It All Starts</h2>
<p>Every truly integrated smart home runs on a unified control platform. The market leaders — Crestron, Control4, and Savant — are to smart homes what luxury car brands are to automobiles: not just prettier, but fundamentally better engineered. These platforms don't just connect devices; they learn patterns, anticipate needs, and provide seamless control through touchscreens, keypads, and voice commands throughout the home.</p>
<p>The key differentiator at the luxury level is professional programming and ongoing support. Consumer-grade smart home systems can be configured by homeowners, but the reliability and sophistication that buyers expect in a $5M+ home require dedicated installers and support contracts. Expect to invest $50,000–$300,000+ for a properly integrated system in a large estate.</p>
<h2>Climate Intelligence Is the Quiet Revolution</h2>
<p>HVAC technology has advanced more than any other home system in the past decade, and the implications for both comfort and operating costs are profound. AI-driven climate management systems learn occupancy patterns, optimize for energy efficiency, and can manage multi-zone systems with extraordinary precision.</p>
<p>For large estates — particularly properties above 7,000 square feet with multiple zones — intelligent climate management can reduce annual energy costs by 30–40%. In California, where electricity rates have reached $0.40+/kWh in peak periods, the payback period on a sophisticated climate system can be as short as three years.</p>
<h2>Security and Access Have Been Transformed</h2>
<p>Biometric access — fingerprint, facial recognition, and palm vein readers — is now standard in new luxury construction. These systems offer two advantages over traditional key and code systems: security is genuinely higher, and access management becomes effortless. Grant and revoke access to staff, guests, or contractors remotely, with complete audit trails of who entered and when.</p>
<p>AI-powered camera analytics can distinguish between package deliveries, known family members, and unknown visitors — alerting homeowners only when truly warranted, rather than flooding their phones with hundreds of motion alerts daily.</p>
<h2>The Wellness Home: A New Category Emerges</h2>
<p>Perhaps the most significant emerging category in luxury home technology is what designers are calling the "wellness home." This encompasses circadian lighting that modulates color temperature throughout the day to support natural sleep patterns, air quality systems that continuously monitor and filter particulates and VOCs, and water filtration systems that treat every tap to laboratory purity standards.</p>
<p>Buyers returning from ultra-luxury hotel stays increasingly want to replicate those environmental conditions at home. The technology to do so now exists at a residential scale — and buyers who've experienced it will not accept less.</p>
<h2>What to Ask When Evaluating a Smart Home</h2>
<p>Not all smart homes are created equal. When evaluating a technology-enabled property, ask: Who installed the system and what is the ongoing support arrangement? Is the control platform a consumer product or a professional-grade system? What is the software upgrade path? Is there a documented network topology and device inventory?</p>
<p>Properties with fragmented, consumer-grade systems that lack documentation and support are often more liability than asset. Properties with properly engineered, documented, and supported systems command — and deserve — a meaningful premium.</p>`,
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
    content: `<p>The question I am asked more often than any other is: how do your clients consistently get deals that other buyers miss? After 15 years and over $500M in closed transactions, the answer is never one thing. It's a system. And every part of that system starts before you ever pick up the phone to make an offer.</p>
<h2>Intelligence Is Your Most Valuable Asset</h2>
<p>Great negotiators win in real estate because they know things their counterpart doesn't. Before I advise a client to make an offer on any property, I invest serious time in understanding the seller's situation. How long has the property been on the market? Did it come off the market and re-list? Were there price reductions, and if so, how large were they and when did they happen? Has the seller bought another property already?</p>
<p>Each of these facts creates leverage. A seller who has already purchased their next home is carrying two mortgages and has strong incentive to close quickly. An estate sale may be more emotional — the family may resist below-ask offers on principle even when it's economically irrational. Knowing the difference shapes every offer you make.</p>
<h2>Price Is Only One of Many Variables</h2>
<p>Amateur buyers negotiate on price. Sophisticated buyers negotiate on the package. In luxury real estate, the contract contains dozens of terms that carry real economic weight: earnest money and its release conditions, inspection contingency periods, financing contingencies, personal property inclusions, closing date, seller-paid closing costs, and post-closing occupancy arrangements.</p>
<p>I've saved clients $300,000 on paper by accepting a seller's asking price while negotiating aggressively on terms that reduced the effective price — furniture inclusions that would have cost $150,000 to replace, a seller-paid rate buydown worth $80,000 over five years, and an extended escrow that gave my client time to structure a 1031 exchange. The listing price never changed.</p>
<h2>The Psychology of the Counter-Offer</h2>
<p>How you structure your initial offer communicates as much as the number itself. An offer at a round number ($3,000,000 on a $3,500,000 listing) signals that the buyer is anchoring at a psychologically simple number — not that they've done serious homework. An offer at $3,187,500 says something different: that the buyer has analyzed the comparable sales and arrived at a precise conclusion. The second offer is taken more seriously, even if the number is lower.</p>
<p>Similarly, a clean, well-organized offer package with a strong pre-approval letter, evidence of funds, and a brief personal letter from the buyer is more compelling than a bare contract. Sellers are human beings. They respond to buyers who seem worthy of their home.</p>
<h2>Know When to Walk Away</h2>
<p>The most powerful negotiating position is genuine willingness to walk away. Sellers' agents can read buyer desperation — it changes every interaction from the first showing onward. When a buyer has one property in mind and no alternatives, they negotiate from weakness. When they have two or three serious contenders, they negotiate from strength.</p>
<p>I always advise clients to establish in advance the number above which they will not go. That number isn't what they'd pay if they had to — it's what the property is worth given the comparable sales, the carrying costs, and the opportunity cost of the capital. In my experience, roughly one in four situations where we walk away results in the seller's agent calling back within two weeks with a new position.</p>
<h2>Close Fast When You Have the Leverage</h2>
<p>When a seller is motivated and the terms are converging, acceleration is your friend. Every day that passes in an open negotiation is a day that another buyer could arrive. Once you've reached agreement in principle, move decisively: order the inspection immediately, deliver the full earnest money promptly, and stay in close communication with the seller's agent. The best deals close fast because both parties want them to.</p>`,
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
    content: `<p>The market above $10 million in Manhattan is a world unto itself. The rules that apply to real estate in the broader market — days on market, comparable sales, list-to-sale ratios — apply here only loosely, if at all. I've spent my career in this market, and I can tell you: it rewards patience, relationship capital, and a level of analytical rigor that most buyers never bring to bear.</p>
<h2>Who Is Buying at This Level?</h2>
<p>The buyer profile in Manhattan's ultra-luxury segment is genuinely global and increasingly diverse. The traditional cohort — Wall Street executives, hedge fund founders, and private equity principals — remains active, but they now share the market with tech founders who have monetized stakes in public or acquired companies, international buyers using New York as a dollar-denominated safe haven, and multigenerational family offices executing long-horizon real estate strategies.</p>
<p>International demand deserves special attention. Despite periods of dollar strength, the rule-of-law premium that New York commands has never been more valuable. European buyers, in particular, view Manhattan properties with a safety that Paris, London, or Zurich can no longer fully provide in a world of shifting political risk.</p>
<h2>The Off-Market Premium Is Real</h2>
<p>My conservative estimate is that 40–50% of transactions above $10M in Manhattan never appear on StreetEasy or the MLS. They are transacted through private agent networks, often before the seller has formally committed to selling. This isn't an accident — it's a deliberate strategy by sellers who prize discretion and want to control the buyer pool.</p>
<p>Accessing this inventory requires being known to the agents who control it, having a reputation for closing cleanly, and maintaining active buyer relationships over years, not weeks. Buyers who appear only when they're ready to purchase are never going to see the best of what's available at this level.</p>
<h2>What $10M–$20M Actually Gets You</h2>
<p>The $10M–$20M range is arguably the sweet spot of Manhattan's ultra-luxury market. Below $10M, the inventory is broader but the properties often lack the full-floor or floor-to-ceiling window experience that defines the category. Above $20M, the buyer pool is thin enough that liquidity risk becomes meaningful — properties can sit for years waiting for the right buyer.</p>
<p>In 2025, $15M in the Upper East Side buys a full-floor co-op in a white-glove prewar building with approximately 4,000 square feet, high ceilings, and park or river views. The same $15M in a new development on Billionaires' Row buys roughly 3,000 square feet with higher ceilings and more dramatic views — but significantly higher carrying costs in the form of common charges and real estate taxes.</p>
<h2>The Co-op Approval Process: What You Must Know</h2>
<p>Manhattan's co-op market — which accounts for the majority of luxury residential inventory in the best prewar buildings — is unlike any other real estate market in the world. The board approval process requires disclosure of tax returns for three years, brokerage statements, bank statements, letters of reference, and sometimes an in-person interview.</p>
<p>Boards can reject applicants for reasons that, in any other context, would be legally questionable. The practical implication: before you make an offer on a co-op, have your agent assess your board approval prospects honestly. A $12M offer that gets rejected after a four-month approval process is a significant waste of time and capital. The best buildings in the best locations often have the most selective boards.</p>
<h2>The Long View on Values</h2>
<p>Manhattan ultra-luxury real estate has delivered compelling long-term returns, but the path has not been linear. The 2008–2009 downturn cut values sharply; the 2014–2019 period saw extraordinary appreciation; 2020 brought disruption followed by recovery. The investors who have done best are those who held through the cycles and bought with a ten-plus-year horizon in mind.</p>
<p>The macro case for Manhattan remains intact: a globally unique concentration of financial, cultural, and intellectual capital in a finite geography with no ability to expand horizontally. Supply constraints in the ultra-luxury segment are permanent. Long-term demand from global wealth creation continues to grow. For buyers with the capital and the patience, the analysis points in one direction.</p>`,
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
