'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiFilter, FiX, FiChevronDown, FiGrid, FiList } from 'react-icons/fi';

// Mock data for gallery items (in a real app, this would come from an API or CMS)
const galleryItems = [
  {
    id: 1,
    title: 'Ocean Dreams',
    category: 'Abstract',
    medium: 'Oil on Canvas',
    dimensions: '36" x 48"',
    price: 1200,
    image: '/images/collections/collection-1.png',
    available: true,
  },
  {
    id: 2,
    title: 'Mountain Sunset',
    category: 'Landscape',
    medium: 'Acrylic on Canvas',
    dimensions: '24" x 36"',
    price: 850,
    image: '/images/collections/collection-2.png',
    available: true,
  },
  {
    id: 3,
    title: 'City Lights',
    category: 'Urban',
    medium: 'Mixed Media',
    dimensions: '30" x 40"',
    price: 1100,
    image: '/images/collections/collection-3.png',
    available: false,
  },
  {
    id: 4,
    title: 'Tranquil Forest',
    category: 'Landscape',
    medium: 'Oil on Canvas',
    dimensions: '24" x 30"',
    price: 950,
    image: '/images/collections/collection-4.png',
    available: true,
  },
  {
    id: 5,
    title: 'Abstract Emotions',
    category: 'Abstract',
    medium: 'Acrylic on Canvas',
    dimensions: '36" x 36"',
    price: 1300,
    image: '/images/collections/collection-5.png',
    available: true,
  },
  {
    id: 6,
    title: 'Desert Bloom',
    category: 'Landscape',
    medium: 'Oil on Canvas',
    dimensions: '24" x 36"',
    price: 900,
    image: '/images/collections/collection-6.png',
    available: true,
  },
  {
    id: 7,
    title: 'Abstract Composition IV',
    category: 'Abstract',
    medium: 'Mixed Media',
    dimensions: '30" x 30"',
    price: 1050,
    image: '/images/collections/collection-7.png',
    available: true,
  },
  {
    id: 8,
    title: 'Summer Reflections',
    category: 'Landscape',
    medium: 'Oil on Canvas',
    dimensions: '40" x 60"',
    price: 1800,
    image: '/images/collections/collection-8.png',
    available: true,
  },
];

