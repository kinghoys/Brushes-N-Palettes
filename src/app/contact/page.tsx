'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook, FiCheck } from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For demo purposes, we'll just show a success message
    setIsSubmitted(true);
    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  return (
    <div className="pt-20 min-h-screen">
      {/* Header Section */}
      <section className="bg-accent-light py-12">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-4">Contact Us</h1>
          <p className="body-text text-center max-w-2xl mx-auto">
            Get in touch for inquiries about available artwork, commissions, exhibitions, or any other questions.
          </p>
        </div>
      </section>
      
      {/* Contact Details & Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div>
              <h2 className="heading-md mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <FiMail className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">contact@brushesandpalettes.com</p>
                    <p className="text-gray-600">info@brushesandpalettes.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <FiPhone className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Available Monday-Friday, 9am-5pm PST
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <FiMapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Studio Location</h3>
                    <p className="text-gray-600">123 Artist Studio Way</p>
                    <p className="text-gray-600">San Francisco, CA 94110</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Studio visits by appointment only
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-accent hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <FiInstagram size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-accent hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <FiTwitter size={20} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-gray-100 p-3 rounded-full hover:bg-accent hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <FiFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <h2 className="heading-md mb-6">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-500 mb-4">
                    <FiCheck size={24} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-md"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-md"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="purchase">Artwork Purchase</option>
                      <option value="commission">Commission Information</option>
                      <option value="exhibition">Exhibition Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full p-3 border rounded-md"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button type="submit" className="btn-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">What are your gallery hours?</h3>
              <p className="text-gray-600">
                Our studio is open for visits by appointment only. Please contact us to schedule a time to view artwork in person.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Do you ship internationally?</h3>
              <p className="text-gray-600">
                Yes, we ship worldwide. International shipping costs are calculated based on size, weight, and destination.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">How do I care for my artwork?</h3>
              <p className="text-gray-600">
                We provide detailed care instructions with each purchase. Generally, keep artwork out of direct sunlight and away from moisture.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Do you offer framing services?</h3>
              <p className="text-gray-600">
                Yes, we can arrange professional framing for any artwork purchased. Contact us for framing options and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-white border-t">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Find Our Studio</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 h-96 rounded-lg relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Map Will Appear Here</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                123 Artist Studio Way, San Francisco, CA 94110
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-accent-light">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4">Ready to Start Your Art Collection?</h2>
          <p className="body-text max-w-2xl mx-auto mb-6">
            Browse our available artwork or commission a custom piece today.
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
