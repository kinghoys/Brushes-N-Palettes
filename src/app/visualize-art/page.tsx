'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FiSliders, FiUpload, FiMaximize, FiMove, FiArrowLeft, FiArrowRight, FiArrowUp, FiArrowDown } from 'react-icons/fi';

// Room template data
const roomTemplates = [
  {
    id: 1,
    name: 'Modern Living Room',
    image: '/images/rooms/living-room.jpg',
    artPosition: { top: '38%', left: '50%', width: '40%' }
  },
  {
    id: 2,
    name: 'Cozy Bedroom',
    image: '/images/rooms/bedroom.jpg',
    artPosition: { top: '40%', left: '50%', width: '35%' }
  },
  {
    id: 3,
    name: 'Home Office',
    image: '/images/rooms/office.jpg',
    artPosition: { top: '35%', left: '52%', width: '38%' }
  },
  {
    id: 4,
    name: 'Elegant Dining Room',
    image: '/images/rooms/dining.jpg',
    artPosition: { top: '40%', left: '50%', width: '36%' }
  }
];

// Frame options for artwork
const frameOptions = [
  {
    id: 'none',
    name: 'No Frame',
    borderWidth: 0,
    borderColor: 'transparent',
    padding: 0
  },
  {
    id: 'thin-black',
    name: 'Thin Black',
    borderWidth: 10,
    borderColor: '#000000',
    padding: 2
  },
  {
    id: 'modern-white',
    name: 'Modern White',
    borderWidth: 15,
    borderColor: '#ffffff',
    padding: 3
  },
  {
    id: 'classic-gold',
    name: 'Classic Gold',
    borderWidth: 20,
    borderColor: '#D4AF37',
    padding: 5
  },
  {
    id: 'wood-brown',
    name: 'Wood Brown',
    borderWidth: 18,
    borderColor: '#8B4513',
    padding: 4
  }
];

// Sample artwork for visualization
const artworkOptions = [
  {
    id: 1,
    title: 'Abstract Harmony',
    image: '/images/collections/collection-1.png'
  },
  {
    id: 2,
    title: 'Coastal Dreams',
    image: '/images/collections/collection-2.png'
  },
  {
    id: 3,
    title: 'Urban Escape',
    image: '/images/collections/collection-3.png'
  },
  {
    id: 4,
    title: 'Serenity',
    image: '/images/collections/collection-4.png'
  },
  {
    id: 5,
    title: 'Ethereal Light',
    image: '/images/collections/collection-5.png'
  },
  {
    id: 6,
    title: 'Tranquil Waters',
    image: '/images/collections/collection-6.png'
  },
  {
    id: 7,
    title: 'Sunset Reflection',
    image: '/images/collections/collection-7.png'
  },
  {
    id: 8,
    title: 'Mountain Mist',
    image: '/images/collections/collection-8.png'
  }
];

