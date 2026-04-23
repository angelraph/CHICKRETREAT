import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { properties, getAgentById, formatPrice } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import PropertyDetailClient from './PropertyDetailClient';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find(p => p.id === id);
  if (!property) return { title: 'Property Not Found' };

  const description = `${property.bedrooms} bed, ${property.bathrooms} bath ${property.propertyType} in ${property.city}, ${property.state}. ${formatPrice(property.price, property.listingType)}.`;

  return {
    title: property.title,
    description,
    openGraph: {
      title: property.title,
      description,
      images: [{ url: property.images[0], width: 1200, height: 800, alt: property.title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: property.title,
      description,
      images: [property.images[0]],
    },
  };
}

export default async function PropertyDetailPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const property = properties.find(p => p.id === id);
  if (!property) notFound();

  const agent = getAgentById(property.agentId);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': property.propertyType === 'apartment' || property.propertyType === 'condo'
      ? 'Apartment'
      : 'SingleFamilyResidence',
    name: property.title,
    description: property.description,
    image: property.images,
    numberOfRooms: property.bedrooms,
    numberOfBathroomsTotal: property.bathrooms,
    floorSize: { '@type': 'QuantitativeValue', value: property.sqft, unitCode: 'FTK' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: property.address,
      addressLocality: property.city,
      addressRegion: property.state,
      postalCode: property.zip,
      addressCountry: 'US',
    },
    offers: {
      '@type': 'Offer',
      price: property.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    ...(agent && {
      agent: {
        '@type': 'RealEstateAgent',
        name: agent.name,
        telephone: agent.phone,
        email: agent.email,
      },
    }),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PropertyDetailClient property={property} agent={agent} />
    </>
  );
}
