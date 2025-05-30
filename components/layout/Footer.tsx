'use client';

import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook, FiMail } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Brushes and Palettes</h3>
            <p className="mb-4 max-w-sm">
              Creating unique, expressive paintings that bring color and emotion to your living spaces. Each piece tells a story and is crafted with passion.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white hover:text-accent transition-colors">
                <FiInstagram size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-white hover:text-accent transition-colors">
                <FiTwitter size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-white hover:text-accent transition-colors">
                <FiFacebook size={22} />
              </a>
              <a href="mailto:contact@brushesandpalettes.com" aria-label="Email" className="text-white hover:text-accent transition-colors">
                <FiMail size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-accent transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/visualize" className="hover:text-accent transition-colors">
                  Visualize Art
                </Link>
              </li>
              <li>
                <Link href="/custom" className="hover:text-accent transition-colors">
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">123 Art Street</p>
            <p className="text-gray-300 mb-2">San Francisco, CA 94103</p>
            <p className="text-gray-300 mb-4">contact@brushesandpalettes.com</p>
            <p className="text-gray-300">(555) 123-4567</p>
          </div>

          {/* Newsletter Subscription */}
          <div className="md:col-span-4 mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-xl font-bold mb-4">Subscribe for Exclusive Offers</h4>
            <p className="text-gray-300 mb-4">Be the first to know about new collections, special discounts, and upcoming events.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/10 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent flex-grow"
              />
              <button className="bg-accent hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                SUBSCRIBE
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">By subscribing, you agree to our <Link href="/terms-privacy" className="underline hover:text-accent">Privacy Policy</Link>.</p>
          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} ArtistName. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping-returns" className="hover:text-accent transition-colors">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