export default function VisualizeArtPage() {
  const [selectedRoom, setSelectedRoom] = useState(roomTemplates[0]);
  const [selectedArtwork, setSelectedArtwork] = useState(artworkOptions[0]);
  const [artSize, setArtSize] = useState(100); // Percentage of default size
  const [selectedFrame, setSelectedFrame] = useState(frameOptions[0]);
  const [artPosition, setArtPosition] = useState({ x: 0, y: 0 }); // For fine-tuning position
  const [isRepositioning, setIsRepositioning] = useState(false);
  const [currentTab, setCurrentTab] = useState('room'); // 'room', 'artwork', 'frame', 'position'
  
  // Reference for the visualization area
  const visualizationRef = useRef<HTMLDivElement>(null);
  
  // Function to handle room selection
  const handleRoomChange = (roomId: number) => {
    const room = roomTemplates.find(r => r.id === roomId);
    if (room) {
      setSelectedRoom(room);
      // Reset position adjustment when changing rooms
      setArtPosition({ x: 0, y: 0 });
    }
  };
  
  // Function to handle artwork selection
  const handleArtworkChange = (artworkId: number) => {
    const artwork = artworkOptions.find(a => a.id === artworkId);
    if (artwork) setSelectedArtwork(artwork);
  };
  
  // Function to handle frame selection
  const handleFrameChange = (frameId: string) => {
    const frame = frameOptions.find(f => f.id === frameId);
    if (frame) setSelectedFrame(frame);
  };
  
  // Function to adjust artwork position
  const handlePositionChange = (direction: 'up' | 'down' | 'left' | 'right') => {
    const step = 5; // pixels to move per click
    
    switch(direction) {
      case 'up':
        setArtPosition(prev => ({ ...prev, y: prev.y - step }));
        break;
      case 'down':
        setArtPosition(prev => ({ ...prev, y: prev.y + step }));
        break;
      case 'left':
        setArtPosition(prev => ({ ...prev, x: prev.x - step }));
        break;
      case 'right':
        setArtPosition(prev => ({ ...prev, x: prev.x + step }));
        break;
    }
  };
  
  // Function to reset position
  const resetPosition = () => {
    setArtPosition({ x: 0, y: 0 });
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold mb-4">Visualize Art in Your Space</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          See how our artwork will look in different rooms or upload your own space to visualize the perfect piece for your walls.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left sidebar with controls */}
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-serif font-bold mb-6">Customize Your View</h2>
          
          {/* Tabs for different customization options */}
          <div className="flex border-b mb-6">
            <button 
              onClick={() => setCurrentTab('room')}
              className={`px-4 py-2 font-medium text-sm ${currentTab === 'room' ? 'text-accent border-b-2 border-accent' : 'text-gray-500'}`}
            >
              Room
            </button>
            <button 
              onClick={() => setCurrentTab('artwork')}
              className={`px-4 py-2 font-medium text-sm ${currentTab === 'artwork' ? 'text-accent border-b-2 border-accent' : 'text-gray-500'}`}
            >
              Artwork
            </button>
            <button 
              onClick={() => setCurrentTab('frame')}
              className={`px-4 py-2 font-medium text-sm ${currentTab === 'frame' ? 'text-accent border-b-2 border-accent' : 'text-gray-500'}`}
            >
              Frame
            </button>
            <button 
              onClick={() => setCurrentTab('position')}
              className={`px-4 py-2 font-medium text-sm ${currentTab === 'position' ? 'text-accent border-b-2 border-accent' : 'text-gray-500'}`}
            >
              Position
            </button>
          </div>
          
          {/* Room Selection - shown when currentTab is 'room' */}
          {currentTab === 'room' && (
            <div className="mb-8">
              <h3 className="font-medium mb-3">Select Room</h3>
              <div className="grid grid-cols-2 gap-3">
                {roomTemplates.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => handleRoomChange(room.id)}
                    className={`p-2 rounded-md text-sm border ${
                      selectedRoom.id === room.id 
                        ? 'border-accent bg-accent/10' 
                        : 'border-gray-200 hover:border-accent/50'
                    }`}
                  >
                    {room.name}
                  </button>
                ))}
              </div>
              <div className="mt-8 p-4 bg-gray-100 rounded-md">
                <h3 className="font-medium mb-2">Upload Your Own Space</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Want to see how our art looks in your home? Upload a photo of your space.
                </p>
                <button className="w-full py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors flex items-center justify-center">
                  <FiUpload className="mr-2" /> Coming Soon
                </button>
              </div>
            </div>
          )}
          
          {/* Artwork Selection - shown when currentTab is 'artwork' */}
          {currentTab === 'artwork' && (
            <div className="mb-8">
              <h3 className="font-medium mb-3">Select Artwork</h3>
              <div className="grid grid-cols-2 gap-3">
                {artworkOptions.map((artwork) => (
                  <div 
                    key={artwork.id}
                    onClick={() => handleArtworkChange(artwork.id)}
                    className={`relative cursor-pointer rounded-md overflow-hidden h-24 ${
                      selectedArtwork.id === artwork.id 
                        ? 'ring-2 ring-accent' 
                        : 'hover:opacity-90'
                    }`}
                  >
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      width={150}
                      height={150}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              
              {/* Size Adjustment */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">Adjust Size</h3>
                  <span className="text-sm text-gray-500">{artSize}%</span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={150}
                  value={artSize}
                  onChange={(e) => setArtSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Small</span>
                  <span>Large</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Frame Selection - shown when currentTab is 'frame' */}
          {currentTab === 'frame' && (
            <div className="mb-8">
              <h3 className="font-medium mb-3">Select Frame Style</h3>
              <div className="space-y-3">
                {frameOptions.map((frame) => (
                  <div 
                    key={frame.id}
                    onClick={() => handleFrameChange(frame.id)}
                    className={`flex items-center p-3 border rounded-md cursor-pointer ${
                      selectedFrame.id === frame.id 
                        ? 'border-accent bg-accent/5' 
                        : 'border-gray-200 hover:border-accent/50'
                    }`}
                  >
                    <div 
                      className="w-12 h-12 mr-3 flex-shrink-0"
                      style={{
                        border: frame.borderWidth > 0 ? `${frame.borderWidth}px solid ${frame.borderColor}` : 'none',
                        padding: `${frame.padding}px`,
                        backgroundColor: frame.id === 'none' ? '#f3f4f6' : 'transparent'
                      }}
                    >
                      <div className="w-full h-full bg-gray-300"></div>
                    </div>
                    <span>{frame.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Position Adjustment - shown when currentTab is 'position' */}
          {currentTab === 'position' && (
            <div className="mb-8">
              <h3 className="font-medium mb-3">Fine-tune Position</h3>
              <p className="text-sm text-gray-600 mb-4">
                Use the controls below to adjust the exact position of your artwork on the wall.
              </p>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div></div>
                <button 
                  onClick={() => handlePositionChange('up')}
                  className="p-2 border border-gray-300 rounded-md hover:border-accent flex items-center justify-center"
                >
                  <FiArrowUp size={20} />
                </button>
                <div></div>
                
                <button 
                  onClick={() => handlePositionChange('left')}
                  className="p-2 border border-gray-300 rounded-md hover:border-accent flex items-center justify-center"
                >
                  <FiArrowLeft size={20} />
                </button>
                <button 
                  onClick={resetPosition}
                  className="p-2 border border-gray-300 rounded-md hover:border-accent flex items-center justify-center text-xs font-medium"
                >
                  Reset
                </button>
                <button 
                  onClick={() => handlePositionChange('right')}
                  className="p-2 border border-gray-300 rounded-md hover:border-accent flex items-center justify-center"
                >
                  <FiArrowRight size={20} />
                </button>
                
                <div></div>
                <button 
                  onClick={() => handlePositionChange('down')}
                  className="p-2 border border-gray-300 rounded-md hover:border-accent flex items-center justify-center"
                >
                  <FiArrowDown size={20} />
                </button>
                <div></div>
              </div>
            </div>
          )}
          
          {/* Upload Own Space (Coming Soon) */}
          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <h3 className="font-medium mb-2">Upload Your Own Space</h3>
            <p className="text-sm text-gray-600 mb-3">
              Want to see how our art looks in your home? Upload a photo of your space.
            </p>
            <button className="w-full py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors">
              Coming Soon
            </button>
          </div>
        </div>
        
        {/* Right side visualization area */}
        <div className="lg:col-span-2">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div ref={visualizationRef} className="relative rounded-md overflow-hidden aspect-video">
              {/* Room background */}
              <Image
                src={selectedRoom.image}
                alt={selectedRoom.name}
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
              
              {/* Artwork overlay with frame */}
              <div 
                className="absolute transform -translate-x-1/2 transition-all duration-300"
                style={{
                  top: `calc(${selectedRoom.artPosition.top} + ${artPosition.y}px)`,
                  left: `calc(${selectedRoom.artPosition.left} + ${artPosition.x}px)`,
                  width: `calc(${selectedRoom.artPosition.width} * ${artSize / 100})`,
                }}
              >
                {/* Frame and artwork */}
                <div 
                  className="relative w-full shadow-xl" 
                  style={{ 
                    paddingBottom: '75%', /* Changed from 133% (4:3) to 75% (3:4) ratio */
                    border: selectedFrame.borderWidth > 0 ? `${selectedFrame.borderWidth}px solid ${selectedFrame.borderColor}` : 'none',
                    padding: `${selectedFrame.padding}px`,
                    backgroundColor: selectedFrame.borderColor === '#ffffff' ? '#f8f8f8' : 'transparent',
                    boxShadow: selectedFrame.id !== 'none' ? '0 10px 25px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  <Image
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
              <div>
                <h3 className="font-medium">{selectedRoom.name}</h3>
                <p className="text-sm text-gray-600">with {selectedArtwork.title}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {selectedFrame.id !== 'none' ? `${selectedFrame.name} frame` : 'No frame'} • Size: {artSize}%
                </p>
              </div>
              
              <div className="flex w-full sm:w-auto space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-accent text-sm transition-colors flex-1 sm:flex-auto">
                  Share
                </button>
                <button className="px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 text-sm transition-colors flex-1 sm:flex-auto">
                  View Artwork
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-serif font-bold mb-4">How to Use the Visualizer</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Select a room template that matches your space</li>
              <li>Browse through our artwork collection and choose your favorite piece</li>
              <li>Use the size slider to adjust the artwork dimensions</li>
              <li>Click "View Artwork" to see more details or add it to your cart</li>
              <li>Soon: Upload your own room photo for a personalized visualization</li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
