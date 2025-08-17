'use client';
import Link from 'next/link';
import { LockClosedIcon, KeyIcon, ShieldCheckIcon, HomeIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    title: "Emergency Lockout? Here's What to Do",
    excerpt: "Find yourself locked out? Don't panic! Learn the essential steps to take and how to get help quickly from professional locksmiths.",
    slug: "emergency-lockout-what-to-do",
    category: "Emergency Services",
    readTime: "3 min read",
    icon: LockClosedIcon,
    keywords: ["emergency lockout", "locked out", "what to do when locked out", "emergency locksmith"]
  },
  {
    title: "Choosing the Right Security Locks for Your Home",
    excerpt: "Discover the best types of locks for maximum home security. From traditional mortise locks to modern smart locks, find what's right for your property.",
    slug: "choosing-right-security-locks-home",
    category: "Home Security",
    readTime: "5 min read",
    icon: HomeIcon,
    keywords: ["home security locks", "best locks for home", "mortise locks", "smart locks", "home security"]
  },
  {
    title: "Car Lockout Solutions: Prevention and Emergency Help",
    excerpt: "Learn how to prevent car lockouts and what to do when they happen. Professional automotive locksmith services explained.",
    slug: "car-lockout-solutions-prevention-emergency",
    category: "Automotive",
    readTime: "4 min read",
    icon: KeyIcon,
    keywords: ["car lockout", "automotive locksmith", "locked keys in car", "car key replacement"]
  },
  {
    title: "Commercial Security: Protecting Your Business",
    excerpt: "Essential security measures for commercial properties. From access control systems to master key solutions.",
    slug: "commercial-security-protecting-business",
    category: "Commercial Security",
    readTime: "6 min read",
    icon: ShieldCheckIcon,
    keywords: ["commercial security", "business security", "access control", "master key systems"]
  }
];

export default function BlogSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-gray-900 mb-4 fluid-section-title">
            Locksmith Tips & Security Advice
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto fluid-subtitle">
            Expert insights on home security, emergency procedures, and locksmith services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
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
              
              <h3 className="font-semibold text-gray-900 mb-2 text-lg leading-tight">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{post.readTime}</span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Need immediate help? <a href="/#services" className="text-blue-600 hover:text-blue-700 underline">View our services</a> or <a href="/#faq-heading" className="text-blue-600 hover:text-blue-700 underline">check our FAQ</a> for quick answers.
            </p>
          </div>
          <Link 
            href="/blog"
            className="inline-flex bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