export default function GalleryPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    categories: [] as string[],
    medium: [] as string[],
    priceRange: { min: 0, max: 2000 },
    availability: 'all', // 'all', 'available', 'sold'
  });

  // Get unique categories and mediums for filters
  const categories = new Set<string>();
  const mediums = new Set<string>();
  
  galleryItems.forEach(item => {
    categories.add(item.category);
    mediums.add(item.medium);
  });
  
  // Convert Sets to Arrays for iteration
  const categoryArray = Array.from(categories);
  const mediumArray = Array.from(mediums);

  // Filter gallery items based on selected filters
  const filteredItems = galleryItems.filter(item => {
    // Filter by category
    if (filters.categories.length > 0 && !filters.categories.includes(item.category)) {
      return false;
    }
    
    // Filter by medium
    if (filters.medium.length > 0 && !filters.medium.includes(item.medium)) {
      return false;
    }
    
    // Filter by price range
    if (item.price < filters.priceRange.min || item.price > filters.priceRange.max) {
      return false;
    }
    
    // Filter by availability
    if (filters.availability === 'available' && !item.available) {
      return false;
    }
    if (filters.availability === 'sold' && item.available) {
      return false;
    }
    
    return true;
  });

  // Update filter handlers
  const handleCategoryChange = (category: string) => {
    setFilters(prev => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      
      return { ...prev, categories: newCategories };
    });
  };

  const handleMediumChange = (medium: string) => {
    setFilters(prev => {
      const newMediums = prev.medium.includes(medium)
        ? prev.medium.filter(m => m !== medium)
        : [...prev.medium, medium];
      
      return { ...prev, medium: newMediums };
    });
  };

  const handlePriceChange = (min: number, max: number) => {
    setFilters(prev => ({
      ...prev,
      priceRange: { min, max },
    }));
  };

  const handleAvailabilityChange = (availability: string) => {
    setFilters(prev => ({
      ...prev,
      availability: availability as 'all' | 'available' | 'sold',
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      medium: [],
      priceRange: { min: 0, max: 2000 },
      availability: 'all',
    });
  };

  // Toggle filter sidebar on mobile
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header Section */}
      <section className="bg-accent-light py-12">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-4">Art Gallery</h1>
          <p className="body-text text-center max-w-2xl mx-auto">
            Explore our collection of original paintings. Each piece is created with passion and tells a unique story.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row">
            {/* Filter Sidebar - Desktop */}
            <div className="hidden lg:block w-64 pr-8">
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium">Filters</h2>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-accent hover:underline"
                  >
                    Clear all
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Category</h3>
                  <div className="space-y-2">
                    {categoryArray.map((category: string) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`category-${category}`}
                          checked={filters.categories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="mr-2"
                        />
                        <label htmlFor={`category-${category}`}>{category}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Medium Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Medium</h3>
                  <div className="space-y-2">
                    {mediumArray.map((medium: string) => (
                      <div key={medium} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`medium-${medium}`}
                          checked={filters.medium.includes(medium)}
                          onChange={() => handleMediumChange(medium)}
                          className="mr-2"
                        />
                        <label htmlFor={`medium-${medium}`}>{medium}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="price-min" className="block text-sm mb-1">Min Price: ${filters.priceRange.min}</label>
                      <input
                        type="range"
                        id="price-min"
                        min="0"
                        max="2000"
                        step="100"
                        value={filters.priceRange.min}
                        onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange.max)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="price-max" className="block text-sm mb-1">Max Price: ${filters.priceRange.max}</label>
                      <input
                        type="range"
                        id="price-max"
                        min="0"
                        max="2000"
                        step="100"
                        value={filters.priceRange.max}
                        onChange={(e) => handlePriceChange(filters.priceRange.min, Number(e.target.value))}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="availability-all"
                        name="availability"
                        checked={filters.availability === 'all'}
                        onChange={() => handleAvailabilityChange('all')}
                        className="mr-2"
                      />
                      <label htmlFor="availability-all">All</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="availability-available"
                        name="availability"
                        checked={filters.availability === 'available'}
                        onChange={() => handleAvailabilityChange('available')}
                        className="mr-2"
                      />
                      <label htmlFor="availability-available">Available</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="availability-sold"
                        name="availability"
                        checked={filters.availability === 'sold'}
                        onChange={() => handleAvailabilityChange('sold')}
                        className="mr-2"
                      />
                      <label htmlFor="availability-sold">Sold</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Content */}
            <div className="lg:flex-1">
              {/* Mobile Filter Toggle & View Controls */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={toggleFilter}
                  className="lg:hidden flex items-center text-sm font-medium bg-gray-100 px-4 py-2 rounded-md"
                >
                  <FiFilter className="mr-2" />
                  Filters
                  {(filters.categories.length > 0 || filters.medium.length > 0 || filters.availability !== 'all') && (
                    <span className="ml-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {filters.categories.length + filters.medium.length + (filters.availability !== 'all' ? 1 : 0)}
                    </span>
                  )}
                </button>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-accent text-white' : 'bg-white'}`}
                      aria-label="Grid view"
                    >
                      <FiGrid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-accent text-white' : 'bg-white'}`}
                      aria-label="List view"
                    >
                      <FiList size={18} />
                    </button>
                  </div>

                  <select
                    className="border rounded-md p-2 text-sm"
                    defaultValue="featured"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Mobile Filter Sidebar */}
              {isFilterOpen && (
                <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
                  <div className="absolute inset-0 bg-black/30" onClick={toggleFilter}></div>
                  <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-white shadow-lg overflow-y-auto">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-medium">Filters</h2>
                        <button onClick={toggleFilter} className="p-1">
                          <FiX size={24} />
                        </button>
                      </div>

                      {/* Mobile filters (same as desktop) */}
                      {/* Category Filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-2">Category</h3>
                        <div className="space-y-2">
                          {categoryArray.map((category: string) => (
                            <div key={category} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`mobile-category-${category}`}
                                checked={filters.categories.includes(category)}
                                onChange={() => handleCategoryChange(category)}
                                className="mr-2"
                              />
                              <label htmlFor={`mobile-category-${category}`}>{category}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Medium Filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-2">Medium</h3>
                        <div className="space-y-2">
                          {mediumArray.map((medium: string) => (
                            <div key={medium} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`mobile-medium-${medium}`}
                                checked={filters.medium.includes(medium)}
                                onChange={() => handleMediumChange(medium)}
                                className="mr-2"
                              />
                              <label htmlFor={`mobile-medium-${medium}`}>{medium}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price Range Filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-2">Price Range</h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="mobile-price-min" className="block text-sm mb-1">
                              Min Price: ${filters.priceRange.min}
                            </label>
                            <input
                              type="range"
                              id="mobile-price-min"
                              min="0"
                              max="2000"
                              step="100"
                              value={filters.priceRange.min}
                              onChange={(e) => handlePriceChange(Number(e.target.value), filters.priceRange.max)}
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label htmlFor="mobile-price-max" className="block text-sm mb-1">
                              Max Price: ${filters.priceRange.max}
                            </label>
                            <input
                              type="range"
                              id="mobile-price-max"
                              min="0"
                              max="2000"
                              step="100"
                              value={filters.priceRange.max}
                              onChange={(e) => handlePriceChange(filters.priceRange.min, Number(e.target.value))}
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Availability Filter */}
                      <div className="mb-6">
                        <h3 className="font-medium mb-2">Availability</h3>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="mobile-availability-all"
                              name="mobile-availability"
                              checked={filters.availability === 'all'}
                              onChange={() => handleAvailabilityChange('all')}
                              className="mr-2"
                            />
                            <label htmlFor="mobile-availability-all">All</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="mobile-availability-available"
                              name="mobile-availability"
                              checked={filters.availability === 'available'}
                              onChange={() => handleAvailabilityChange('available')}
                              className="mr-2"
                            />
                            <label htmlFor="mobile-availability-available">Available</label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="mobile-availability-sold"
                              name="mobile-availability"
                              checked={filters.availability === 'sold'}
                              onChange={() => handleAvailabilityChange('sold')}
                              className="mr-2"
                            />
                            <label htmlFor="mobile-availability-sold">Sold</label>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-4 border-t">
                        <button
                          onClick={clearFilters}
                          className="flex-1 py-2 border border-gray-300 rounded-md"
                        >
                          Clear
                        </button>
                        <button
                          onClick={toggleFilter}
                          className="flex-1 py-2 bg-accent text-white rounded-md"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gallery Items */}
              {filteredItems.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg mb-4">No artworks match your selected filters.</p>
                  <button 
                    onClick={clearFilters}
                    className="btn-secondary"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className={viewMode === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                  : "space-y-6"
                }>
                  {filteredItems.map((item) => (
                    <div 
                      key={item.id}
                      className={`bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md ${
                        viewMode === 'grid' ? '' : 'flex'
                      }`}
                    >
                      <div className={viewMode === 'grid' ? "relative aspect-square" : "relative w-1/3 aspect-square"}>
                        <div className="relative w-full h-full">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={400}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        {!item.available && (
                          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1">
                            SOLD
                          </div>
                        )}
                      </div>
                      
                      <div className={viewMode === 'grid' ? "p-4" : "p-4 flex-1"}>
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-lg">{item.title}</h3>
                          <span className="font-bold">${item.price}</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{item.category} • {item.medium}</p>
                        <p className="text-sm text-gray-500 mb-4">{item.dimensions}</p>
                        
                        <div className="flex space-x-2 mt-auto">
                          <Link 
                            href={`/gallery/${item.id}`}
                            className="flex-1 text-center py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors"
                          >
                            View Details
                          </Link>
                          {item.available && (
                            <button className="flex-1 bg-accent text-white py-2 rounded-md hover:bg-opacity-90 transition-colors">
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-accent-light">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Can't Find What You're Looking For?</h2>
          <p className="body-text max-w-2xl mx-auto mb-6">
            Commission a custom painting tailored specifically to your space and preferences.
          </p>
          <Link href="/custom" className="btn-primary">
            Request Custom Artwork
          </Link>
        </div>
      </section>
    </div>
  );
}
