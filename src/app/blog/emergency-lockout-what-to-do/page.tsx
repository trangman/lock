import type { Metadata } from 'next';
import Link from 'next/link';
import { PhoneIcon, ExclamationTriangleIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Emergency Lockout? Here\'s What to Do - Complete Guide | Locksmith Yorkshire',
  description: 'Find yourself locked out? Don\'t panic! Learn the essential steps to take during an emergency lockout and how to get professional help quickly. Expert advice from Yorkshire locksmiths.',
  keywords: 'emergency lockout, locked out, what to do when locked out, emergency locksmith, lockout help, emergency locksmith yorkshire',
  openGraph: {
    title: 'Emergency Lockout? Here\'s What to Do - Complete Guide',
    description: 'Don\'t panic when locked out! Learn essential emergency lockout procedures and get professional help quickly.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/blog/emergency-lockout-what-to-do',
  },
};

export default function EmergencyLockoutArticle() {
  return (
    <div className="min-h-screen">
      {/* Article Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Emergency Lockout? Here\'s What to Do - Complete Guide',
            description: 'Find yourself locked out? Don\'t panic! Learn the essential steps to take during an emergency lockout and how to get professional help quickly. Expert advice from Yorkshire locksmiths.',
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
            datePublished: '2024-12-15',
            dateModified: '2024-12-15',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.locksmithyorkshire.co.uk/blog/emergency-lockout-what-to-do'
            },
            articleSection: 'Emergency Services',
            keywords: 'emergency lockout, locked out, what to do when locked out, emergency locksmith, lockout help, emergency locksmith yorkshire',
            about: [
              {
                '@type': 'Service',
                name: 'Emergency Locksmith Services',
                description: '24/7 emergency locksmith services for lockouts and urgent security needs'
              }
            ],
            offers: {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Emergency Locksmith',
                description: '24/7 emergency locksmith services across Yorkshire'
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
                name: 'Emergency Lockout Guide',
                item: 'https://www.locksmithyorkshire.co.uk/blog/emergency-lockout-what-to-do'
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
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Emergency Services</span>
            <span className="mx-3 text-blue-300">•</span>
            <span className="text-blue-200 text-sm">3 min read</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Emergency Lockout? Here&apos;s What to Do
          </h1>
          
          <p className="text-xl text-blue-100 leading-relaxed">
            Find yourself locked out? Don&apos;t panic! Learn the essential steps to take and how to get help quickly from professional locksmiths.
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
                <strong>Emergency lockouts can happen to anyone, anywhere, at any time.</strong>                 Whether you&apos;re locked out of your home, car, or office, 
                staying calm and knowing what to do can make all the difference. This comprehensive guide will walk you through the essential steps 
                to take during an emergency lockout situation.
              </p>
            </div>

            {/* Step 1: Stay Calm */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-500 mr-3" />
                Step 1: Stay Calm and Assess the Situation
              </h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                The first and most important step is to remain calm. Panicking will only make the situation worse and could lead to poor decisions. 
                Take a few deep breaths and assess your current situation:
              </p>
              
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Where exactly are you locked out? (Home, car, office, etc.)</li>
                <li>What time is it and what&apos;s the weather like?</li>
                <li>Do you have any alternative access points?</li>
                <li>Are there any immediate safety concerns?</li>
              </ul>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Safety First:</strong> If you&apos;re in an unsafe area or it&apos;s late at night, prioritize your safety over trying to solve the lockout yourself.
                </p>
              </div>
            </section>

            {/* Step 2: Check for Alternative Entry */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircleIcon className="h-8 w-8 text-green-500 mr-3" />
                Step 2: Check for Alternative Entry Points
              </h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Before calling for professional help, quickly check if there are any alternative ways to gain access:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">For Homes:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Check if any windows are unlocked</li>
                    <li>• Look for spare keys with neighbors</li>
                    <li>• Check if back doors are accessible</li>
                    <li>• Look for garage access</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">For Cars:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Check if any windows are slightly open</li>
                    <li>• Look for spare keys in your wallet</li>
                    <li>• Check if trunk access is possible</li>
                    <li>• Look for roadside assistance options</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 text-sm">
                  <strong>Important:</strong> Never attempt to break into your property or vehicle. This can cause damage and may void insurance coverage.
                </p>
              </div>
            </section>

            {/* Step 3: Call Professional Help */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <PhoneIcon className="h-8 w-8 text-blue-500 mr-3" />
                Step 3: Call Professional Locksmith Services
              </h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Once you&apos;ve assessed the situation and checked for alternatives, it&apos;s time to call professional help. 
                Professional locksmiths have the tools, skills, and experience to safely resolve your lockout without causing damage.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-900 mb-3">What to Tell the Locksmith:</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• Your exact location and situation</li>
                  <li>• Type of lockout (home, car, office)</li>
                  <li>• Any urgent circumstances</li>
                  <li>• Your contact information</li>
                </ul>
              </div>
              
              <div className="text-center bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-800 text-xl mb-2">24/7 Emergency Response</h3>
                <p className="text-green-700 mb-4">
                  Our locksmiths guarantee a 15-minute response time for emergency lockouts across Yorkshire
                </p>
                <a 
                  href="tel:0800-123-4567"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Call: 0800-123-4567
                </a>
              </div>
            </section>

            {/* Prevention Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Prevention Tips for Future Lockouts</h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                While emergency lockouts can happen to anyone, there are several steps you can take to minimize the risk:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Home Security:</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Install smart locks with backup access</li>
                    <li>• Give spare keys to trusted neighbors</li>
                    <li>• Use key safes for emergency access</li>
                    <li>• Consider keyless entry systems</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Vehicle Security:</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Keep spare keys in a safe location</li>
                    <li>• Use key finder devices</li>
                    <li>• Consider keyless entry systems</li>
                    <li>• Have roadside assistance coverage</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* What to Expect */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect When the Locksmith Arrives</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Verification</h3>
                    <p className="text-gray-700 text-sm">The locksmith will verify your identity and ownership of the property/vehicle</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Assessment</h3>
                    <p className="text-gray-700 text-sm">They&apos;ll assess the lock type and determine the best approach</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Resolution</h3>
                    <p className="text-gray-700 text-sm">Professional tools and techniques will be used to safely gain access</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Recommendations</h3>
                    <p className="text-gray-700 text-sm">You&apos;ll receive advice on preventing future lockouts and improving security</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Emergency lockouts are stressful situations, but they don&apos;t have to be overwhelming. By staying calm, 
                checking for alternatives, and calling professional help, you can resolve the situation quickly and safely.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Remember, professional locksmiths are available 24/7 to help with emergency lockouts across Yorkshire. 
                Don&apos;t hesitate to call for assistance when you need it most.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Need Immediate Help?</h3>
                <p className="text-blue-800 mb-4">
                  Our expert locksmiths are standing by to help with your emergency lockout. 
                  We guarantee a 15-minute response time across Yorkshire.
                </p>
                <a 
                  href="tel:0800-123-4567"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Call Now: 0800-123-4567
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
              href="/blog/car-lockout-solutions-prevention-emergency"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Car Lockout Solutions: Prevention and Emergency Help</h3>
              <p className="text-gray-600 text-sm">Learn how to prevent car lockouts and what to do when they happen...</p>
            </Link>
            
            <Link 
              href="/blog/choosing-right-security-locks-home"
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Choosing the Right Security Locks for Your Home</h3>
              <p className="text-gray-600 text-sm">Discover the best types of locks for maximum home security...</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-4 text-2xl sm:text-3xl">
            Professional Locksmith Services Across Yorkshire
          </h2>
          <p className="mb-8 text-blue-100 text-lg">
            Available 24/7 for emergency lockouts, residential security, and commercial security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0800-123-4567"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Emergency Call: 0800-123-4567
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
