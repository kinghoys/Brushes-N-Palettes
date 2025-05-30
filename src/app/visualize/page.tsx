'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiUpload, FiCamera, FiInfo } from 'react-icons/fi';

export default function VisualizePage() {
  const [activeStep, setActiveStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  // Example artworks array (would be fetched from an API or CMS in a real app)
  const artworks = [
    { id: 1, title: 'Sunset Dreams', dimensions: '24" x 36"', price: '$850', image: '/placeholder-art-1.jpg' },
    { id: 2, title: 'Ocean Whispers', dimensions: '30" x 40"', price: '$1,200', image: '/placeholder-art-2.jpg' },
    { id: 3, title: 'Urban Reflections', dimensions: '18" x 24"', price: '$650', image: '/placeholder-art-3.jpg' },
    { id: 4, title: 'Forest Meditation', dimensions: '36" x 48"', price: '$1,500', image: '/placeholder-art-4.jpg' },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = function(event) {
        if (event.target?.result) {
          setUploadedImage(event.target.result as string);
          setActiveStep(2);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleArtworkSelect = (id: number) => {
    setSelectedArtwork(id);
    setActiveStep(3);
  };

  const resetProcess = () => {
    setUploadedImage(null);
    setSelectedArtwork(null);
    setActiveStep(1);
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header Section */}
      <section className="bg-accent-light py-12">
        <div className="container-custom text-center">
          <h1 className="heading-lg mb-4">Visualize Art in Your Space</h1>
          <p className="body-text max-w-2xl mx-auto">
            Our custom visualization tool helps you see exactly how our paintings will look in your home before you purchase. 
            Upload a photo of your space, select an artwork, and see the perfect match!
          </p>
        </div>
      </section>

      {/* Step Indicator */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="flex items-center max-w-2xl w-full justify-between">
              <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${activeStep >= 1 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <span className="text-sm">Upload Photo</span>
              </div>
              
              <div className={`w-16 h-1 ${activeStep >= 2 ? 'bg-accent' : 'bg-gray-200'}`} />
              
              <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${activeStep >= 2 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <span className="text-sm">Select Artwork</span>
              </div>
              
              <div className={`w-16 h-1 ${activeStep >= 3 ? 'bg-accent' : 'bg-gray-200'}`} />
              
              <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${activeStep >= 3 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <span className="text-sm">Visualize</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          {/* Step 1: Upload Room Photo */}
          {activeStep === 1 && (
            <div className="max-w-2xl mx-auto">
              <h2 className="heading-md text-center mb-6">Upload a Photo of Your Room</h2>
              
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FiUpload className="mx-auto text-gray-400 mb-4" size={40} />
                <p className="mb-4">Upload a photo of your wall or room where you'd like to visualize the artwork</p>
                
                <label className="btn-primary cursor-pointer inline-block">
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleFileUpload}
                  />
                  Upload Photo
                </label>
                
                <div className="mt-4 text-sm text-gray-500 flex items-center justify-center">
                  <FiInfo size={16} className="mr-1" />
                  <span>For best results, use a well-lit, straight-on photo of your wall</span>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-500 mb-4">Or use your device camera</p>
                <button className="btn-secondary flex items-center mx-auto">
                  <FiCamera className="mr-2" />
                  Take Photo
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Select Artwork */}
          {activeStep === 2 && uploadedImage && (
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md text-center mb-6">Select an Artwork to Visualize</h2>
              
              <div className="mb-8">
                <div className="bg-gray-200 rounded-lg overflow-hidden relative" style={{ height: '300px' }}>
                  <div className="absolute inset-0">
                    <img 
                      src={uploadedImage} 
                      alt="Your room" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-right mt-2">
                  <button 
                    onClick={resetProcess}
                    className="text-sm text-accent hover:underline"
                  >
                    Change photo
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {artworks.map((artwork) => (
                  <div 
                    key={artwork.id}
                    className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                      selectedArtwork === artwork.id ? 'border-accent shadow-md' : 'border-gray-200 hover:shadow-sm'
                    }`}
                    onClick={() => handleArtworkSelect(artwork.id)}
                  >
                    <div className="bg-gray-100 h-40 flex items-center justify-center">
                      {/* Replace with actual artwork images */}
                      <p className="text-gray-500 text-sm">Artwork Image</p>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm">{artwork.title}</h3>
                      <p className="text-xs text-gray-500">{artwork.dimensions}</p>
                      <p className="text-sm font-semibold mt-1">{artwork.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Visualization Result */}
          {activeStep === 3 && uploadedImage && selectedArtwork && (
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-md text-center mb-6">Visualize Your Space</h2>
              
              <div className="bg-gray-100 rounded-lg overflow-hidden relative" style={{ height: '500px' }}>
                {/* This would be replaced with actual visualization using Three.js or AR.js */}
                <div className="absolute inset-0">
                  <img 
                    src={uploadedImage} 
                    alt="Your room with artwork" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Simulated artwork overlay */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-8 border-white shadow-xl" style={{ width: '200px', height: '150px' }}>
                    <div className="bg-accent h-full w-full flex items-center justify-center text-white">
                      <p>Artwork Preview</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col md:flex-row items-start justify-between gap-6">
                <div className="md:w-1/2">
                  <h3 className="heading-md mb-3">Adjustments</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Artwork Size</label>
                      <select className="w-full p-2 border rounded-md">
                        <option>Small (18" x 24")</option>
                        <option>Medium (24" x 36")</option>
                        <option>Large (36" x 48")</option>
                        <option>Custom Size</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Position</label>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">Left</button>
                        <button className="px-3 py-1 border rounded-md text-sm bg-accent text-white">Center</button>
                        <button className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100">Right</button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Height</label>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="heading-md mb-3">Selected Artwork</h3>
                  
                  {selectedArtwork && (
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <p className="text-gray-500">Artwork Image</p>
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium">
                          {artworks.find(a => a.id === selectedArtwork)?.title}
                        </h4>
                        <p className="text-sm text-gray-500 mb-2">
                          {artworks.find(a => a.id === selectedArtwork)?.dimensions}
                        </p>
                        <p className="font-bold text-lg mb-4">
                          {artworks.find(a => a.id === selectedArtwork)?.price}
                        </p>
                        <button className="btn-primary w-full">Add to Cart</button>
                        <button 
                          className="w-full text-center mt-2 text-accent hover:underline"
                          onClick={() => setActiveStep(2)}
                        >
                          Choose Different Artwork
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={resetProcess}
                  className="btn-secondary"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium mb-2">How accurate is the visualization?</h3>
              <p className="text-gray-600">Our visualization tool uses advanced algorithms to provide a realistic approximation of how the artwork will look in your space. While we strive for accuracy, there may be slight variations in color and scale in the actual product.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium mb-2">Can I visualize custom sizes?</h3>
              <p className="text-gray-600">Yes! You can adjust the dimensions of any artwork to see how different sizes would look in your space. This is especially helpful for commission work.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium mb-2">What type of photo works best?</h3>
              <p className="text-gray-600">For best results, take a straight-on photo of your wall in good lighting. Avoid extreme angles and make sure the wall is clearly visible. The more straight-on the photo, the more accurate the visualization.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-medium mb-2">Can I save my visualizations?</h3>
              <p className="text-gray-600">Yes, you can save, download, or share your visualizations. This makes it easy to compare different options or get feedback from friends and family before making a purchase.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
