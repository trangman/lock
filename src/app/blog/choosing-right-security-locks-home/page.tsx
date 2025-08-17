import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheckIcon, LockClosedIcon, ArrowLeftIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Choosing the Right Security Locks for Your Home - Complete Guide | Locksmith Yorkshire',
  description: 'Discover the best types of locks for maximum home security. From traditional mortise locks to modern smart locks, find what\'s right for your property. Expert advice from Yorkshire locksmiths.',
  keywords: 'home security locks, best locks for home, mortise locks, smart locks, home security, security locks yorkshire, lock installation',
  openGraph: {
    title: 'Choosing the Right Security Locks for Your Home - Complete Guide',
    description: 'Discover the best types of locks for maximum home security. Expert advice on lock selection and installation.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/blog/choosing-right-security-locks-home',
  },
};

export default function SecurityLocksArticle() {
  return (
    <div className="min-h-screen">
      {/* Article Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Choosing the Right Security Locks for Your Home - Complete Guide',
            description: 'Discover the best types of locks for maximum home security. From traditional mortise locks to modern smart locks, find what\'s right for your property with expert advice.',
            image: 'https://www.locksmithyorkshire.co.uk/headers/default.webp',
            author: {
              '@type': 'Organization',
              name: 'Locksmith Yorkshire',
              url: 'https://www.locksmithyorkshire.co.uk/'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Locksmith Yorkshire',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.locksmithyorkshire.co.uk/locksmith-yorkshire400.png'
              }
            },
            datePublished: '2024-12-14',
            dateModified: '2024-12-14',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.locksmithyorkshire.co.uk/blog/choosing-right-security-locks-home'
            },
            articleSection: 'Home Security',
            keywords: 'home security locks, best locks for home, mortise locks, smart locks, home security, security locks yorkshire, lock installation',
            about: [
              {
                '@type': 'Service',
                name: 'Residential Locksmith Services',
                description: 'Complete home security solutions including lock installation and repair'
              }
            ],
            offers: {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Residential Locksmith',
                description: 'Professional lock installation and security solutions for homes'
              },
              areaServed: 'Yorkshire',
              availableChannel: {
                '@type': 'ServiceChannel',
                servicePhone: '0800-123-4567'
              }
            }
          }),
        }}
      />

      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.locksmithyorkshire.co.uk/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://www.locksmithyorkshire.co.uk/blog'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Security Locks Guide',
                item: 'https://www.locksmithyorkshire.co.uk/blog/choosing-right-security-locks-home'
              }
            ]
          }),
        }}
      />

      <Header />
      
      {/* Article Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
          
          <div className="flex items-center mb-4">
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Home Security</span>
            <span className="mx-3 text-blue-300">•</span>
            <span className="text-blue-200 text-sm">5 min read</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Choosing the Right Security Locks for Your Home
          </h1>
          
          <p className="text-xl text-blue-100 leading-relaxed">
            Discover the best types of locks for maximum home security. From traditional mortise locks to modern smart locks, 
            find what&apos;s right for your property with expert advice.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 text-lg leading-relaxed">
                <strong>Your home&apos;s security starts with the right locks.</strong> With so many options available today, 
                choosing the best security locks for your home can be overwhelming. This comprehensive guide will help you 
                understand different lock types, their security levels, and how to make the right choice for your property.
              </p>
            </div>

            {/* Why Lock Choice Matters */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ShieldCheckIcon className="h-8 w-8 text-blue-500 mr-3" />
                Why Your Lock Choice Matters
              </h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                The locks on your doors are your first line of defense against intruders. A high-quality lock can deter 
                burglars and provide peace of mind, while a poor-quality lock can make your home an easy target.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Benefits of Quality Locks:</h3>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Deter burglars and intruders</li>
                    <li>• Provide peace of mind</li>
                    <li>• May reduce insurance premiums</li>
                    <li>• Increase property value</li>
                    <li>• Meet building regulations</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">Risks of Poor Locks:</h3>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Easy target for burglars</li>
                    <li>• Potential insurance issues</li>
                    <li>• Reduced property security</li>
                    <li>• False sense of security</li>
                    <li>• May not meet standards</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Types of Locks */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Security Locks</h2>
              
              <div className="space-y-8">
                {/* Mortise Locks */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <LockClosedIcon className="h-6 w-6 text-blue-600 mr-2" />
                    Mortise Locks
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Mortise locks are traditional, high-security locks that are built into the door frame. They offer 
                    excellent security and are commonly found in older properties and high-end homes.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Very high security level</li>
                        <li>• Durable and long-lasting</li>
                        <li>• Professional appearance</li>
                        <li>• Multiple locking points</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Expensive to install</li>
                        <li>• Requires door modification</li>
                        <li>• Limited style options</li>
                        <li>• Professional installation needed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Euro Cylinder Locks */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <LockClosedIcon className="h-6 w-6 text-blue-600 mr-2" />
                    Euro Cylinder Locks
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Euro cylinder locks are modern, versatile locks that fit into a standard door cavity. They&apos;re popular 
                    in newer homes and offer good security with easy replacement options.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Easy to replace</li>
                        <li>• Good security options</li>
                        <li>• Affordable</li>
                        <li>• Wide variety available</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Can be vulnerable to snapping</li>
                        <li>• Quality varies significantly</li>
                        <li>• May need anti-snap protection</li>
                        <li>• Limited to certain door types</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Smart Locks */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <LockClosedIcon className="h-6 w-6 text-blue-600 mr-2" />
                    Smart Locks
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Smart locks offer keyless entry and remote access control. They&apos;re perfect for modern homes and 
                    provide convenience alongside security features.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Keyless entry</li>
                        <li>• Remote access control</li>
                        <li>• Activity monitoring</li>
                        <li>• Integration with smart home</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Higher cost</li>
                        <li>• Requires power/batteries</li>
                        <li>• Potential hacking risks</li>
                        <li>• Learning curve for users</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Multi-Point Locks */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <LockClosedIcon className="h-6 w-6 text-blue-600 mr-2" />
                    Multi-Point Locks
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Multi-point locks secure the door at multiple points along the frame, providing excellent security 
                    for patio doors and French doors.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Multiple locking points</li>
                        <li>• Excellent security</li>
                        <li>• Ideal for large doors</li>
                        <li>• Weather resistant</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Expensive</li>
                        <li>• Complex installation</li>
                        <li>• Limited to certain door types</li>
                        <li>• Professional maintenance needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Security Ratings */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding Lock Security Ratings</h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Locks are rated based on their resistance to various attack methods. Understanding these ratings helps 
                you choose the right level of security for your needs.
              </p>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">British Standard (BS) Ratings:</h3>
                  <ul className="text-yellow-700 text-sm space-y-1">
                    <li><strong>BS 3621:</strong> Thief-resistant locks (minimum standard for insurance)</li>
                    <li><strong>BS 8621:</strong> Keyless egress locks (for fire safety)</li>
                    <li><strong>BS 10621:</strong> Enhanced security locks</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Sold Secure Ratings:</h3>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li><strong>Bronze:</strong> Basic security (not recommended for homes)</li>
                    <li><strong>Silver:</strong> Medium security (suitable for low-risk areas)</li>
                    <li><strong>Gold:</strong> High security (recommended for most homes)</li>
                    <li><strong>Diamond:</strong> Maximum security (for high-value properties)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Choosing the Right Lock */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right Lock</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">1. Assess Your Security Needs</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• What&apos;s the crime rate in your area?</li>
                    <li>• What type of property do you own?</li>
                    <li>• What&apos;s the value of your belongings?</li>
                    <li>• Do you have insurance requirements?</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">2. Consider Your Budget</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• High-security locks cost more but provide better protection</li>
                    <li>• Consider installation costs</li>
                    <li>• Factor in long-term maintenance</li>
                    <li>• Balance cost with security needs</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">3. Think About Convenience</h3>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li>• Do you want keyless entry?</li>
                    <li>• How many people need access?</li>
                    <li>• Do you need remote access?</li>
                    <li>• What&apos;s your technical comfort level?</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Professional Installation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Installation is Key</h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Even the best lock won&apos;t provide adequate security if it&apos;s not installed correctly. Professional 
                installation ensures your locks work properly and provide maximum security.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Why Choose Professional Installation:</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• Correct fitting and alignment</li>
                  <li>• Proper security testing</li>
                  <li>• Warranty protection</li>
                  <li>• Compliance with regulations</li>
                  <li>• Expert advice on lock selection</li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Choosing the right security locks for your home is a crucial decision that affects your family&apos;s safety 
                and your peace of mind. Consider your security needs, budget, and convenience requirements when making your choice.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Remember, the best lock is one that provides the right balance of security, convenience, and value for your 
                specific situation. When in doubt, consult with a professional locksmith who can assess your needs and recommend 
                the best options.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 mb-3">Need Professional Lock Installation?</h3>
                <p className="text-green-700 mb-4">
                  Our expert locksmiths can help you choose and install the perfect security locks for your home. 
                  We offer professional installation services across Yorkshire with guaranteed workmanship.
                </p>
                <a 
                  href="tel:0800-123-4567"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Consultation: 0800-123-4567
                </a>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              href="/blog/emergency-lockout-what-to-do"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Emergency Lockout? Here&apos;s What to Do</h3>
              <p className="text-gray-600 text-sm">Find yourself locked out? Don&apos;t panic! Learn the essential steps...</p>
            </Link>
            
            <Link 
              href="/blog/smart-locks-vs-traditional-locks"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Smart Locks vs Traditional Locks: Which is Better?</h3>
              <p className="text-gray-600 text-sm">Compare smart locks with traditional security systems...</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-4 text-2xl sm:text-3xl">
            Professional Lock Installation Services
          </h2>
          <p className="mb-8 text-blue-100 text-lg">
            Our expert locksmiths can help you choose and install the perfect security locks for your home across Yorkshire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0800-123-4567"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call for Consultation: 0800-123-4567
            </a>
            <Link 
              href="/"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Visit Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
