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
    title: 'Bongo Residential Estate',
    address: 'Bongo Layout, Bwari Area Council',
    city: 'Abuja',
    state: 'FCT',
    zip: '901101',
    price: 50000000,
    listingType: 'buy',
    propertyType: 'house',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    yearBuilt: 2025,
    description: 'A landmark investment opportunity in the heart of Abuja\'s fastest-growing corridor. Bongo Residential Estate by Elysian Homes & Properties Limited offers premium plots with an unmatched 18-month cash back incentive — earn up to 45% returns plus a bonus plot allocation. The estate features a fully serviced layout with perimeter fencing, road networks, and reliable power infrastructure, positioned minutes from Kubwa and the Abuja city centre.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    ],
    features: ['18-Month Cashback', '45% ROI + 2 Bonus Plots', 'Governor\'s Consent Title', 'Perimeter Fencing', 'Road Network', 'Electricity', 'Gated Estate', 'Flexible Payment Plans'],
    tags: ['Investment', 'New', 'Featured'],
    agentId: '1',
    lat: 9.1507,
    lng: 7.3615,
    featured: true,
    newListing: true,
    garage: 2,
    lotSize: 6000,
  },
  {
    id: '2',
    title: 'Eko Atlantic Sky Penthouse',
    address: 'Eko Atlantic City, Ocean Drive',
    city: 'Lagos',
    state: 'Lagos',
    zip: '101241',
    price: 650000000,
    listingType: 'buy',
    propertyType: 'penthouse',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5200,
    yearBuilt: 2023,
    description: 'Perched on the 40th floor of Eko Atlantic\'s most prestigious tower, this exceptional penthouse delivers uninterrupted panoramic views of the Atlantic Ocean and Lagos skyline. Finished to the highest international standard with Italian marble, Miele appliances, and a private rooftop terrace, this is the pinnacle of Lagos luxury living.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
    ],
    features: ['Private Rooftop Terrace', 'Concierge', 'Fitness Center', 'Ocean Views', 'Italian Marble', 'Valet Parking', 'Generator Backup', '24/7 Security'],
    tags: ['Luxury', 'Penthouse', 'Ocean Views'],
    agentId: '2',
    lat: 6.4108,
    lng: 3.4081,
    featured: true,
    newListing: false,
    garage: 2,
  },
  {
    id: '3',
    title: 'Old Ikoyi Grand Mansion',
    address: '14 Bourdillon Road, Old Ikoyi',
    city: 'Lagos',
    state: 'Lagos',
    zip: '101233',
    price: 1200000000,
    listingType: 'buy',
    propertyType: 'house',
    bedrooms: 7,
    bathrooms: 7,
    sqft: 10500,
    yearBuilt: 2020,
    description: 'A palatial mansion on one of Ikoyi\'s most coveted addresses. Set behind private electric gates on a full plot, this grand residence spans three floors with a grand reception hall, formal dining room, cinema room, and a resort-style pool flanked by mature tropical gardens. Staff quarters, a generator house, and a 5-car garage complete this extraordinary estate.',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    features: ['Private Pool', 'Cinema Room', 'Staff Quarters', 'Gated Estate', '5-Car Garage', 'Smart Home', 'Tropical Garden', 'Generator House'],
    tags: ['Luxury', 'Estate', 'Featured'],
    agentId: '1',
    lat: 6.4441,
    lng: 3.4388,
    featured: true,
    newListing: false,
    garage: 5,
    lotSize: 50000,
  },
  {
    id: '4',
    title: 'Lekki Phase 1 Smart Apartment',
    address: '23 Admiralty Way, Lekki Phase 1',
    city: 'Lagos',
    state: 'Lagos',
    zip: '106104',
    price: 185000000,
    listingType: 'buy',
    propertyType: 'apartment',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2400,
    yearBuilt: 2022,
    description: 'A stunning contemporary apartment in one of Lekki Phase 1\'s most sought-after serviced residences. The open-plan living space is bathed in natural light through floor-to-ceiling glazing, with a fully fitted kitchen featuring imported appliances, and a private balcony with lagoon-facing views. Full estate amenities and 24-hour security.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
    ],
    features: ['Lagoon Views', 'Smart Home', 'Pool', 'Gym', 'Concierge', 'Private Balcony', 'Generator', '24/7 Security'],
    tags: ['New', 'Lagoon Views', 'Open House'],
    agentId: '3',
    lat: 6.4484,
    lng: 3.4714,
    featured: true,
    newListing: true,
    openHouse: 'Sun, Apr 27 · 1–4 PM',
    garage: 2,
  },
  {
    id: '5',
    title: 'Maitama Executive Villa',
    address: 'Plot 1452, Cadastral Zone A03, Maitama',
    city: 'Abuja',
    state: 'FCT',
    zip: '900271',
    price: 380000000,
    listingType: 'buy',
    propertyType: 'villa',
    bedrooms: 5,
    bathrooms: 5,
    sqft: 6200,
    yearBuilt: 2021,
    description: 'An architecturally distinguished executive villa in the heart of Maitama, Abuja\'s most prestigious residential district. Combining clean contemporary lines with luxurious finishes — imported stone flooring, bespoke cabinetry, and a heated infinity pool — this home sets the standard for high-level living in the nation\'s capital. Minutes from the Presidential Villa, top embassies, and the Transcorp Hilton.',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80',
    ],
    features: ['Infinity Pool', 'Smart Home', 'Outdoor Kitchen', 'Guest Chalet', '4-Car Garage', 'BQ', 'Perimeter Wall', 'Intercom Security'],
    tags: ['Luxury', 'Executive'],
    agentId: '2',
    lat: 9.0820,
    lng: 7.4858,
    featured: false,
    newListing: false,
    garage: 4,
    lotSize: 28000,
  },
  {
    id: '6',
    title: 'GRA Port Harcourt Luxury Duplex',
    address: '7 Peter Odili Road, GRA Phase 2',
    city: 'Port Harcourt',
    state: 'Rivers',
    zip: '500272',
    price: 900000,
    listingType: 'rent',
    propertyType: 'house',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 3600,
    yearBuilt: 2019,
    description: 'A beautifully finished luxury duplex in the serene and secure GRA Phase 2, Port Harcourt\'s premier residential enclave. The home features double-height entrance foyer, spacious en-suite rooms, a designer kitchen with granite worktops, and a landscaped garden. Fully serviced compound with 24-hour security, CCTV, and dedicated generator.',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80',
    ],
    features: ['Landscaped Garden', 'CCTV Security', 'Generator', 'Granite Kitchen', 'En-suite Rooms', 'BQ', 'Tiled Compound'],
    tags: ['Luxury', 'Available Now'],
    agentId: '3',
    lat: 4.8156,
    lng: 7.0498,
    featured: true,
    newListing: true,
    garage: 2,
  },
  {
    id: '7',
    title: 'Victoria Island Luxury Townhouse',
    address: '5 Adeola Odeku Street, Victoria Island',
    city: 'Lagos',
    state: 'Lagos',
    zip: '101241',
    price: 420000000,
    listingType: 'buy',
    propertyType: 'townhouse',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4100,
    yearBuilt: 2022,
    description: 'A refined four-bedroom townhouse in the commercial and diplomatic heart of Victoria Island. Spread across four floors with a private rooftop entertainment terrace, this residence combines the benefits of apartment-style building security with the space and privacy of a standalone home. Walking distance to top restaurants, banks, and embassies.',
    images: [
      'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
    ],
    features: ['Rooftop Terrace', 'Chef Kitchen', 'Smart Home', 'Wine Room', 'Private Lift', 'Generator', '24/7 Security'],
    tags: ['Luxury', 'Open House'],
    agentId: '1',
    lat: 6.4285,
    lng: 3.4206,
    featured: false,
    newListing: false,
    openHouse: 'Sat, Apr 26 · 2–5 PM',
    garage: 2,
  },
  {
    id: '8',
    title: 'Oniru Waterfront Serviced Apartment',
    address: 'Oniru Estate, Off Lekki-Epe Expressway',
    city: 'Lagos',
    state: 'Lagos',
    zip: '106104',
    price: 1200000,
    listingType: 'rent',
    propertyType: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    yearBuilt: 2021,
    description: 'A premium fully-serviced two-bedroom apartment in the exclusive Oniru Estate with partial Atlantic Ocean views. Modern open-plan living with floor-to-ceiling windows, imported kitchen fittings, and high-quality finishes throughout. Full estate amenities including a pool deck, gym, 24-hour concierge, and controlled access.',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80',
    ],
    features: ['Ocean Views', 'Pool', 'Gym', 'Concierge', 'Generator', 'Water Treatment', 'CCTV Security'],
    tags: ['Waterfront', 'Available Now'],
    agentId: '2',
    lat: 6.4421,
    lng: 3.4571,
    featured: false,
    newListing: true,
    garage: 1,
  },
];

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Adaeze Okonkwo',
    title: 'Luxury Property Specialist',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    phone: '+234 (0) 802 555 0191',
    email: 'chicsretreat@gmail.com',
    bio: 'With over 15 years of experience in Nigerian luxury real estate, Adaeze has closed more than ₦80B in transactions across Lagos Island, Ikoyi, and Victoria Island. Her deep market expertise and white-glove service have earned her a reputation as one of the most trusted names in Nigerian premium real estate.',
    experience: 15,
    listings: 42,
    sold: 380,
    rating: 4.9,
    reviews: 127,
    specialties: ['Luxury Homes', 'Ikoyi & VI', 'Investment Properties'],
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '2',
    name: 'Chukwuemeka Eze',
    title: 'Senior Real Estate Advisor',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    phone: '+234 (0) 803 555 0134',
    email: 'chicsretreat@gmail.com',
    bio: 'Emeka combines financial sector acumen with deep real estate expertise accumulated over 12 years serving Abuja\'s executive class. Specialising in Maitama, Asokoro, and Eko Atlantic, he has advised ministers, diplomats, and multinationals on their most significant property decisions.',
    experience: 12,
    listings: 38,
    sold: 290,
    rating: 4.8,
    reviews: 98,
    specialties: ['Penthouses', 'Abuja Market', 'New Development'],
    social: { linkedin: '#', twitter: '#' },
  },
  {
    id: '3',
    name: 'Chiamaka Obi',
    title: 'Residential & Luxury Rentals',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    phone: '+234 (0) 805 555 0278',
    email: 'chicsretreat@gmail.com',
    bio: 'Chiamaka is Port Harcourt\'s foremost specialist in luxury residential properties and high-end rentals. Born and raised in the Garden City, she has an unrivalled knowledge of every GRA enclave, estate, and off-plan development. Her broad network spans the oil & gas sector and the wider South-South business community.',
    experience: 10,
    listings: 55,
    sold: 210,
    rating: 4.9,
    reviews: 84,
    specialties: ['Waterfront', 'Luxury Rentals', 'Port Harcourt GRA'],
    social: { linkedin: '#', instagram: '#' },
  },
  {
    id: '4',
    name: 'Olumide Adeyemi',
    title: 'Estate & Development Expert',
    photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
    phone: '+234 (0) 807 555 0356',
    email: 'chicsretreat@gmail.com',
    bio: 'Olumide has spent two decades navigating Lagos\'s dynamic and nuanced property market. His background in architecture gives him a critical eye for construction quality and value that clients rely on completely. He has been recognised as one of Nigeria\'s Top 10 Real Estate Professionals three years running by Property & Finance Magazine.',
    experience: 20,
    listings: 29,
    sold: 450,
    rating: 5.0,
    reviews: 156,
    specialties: ['Architecture & Design', 'Lekki Corridor', 'Off-Plan Investment'],
    social: { linkedin: '#', instagram: '#', twitter: '#' },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Chidi & Ngozi Okafor',
    location: 'Old Ikoyi, Lagos',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'Adaeze exceeded every expectation we had. Finding our dream home on Bourdillon Road felt impossible until she took over. Her knowledge of the Ikoyi market, negotiation skills, and attention to detail are simply unmatched. We secured the property at a price we thought was unreachable.',
    date: 'March 2025',
    agentName: 'Adaeze Okonkwo',
  },
  {
    id: '2',
    name: 'Tunde Adeleke',
    location: 'Maitama, Abuja',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    text: 'Emeka helped me secure an off-market villa in Maitama before it was ever publicly listed. His network in Abuja is extraordinary. The entire process from first viewing to keys in hand took just 5 weeks — impressive for a transaction of this scale. I\'ve already referred two colleagues to him.',
    date: 'February 2025',
    agentName: 'Chukwuemeka Eze',
  },
  {
    id: '3',
    name: 'Blessing Adesanya',
    location: 'Lekki Phase 1, Lagos',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80',
    rating: 5,
    text: 'Chiamaka is an absolute gem. She understood exactly what I needed in a Lekki rental and found me a stunning serviced apartment within three days of our first call. Her local knowledge is unbeatable and she managed the entire process — from inspection to tenancy agreement — without any stress on my part.',
    date: 'April 2025',
    agentName: 'Chiamaka Obi',
  },
  {
    id: '4',
    name: 'Dr. Ahmed & Fatima Musa',
    location: 'Asokoro, Abuja',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    rating: 5,
    text: 'Olumide\'s background in architecture made all the difference when we were evaluating builds on VI. He identified quality issues that would have cost us millions — and then found us a far superior property two weeks later. His expertise and integrity are genuinely rare in this market.',
    date: 'January 2025',
    agentName: 'Olumide Adeyemi',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '2025 Luxury Real Estate Market Outlook: What Buyers Need to Know',
    excerpt: 'The luxury real estate market is entering a new phase. Here\'s what high-net-worth buyers should expect in the coming year and how to position yourself for success.',
    content: `<p>Nigeria's luxury real estate market is entering 2025 in a fundamentally different position than it occupied just two years ago. After the naira devaluation shocks of 2023, the market has recalibrated — and for buyers with the capital and conviction to act, the window of opportunity is unusually attractive for those thinking in naira terms.</p>
<h2>The Currency Environment Is Recalibrating</h2>
<p>The Central Bank of Nigeria's shift toward a more market-reflective exchange rate, which began in mid-2023, has had complex effects on the luxury real estate market. In naira terms, prime property values have risen sharply as inflation eroded purchasing power. In dollar terms, values remain below their 2021–2022 peaks — creating a compelling entry point for diaspora buyers and those with foreign-currency income who want naira-denominated assets as a hedge.</p>
<h2>Inventory Remains the Key Constraint</h2>
<p>Despite economic turbulence, the true luxury segment — properties in Ikoyi, Banana Island, Eko Atlantic, and Maitama — continues to suffer from severe inventory constraints. Owners of exceptional properties have little incentive to sell into a market where finding an equivalent replacement would be difficult and expensive. Grade A supply in prime Lagos has not kept pace with demand for a decade.</p>
<p>Markets most affected by this scarcity: Old Ikoyi's Bourdillon Road corridor, Banana Island, and the first-generation towers on Eko Atlantic. In these locations, properties that come to market are often transacted within weeks — sometimes before any public listing is created.</p>
<h2>New Development Creates Opportunities</h2>
<p>The most interesting story of 2025 may be the off-plan pipeline. A significant number of ultra-luxury residential projects across Lekki Phase 1, Victoria Island, and Abuja's Katampe extension are in various stages of development. This creates negotiating leverage that doesn't exist in the resale market.</p>
<p>Developers managing cash flow under construction financing pressure are often willing to negotiate on payment schedules, finishing upgrades, and pricing — particularly for buyers who can demonstrate commitment early. Buyers who engage before a project reaches 60% subscription can capture meaningful discounts relative to delivered value.</p>
<h2>The Geographic Diversification Story</h2>
<p>Abuja's market has matured significantly. Five years ago, Abuja was considered the secondary market to Lagos's primary. Today, driven by federal government infrastructure investment, the return of oil sector capital, and a growing middle class demanding quality housing, Maitama and Asokoro are generating appreciation that competes credibly with Lekki and Ikoyi.</p>
<p>Meanwhile, Port Harcourt's GRA enclaves are benefiting from renewed oil sector activity and returning diaspora investment. Garden City is no longer the afterthought it was treated as — it is a genuine investment market with compressing yields and rising capital values.</p>
<h2>What Sophisticated Buyers Are Doing Right Now</h2>
<p>The clients we're advising at ChicsRetreat are taking a portfolio approach to Nigerian real estate. Rather than concentrating capital in a single property, many are pairing a primary Lagos residence with an Abuja investment property and a short-let unit managed professionally for rental yield. The diversification reduces exposure to any single market and optimises for both capital preservation and income.</p>
<p>Whatever your strategy, the consistent advice from our team is this: work with an agent who has genuine market relationships. In Nigeria's luxury segment, the best opportunities never reach public databases. They are transacted quietly between agents who trust each other and whose clients' needs align. That network is the most valuable asset we offer.</p>`,
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80',
    category: 'Market Trends',
    author: 'Chukwuemeka Eze',
    date: 'April 15, 2025',
    readTime: 8,
    tags: ['Market Trends', 'Luxury', 'Investment'],
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Buying Your First Luxury Home',
    excerpt: 'Stepping into the luxury market for the first time? Our comprehensive guide walks you through every step — from securing financing to closing the deal on your dream property.',
    content: `<p>Entering the luxury real estate market for the first time is both exhilarating and daunting. The properties are extraordinary. The stakes are high. The process involves nuances that simply don't apply in the mass market. After 15 years guiding first-time luxury buyers through transactions from ₦100M to ₦2B, here is what I wish every client knew before we started.</p>
<h2>Understand the Financing Landscape First</h2>
<p>Mortgage finance for luxury properties in Nigeria remains limited compared to mature markets, and the terms — high interest rates, short tenors, substantial equity requirements — mean that the majority of transactions above ₦100M are cash transactions. This is not a market where you can rely on cheap leverage to amplify returns.</p>
<p>Before you tour a single property, understand your liquidity position with precision. Can you move within four to six weeks if the right property appears? Sellers of premium properties have little patience for buyers who need time to arrange funds. The best assets in the Ikoyi and Maitama corridors go to buyers who can demonstrate readiness immediately. That readiness is your most important negotiating asset.</p>
<h2>Choose Your Agent Carefully</h2>
<p>Nigeria's luxury market is small, relationship-driven, and deeply dependent on trust. The agent you choose will determine which properties you see — including the 60–70% that are never publicly advertised — how sellers perceive your offer, and ultimately what you pay. This is not a market where you want to work with a generalist who dabbles in the high end occasionally.</p>
<p>Ask prospective agents: How many transactions above your target price have you closed in the past 12 months? What off-market opportunities are you currently aware of? Can you provide references from buyers at my price point? The answers will tell you everything.</p>
<h2>Define What You Actually Need</h2>
<p>Luxury properties are often so compelling that buyers lose sight of their actual requirements. I've seen clients fall in love with extraordinary properties in Banana Island that required full renovation, or large Maitama estates that were impractical to staff and maintain. Before viewing anything, write down your non-negotiables and hold to them.</p>
<p>Consider: proximity to work, schools, and infrastructure; property type (standalone house vs. serviced apartment vs. townhouse); security and estate management quality; generator and water supply reliability; and your appetite for renovation versus turnkey. In Nigeria's luxury segment, renovation of a large property can easily cost ₦50M–₦150M for quality work — a material addition to your effective purchase price.</p>
<h2>Conduct Rigorous Title Due Diligence</h2>
<p>Title verification is the most important step in any Nigerian property transaction, and at the luxury level the stakes are proportionate. At minimum, you must verify the Certificate of Occupancy (C of O) or Governor's Consent is valid and unencumbered. Engage an independent property solicitor — not the developer's lawyer, not the seller's lawyer — to conduct a search at the relevant land registry before you commit any funds.</p>
<p>This process takes two to four weeks. Sellers of genuine quality properties will accommodate it. If a seller is pushing for a rushed transaction without time for proper searches, treat that as a significant red flag regardless of how compelling the property appears.</p>
<h2>Understand the Full Cost of Ownership</h2>
<p>The purchase price is only the beginning. Before you make an offer, understand the carrying costs: Land Use Charge (Lagos) or Ground Rent (FCT), service charges for serviced estates, security costs, generator fuel and maintenance (plan for ₦200,000–₦500,000+ per month for a large property), and staffing if the property requires a housekeeper, gardener, or property manager.</p>
<p>Estate service charges vary enormously — some premium estates charge ₦1M–₦3M per annum for genuine services (security, landscaping, road maintenance, power backup infrastructure); others charge similar amounts for minimal delivery. Verify what you are actually getting before factoring charges into your economics.</p>`,
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
    category: 'Buying Guide',
    author: 'Adaeze Okonkwo',
    date: 'April 8, 2025',
    readTime: 12,
    tags: ['Buying Guide', 'First Time', 'Tips'],
  },
  {
    id: '3',
    title: 'Top 5 Lagos Neighbourhoods for Real Estate Investment in 2025',
    excerpt: 'Lagos continues to attract domestic and international capital. We break down the five neighbourhoods offering the best combination of appreciation potential and rental yields right now.',
    content: `<p>Lagos's real estate market has matured remarkably in the past decade. What was once a market dominated by a handful of Island addresses has expanded into a sophisticated, multi-tier investment landscape attracting buyers from across Nigeria, the diaspora, and international institutions. The best opportunities are still ahead — if you know where to look.</p>
<h2>1. Ikoyi: The Enduring Blue Chip</h2>
<p>Ikoyi remains Nigeria's most prestigious residential address and, for capital preservation, its most reliable market. The finite supply of genuinely prime addresses — Bourdillon Road, Alexander Avenue, Glover Road — combined with strong demand from multinationals, diplomats, and Nigeria's wealthiest individuals, creates a scarcity dynamic that no other Lagos neighbourhood can replicate.</p>
<p>Prime Ikoyi properties are trading at ₦500,000–₦2M per square metre for completed stock, with off-plan pricing from quality developers sitting at a 20–30% discount to that range. Gross rental yields of 5–7% per annum are consistently achievable.</p>
<h2>2. Eko Atlantic: The Frontier of Tomorrow</h2>
<p>Eko Atlantic City is arguably Africa's most ambitious urban development — a reclaimed land city-within-a-city off Lagos Island designed to international standards with its own power, water, and road infrastructure. A decade ago it was a construction site. Today, towers from global and Nigerian developers are being completed and occupied at pace.</p>
<p>The investment case is straightforward: global infrastructure in a global city. Prices remain below comparable international financial district addresses in Nairobi, Johannesburg, or Dubai — but that gap is closing. Early-stage investors who bought in 2018–2020 have seen values double in dollar terms.</p>
<h2>3. Lekki Phase 1: The Sweet Spot</h2>
<p>If Ikoyi is the Mayfair of Lagos, Lekki Phase 1 is its Chelsea — established, desirable, and still accessible to a wider pool of serious buyers. The corridor from Admiralty Way to the Lekki-Epe Expressway hosts some of the city's finest serviced apartment developments, and rental demand from the tech, media, and financial services sectors is exceptionally strong.</p>
<p>Three-bedroom serviced apartments are the most liquid asset class in this corridor. Gross yields of 7–9% are achievable with professional short-let management, and capital values have appreciated 15–20% per annum in naira terms over the past three years.</p>
<h2>4. Victoria Island: The Business Case</h2>
<p>Victoria Island is Lagos's commercial and diplomatic hub — and its residential offering, particularly along Ahmadu Bello Way and the Adeola Odeku corridor, is among the most coveted in the city. The concentration of embassies, multinationals, and financial institutions creates sustained demand for quality corporate housing at premium rents.</p>
<p>Furnished short-let apartments on Victoria Island can achieve ₦800,000–₦1,500,000 per month, making the investment arithmetic compelling for quality two- and three-bedroom units. Scarcity of Grade A residential stock relative to corporate demand is the enduring structural tailwind.</p>
<h2>5. Banana Island: The Prestige Outlier</h2>
<p>Banana Island is the most exclusive residential address in Nigeria — a planned island development off Ikoyi with a controlled number of residential plots, a marina, and a level of security and infrastructure found nowhere else in Lagos. Properties here very rarely come to market.</p>
<p>When they do, they trade at Nigeria's highest residential values — from ₦2B for a well-located house to significantly more for trophy assets. The investment case is less about yield and more about wealth preservation: there will never be more Banana Island addresses. For buyers who can access this market, the long-term supply constraint is absolute.</p>`,
    image: 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&q=80',
    category: 'Investment Tips',
    author: 'Chiamaka Obi',
    date: 'March 28, 2025',
    readTime: 6,
    tags: ['Investment', 'Lagos', 'Neighbourhoods'],
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
    author: 'Olumide Adeyemi',
    date: 'March 20, 2025',
    readTime: 7,
    tags: ['Smart Home', 'Technology', 'Luxury'],
  },
  {
    id: '5',
    title: 'Negotiation Secrets: How We Save Clients Millions',
    excerpt: 'The best real estate negotiations happen before you ever make an offer. Here are the insider strategies our agents use to consistently close deals at below-asking prices.',
    content: `<p>The question I am asked more often than any other is: how do your clients consistently get deals that other buyers miss? After 15 years and over ₦80B in closed transactions across Lagos and Abuja, the answer is never one thing. It's a system. And every part of that system starts before you ever pick up the phone to make an offer.</p>
<h2>Intelligence Is Your Most Valuable Asset</h2>
<p>Great negotiators win in real estate because they know things their counterpart doesn't. Before I advise a client to make an offer on any property, I invest serious time in understanding the seller's situation. How long has the property been on the market? Did it come off the market and re-list? Were there price reductions, and if so, how large were they and when did they happen? Is this an estate sale, a relocation, or a developer managing cash flow?</p>
<p>Each of these facts creates leverage. A developer completing a project under construction finance pressure has strong incentive to close quickly. A family estate sale may be emotional — the heirs may resist below-ask offers on principle even when it is economically irrational. Knowing the difference shapes every offer you make.</p>
<h2>Price Is Only One of Many Variables</h2>
<p>Amateur buyers negotiate on price. Sophisticated buyers negotiate on the package. In Nigerian luxury real estate, the transaction contains numerous terms that carry real economic weight: payment schedule and milestones, furniture and fitting inclusions, documentation and legal fee allocation, completion and handover date, and post-sale remediation commitments for snagging items.</p>
<p>I've saved clients ₦30M on paper by accepting a seller's asking price while negotiating aggressively on terms that reduced the effective cost — appliance packages that would have cost ₦15M to source independently, an agreed payment schedule that preserved the buyer's liquidity for three months, and seller-funded title upgrade to Governor's Consent. The asking price never moved.</p>
<h2>The Psychology of the Counter-Offer</h2>
<p>How you structure your initial offer communicates as much as the number itself. An offer at a round number (₦400M on a ₦450M listing) signals that the buyer is anchoring at a psychologically simple number — not that they've done serious research. An offer at ₦387.5M says something different: that the buyer has analyzed recent comparable transactions and arrived at a considered conclusion. The second offer is taken more seriously, even when the number is lower.</p>
<p>Similarly, a buyer who shows evidence of clear funds and an established legal team, and who comes recommended by a trusted agent, is a fundamentally different counterpart to the seller than an unknown party making the same offer. In Nigeria's luxury market, trust in the buyer's ability to close is often as important as the headline price.</p>
<h2>Know When to Walk Away</h2>
<p>The most powerful negotiating position is genuine willingness to walk away. Sellers and their agents can read buyer desperation — it changes every interaction from the first visit onward. When a buyer has one property in mind and no alternatives, they negotiate from weakness. When they have two or three serious contenders, they negotiate from strength.</p>
<p>I always advise clients to establish in advance the number above which they will not go. That number isn't what they'd pay if they had to — it's what the property is worth given comparable transactions, the carrying costs, and the opportunity cost of the capital. Roughly one in four situations where we walk away results in the seller coming back within two weeks with a substantially improved position.</p>
<h2>Close Fast When You Have the Leverage</h2>
<p>When a seller is motivated and the terms are converging, acceleration is your friend. Every day that passes in an open negotiation is a day that another buyer could arrive. Once you've reached agreement in principle, move decisively: instruct your solicitor immediately to begin title searches, send the agreed deposit promptly, and maintain close communication with the seller's agent. The best deals close fast because both parties want them to.</p>`,
    image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80',
    category: 'Buying Guide',
    author: 'Adaeze Okonkwo',
    date: 'March 12, 2025',
    readTime: 10,
    tags: ['Negotiation', 'Strategy', 'Tips'],
  },
  {
    id: '6',
    title: 'Nigeria\'s Ultra-Luxury Market: A Deep Dive',
    excerpt: 'The market above ₦500M in Lagos and Abuja operates by entirely different rules. Our senior advisor reveals what drives values, who\'s buying, and how to navigate this rarified tier.',
    content: `<p>The market above ₦500 million in Nigeria is a world unto itself. The rules that apply to the broader residential market — asking prices, advertised listings, standard conveyancing timelines — apply here only loosely, if at all. I've spent my career in this market, and I can tell you: it rewards patience, relationship capital, and a level of due diligence that most buyers never bring to bear.</p>
<h2>Who Is Buying at This Level?</h2>
<p>The buyer profile in Nigeria's ultra-luxury segment is broader than many assume. The traditional cohort — oil and gas executives, banking sector principals, and family conglomerates — remains active, but they now share the market with a new generation of tech founders who have exited companies or raised significant venture capital, diaspora investors seeking naira-denominated assets, and increasingly, institutional family offices executing multigenerational real estate strategies.</p>
<p>International demand deserves particular attention. High-net-worth Nigerians returning from London, Dubai, and Houston are driving premium demand in Ikoyi and Maitama. They arrive with international expectations for finish quality, infrastructure reliability, and transaction professionalism — and they are changing what the market is willing to pay for properties that genuinely meet those standards.</p>
<h2>The Off-Market Premium Is Real</h2>
<p>My conservative estimate is that 60–70% of transactions above ₦500M in Lagos are never advertised publicly. They are transacted through agent networks built over years, often before the seller has formally decided to sell. Sellers at this level — executives, politicians, businesspeople — prize discretion absolutely. A property appearing on a public listing platform signals desperation that no premium seller wants to communicate.</p>
<p>Accessing this inventory requires being trusted by the principals and agents who control it. Buyers who approach the market transactionally, without existing relationships, will see only what everyone else sees — and pay full market price for the privilege.</p>
<h2>What ₦500M–₦1B Actually Gets You</h2>
<p>The ₦500M–₦1B range is the most active tier in Nigeria's ultra-luxury segment. In Ikoyi, ₦600M–₦800M buys a newly built detached four- to five-bedroom residence with a pool, boys' quarters, and modern finishing on a standard plot. The same budget in Maitama, Abuja commands substantially more land — often a full 2,000sqm plot — but typically with less architectural ambition than Lagos's best contemporary builds.</p>
<p>Banana Island is a separate category entirely. Even ₦1B will not buy a new-build on Nigeria's most exclusive address. Properties on the island rarely change hands, and when they do, it is at values that reflect not just the property but the irreplaceable address.</p>
<h2>Title Due Diligence: The Non-Negotiable</h2>
<p>Title risk is the defining feature of Nigerian real estate that separates it from mature markets. At the ultra-luxury level, the stakes of inadequate due diligence are proportionate: a ₦700M transaction with a defective title is a ₦700M problem. Governors' Consent and Certificate of Occupancy (C of O) are the minimum acceptable title forms; anything less requires specialist legal review before any commitment is made.</p>
<p>At ChicsRetreat, we will not facilitate a transaction above ₦100M without independent title verification. It adds two to four weeks to the process. It has saved clients from catastrophic errors on more than one occasion.</p>
<h2>The Long View on Values</h2>
<p>Nigerian ultra-luxury real estate has delivered compelling returns, but measured in naira rather than dollars. For buyers whose liabilities and consumption are predominantly naira-denominated, the returns have been exceptional — particularly in the Ikoyi corridor, where prime values have consistently outpaced inflation. For buyers benchmarking in foreign currency, the story is more nuanced, as naira depreciation periodically compresses dollar-equivalent returns.</p>
<p>The structural case remains intact: a rapidly urbanising population, a finite supply of Grade A addresses, a growing high-net-worth cohort, and rising international interest in Nigerian assets. For buyers with the capital, the relationships, and the patience to navigate the market properly, the opportunity is real — and the competition is lower than you might expect.</p>`,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
    category: 'Market Trends',
    author: 'Chukwuemeka Eze',
    date: 'March 5, 2025',
    readTime: 9,
    tags: ['Nigeria', 'Ultra-Luxury', 'Market'],
  },
];

export function formatPrice(price: number, listingType: ListingType): string {
  if (listingType === 'rent') {
    return `₦${price.toLocaleString()}/mo`;
  }
  if (price >= 1000000) {
    return `₦${(price / 1000000).toFixed(price % 1000000 === 0 ? 0 : 1)}M`;
  }
  return `₦${price.toLocaleString()}`;
}

export function getAgentById(id: string): Agent | undefined {
  return agents.find(a => a.id === id);
}
