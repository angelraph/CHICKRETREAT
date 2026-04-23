import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);
  if (!post) return { title: 'Not Found' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);
  if (!post) notFound();

  const related = blogPosts.filter(p => p.id !== id && p.category === post.category).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'ChicsRetreat', url: 'https://chicsretreat.com' },
    keywords: post.tags.join(', '),
  };

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
      {/* Hero */}
      <div className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-72 sm:h-96">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority quality={85} sizes="100vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,56,40,0.6), rgba(26,56,40,0.85))' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-4">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white mb-4" style={{ backgroundColor: '#C8A84A' }}>
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold font-heading text-white text-center max-w-3xl leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Back */}
        <Link href="/blog" className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors mb-8">
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          <span className="flex items-center gap-1.5"><User size={14} />{post.author}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime} min read</span>
          <span>{post.date}</span>
          <div className="flex gap-1.5 ml-auto flex-wrap">
            {post.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                <Tag size={10} />{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Excerpt as lead */}
        <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium">
          {post.excerpt}
        </p>

        {/* Article body */}
        <div
          className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6
            [&_h2]:text-xl [&_h2]:font-bold [&_h2]:font-heading [&_h2]:mt-8 [&_h2]:mb-4
            [&_p]:mb-4"
          style={{ ['--tw-prose-headings' as string]: '#1A3828' }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Card */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4 p-6 rounded-2xl" style={{ backgroundColor: '#F5F0E8' }}>
          <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 flex items-center justify-center">
            <User size={24} className="text-gray-400" />
          </div>
          <div>
            <p className="font-bold text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">Luxury Real Estate Specialist at ChicsRetreat</p>
          </div>
          <Link href="/agents" className="ml-auto text-sm font-medium hover:underline flex-shrink-0" style={{ color: '#C8A84A' }}>
            View Profile
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-heading mb-8" style={{ color: '#1A3828' }}>Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map(p => (
                <Link key={p.id} href={`/blog/${p.id}`} className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                  <div className="relative h-36">
                    <Image src={p.image} alt={p.title} fill quality={85} sizes="(max-width: 640px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-amber-600 transition-colors">{p.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{p.readTime} min · {p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
