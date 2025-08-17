import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Accessibility Statement - Locksmith Yorkshire',
  description: 'Our commitment to making our website accessible to all users, including those with disabilities. Learn about our accessibility features and compliance.',
  keywords: 'accessibility, web accessibility, disability access, screen reader, keyboard navigation, locksmith yorkshire',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Accessibility Statement
          </h1>
          <p className="text-xl text-blue-100">
            Our commitment to making our website accessible to all users
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Locksmith Yorkshire is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Commitment
            </h2>
            <p className="mb-6">
              We believe that websites and digital content should be accessible to all users, regardless of their abilities. 
              Our website has been designed and developed with accessibility in mind, following WCAG 2.1 AA guidelines.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Accessibility Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Keyboard Navigation</h3>
                    <p className="text-green-700 text-sm">
                      Full keyboard navigation support with visible focus indicators and logical tab order.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Screen Reader Support</h3>
                    <p className="text-green-700 text-sm">
                      Comprehensive ARIA labels, semantic HTML, and screen reader-friendly content structure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">High Contrast</h3>
                    <p className="text-green-700 text-sm">
                      High contrast color schemes and clear visual hierarchy for better readability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Responsive Design</h3>
                    <p className="text-green-700 text-sm">
                      Mobile-first responsive design that works across all devices and screen sizes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Alternative Text</h3>
                    <p className="text-green-700 text-sm">
                      Descriptive alt text for all images and icons to provide context for screen readers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">Form Accessibility</h3>
                    <p className="text-green-700 text-sm">
                      Proper form labels, error handling, and validation with clear feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Technical Standards
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>WCAG 2.1 AA compliance</li>
              <li>Semantic HTML5 markup</li>
              <li>ARIA (Accessible Rich Internet Applications) labels and roles</li>
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast ratios (minimum 4.5:1)</li>
              <li>Responsive design principles</li>
              <li>Focus management and indicators</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Known Limitations
            </h2>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-yellow-800">
                    While we strive for comprehensive accessibility, some third-party content or external links 
                    may not meet our accessibility standards. We are working to identify and address these areas.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Testing and Evaluation
            </h2>
            <p className="mb-6">
              Our website is regularly tested for accessibility using a combination of automated tools and manual testing. 
              We use screen readers, keyboard navigation, and other assistive technologies to ensure our content is accessible.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Feedback and Support
            </h2>
            <p className="mb-6">
              We welcome feedback on the accessibility of our website. If you experience any accessibility barriers 
              or have suggestions for improvement, please contact us:
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <h3 className="font-semibold text-blue-900 mb-3">Contact Information</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• Phone: <a href="tel:0800-123-4567" className="underline hover:text-blue-600">0800-123-4567</a></li>
                <li>• Email: <a href="mailto:accessibility@locksmithyorkshire.co.uk" className="underline hover:text-blue-600">accessibility@locksmithyorkshire.co.uk</a></li>
                <li>• Address: 123 Security Street, Leeds, LS1 1AA</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Continuous Improvement
            </h2>
            <p className="mb-6">
              We are committed to continuously improving the accessibility of our website. We regularly review our 
              accessibility practices and update our site based on user feedback and evolving accessibility standards.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Alternative Access
            </h2>
            <p className="mb-6">
              If you continue to experience accessibility issues with our website, we offer alternative ways to access our services:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Phone support for all services</li>
              <li>In-person consultations</li>
              <li>Email correspondence</li>
              <li>Alternative document formats upon request</li>
            </ul>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start">
                <InformationCircleIcon className="h-6 w-6 text-gray-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Last Updated</h3>
                  <p className="text-gray-700">
                    This accessibility statement was last updated on December 15, 2024. 
                    We review and update this statement regularly to reflect our ongoing commitment to accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600">
                Thank you for helping us make our website more accessible to everyone.
              </p>
              <div className="text-center mt-4">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
