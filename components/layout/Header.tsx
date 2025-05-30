'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiShoppingCart, FiSearch } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen || pathname !== '/' 
          ? 'bg-white text-primary shadow-md py-3' 
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold">
          Brushes and Palettes
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link 
            href="/gallery" 
            className={`hover:text-accent transition-colors font-medium ${pathname === '/gallery' ? 'text-accent' : ''}`}
          >
            ORIGINALS
          </Link>
          <Link 
            href="/collections" 
            className={`hover:text-accent transition-colors font-medium ${pathname === '/collections' ? 'text-accent' : ''}`}
          >
            COLLECTIONS
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-accent transition-colors ${pathname === '/about' ? 'text-accent' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/visualize-art" 
            className={`hover:text-accent transition-colors ${pathname === '/visualize-art' ? 'text-accent' : ''}`}
          >
            Visualize Art
          </Link>
          <Link 
            href="/custom" 
            className={`hover:text-accent transition-colors ${pathname === '/custom' ? 'text-accent' : ''}`}
          >
            Custom Orders
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-accent transition-colors ${pathname === '/contact' ? 'text-accent' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            aria-label="Search" 
            className="p-2 hover:text-accent transition-colors"
          >
            <FiSearch size={20} />
          </button>
          <Link 
            href="/cart" 
            className="p-2 hover:text-accent transition-colors relative"
          >
            <FiShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <nav className="container-custom py-6 flex flex-col space-y-4">
            <Link 
              href="/gallery" 
              className={`hover:text-accent transition-colors ${pathname === '/gallery' ? 'text-accent' : ''}`}
            >
              Gallery
            </Link>
            <Link 
              href="/collections" 
              className={`hover:text-accent transition-colors ${pathname === '/collections' ? 'text-accent' : ''}`}
            >
              Collections
            </Link>
            <Link 
              href="/about" 
              className={`hover:text-accent transition-colors ${pathname === '/about' ? 'text-accent' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/visualize" 
              className={`hover:text-accent transition-colors ${pathname === '/visualize' ? 'text-accent' : ''}`}
            >
              Visualize Art
            </Link>
            <Link 
              href="/custom" 
              className={`hover:text-accent transition-colors ${pathname === '/custom' ? 'text-accent' : ''}`}
            >
              Custom Orders
            </Link>
            <Link 
              href="/contact" 
              className={`hover:text-accent transition-colors ${pathname === '/contact' ? 'text-accent' : ''}`}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 pt-4 border-t">
              <button 
                aria-label="Search" 
                className="p-2 hover:text-accent transition-colors"
              >
                <FiSearch size={20} />
              </button>
              <Link 
                href="/cart" 
                className="p-2 hover:text-accent transition-colors relative"
              >
                <FiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
