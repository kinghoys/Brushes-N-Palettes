'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FiArrowLeft, FiShoppingCart, FiEye, FiHeart, FiShare2, FiCheck } from 'react-icons/fi';

// Mock data for artwork details (in a real app, this would come from an API or CMS)
const artworkData = {
  '1': {
    id: 1,
    title: 'Ocean Dreams',
    category: 'Abstract',
    medium: 'Oil on Canvas',
    dimensions: '36" x 48"',
    price: 1200,
    images: ['/images/placeholder-1.jpg', '/images/placeholder-1-detail.jpg', '/images/placeholder-1-room.jpg'],
    description: 'Ocean Dreams captures the serene yet powerful essence of the sea. Layers of deep blues and turquoise blend with soft whites to evoke the feeling of waves crashing against the shore. This piece brings a sense of calm and contemplation to any space.',
    yearCreated: 2023,
    available: true,
    details: [
      'Original oil painting on gallery-wrapped canvas',
      'Sides are painted (no framing required)',
      'Signed on the front and back',
      'Includes certificate of authenticity',
      'Ready to hang with wire backing'
    ],
    relatedArtworks: [2, 4, 7]
  },
  '2': {
    id: 2,
    title: 'Mountain Sunset',
    category: 'Landscape',
    medium: 'Acrylic on Canvas',
    dimensions: '24" x 36"',
    price: 850,
    images: ['/images/placeholder-2.jpg', '/images/placeholder-2-detail.jpg', '/images/placeholder-2-room.jpg'],
    description: 'Mountain Sunset captures the magical moment when the day's last light bathes the peaks in golden hues. The rich palette of oranges, purples, and blues creates a dramatic scene that evokes the peace and majesty of nature.',
    yearCreated: 2022,
    available: true,
    details: [
      'Original acrylic painting on gallery-wrapped canvas',
      'Sides are painted (no framing required)',
      'Signed on the front and back',
      'Includes certificate of authenticity',
      'Ready to hang with wire backing'
    ],
    relatedArtworks: [4, 6, 8]
  },
  '3': {
    id: 3,
    title: 'City Lights',
    category: 'Urban',
    medium: 'Mixed Media',
    dimensions: '30" x 40"',
    price: 1100,
    images: ['/images/placeholder-3.jpg', '/images/placeholder-3-detail.jpg', '/images/placeholder-3-room.jpg'],
    description: 'City Lights is an abstract interpretation of an urban landscape at night. The interplay of bright lights against the dark background creates a sense of energy and movement, reflecting the vibrant pulse of city life.',
    yearCreated: 2023,
    available: false,
    details: [
      'Original mixed media painting on gallery-wrapped canvas',
      'Incorporates acrylic paint, metallic leaf, and oil pastel',
      'Sides are painted (no framing required)',
      'Signed on the front and back',
      'Includes certificate of authenticity'
    ],
    relatedArtworks: [5, 7, 8]
  },
  '4': {
    id: 4,
    title: 'Tranquil Forest',
    category: 'Landscape',
    medium: 'Oil on Canvas',
    dimensions: '24" x 30"',
    price: 950,
    images: ['/images/placeholder-4.jpg', '/images/placeholder-4-detail.jpg', '/images/placeholder-4-room.jpg'],
    description: 'Tranquil Forest invites viewers into a peaceful woodland scene dappled with sunlight. The detailed brushwork captures the texture of bark, leaves, and undergrowth, while the composition leads the eye along a winding path through the trees.',
    yearCreated: 2023,
    available: true,
    details: [
      'Original oil painting on gallery-wrapped canvas',
      'Sides are painted (no framing required)',
      'Signed on the front and back',
      'Includes certificate of authenticity',
      'Ready to hang with wire backing'
    ],
    relatedArtworks: [2, 6, 8]
  }
};

