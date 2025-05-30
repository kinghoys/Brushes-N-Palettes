'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('bio');
  
  return (
    <div className="pt-20 min-h-screen">
      {/* Header Section */}
      <section className="bg-accent-light py-12">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-4">About the Artist</h1>
          <p className="body-text text-center max-w-2xl mx-auto">
            Learn about the journey, inspiration, and philosophy behind my artwork.
          </p>
        </div>
      </section>
      
      {/* Artist Bio Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Artist Image */}
            <div className="bg-gray-200 rounded-lg h-96 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Artist Image Will Appear Here
              </div>
            </div>
            
            {/* Artist Bio */}
            <div>
              <h2 className="heading-md mb-6">My Story</h2>
              <p className="body-text mb-4">
                My journey as an artist began in early childhood, where I found solace and expression through colors and forms. What started as a passionate hobby evolved into a lifelong dedication to creating art that resonates with emotion and meaning.
              </p>
              <p className="body-text mb-4">
                After studying fine arts at the Academy of Art University in San Francisco, I developed my distinctive style by blending traditional techniques with contemporary themes. My work explores the interplay between nature and human emotion, seeking to capture the essence of fleeting moments and deep feelings.
              </p>
              <p className="body-text mb-6">
                Today, I create from my studio overlooking the mountains, where the changing light and seasons provide endless inspiration. Each painting represents a piece of my soul, a story waiting to be interpreted through the viewer's own experiences.
              </p>
              <div className="flex space-x-4">
                <Link href="/gallery" className="btn-primary">
                  View Gallery
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tabs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Tab Navigation */}
          <div className="flex flex-wrap border-b mb-8">
            <button
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === 'bio' 
                  ? 'border-b-2 border-accent text-accent' 
                  : 'text-gray-500 hover:text-accent'
              }`}
              onClick={() => setActiveTab('bio')}
            >
              Artistic Philosophy
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === 'process' 
                  ? 'border-b-2 border-accent text-accent' 
                  : 'text-gray-500 hover:text-accent'
              }`}
              onClick={() => setActiveTab('process')}
            >
              Creative Process
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg ${
                activeTab === 'exhibitions' 
                  ? 'border-b-2 border-accent text-accent' 
                  : 'text-gray-500 hover:text-accent'
              }`}
              onClick={() => setActiveTab('exhibitions')}
            >
              Exhibitions & Awards
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {/* Artistic Philosophy */}
            {activeTab === 'bio' && (
              <div className="animate-fade-in">
                <h2 className="heading-md mb-6">Artistic Philosophy</h2>
                <p className="body-text mb-4">
                  I believe that art should evoke emotion, tell stories, and create connections. My paintings are a bridge between my inner world and the viewer's experience, inviting personal interpretation and emotional response.
                </p>
                <p className="body-text mb-4">
                  I draw inspiration from the beauty of natural landscapes, the complexity of human emotions, and the interplay of light and shadow. Through my work, I seek to capture moments of tranquility, wonder, and contemplation in our fast-paced world.
                </p>
                <p className="body-text mb-4">
                  Color is central to my artistic expression. I use bold, vibrant palettes to convey emotion and energy, while more subdued tones create moments of reflection and peace. The texture and layering in my paintings add depth and invite closer inspection, revealing new details with each viewing.
                </p>
                <p className="body-text">
                  Ultimately, my goal is to create artwork that resonates with viewers on a personal level, bringing beauty, meaning, and a moment of pause to their lives and spaces.
                </p>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h3 className="font-medium text-lg mb-2">Emotion</h3>
                    <p className="text-sm text-gray-600">Creating work that stirs feeling and connection</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h3 className="font-medium text-lg mb-2">Nature</h3>
                    <p className="text-sm text-gray-600">Finding inspiration in natural beauty and organic forms</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                    <h3 className="font-medium text-lg mb-2">Authenticity</h3>
                    <p className="text-sm text-gray-600">Staying true to personal vision and artistic integrity</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Creative Process */}
            {activeTab === 'process' && (
              <div className="animate-fade-in">
                <h2 className="heading-md mb-6">My Creative Process</h2>
                
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Process Image 1</p>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium mb-2">Inspiration & Concept</h3>
                      <p className="text-gray-700">
                        Each painting begins with inspiration – from nature, emotions, or everyday experiences. I spend time sketching ideas, exploring compositions, and developing a color palette that best expresses the intended mood and narrative.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Process Image 2</p>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium mb-2">Foundation & Layering</h3>
                      <p className="text-gray-700">
                        I begin with underpainting to establish composition and tonal values. Working with my preferred medium, I build the painting through multiple layers, allowing each to dry and inform the next. This creates depth, texture, and complexity in the final piece.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Process Image 3</p>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-medium mb-2">Refinement & Completion</h3>
                      <p className="text-gray-700">
                        The final stage involves refining details, adjusting colors, and adding highlights to bring the painting to life. I often step away from a piece for a few days to return with fresh eyes, making final adjustments before considering it complete.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-accent-light rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Materials & Techniques</h3>
                  <p className="mb-4">
                    I primarily work with high-quality oil paints on canvas, though I occasionally explore acrylics and mixed media. My techniques combine traditional brushwork with palette knife application, layering, and occasionally incorporating textural elements.
                  </p>
                  <p>
                    Each painting undergoes a careful varnishing process to protect the colors and ensure longevity, allowing the artwork to be enjoyed for generations.
                  </p>
                </div>
              </div>
            )}
            
            {/* Exhibitions & Awards */}
            {activeTab === 'exhibitions' && (
              <div className="animate-fade-in">
                <h2 className="heading-md mb-6">Exhibitions & Recognition</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">Solo Exhibitions</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Nature's Reflections</h4>
                        <span className="text-gray-500">2024</span>
                      </div>
                      <p className="text-gray-700">Contemporary Art Gallery, San Francisco</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Emotional Landscapes</h4>
                        <span className="text-gray-500">2022</span>
                      </div>
                      <p className="text-gray-700">Urban Light Gallery, Chicago</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Colors of Memory</h4>
                        <span className="text-gray-500">2019</span>
                      </div>
                      <p className="text-gray-700">Pacific Arts Center, Seattle</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">Group Exhibitions</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Modern Expressions</h4>
                        <span className="text-gray-500">2023</span>
                      </div>
                      <p className="text-gray-700">National Art Museum, New York</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Harmony in Diversity</h4>
                        <span className="text-gray-500">2021</span>
                      </div>
                      <p className="text-gray-700">International Arts Festival, Paris</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <h4 className="font-medium">New Perspectives</h4>
                        <span className="text-gray-500">2020</span>
                      </div>
                      <p className="text-gray-700">Contemporary Art Collective, Los Angeles</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Awards & Recognition</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Excellence in Fine Arts</h4>
                        <span className="text-gray-500">2023</span>
                      </div>
                      <p className="text-gray-700">National Arts Foundation</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Emerging Artist of the Year</h4>
                        <span className="text-gray-500">2021</span>
                      </div>
                      <p className="text-gray-700">Contemporary Art Magazine</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Innovation in Painting Technique</h4>
                        <span className="text-gray-500">2020</span>
                      </div>
                      <p className="text-gray-700">Regional Arts Council</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">What Collectors Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-gray-500">Art Collector, New York</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "The painting I purchased brings so much life and emotion to my living room. Every time I look at it, I notice new details and feel a sense of calm wash over me. Truly a masterpiece that I'll cherish for years."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-medium">Michael Chen</h3>
                  <p className="text-sm text-gray-500">Interior Designer, San Francisco</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "I've recommended these paintings to many of my clients, and they're always thrilled with the result. The colors, texture, and overall composition are perfect for creating a focal point in any space."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-medium">Elena Rodriguez</h3>
                  <p className="text-sm text-gray-500">Private Collector, Chicago</p>
                </div>
              </div>
              <p className="italic text-gray-700">
                "The commissioned piece I received exceeded all my expectations. Not only was the process collaborative and enjoyable, but the final artwork perfectly captured the feeling I wanted for my home. Absolutely worth the investment."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-accent-light">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Ready to Own Original Artwork?</h2>
          <p className="body-text max-w-2xl mx-auto mb-6">
            Browse the gallery to find the perfect piece for your space or commission a custom painting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/gallery" className="btn-primary">
              Explore Gallery
            </Link>
            <Link href="/custom" className="btn-secondary">
              Commission Artwork
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
