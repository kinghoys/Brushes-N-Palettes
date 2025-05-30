'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiCheck, FiInfo, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function CustomOrderPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    artType: '',
    size: '',
    theme: '',
    colors: [] as string[],
    budget: '',
    timeline: '',
    description: '',
    referenceImages: [] as File[],
  });
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, colors: [...formData.colors, value] });
    } else {
      setFormData({
        ...formData,
        colors: formData.colors.filter((color) => color !== value),
      });
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData({ ...formData, referenceImages: filesArray });
    }
  };
  
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
    window.scrollTo(0, 0);
  };
  
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For demo purposes, we'll just move to a success message
    setStep(4);
    window.scrollTo(0, 0);
  };
  
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  
  return (
    <div className="pt-20 min-h-screen">
      {/* Header Section */}
      <section className="bg-accent-light py-12">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-4">Commission Custom Artwork</h1>
          <p className="body-text text-center max-w-2xl mx-auto">
            Create a one-of-a-kind painting tailored specifically to your space, style, and vision.
          </p>
        </div>
      </section>
      
      {/* Progress Indicator */}
      {step < 4 && (
        <section className="py-8 bg-white border-b">
          <div className="container-custom">
            <div className="flex justify-center">
              <div className="flex items-center max-w-2xl w-full justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-accent' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                    1
                  </div>
                  <span className="text-sm">Basic Info</span>
                </div>
                
                <div className={`w-16 h-1 ${step >= 2 ? 'bg-accent' : 'bg-gray-200'}`} />
                
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-accent' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                    2
                  </div>
                  <span className="text-sm">Artwork Details</span>
                </div>
                
                <div className={`w-16 h-1 ${step >= 3 ? 'bg-accent' : 'bg-gray-200'}`} />
                
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-accent' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                    3
                  </div>
                  <span className="text-sm">Review & Submit</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Form Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <form className="animate-fade-in">
                <h2 className="heading-md mb-6">Personal Information</h2>
                <p className="text-gray-600 mb-8">
                  Let's start with some basic information about you so we can get in touch regarding your custom artwork.
                </p>
                
                <div className="space-y-6">
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
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Optional, but helpful for discussing your commission
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Continue to Artwork Details
                  </button>
                </div>
              </form>
            )}
            
            {/* Step 2: Artwork Details */}
            {step === 2 && (
              <form className="animate-fade-in">
                <h2 className="heading-md mb-6">Artwork Details</h2>
                <p className="text-gray-600 mb-8">
                  Tell us about the artwork you envision. The more details you provide, the better we can create something you'll love.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="artType" className="block text-sm font-medium mb-1">
                      Type of Artwork *
                    </label>
                    <select
                      id="artType"
                      name="artType"
                      value={formData.artType}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md"
                      required
                    >
                      <option value="">Select artwork type</option>
                      <option value="landscape">Landscape</option>
                      <option value="abstract">Abstract</option>
                      <option value="portrait">Portrait</option>
                      <option value="still-life">Still Life</option>
                      <option value="conceptual">Conceptual</option>
                      <option value="other">Other (specify in description)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="size" className="block text-sm font-medium mb-1">
                      Preferred Size *
                    </label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md"
                      required
                    >
                      <option value="">Select size</option>
                      <option value="small">Small (up to 18" x 24")</option>
                      <option value="medium">Medium (24" x 36")</option>
                      <option value="large">Large (36" x 48")</option>
                      <option value="extra-large">Extra Large (48"+ dimension)</option>
                      <option value="custom">Custom (specify in description)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="theme" className="block text-sm font-medium mb-1">
                      Theme or Subject Matter *
                    </label>
                    <input
                      type="text"
                      id="theme"
                      name="theme"
                      value={formData.theme}
                      onChange={handleInputChange}
                      placeholder="e.g., Ocean sunset, Family portrait, Abstract emotions"
                      className="w-full p-3 border rounded-md"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Color Preferences
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {['Blues', 'Greens', 'Reds', 'Yellows', 'Purples', 'Neutrals', 'Bright colors', 'Muted colors', 'Monochromatic'].map((color) => (
                        <div key={color} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`color-${color}`}
                            name="colors"
                            value={color}
                            checked={formData.colors.includes(color)}
                            onChange={handleCheckboxChange}
                            className="mr-2"
                          />
                          <label htmlFor={`color-${color}`}>{color}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-1">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="under-500">Under $500</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2000">$1,000 - $2,000</option>
                      <option value="2000-3000">$2,000 - $3,000</option>
                      <option value="3000-plus">$3,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-1">
                      Timeframe *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md"
                      required
                    >
                      <option value="">Select timeframe</option>
                      <option value="flexible">Flexible</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-4-months">3-4 months</option>
                      <option value="asap">As soon as possible</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-1">
                      Detailed Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Please describe your vision for this artwork in detail. Include any specific elements, feelings, or stories you want the piece to convey."
                      className="w-full p-3 border rounded-md"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="referenceImages" className="block text-sm font-medium mb-1">
                      Reference Images
                    </label>
                    <input
                      type="file"
                      id="referenceImages"
                      name="referenceImages"
                      onChange={handleFileChange}
                      multiple
                      accept="image/*"
                      className="w-full p-3 border rounded-md"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Upload photos of your space, inspiration images, or anything that helps communicate your vision (optional).
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Review Request
                  </button>
                </div>
              </form>
            )}
            
            {/* Step 3: Review & Submit */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="heading-md mb-6">Review Your Commission Request</h2>
                <p className="text-gray-600 mb-8">
                  Please review your information before submitting. If everything looks correct, click "Submit Request" to proceed.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-medium text-lg mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Name:</p>
                      <p className="font-medium">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email:</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone:</p>
                      <p className="font-medium">{formData.phone || 'Not provided'}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="font-medium text-lg mb-4">Artwork Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Type:</p>
                      <p className="font-medium">{formData.artType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Size:</p>
                      <p className="font-medium">{formData.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Theme:</p>
                      <p className="font-medium">{formData.theme}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Colors:</p>
                      <p className="font-medium">
                        {formData.colors.length > 0 
                          ? formData.colors.join(', ') 
                          : 'No specific preferences'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Budget:</p>
                      <p className="font-medium">{formData.budget}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Timeframe:</p>
                      <p className="font-medium">{formData.timeline}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Description:</p>
                    <p className="mt-1">{formData.description}</p>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Reference Images:</p>
                    <p className="mt-1">
                      {formData.referenceImages.length > 0 
                        ? `${formData.referenceImages.length} images uploaded` 
                        : 'No images uploaded'}
                    </p>
                  </div>
                </div>
                
                <div className="bg-accent-light p-4 rounded-lg mb-8">
                  <div className="flex items-start">
                    <FiInfo className="text-accent mt-1 mr-3 flex-shrink-0" />
                    <p className="text-sm">
                      After submitting, we'll review your request and reach out within 2 business days to discuss details, pricing, and next steps. A 50% deposit is typically required to begin work on commissioned pieces.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Back to Edit
                  </button>
                  <button
                    type="button"
                    onClick={submitForm}
                    className="btn-primary"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 4: Success Message */}
            {step === 4 && (
              <div className="animate-fade-in text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                  <FiCheck size={32} />
                </div>
                <h2 className="heading-md mb-4">Request Submitted Successfully!</h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                  Thank you for your commission request. We've received your information and will contact you within 2 business days to discuss your project in detail.
                </p>
                <div className="space-y-4">
                  <Link href="/gallery" className="btn-primary inline-block">
                    Browse Gallery
                  </Link>
                  <div>
                    <Link href="/" className="text-accent hover:underline">
                      Return to Home Page
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-8">Commission FAQs</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'What is the commission process?',
                answer: 'The commission process begins with your request form submission. We\'ll then reach out to discuss details, provide pricing, and establish a timeline. Once terms are agreed upon, a 50% deposit secures your spot in the schedule. You\'ll receive progress updates and have opportunities for feedback before the artwork is completed, delivered, and the final payment is processed.'
              },
              {
                question: 'How much does a commission cost?',
                answer: 'Commission pricing varies based on size, complexity, medium, and timeline. Small pieces typically start at $500, while larger or more complex works can range from $1,000 to $5,000+. After reviewing your request, we\'ll provide a detailed quote for your specific project.'
              },
              {
                question: 'How long does a commission take?',
                answer: 'Most commissions take 4-8 weeks from approval to completion, depending on size, complexity, and current workload. Rush options may be available for an additional fee, subject to availability. We\'ll provide a specific timeline estimate when discussing your project.'
              },
              {
                question: 'Do you ship internationally?',
                answer: 'Yes, we ship worldwide. International shipping costs are calculated based on size, weight, and destination. All artworks are professionally packed and insured for safe delivery.'
              },
              {
                question: 'What if I\'m not satisfied with the final artwork?',
                answer: 'Your satisfaction is our priority. We maintain clear communication throughout the process with progress updates and opportunities for feedback. In the rare event you\'re not completely satisfied with the final piece, we\'ll work with you to address your concerns and make reasonable adjustments.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  className="w-full p-4 text-left flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {expandedFaq === index ? (
                    <FiChevronUp className="text-accent" />
                  ) : (
                    <FiChevronDown className="text-accent" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="p-4 pt-0 text-gray-600 border-t">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Example Commissions */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-4">Past Commission Examples</h2>
          <p className="body-text text-center max-w-2xl mx-auto mb-8">
            Browse examples of previous commissioned artworks to get inspiration for your own custom piece.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Commission Example {item}</p>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-1">Client Project {item}</h3>
                  <p className="text-sm text-gray-600 mb-2">Custom {item === 1 ? 'Landscape' : item === 2 ? 'Abstract' : 'Portrait'} Commission</p>
                  <p className="text-sm text-gray-700">
                    {item === 1 
                      ? "A serene mountain landscape commissioned for a client's living room. Created with oil on canvas, 36\" x 48\"." 
                      : item === 2 
                        ? "Abstract piece inspired by ocean waves for a corporate office lobby. Mixed media on canvas, 48\" x 60\"." 
                        : "Family portrait commissioned as an anniversary gift. Oil on canvas, 24\" x 36\"."}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/gallery" className="btn-secondary">
              View More Artwork
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
