'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define collection data
const collections = [
  {
    id: 1,
    title: 'Abstract Collection',
    description: 'Vibrant abstract works that evoke emotion through color and form.',
    image: '/images/collections/collection-1.png',
    itemCount: 12
  },
  {
    id: 2,
    title: 'Landscape Collection',
    description: 'Serene landscapes capturing the beauty of nature in various settings.',
    image: '/images/collections/collection-2.png',
    itemCount: 9
  },
  {
    id: 3,
    title: 'Portrait Collection',
    description: 'Expressive portraits that capture the essence of the human spirit.',
    image: '/images/collections/collection-3.png',
    itemCount: 8
  },
  {
    id: 4,
    title: 'Impressionist Collection',
    description: 'Works inspired by the impressionist movement, focusing on light and movement.',
    image: '/images/collections/collection-4.png',
    itemCount: 10
  },
  {
    id: 5,
    title: 'Modern Collection',
    description: 'Contemporary pieces that push boundaries and challenge perceptions.',
    image: '/images/collections/collection-5.png',
    itemCount: 7
  },
  {
    id: 6,
    title: 'Expressionist Collection',
    description: 'Bold expressions of inner emotions and experiences.',
    image: '/images/collections/collection-6.png',
    itemCount: 6
  },
  {
    id: 7,
    title: 'Surrealist Collection',
    description: 'Dreamlike scenes that blur the line between reality and imagination.',
    image: '/images/collections/collection-7.png',
    itemCount: 5
  },
  {
    id: 8,
    title: 'Minimalist Collection',
    description: 'Elegant simplicity with focus on essential elements and negative space.',
    image: '/images/collections/collection-8.png',
    itemCount: 8
  }
];

export default function CollectionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] mb-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-full w-full">
            <Image
              src="/images/hero.png"
              alt="Brushes and Palettes Collections"
              width={2852}
              height={870}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl font-serif font-bold mb-4">Our Collections</h1>
            <p className="text-xl">
              Explore our diverse range of art collections, each carefully curated to showcase different styles, themes, and artistic expressions.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map(collection => (
          <div key={collection.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className="relative h-64">
              <Image 
                src={collection.image}
                alt={collection.title}
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-serif font-bold mb-2">{collection.title}</h2>
              <p className="text-gray-600 mb-4">{collection.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{collection.itemCount} artworks</span>
                <Link 
                  href={`/gallery?collection=${collection.id}`}
                  className="px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </main>
  );
}
