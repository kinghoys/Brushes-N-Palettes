'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface HeroSliderProps {
  images: SlideImage[];
  interval?: number; // Time in ms between slides
}

export default function HeroSlider({ images, interval = 5000 }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const rotateImages = () => {
      // Start transition
      setIsTransitioning(true);
      
      // After transition completes, update indices
      const transitionTimer = setTimeout(() => {
        setActiveIndex(nextIndex);
        setNextIndex((nextIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Match this with the CSS transition duration

      return transitionTimer;
    };

    // Set up the timer for automatic rotation
    const timer = setInterval(rotateImages, interval);

    // Clear timers when the component unmounts
    return () => clearInterval(timer);
  }, [images.length, interval, activeIndex, nextIndex]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Always show the active image */}
      <div className="absolute inset-0 z-10">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          width={images[activeIndex].width}
          height={images[activeIndex].height}
          priority
          className="object-cover w-full h-full"
        />
      </div>

      {/* Show the next image with transition when needed */}
      {images.length > 1 && (
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-100 z-20' : 'opacity-0 z-0'}`}
        >
          <Image
            src={images[nextIndex].src}
            alt={images[nextIndex].alt}
            width={images[nextIndex].width}
            height={images[nextIndex].height}
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </div>
  );
}
