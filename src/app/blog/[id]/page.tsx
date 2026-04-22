import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative h-72 sm:h-96">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,31,68,0.6), rgba(10,31,68,0.85))' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 px-4">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full text-white mb-4" style={{ backgroundColor: '#C9A96E' }}>
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

        {/* Sample long-form content */}
        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            The luxury real estate market continues to evolve at a rapid pace, driven by shifting demographics, changing workplace dynamics, and an unprecedented transfer of wealth to a new generation of buyers. Understanding these forces is essential for anyone looking to make strategic property decisions.
          </p>
          <h2 className="text-xl font-bold font-heading mt-8 mb-4" style={{ color: '#0A1F44' }}>Market Fundamentals</h2>
          <p>
            Despite rising interest rates, the luxury segment has demonstrated remarkable resilience. Properties priced above $3 million have continued to see strong demand, particularly in Sun Belt cities and established coastal markets. The key driver remains inventory scarcity — high-quality luxury properties simply are not coming to market in the volumes needed to satisfy demand.
          </p>
          <p>
            International buyers, particularly from Canada, the UK, and Asia-Pacific, continue to see American luxury real estate as a safe haven for capital. Dollar strength has moderated somewhat, making U.S. properties more accessible to foreign purchasers with strong local currencies.
          </p>
          <h2 className="text-xl font-bold font-heading mt-8 mb-4" style={{ color: '#0A1F44' }}>What Buyers Should Know</h2>
          <p>
            For buyers entering the luxury market for the first time, the most important insight is that this segment operates differently from the broader real estate market. Price reductions are rare, negotiating windows are narrow, and the best properties often trade off-market entirely through agent networks.
          </p>
          <p>
            This makes agent relationships paramount. Working with a specialist who has deep market relationships isn&apos;t just an advantage — it&apos;s often the difference between accessing the best inventory and being perpetually one step behind.
          </p>
          <h2 className="text-xl font-bold font-heading mt-8 mb-4" style={{ color: '#0A1F44' }}>Looking Ahead</h2>
          <p>
            The consensus among our agents is cautiously optimistic. Inventory is expected to remain tight, supporting values in established luxury markets. The new construction pipeline, particularly for ultra-luxury condominiums in major metros, bears watching — oversupply in certain building types could create pockets of opportunity for buyers.
          </p>
          <p>
            For sellers, this remains a strong market. Days on market for well-priced, well-presented properties are near historic lows. Presentation quality and pricing precision matter more than ever — buyers at this level are sophisticated and will not overpay for a property that hasn&apos;t been properly prepared for market.
          </p>
        </div>

        {/* Author Card */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4 p-6 rounded-2xl" style={{ backgroundColor: '#FAF7F2' }}>
          <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 flex items-center justify-center">
            <User size={24} className="text-gray-400" />
          </div>
          <div>
            <p className="font-bold text-gray-900">{post.author}</p>
            <p className="text-sm text-gray-500">Luxury Real Estate Specialist at LuxeEstates</p>
          </div>
          <Link href="/agents" className="ml-auto text-sm font-medium hover:underline flex-shrink-0" style={{ color: '#C9A96E' }}>
            View Profile
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-heading mb-8" style={{ color: '#0A1F44' }}>Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map(p => (
                <Link key={p.id} href={`/blog/${p.id}`} className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                  <div className="relative h-36">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
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
