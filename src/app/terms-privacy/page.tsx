import React from 'react';
import Link from 'next/link';

export default function TermsPrivacyPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Header Section */}
      <section className="bg-accent-light py-8">
        <div className="container-custom">
          <h1 className="heading-lg text-center">Terms of Service & Privacy Policy</h1>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Table of Contents */}
            <div className="mb-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-medium mb-4">Table of Contents</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-2">Terms of Service</h3>
                  <ul className="space-y-1 text-accent">
                    <li><a href="#terms-overview" className="hover:underline">1. Overview</a></li>
                    <li><a href="#terms-usage" className="hover:underline">2. Website Usage</a></li>
                    <li><a href="#terms-account" className="hover:underline">3. Account Registration</a></li>
                    <li><a href="#terms-purchases" className="hover:underline">4. Purchases & Payments</a></li>
                    <li><a href="#terms-shipping" className="hover:underline">5. Shipping & Delivery</a></li>
                    <li><a href="#terms-returns" className="hover:underline">6. Returns & Refunds</a></li>
                    <li><a href="#terms-intellectual" className="hover:underline">7. Intellectual Property</a></li>
                    <li><a href="#terms-limitation" className="hover:underline">8. Limitation of Liability</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Privacy Policy</h3>
                  <ul className="space-y-1 text-accent">
                    <li><a href="#privacy-overview" className="hover:underline">1. Information Collection</a></li>
                    <li><a href="#privacy-usage" className="hover:underline">2. Information Usage</a></li>
                    <li><a href="#privacy-sharing" className="hover:underline">3. Information Sharing</a></li>
                    <li><a href="#privacy-security" className="hover:underline">4. Data Security</a></li>
                    <li><a href="#privacy-cookies" className="hover:underline">5. Cookies & Tracking</a></li>
                    <li><a href="#privacy-rights" className="hover:underline">6. Your Rights</a></li>
                    <li><a href="#privacy-changes" className="hover:underline">7. Policy Changes</a></li>
                    <li><a href="#privacy-contact" className="hover:underline">8. Contact Information</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Terms of Service */}
            <div className="mb-16">
              <h2 className="heading-md mb-6">Terms of Service</h2>
              <p className="text-gray-600 mb-6">
                Last Updated: May 30, 2023
              </p>
              
              <div id="terms-overview" className="mb-8">
                <h3 className="text-xl font-medium mb-4">1. Overview</h3>
                <div className="space-y-4">
                  <p>
                    Welcome to our art gallery website. These Terms of Service ("Terms") govern your use of our website and the purchase of artwork and services offered through our platform. By accessing or using our website, you agree to be bound by these Terms.
                  </p>
                  <p>
                    Please read these Terms carefully before using our website. If you do not agree with any part of these Terms, you may not use our website.
                  </p>
                </div>
              </div>
              
              <div id="terms-usage" className="mb-8">
                <h3 className="text-xl font-medium mb-4">2. Website Usage</h3>
                <div className="space-y-4">
                  <p>
                    Our website is intended for personal, non-commercial use. You may browse our website, view our artwork, and make purchases in accordance with these Terms.
                  </p>
                  <p>
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use our website in any way that could disable, damage, or impair the website or interfere with others' use</li>
                    <li>Use any robot, spider, or other automatic device to access our website</li>
                    <li>Introduce viruses, trojans, worms, or other malicious code to our website</li>
                    <li>Attempt to gain unauthorized access to our website, computer systems, or networks</li>
                    <li>Use our website for any illegal or unauthorized purpose</li>
                  </ul>
                </div>
              </div>
              
              <div id="terms-account" className="mb-8">
                <h3 className="text-xl font-medium mb-4">3. Account Registration</h3>
                <div className="space-y-4">
                  <p>
                    To make purchases on our website, you may need to create an account. When creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                  </p>
                  <p>
                    We reserve the right to suspend or terminate your account if we suspect any unauthorized access or use, or if you violate these Terms.
                  </p>
                </div>
              </div>
              
              <div id="terms-purchases" className="mb-8">
                <h3 className="text-xl font-medium mb-4">4. Purchases & Payments</h3>
                <div className="space-y-4">
                  <p>
                    All prices listed on our website are in US Dollars unless otherwise specified. Prices are subject to change without notice. We reserve the right to correct any pricing errors or inaccuracies.
                  </p>
                  <p>
                    When you make a purchase, you agree to pay the specified price plus any applicable taxes and shipping fees. Payment must be made through our approved payment methods. Your order is subject to acceptance by us, and we reserve the right to refuse or cancel any order for any reason.
                  </p>
                  <p>
                    For custom artwork commissions, a 50% non-refundable deposit is required to initiate the project. The remaining balance is due upon completion and before delivery.
                  </p>
                </div>
              </div>
              
              <div id="terms-shipping" className="mb-8">
                <h3 className="text-xl font-medium mb-4">5. Shipping & Delivery</h3>
                <div className="space-y-4">
                  <p>
                    We ship artwork worldwide. Shipping times and costs vary depending on the destination and the size of the artwork. Estimated shipping times will be provided at checkout.
                  </p>
                  <p>
                    All artwork is carefully packaged to ensure safe delivery. However, we cannot guarantee specific delivery dates or times. Any delivery timeframes provided are estimates only.
                  </p>
                  <p>
                    Title and risk of loss for all merchandise pass to you upon delivery of the product to the carrier. You are responsible for filing any claims with carriers for damaged or lost shipments.
                  </p>
                </div>
              </div>
              
              <div id="terms-returns" className="mb-8">
                <h3 className="text-xl font-medium mb-4">6. Returns & Refunds</h3>
                <div className="space-y-4">
                  <p>
                    We want you to be completely satisfied with your purchase. If you are not satisfied, you may return eligible items within 14 days of receipt for a refund or exchange, subject to the following conditions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The artwork must be in its original condition and packaging</li>
                    <li>You must contact us before initiating a return</li>
                    <li>Return shipping costs are the responsibility of the buyer</li>
                    <li>Custom commissioned artwork is non-refundable</li>
                  </ul>
                  <p>
                    Refunds will be processed within 14 days of receipt of the returned item and will be issued using the original payment method.
                  </p>
                </div>
              </div>
              
              <div id="terms-intellectual" className="mb-8">
                <h3 className="text-xl font-medium mb-4">7. Intellectual Property</h3>
                <div className="space-y-4">
                  <p>
                    All content on our website, including but not limited to artwork, images, text, logos, and designs, is the property of the artist or our website and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    When you purchase artwork, you are purchasing the physical item only. All intellectual property rights, including copyright, remain with the artist. You may not reproduce, distribute, or create derivative works of the artwork without the artist's permission.
                  </p>
                  <p>
                    For commissioned artwork, specific intellectual property rights will be outlined in the commission agreement.
                  </p>
                </div>
              </div>
              
              <div id="terms-limitation" className="mb-8">
                <h3 className="text-xl font-medium mb-4">8. Limitation of Liability</h3>
                <div className="space-y-4">
                  <p>
                    To the maximum extent permitted by law, we disclaim all warranties, express or implied, regarding our website and the products sold, including any warranties of merchantability, fitness for a particular purpose, or non-infringement.
                  </p>
                  <p>
                    In no event shall we be liable for any indirect, special, incidental, or consequential damages arising out of or related to your use of our website or the purchase of artwork, even if we have been advised of the possibility of such damages.
                  </p>
                  <p>
                    Our total liability for any claims arising from these Terms or your use of our website shall not exceed the amount paid by you for the specific artwork or service that is the subject of the claim.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Privacy Policy */}
            <div>
              <h2 className="heading-md mb-6">Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                Last Updated: May 30, 2023
              </p>
              
              <div id="privacy-overview" className="mb-8">
                <h3 className="text-xl font-medium mb-4">1. Information Collection</h3>
                <div className="space-y-4">
                  <p>
                    We collect personal information when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Create an account on our website</li>
                    <li>Make a purchase or request a commission</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us through our contact form</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p>
                    The types of information we collect may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact information (name, email address, phone number, shipping address)</li>
                    <li>Payment information (credit card details, billing address)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Communications and correspondence with us</li>
                    <li>Information about your preferences and interests</li>
                  </ul>
                </div>
              </div>
              
              <div id="privacy-usage" className="mb-8">
                <h3 className="text-xl font-medium mb-4">2. Information Usage</h3>
                <div className="space-y-4">
                  <p>
                    We use your personal information to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and fulfill your orders and commissions</li>
                    <li>Communicate with you about your orders and account</li>
                    <li>Provide customer support and respond to inquiries</li>
                    <li>Send you marketing communications and newsletters (if you have opted in)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                  </ul>
                </div>
              </div>
              
              <div id="privacy-sharing" className="mb-8">
                <h3 className="text-xl font-medium mb-4">3. Information Sharing</h3>
                <div className="space-y-4">
                  <p>
                    We may share your personal information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Service providers who help us operate our website and fulfill orders (such as payment processors, shipping companies, and email service providers)</li>
                    <li>Professional advisors (such as lawyers, accountants, and insurers)</li>
                    <li>Government authorities or law enforcement agencies if required by law</li>
                  </ul>
                  <p>
                    We do not sell, rent, or lease your personal information to third parties for their marketing purposes.
                  </p>
                </div>
              </div>
              
              <div id="privacy-security" className="mb-8">
                <h3 className="text-xl font-medium mb-4">4. Data Security</h3>
                <div className="space-y-4">
                  <p>
                    We implement reasonable security measures to protect your personal information from unauthorized access, use, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                  <p>
                    You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.
                  </p>
                </div>
              </div>
              
              <div id="privacy-cookies" className="mb-8">
                <h3 className="text-xl font-medium mb-4">5. Cookies & Tracking</h3>
                <div className="space-y-4">
                  <p>
                    Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. Cookies are small text files that are stored on your device when you visit our website.
                  </p>
                  <p>
                    You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
                  </p>
                </div>
              </div>
              
              <div id="privacy-rights" className="mb-8">
                <h3 className="text-xl font-medium mb-4">6. Your Rights</h3>
                <div className="space-y-4">
                  <p>
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The right to access and receive a copy of your personal information</li>
                    <li>The right to correct inaccurate or incomplete personal information</li>
                    <li>The right to request deletion of your personal information</li>
                    <li>The right to restrict or object to the processing of your personal information</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent at any time (where processing is based on consent)</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided in the "Contact Information" section.
                  </p>
                </div>
              </div>
              
              <div id="privacy-changes" className="mb-8">
                <h3 className="text-xl font-medium mb-4">7. Policy Changes</h3>
                <div className="space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy on our website and updating the "Last Updated" date.
                  </p>
                  <p>
                    Your continued use of our website after the posting of changes constitutes your acceptance of the updated Privacy Policy.
                  </p>
                </div>
              </div>
              
              <div id="privacy-contact" className="mb-8">
                <h3 className="text-xl font-medium mb-4">8. Contact Information</h3>
                <div className="space-y-4">
                  <p>
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium">Email: privacy@brushesandpalettes.com</p>
                    <p className="font-medium">Address: 123 Art Studio Lane, Creativeville, CA 12345</p>
                    <p className="font-medium">Phone: (555) 123-4567</p>
                  </div>
                  <p>
                    We will respond to your request within a reasonable timeframe.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Acceptance */}
            <div className="mt-12 p-6 bg-accent-light rounded-lg text-center">
              <h3 className="font-medium text-lg mb-2">By using our website, you acknowledge that you have read and understand our Terms of Service and Privacy Policy.</h3>
              <p className="mb-4">
                If you have any questions, please don't hesitate to contact us.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
