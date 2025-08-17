import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  KeyIcon, 
  ScissorsIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  PhoneIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Key Cutting Services: Everything You Need to Know | Locksmith Yorkshire',
  description: 'Comprehensive guide to key cutting services. Learn about different key types, cutting techniques, and when you might need professional key cutting assistance.',
  keywords: 'key cutting, key duplication, key types, locksmith services, key replacement, yorkshire',
  openGraph: {
    title: 'Key Cutting Services: Everything You Need to Know',
    description: 'Comprehensive guide to key cutting services. Learn about different key types, cutting techniques, and when you might need professional key cutting assistance.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/blog/key-cutting-services-guide',
  },
};

export default function KeyCuttingArticle() {
  return (
    <div className="min-h-screen">
      {/* Article Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Key Cutting Services: Everything You Need to Know',
            description: 'Comprehensive guide to key cutting services. Learn about different key types, cutting techniques, and when you might need professional key cutting assistance.',
            image: 'https://www.locksmithyorkshire.co.uk/headers/default.webp',
            author: {
              '@type': 'Organization',
              name: 'Locksmith Yorkshire'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Locksmith Yorkshire',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.locksmithyorkshire.co.uk/locksmith-yorkshire400.png'
              }
            },
            datePublished: '2024-12-10',
            dateModified: '2024-12-10',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://www.locksmithyorkshire.co.uk/blog/key-cutting-services-guide'
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
                name: 'Key Cutting Services Guide',
                item: 'https://www.locksmithyorkshire.co.uk/blog/key-cutting-services-guide'
              }
            ]
          }),
        }}
      />

      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center">
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Services</span>
            <h1 className="font-bold mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl">
              Key Cutting Services: Everything You Need to Know
            </h1>
            <p className="mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto text-lg sm:text-xl">
              Comprehensive guide to key cutting services, different key types, and when you need professional assistance
            </p>
            <div className="flex items-center justify-center text-sm text-blue-200">
              <ClockIcon className="h-4 w-4 mr-2" />
              <span>3 min read</span>
              <span className="mx-3">•</span>
              <span>Published December 10, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Key cutting is one of the most fundamental locksmith services, yet many people don&apos;t understand the complexity and precision involved. Whether you need a spare key for your home, car, or business, understanding the key cutting process can help you make informed decisions and ensure you get the right service for your needs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <KeyIcon className="h-6 w-6 text-blue-600 mr-3" />
              Understanding Key Types and Their Requirements
            </h2>
            
            <p className="mb-4">
              Not all keys are created equal, and different key types require different cutting techniques and equipment:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Traditional House Keys</h3>
            <p className="mb-4">
              The most common type of key, house keys come in various profiles and require precise cutting to match the lock&apos;s internal mechanism:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Mortise Keys:</strong> Used in traditional door locks, these keys have a long blade with cuts along the edge</li>
              <li><strong>Yale Keys:</strong> Shorter keys with cuts on both sides, commonly used in modern door locks</li>
              <li><strong>Profile Keys:</strong> Flat keys with cuts along the edge, used in many European locks</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Car Keys</h3>
            <p className="mb-4">
              Modern car keys are complex and often require specialized equipment:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Traditional Car Keys:</strong> Metal keys that can be cut using standard key cutting machines</li>
              <li><strong>Transponder Keys:</strong> Contain electronic chips that communicate with the car&apos;s immobilizer system</li>
              <li><strong>Smart Keys:</strong> Keyless entry systems that require programming, not just cutting</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. High-Security Keys</h3>
            <p className="mb-4">
              These keys feature advanced security features and require specialized cutting:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Dimple Keys:</strong> Have indentations on the surface rather than cuts along the edge</li>
              <li><strong>Laser-Cut Keys:</strong> Precise cuts made using laser technology for maximum security</li>
              <li><strong>Sidewinder Keys:</strong> Complex cuts that require specialized cutting equipment</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ScissorsIcon className="h-6 w-6 text-blue-600 mr-3" />
              The Key Cutting Process: What Happens Behind the Scenes
            </h2>
            
            <p className="mb-4">
              Professional key cutting involves several steps to ensure accuracy and quality:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Key Identification</h3>
            <p className="mb-4">
              The first step is identifying the key type and determining the appropriate cutting method:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Examining the key profile and cuts</li>
              <li>Identifying the manufacturer and model</li>
              <li>Determining if the key has security features</li>
              <li>Selecting the appropriate blank key</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Blank Selection</h3>
            <p className="mb-4">
              Choosing the right blank key is crucial for proper function:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Material:</strong> Brass, nickel-plated, or steel blanks</li>
              <li><strong>Profile:</strong> Must match the original key&apos;s shape exactly</li>
              <li><strong>Length:</strong> Appropriate length for the lock mechanism</li>
              <li><strong>Security Level:</strong> Matching the original key&apos;s security features</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Precise Cutting</h3>
            <p className="mb-4">
              The actual cutting process requires precision and expertise:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Manual Cutting:</strong> Using specialized hand tools for unique keys</li>
              <li><strong>Machine Cutting:</strong> Computer-controlled cutting for standard keys</li>
              <li><strong>Laser Cutting:</strong> High-precision cutting for security keys</li>
              <li><strong>Quality Control:</strong> Checking each cut for accuracy</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-3" />
              When You Need Professional Key Cutting Services
            </h2>
            
            <p className="mb-4">
              While some basic keys can be cut at hardware stores, there are many situations where professional locksmith services are essential:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              Professional Service Required
            </h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>High-Security Keys:</strong> Keys with advanced security features</li>
              <li><strong>Car Keys:</strong> Especially transponder and smart keys</li>
              <li><strong>Business Keys:</strong> Master key systems and restricted keys</li>
              <li><strong>Antique Keys:</strong> Keys for vintage locks and furniture</li>
              <li><strong>Security Keys:</strong> Keys for safes, vaults, and high-security areas</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 text-orange-600 mr-2" />
              Hardware Store Limitations
            </h3>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Limited Key Types:</strong> Only basic house keys available</li>
              <li><strong>No Security Features:</strong> Can&apos;t handle transponder or smart keys</li>
              <li><strong>Quality Issues:</strong> May use inferior materials</li>
              <li><strong>No Programming:</strong> Can&apos;t program electronic keys</li>
              <li><strong>Limited Expertise:</strong> Staff may not understand complex requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <KeyIcon className="h-6 w-6 text-blue-600 mr-3" />
              Key Cutting Costs: What to Expect
            </h2>
            
            <p className="mb-4">
              Understanding the cost factors can help you budget appropriately:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Basic Keys</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Standard house keys: £3-8</li>
                    <li>• Basic car keys: £5-15</li>
                    <li>• Office keys: £4-10</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advanced Keys</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Transponder keys: £20-80</li>
                    <li>• High-security keys: £15-50</li>
                    <li>• Smart keys: £50-200+</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-3" />
              Choosing the Right Key Cutting Service
            </h2>
            
            <p className="mb-4">
              Not all key cutting services are equal. Here&apos;s what to look for:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Qualities</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Experience:</strong> Years of experience in key cutting</li>
              <li><strong>Equipment:</strong> Modern, well-maintained cutting machines</li>
              <li><strong>Materials:</strong> High-quality blank keys</li>
              <li><strong>Guarantee:</strong> Satisfaction guarantee on their work</li>
              <li><strong>Licensing:</strong> Proper business licensing and insurance</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Red Flags to Avoid</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Unusually Low Prices:</strong> May indicate poor quality materials</li>
              <li><strong>No Guarantee:</strong> Unwilling to stand behind their work</li>
              <li><strong>Outdated Equipment:</strong> May not provide accurate cuts</li>
              <li><strong>Limited Selection:</strong> Can&apos;t handle your specific key type</li>
              <li><strong>No Documentation:</strong> Unwilling to provide receipts or guarantees</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ClockIcon className="h-6 w-6 text-blue-600 mr-3" />
              Emergency Key Cutting: When You Need It Now
            </h2>
            
            <p className="mb-4">
              Sometimes you need keys cut immediately:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Situations</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Locked Out:</strong> Need immediate access to your property</li>
              <li><strong>Lost Keys:</strong> Require replacement keys quickly</li>
              <li><strong>Broken Keys:</strong> Keys that have snapped or become damaged</li>
              <li><strong>Business Emergencies:</strong> Need access to commercial properties</li>
              <li><strong>Travel Issues:</strong> Lost keys while away from home</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Services</h3>
            <p className="mb-4">
              Professional locksmiths often offer emergency key cutting services:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Mobile Service:</strong> Come to your location</li>
              <li><strong>Quick Response:</strong> Usually within 15-30 minutes</li>
              <li><strong>All Key Types:</strong> Handle emergency and standard keys</li>
              <li><strong>Professional Quality:</strong> Same standards as regular service</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Need Professional Key Cutting?</h3>
              <p className="text-blue-800 mb-4">
                Our expert locksmiths provide professional key cutting services for all key types, from basic house keys to high-security systems. We guarantee quality and accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0800-123-4567"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Get Key Cutting Quote
                </a>
                <Link
                  href="/locksmith"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Service Areas
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Maintaining Your Keys</h2>
            
            <p className="mb-4">
              Proper key maintenance can extend their lifespan and prevent the need for frequent replacement:
            </p>
            
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Regular Cleaning:</strong> Remove dirt and debris regularly</li>
              <li><strong>Proper Storage:</strong> Keep keys in a dry, safe location</li>
              <li><strong>Avoid Excessive Force:</strong> Don&apos;t force keys into locks</li>
              <li><strong>Regular Inspection:</strong> Check for signs of wear or damage</li>
              <li><strong>Professional Assessment:</strong> Have worn keys evaluated by professionals</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
            
            <p className="mb-4">
              Key cutting is a specialized service that requires expertise, proper equipment, and quality materials. While basic keys can sometimes be cut at hardware stores, professional locksmith services are essential for complex keys, security systems, and emergency situations.
            </p>
            
            <p className="mb-8">
              When choosing a key cutting service, prioritize quality, experience, and guarantees over price alone. Professional locksmiths can handle all key types and provide the expertise needed for complex cutting requirements. Remember, the cost of professional key cutting is often offset by the quality and reliability of the service.
            </p>

            {/* Related Articles */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="/blog/choosing-right-security-locks-home"
                  className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Choosing the Right Security Locks for Your Home</h4>
                  <p className="text-gray-600 text-sm">Discover the best types of locks for maximum home security...</p>
                </Link>
                <Link 
                  href="/blog/emergency-lockout-what-to-do"
                  className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Lockout? Here&apos;s What to Do</h4>
                  <p className="text-gray-600 text-sm">Find yourself locked out? Don&apos;t panic! Learn the essential steps...</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
