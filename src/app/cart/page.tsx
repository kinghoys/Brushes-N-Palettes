'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiTrash2, FiShoppingCart, FiChevronRight, FiLock, FiCheck } from 'react-icons/fi';

// Mock cart data (in a real app, this would come from a state management solution like Context or Redux)
const initialCartItems = [
  {
    id: 1,
    title: 'Ocean Dreams',
    image: '/images/placeholder-1.jpg',
    price: 1200,
    size: '36" x 48"',
    medium: 'Oil on Canvas',
  },
  {
    id: 4,
    title: 'Tranquil Forest',
    image: '/images/placeholder-4.jpg',
    price: 950,
    size: '24" x 30"',
    medium: 'Oil on Canvas',
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0; // 10% discount
  const shipping = 50; // Fixed shipping rate
  const tax = Math.round((subtotal - discount) * 0.07); // 7% tax
  const total = subtotal - discount + shipping + tax;
  
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'art10') {
      setPromoApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };
  
  const handleContinue = () => {
    setCheckoutStep(2);
    window.scrollTo(0, 0);
  };
  
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the order to an API
    setCheckoutStep(3);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="pt-20 min-h-screen">
      {/* Header Section */}
      <section className="bg-accent-light py-8">
        <div className="container-custom">
          <h1 className="heading-lg text-center">
            {checkoutStep === 1 ? 'Your Shopping Cart' : 
             checkoutStep === 2 ? 'Checkout' : 
             'Order Confirmation'}
          </h1>
        </div>
      </section>
      
      {/* Progress Steps */}
      <section className="py-6 bg-white border-b">
        <div className="container-custom">
          <div className="flex justify-center">
            <div className="flex items-center max-w-2xl w-full justify-between">
              <div className={`flex flex-col items-center ${checkoutStep >= 1 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${checkoutStep >= 1 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <FiShoppingCart />
                </div>
                <span className="text-sm">Cart</span>
              </div>
              
              <div className={`w-16 h-1 ${checkoutStep >= 2 ? 'bg-accent' : 'bg-gray-200'}`} />
              
              <div className={`flex flex-col items-center ${checkoutStep >= 2 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${checkoutStep >= 2 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <FiLock />
                </div>
                <span className="text-sm">Checkout</span>
              </div>
              
              <div className={`w-16 h-1 ${checkoutStep >= 3 ? 'bg-accent' : 'bg-gray-200'}`} />
              
              <div className={`flex flex-col items-center ${checkoutStep >= 3 ? 'text-accent' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${checkoutStep >= 3 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <FiChevronRight />
                </div>
                <span className="text-sm">Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cart Content */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          {/* Step 1: Cart Items */}
          {checkoutStep === 1 && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <div className="text-gray-400 mb-4">
                      <FiShoppingCart size={48} className="mx-auto" />
                    </div>
                    <h2 className="text-xl font-medium mb-4">Your Cart is Empty</h2>
                    <p className="text-gray-600 mb-6">
                      Looks like you haven't added any artwork to your cart yet.
                    </p>
                    <Link href="/gallery" className="btn-primary">
                      Browse Gallery
                    </Link>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-medium mb-4">Cart Items ({cartItems.length})</h2>
                    
                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex border rounded-lg overflow-hidden">
                          <div className="w-32 h-32 bg-gray-200 flex items-center justify-center flex-shrink-0">
                            <p className="text-gray-500 text-sm">Artwork Image</p>
                          </div>
                          
                          <div className="flex-1 p-4 flex flex-col">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="text-sm text-gray-600 mb-1">{item.medium}</p>
                                <p className="text-sm text-gray-600">{item.size}</p>
                              </div>
                              <p className="font-medium">${item.price.toLocaleString()}</p>
                            </div>
                            
                            <div className="mt-auto flex justify-end">
                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-red-500 flex items-center text-sm hover:text-red-700"
                              >
                                <FiTrash2 className="mr-1" size={14} />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Order Summary */}
              {cartItems.length > 0 && (
                <div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${subtotal.toLocaleString()}</span>
                      </div>
                      
                      {promoApplied && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount (10%)</span>
                          <span>-${discount.toLocaleString()}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>${shipping.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tax (7%)</span>
                        <span>${tax.toLocaleString()}</span>
                      </div>
                      
                      <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    {/* Promo Code */}
                    <div className="mb-6">
                      <label htmlFor="promo" className="block text-sm font-medium mb-2">
                        Promo Code
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          id="promo"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="Enter code"
                          className="flex-1 p-3 border rounded-l-md"
                          disabled={promoApplied}
                        />
                        <button
                          onClick={handleApplyPromo}
                          className={`px-4 rounded-r-md ${
                            promoApplied 
                              ? 'bg-green-500 text-white cursor-not-allowed' 
                              : 'bg-accent text-white hover:bg-opacity-90'
                          }`}
                          disabled={promoApplied}
                        >
                          {promoApplied ? 'Applied' : 'Apply'}
                        </button>
                      </div>
                      {promoApplied && (
                        <p className="text-sm text-green-600 mt-1">
                          Promo code applied: 10% discount
                        </p>
                      )}
                    </div>
                    
                    <button
                      onClick={handleContinue}
                      className="w-full btn-primary"
                    >
                      Proceed to Checkout
                    </button>
                    
                    <div className="mt-4 text-center">
                      <Link href="/gallery" className="text-accent hover:underline text-sm">
                        Continue Shopping
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-sm text-gray-600">
                    <p className="mb-2">
                      <strong>Shipping:</strong> All artwork is carefully packaged and typically ships within 3-5 business days.
                    </p>
                    <p>
                      <strong>Returns:</strong> We offer a 14-day return policy. See our <Link href="#" className="text-accent hover:underline">Return Policy</Link> for details.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Step 2: Checkout Form */}
          {checkoutStep === 2 && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handlePlaceOrder}>
                  {/* Shipping Information */}
                  <div className="mb-8">
                    <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
                    
                    <div className="bg-white p-6 border rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="address" className="block text-sm font-medium mb-1">
                            Address *
                          </label>
                          <input
                            type="text"
                            id="address"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="address2" className="block text-sm font-medium mb-1">
                            Address Line 2
                          </label>
                          <input
                            type="text"
                            id="address2"
                            className="w-full p-3 border rounded-md"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium mb-1">
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium mb-1">
                            State/Province *
                          </label>
                          <input
                            type="text"
                            id="state"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="zip" className="block text-sm font-medium mb-1">
                            Zip/Postal Code *
                          </label>
                          <input
                            type="text"
                            id="zip"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium mb-1">
                            Country *
                          </label>
                          <select
                            id="country"
                            className="w-full p-3 border rounded-md"
                            required
                          >
                            <option value="">Select Country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Payment Information */}
                  <div className="mb-8">
                    <h2 className="text-xl font-medium mb-4">Payment Information</h2>
                    
                    <div className="bg-white p-6 border rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label htmlFor="cardName" className="block text-sm font-medium mb-1">
                            Name on Card *
                          </label>
                          <input
                            type="text"
                            id="cardName"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                            Card Number *
                          </label>
                          <input
                            type="text"
                            id="cardNumber"
                            placeholder="XXXX XXXX XXXX XXXX"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="expDate" className="block text-sm font-medium mb-1">
                            Expiration Date *
                          </label>
                          <input
                            type="text"
                            id="expDate"
                            placeholder="MM/YY"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                            CVV *
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            placeholder="123"
                            className="w-full p-3 border rounded-md"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-4">
                        <FiLock className="text-accent mr-2" />
                        <span className="text-sm text-gray-600">
                          Your payment information is secured with SSL encryption
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCheckoutStep(1)}
                      className="btn-secondary"
                    >
                      Back to Cart
                    </button>
                    
                    <button
                      type="submit"
                      className="btn-primary"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    
                    {promoApplied && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span>-${discount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>${shipping.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (7%)</span>
                      <span>${tax.toLocaleString()}</span>
                    </div>
                    
                    <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <div className="w-16 h-16 bg-gray-200 flex items-center justify-center flex-shrink-0 mr-3 rounded">
                          <p className="text-gray-500 text-xs">Image</p>
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-gray-600">${item.price.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 3: Order Confirmation */}
          {checkoutStep === 3 && (
            <div className="max-w-2xl mx-auto text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-6">
                <FiCheck size={32} />
              </div>
              
              <h2 className="heading-md mb-4">Thank You for Your Order!</h2>
              <p className="text-gray-600 mb-6">
                Your order has been received and is now being processed. You will receive an email confirmation shortly.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-medium text-lg mb-4">Order Details</h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-medium">ART-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-medium">${total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-medium">Credit Card (•••• 1234)</span>
                  </div>
                </div>
                
                <h4 className="font-medium mb-2">Items Ordered:</h4>
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.title}</span>
                      <span>${item.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                If you have any questions about your order, please contact us at <a href="mailto:support@brushesandpalettes.com" className="text-accent hover:underline">support@brushesandpalettes.com</a>
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/" className="btn-primary">
                  Return to Home
                </Link>
                <Link href="/gallery" className="btn-secondary">
                  Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
