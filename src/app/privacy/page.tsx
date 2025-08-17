import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  LockClosedIcon, 
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Privacy Policy | Locksmith Yorkshire',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information when you use our locksmith services.',
  keywords: 'privacy policy, data protection, locksmith yorkshire, personal information',
  openGraph: {
    title: 'Privacy Policy | Locksmith Yorkshire',
    description: 'Our privacy policy explains how we collect, use, and protect your personal information when you use our locksmith services.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.locksmithyorkshire.co.uk/privacy',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Privacy Policy Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Privacy Policy',
            description: 'Our privacy policy explains how we collect, use, and protect your personal information when you use our locksmith services.',
            url: 'https://www.locksmithyorkshire.co.uk/privacy',
            publisher: {
              '@type': 'Organization',
              name: 'Locksmith Yorkshire',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.locksmithyorkshire.co.uk/locksmith-yorkshire400.png'
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
                name: 'Privacy Policy',
                item: 'https://www.locksmithyorkshire.co.uk/privacy'
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
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wide">Legal</span>
            <h1 className="font-bold mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
            <p className="mb-6 sm:mb-8 text-blue-100 max-w-4xl mx-auto text-lg sm:text-xl">
              How we collect, use, and protect your personal information
            </p>
            <div className="flex items-center justify-center text-sm text-blue-200">
              <CalendarIcon className="h-4 w-4 mr-2" />
              <span>Last updated: December 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Important Notice</h3>
              <p className="text-blue-800">
                This privacy policy explains how Locksmith Yorkshire collects, uses, and protects your personal information. 
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-3" />
              Information We Collect
            </h2>
            
            <p className="mb-4">
              We collect information that you provide directly to us, as well as information we obtain automatically when you use our services:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information You Provide</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, phone number, email address, and postal address</li>
              <li><strong>Service Requests:</strong> Details about locksmith services you need</li>
              <li><strong>Payment Information:</strong> Payment method and billing details</li>
              <li><strong>Emergency Information:</strong> Location and urgency details for emergency services</li>
              <li><strong>Feedback:</strong> Reviews, comments, and service evaluations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Information We Collect Automatically</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Website Usage:</strong> Pages visited, time spent, and navigation patterns</li>
              <li><strong>Device Information:</strong> IP address, browser type, and device identifiers</li>
              <li><strong>Location Data:</strong> General location information for service area verification</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to improve your experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <EyeIcon className="h-6 w-6 text-blue-600 mr-3" />
              How We Use Your Information
            </h2>
            
            <p className="mb-4">
              We use the information we collect for the following purposes:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Service Provision:</strong> To provide locksmith services and respond to your requests</li>
              <li><strong>Communication:</strong> To contact you about appointments, quotes, and service updates</li>
              <li><strong>Emergency Response:</strong> To respond quickly to emergency lockout situations</li>
              <li><strong>Payment Processing:</strong> To process payments and maintain financial records</li>
              <li><strong>Service Improvement:</strong> To improve our services and customer experience</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and regulations</li>
              <li><strong>Marketing:</strong> To send relevant information about our services (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <LockClosedIcon className="h-6 w-6 text-blue-600 mr-3" />
              How We Protect Your Information
            </h2>
            
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Measures</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Data Encryption:</strong> All sensitive data is encrypted during transmission and storage</li>
              <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
              <li><strong>Secure Storage:</strong> Information stored in secure, password-protected systems</li>
              <li><strong>Regular Updates:</strong> Security systems and protocols are regularly updated</li>
              <li><strong>Staff Training:</strong> All staff are trained on data protection and privacy practices</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h3>
            <p className="mb-4">
              We retain your personal information only for as long as necessary:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Service Records:</strong> 7 years for financial and legal compliance</li>
              <li><strong>Contact Information:</strong> Until you request deletion or opt out</li>
              <li><strong>Marketing Data:</strong> Until you withdraw consent</li>
              <li><strong>Website Analytics:</strong> 26 months for Google Analytics data</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-3" />
              Information Sharing and Disclosure
            </h2>
            
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">When We May Share Information</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Service Providers:</strong> With trusted partners who help us provide services (e.g., payment processors)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Emergency Situations:</strong> When necessary to respond to emergency situations</li>
              <li><strong>Business Transfers:</strong> In connection with a business sale or merger (with notice)</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h3>
            <p className="mb-4">
              We use third-party services that may collect information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Google Analytics:</strong> Website usage analytics and performance monitoring</li>
              <li><strong>Payment Processors:</strong> Secure payment processing services</li>
              <li><strong>Communication Tools:</strong> SMS and email service providers</li>
              <li><strong>Hosting Services:</strong> Website hosting and security services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <EyeIcon className="h-6 w-6 text-blue-600 mr-3" />
              Your Rights and Choices
            </h2>
            
            <p className="mb-4">
              You have certain rights regarding your personal information:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Objection:</strong> Object to processing of your personal information</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Exercise Your Rights</h3>
            <p className="mb-4">
              To exercise any of these rights, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Phone:</strong> 0800-123-4567</li>
              <li><strong>Email:</strong> privacy@locksmithyorkshire.co.uk</li>
              <li><strong>Post:</strong> 123 Security Street, Leeds, LS1 1AA</li>
              <li><strong>Response Time:</strong> We will respond within 30 days of receiving your request</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <LockClosedIcon className="h-6 w-6 text-blue-600 mr-3" />
              Cookies and Tracking Technologies
            </h2>
            
            <p className="mb-4">
              We use cookies and similar technologies to improve your experience:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Cookies We Use</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Deliver relevant advertisements (with consent)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Managing Cookies</h3>
            <p className="mb-4">
              You can control cookies through your browser settings:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
              <li><strong>Opt-Out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
              <li><strong>Third-Party Controls:</strong> Control third-party cookies through their settings</li>
              <li><strong>Note:</strong> Disabling cookies may affect website functionality</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-3" />
              Children&apos;s Privacy
            </h2>
            
            <p className="mb-6">
              Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. 
              If you believe we have collected information from a child under 16, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <EyeIcon className="h-6 w-6 text-blue-600 mr-3" />
              International Data Transfers
            </h2>
            
            <p className="mb-6">
              Your personal information is processed and stored in the United Kingdom. If you are located outside the UK, 
              please be aware that your information may be transferred to and processed in the UK, where data protection laws may differ.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <LockClosedIcon className="h-6 w-6 text-blue-600 mr-3" />
              Changes to This Privacy Policy
            </h2>
            
            <p className="mb-4">
              We may update this privacy policy from time to time:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Notification:</strong> We will notify you of significant changes via email or website notice</li>
              <li><strong>Review:</strong> We encourage you to review this policy periodically</li>
              <li><strong>Effective Date:</strong> Changes become effective immediately upon posting</li>
              <li><strong>Continued Use:</strong> Continued use of our services constitutes acceptance of changes</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheckIcon className="h-6 w-6 text-blue-600 mr-3" />
              Contact Information
            </h2>
            
            <p className="mb-4">
              If you have questions about this privacy policy or our data practices, please contact us:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <PhoneIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Phone
                  </h4>
                  <p className="text-gray-700">0800-123-4567</p>
                  <p className="text-sm text-gray-500">Available 24/7 for emergency calls</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Email
                  </h4>
                  <p className="text-gray-700">privacy@locksmithyorkshire.co.uk</p>
                  <p className="text-sm text-gray-500">For privacy-related inquiries</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Postal Address</h4>
                <p className="text-gray-700">
                  Locksmith Yorkshire<br />
                  123 Security Street<br />
                  Leeds, LS1 1AA<br />
                  United Kingdom
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complaints</h2>
            
            <p className="mb-4">
              If you have concerns about how we handle your personal information, you have the right to make a complaint:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Internal Review:</strong> Contact us first to resolve your concerns</li>
              <li><strong>Information Commissioner&apos;s Office:</strong> Make a complaint to the UK data protection authority</li>
              <li><strong>ICO Contact:</strong> ico.org.uk or 0303 123 1113</li>
              <li><strong>Response Time:</strong> We aim to resolve complaints within 30 days</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Basis for Processing</h2>
            
            <p className="mb-4">
              We process your personal information based on the following legal grounds:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Contract Performance:</strong> To provide locksmith services you request</li>
              <li><strong>Legitimate Interest:</strong> To improve services and prevent fraud</li>
              <li><strong>Legal Obligation:</strong> To comply with legal and regulatory requirements</li>
              <li><strong>Consent:</strong> For marketing communications and optional services</li>
              <li><strong>Vital Interest:</strong> To respond to emergency situations</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Need Help?</h3>
              <p className="text-blue-800 mb-4">
                If you have any questions about our privacy policy or need assistance with your data rights, 
                please don&apos;t hesitate to contact us. We&apos;re here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0800-123-4567"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Call Us
                </a>
                <a
                  href="mailto:privacy@locksmithyorkshire.co.uk"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  Email Us
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>
            
            <p className="mb-4">
              This privacy policy demonstrates our commitment to protecting your personal information and respecting your privacy rights. 
              We are committed to transparency and will always be clear about how we use your information.
            </p>
            
            <p className="mb-8">
              By using our locksmith services, you acknowledge that you have read and understood this privacy policy. 
              If you do not agree with any part of this policy, please do not use our services.
            </p>

            <div className="border-t border-gray-200 pt-8 mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="/"
                  className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Home</h4>
                  <p className="text-gray-600 text-sm">Return to our homepage</p>
                </Link>
                <Link 
                  href="/contact"
                  className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
                  <p className="text-gray-600 text-sm">Get in touch with our team</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
