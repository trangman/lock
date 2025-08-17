import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LockClosedIcon, KeyIcon, ShieldCheckIcon, HomeIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Locksmith Blog - Security Tips & Locksmith Advice | Locksmith Yorkshire',
  description: 'Expert locksmith advice, home security tips, and emergency procedures. Learn about locks, keys, and security from professional locksmiths in Yorkshire.',
  keywords: 'locksmith blog, security tips, home security advice, emergency lockout, locksmith yorkshire, security blog',
  openGraph: {
    title: 'Locksmith Blog - Security Tips & Locksmith Advice',
    description: 'Expert locksmith advice, home security tips, and emergency procedures from professional locksmiths.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/blog',
  },
};

const blogPosts = [
  {
    title: "Emergency Lockout? Here's What to Do",
    excerpt: "Find yourself locked out? Don't panic! Learn the essential steps to take and how to get help quickly from professional locksmiths. This comprehensive guide covers everything from staying calm to getting professional assistance.",
    slug: "emergency-lockout-what-to-do",
    category: "Emergency Services",
    readTime: "3 min read",
    publishDate: "2024-12-15",
    icon: LockClosedIcon,
    keywords: ["emergency lockout", "locked out", "what to do when locked out", "emergency locksmith"],
    featured: true
  },
  {
    title: "Choosing the Right Security Locks for Your Home",
    excerpt: "Discover the best types of locks for maximum home security. From traditional mortise locks to modern smart locks, find what's right for your property. Expert advice on lock selection and installation.",
    slug: "choosing-right-security-locks-home",
    category: "Home Security",
    readTime: "5 min read",
    publishDate: "2024-12-14",
    icon: HomeIcon,
    keywords: ["home security locks", "best locks for home", "mortise locks", "smart locks", "home security"],
    featured: false
  },
  {
    title: "Car Lockout Solutions: Prevention and Emergency Help",
    excerpt: "Learn how to prevent car lockouts and what to do when they happen. Professional automotive locksmith services explained with practical tips and emergency procedures.",
    slug: "car-lockout-solutions-prevention-emergency",
    category: "Automotive",
    readTime: "4 min read",
    publishDate: "2024-12-13",
    icon: KeyIcon,
    keywords: ["car lockout", "automotive locksmith", "locked keys in car", "car key replacement"],
    featured: false
  },
  {
    title: "Commercial Security: Protecting Your Business",
    excerpt: "Essential security measures for commercial properties. From access control systems to master key solutions, learn how to protect your business with professional security systems.",
    slug: "commercial-security-protecting-business",
    category: "Commercial Security",
    readTime: "6 min read",
    publishDate: "2024-12-12",
    icon: ShieldCheckIcon,
    keywords: ["commercial security", "business security", "access control", "master key systems"],
    featured: false
  },
  {
    title: "Smart Locks vs Traditional Locks: Which is Better?",
    excerpt: "Compare smart locks with traditional security systems. Understand the pros and cons of each option to make the best choice for your home or business security needs.",
    slug: "smart-locks-vs-traditional-locks",
    category: "Home Security",
    readTime: "4 min read",
    publishDate: "2024-12-11",
    icon: HomeIcon,
    keywords: ["smart locks", "traditional locks", "lock comparison", "home security", "smart home security"],
    featured: false
  },
  {
    title: "Key Cutting Services: Everything You Need to Know",
    excerpt: "Comprehensive guide to key cutting services. Learn about different key types, cutting techniques, and when you might need professional key cutting assistance.",
    slug: "key-cutting-services-guide",
    category: "Services",
    readTime: "3 min read",
    publishDate: "2024-12-10",
    icon: KeyIcon,
    keywords: ["key cutting", "key duplication", "key types", "locksmith services", "key replacement"],
    featured: false
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Blog Collection Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Locksmith Blog & Security Advice',
            description: 'Expert insights on home security, emergency procedures, and professional locksmith services. Stay informed with the latest security tips and industry knowledge.',
            url: 'https://www.locksmithyorkshire.co.uk/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Locksmith Yorkshire',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.locksmithyorkshire.co.uk/locksmith-yorkshire400.png'
              }
            },
            mainEntity: {
              '@type': 'ItemList',
              name: 'Locksmith Articles',
              description: 'Collection of expert locksmith advice and security tips',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  item: {
                    '@type': 'Article',
                    headline: 'Emergency Lockout? Here\'s What to Do',
                    url: 'https://www.locksmithyorkshire.co.uk/blog/emergency-lockout-what-to-do',
                    author: 'Locksmith Yorkshire',
                    datePublished: '2024-12-15'
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  item: {
                    '@type': 'Article',
                    headline: 'Choosing the Right Security Locks for Your Home',
                    url: 'https://www.locksmithyorkshire.co.uk/blog/choosing-right-security-locks-home',
                    author: 'Locksmith Yorkshire',
                    datePublished: '2024-12-14'
                  }
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  item: {
                    '@type': 'Article',
                    headline: 'Car Lockout Solutions: Prevention and Emergency Help',
                    url: 'https://www.locksmithyorkshire.co.uk/blog/car-lockout-solutions-prevention-emergency',
                    author: 'Locksmith Yorkshire',
                    datePublished: '2024-12-13'
                  }
                }
              ]
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
            <h1 className="font-bold mb-4 sm:mb-6 fluid-hero-title">
              Locksmith Blog & Security Advice
            </h1>
            <p className="mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto fluid-subtitle">
              Expert insights on home security, emergency procedures, and professional locksmith services. 
              Stay informed with the latest security tips and industry knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Featured Article</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Latest from Our Blog</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex items-center justify-center">
                  <featuredPost.icon className="h-24 w-24 text-white opacity-80" />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center ml-4 text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.publishDate).toLocaleDateString('en-GB', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Read Full Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of locksmith advice, security tips, and industry insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <post.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('en-GB', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors inline-flex items-center"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold mb-4 text-2xl sm:text-3xl">
            Need Professional Locksmith Services?
          </h2>
          <p className="mb-8 text-blue-100 text-lg">
            Our expert locksmiths are available 24/7 for emergency lockouts and all your security needs across Yorkshire.
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