export default function ArtworkDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [artwork, setArtwork] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [visualizeOpen, setVisualizeOpen] = useState(false);
  
  useEffect(() => {
    // In a real app, this would be an API call to fetch artwork by ID
    if (id && artworkData[id]) {
      setArtwork(artworkData[id]);
      setLoading(false);
    } else {
      // Handle artwork not found
      setLoading(false);
    }
  }, [id]);
  
  const handleAddToCart = () => {
    // In a real app, this would add the item to a cart state or API
    console.log('Adding to cart:', artwork);
    setAddedToCart(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };
  
  if (loading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-accent">Loading artwork details...</div>
      </div>
    );
  }
  
  if (!artwork) {
    return (
      <div className="pt-20 min-h-screen">
        <div className="container-custom py-12 text-center">
          <h1 className="heading-lg mb-4">Artwork Not Found</h1>
          <p className="body-text mb-6">
            Sorry, we couldn't find the artwork you're looking for.
          </p>
          <Link href="/gallery" className="btn-primary">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }
  
  // Get related artworks
  const relatedArtworks = artwork.relatedArtworks.map((relatedId: number) => artworkData[relatedId]).filter(Boolean);
  
  return (
    <div className="pt-20 min-h-screen">
      {/* Artwork Details */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/gallery" 
              className="inline-flex items-center text-gray-600 hover:text-accent transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Gallery
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Artwork Images */}
            <div>
              {/* Main Image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center relative">
                  <p className="text-gray-500">Artwork Image {activeImage + 1}</p>
                  {!artwork.available && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-md">
                      SOLD
                    </div>
                  )}
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex space-x-2">
                {artwork.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`bg-gray-100 rounded-md overflow-hidden w-20 h-20 flex-shrink-0 ${
                      activeImage === index ? 'ring-2 ring-accent' : ''
                    }`}
                  >
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <p className="text-xs text-gray-500">{index + 1}</p>
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Visualization Button */}
              <button
                onClick={() => setVisualizeOpen(true)}
                className="w-full mt-6 flex items-center justify-center py-3 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors"
              >
                <FiEye className="mr-2" />
                Visualize in Your Space
              </button>
            </div>
            
            {/* Artwork Info */}
            <div>
              <h1 className="heading-lg mb-2">{artwork.title}</h1>
              
              <div className="flex items-center mb-6">
                <span className="text-gray-600 mr-4">{artwork.category}</span>
                <span className="text-gray-600 mr-4">•</span>
                <span className="text-gray-600">{artwork.yearCreated}</span>
              </div>
              
              <p className="text-2xl font-medium mb-6">${artwork.price.toLocaleString()}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex">
                  <span className="text-gray-600 w-24">Medium:</span>
                  <span>{artwork.medium}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-24">Size:</span>
                  <span>{artwork.dimensions}</span>
                </div>
              </div>
              
              <p className="body-text mb-8">
                {artwork.description}
              </p>
              
              <div className="mb-8">
                <h3 className="font-medium text-lg mb-3">Details:</h3>
                <ul className="space-y-2">
                  {artwork.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                {artwork.available ? (
                  <button
                    onClick={handleAddToCart}
                    className={`w-full py-3 rounded-md flex items-center justify-center transition-colors ${
                      addedToCart 
                        ? 'bg-green-500 text-white' 
                        : 'bg-accent text-white hover:bg-opacity-90'
                    }`}
                    disabled={addedToCart}
                  >
                    {addedToCart ? (
                      <>
                        <FiCheck className="mr-2" />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <FiShoppingCart className="mr-2" />
                        Add to Cart
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    className="w-full py-3 bg-gray-200 text-gray-500 rounded-md cursor-not-allowed"
                    disabled
                  >
                    Sold
                  </button>
                )}
                
                <div className="flex space-x-4">
                  <button className="flex-1 py-3 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <FiHeart className="mr-2" />
                    Save
                  </button>
                  <button className="flex-1 py-3 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <FiShare2 className="mr-2" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Artworks Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArtworks.map((related: any) => (
              <Link 
                key={related.id}
                href={`/gallery/${related.id}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:shadow-md"
              >
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Artwork Image</p>
                  </div>
                  {!related.available && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1">
                      SOLD
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-lg">{related.title}</h3>
                    <span className="font-bold">${related.price}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{related.category} • {related.medium}</p>
                  <p className="text-sm text-gray-500">{related.dimensions}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Shipping & Returns Section */}
      <section className="py-12 bg-white border-t">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-md text-center mb-8">Shipping & Returns</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-lg mb-3">Shipping Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>All artwork is carefully packaged to ensure safe delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Domestic shipping within 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>International shipping available (7-14 business days)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Tracking information provided via email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Insurance included on all shipments</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-3">Return Policy</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>14-day return period from delivery date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Artwork must be in original condition and packaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Return shipping costs are the responsibility of the buyer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Contact us before initiating a return</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/contact" className="text-accent hover:underline">
                Questions? Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-accent-light">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Interested in a Custom Piece?</h2>
          <p className="body-text max-w-2xl mx-auto mb-6">
            Commission a personalized artwork created specifically for your space and style.
          </p>
          <Link href="/custom" className="btn-primary">
            Request a Commission
          </Link>
        </div>
      </section>
      
      {/* Visualization Modal (simplified) */}
      {visualizeOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20">
            <div className="fixed inset-0 bg-black/75 transition-opacity" onClick={() => setVisualizeOpen(false)}></div>
            
            <div className="relative bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl transform transition-all">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={() => setVisualizeOpen(false)}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="px-4 pt-5 pb-4 sm:p-6">
                <h3 className="text-lg font-medium text-center mb-4">
                  Visualize "{artwork.title}" in Your Space
                </h3>
                
                <div className="text-center mb-6">
                  <p className="mb-4">Upload a photo of your room to see how this artwork will look in your space.</p>
                  <Link 
                    href={`/visualize?artwork=${artwork.id}`}
                    className="btn-primary"
                    onClick={() => setVisualizeOpen(false)}
                  >
                    Try Visualization Tool
                  </Link>
                </div>
                
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Visualization preview will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
