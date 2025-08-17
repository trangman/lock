'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const faqData: FAQItem[] = [
  {
    question: "What should I do if I'm locked out of my house?",
    answer: "First, don't panic. Check if you have any spare keys with neighbors or family. If not, call our emergency locksmith service immediately. We'll be there within 15 minutes to help you get back inside safely and professionally. Learn more about <a href='/blog/emergency-lockout-what-to-do' className='text-blue-600 hover:text-blue-700 underline'>emergency lockout procedures</a> in our detailed guide.",
    category: "Emergency"
  },
  {
    question: "How quickly can you respond to emergency calls?",
    answer: "We guarantee a 15-minute response time for emergency lockout situations across Yorkshire. Our team is available 24/7 and will prioritize your emergency to get you back inside as quickly as possible. View our <a href='/locksmith' className='text-blue-600 hover:text-blue-700 underline'>service coverage areas</a> to see where we operate.",
    category: "Emergency"
  },
  {
    question: "Are your locksmiths licensed and insured?",
    answer: "Yes, all our locksmiths are fully licensed, insured, and DBS checked. We're members of the Guild of Professional Locksmiths and maintain the highest standards of professionalism and security. Learn more about our <a href='#trust-badges' className='text-blue-600 hover:text-blue-700 underline'>professional standards and certifications</a>.",
    category: "Professional"
  },
  {
    question: "What areas do you cover in Yorkshire?",
    answer: "We cover all major cities and towns across Yorkshire including <a href='/locksmith/leeds' className='text-blue-600 hover:text-blue-700 underline'>Leeds</a>, <a href='/locksmith/sheffield' className='text-blue-600 hover:text-blue-700 underline'>Sheffield</a>, <a href='/locksmith/bradford' className='text-blue-600 hover:text-blue-700 underline'>Bradford</a>, <a href='/locksmith/hull' className='text-blue-600 hover:text-blue-700 underline'>Hull</a>, <a href='/locksmith/york' className='text-blue-600 hover:text-blue-700 underline'>York</a>, Wakefield, Halifax, Huddersfield, Doncaster, Rotherham, and Barnsley. We operate within a 50-mile radius of Leeds city centre. <a href='/locksmith' className='text-blue-600 hover:text-blue-700 underline'>View all our service areas</a>. Check <a href='https://www.police.uk/' target='_blank' className='text-blue-600 hover:text-blue-700 underline'>local crime statistics</a> for your area.",
    category: "Service Area"
  },
  {
    question: "Do you offer 24/7 emergency services?",
    answer: "Absolutely! Our emergency locksmith service is available 24 hours a day, 7 days a week, including weekends and bank holidays. We understand that lockouts don't wait for business hours. <a href='#services' className='text-blue-600 hover:text-blue-700 underline'>View our emergency services</a>.",
    category: "Emergency"
  },
  {
    question: "What types of locks can you work with?",
    answer: "We're experts in all types of locks including mortise locks, cylinder locks, padlocks, smart locks, automotive locks, and high-security locks. We can install, repair, replace, or upgrade any lock system. Read our guide on <a href='/blog/choosing-right-security-locks-home' className='text-blue-600 hover:text-blue-700 underline'>choosing the right security locks for your home</a>.",
    category: "Services"
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is transparent and competitive. Emergency callouts start from £45, residential services from £35, and commercial services from £55. We'll always provide a clear quote before starting any work. <a href='#services' className='text-blue-600 hover:text-blue-700 underline'>View our service pricing</a>.",
    category: "Pricing"
  },
  {
    question: "Can you help with car lockouts?",
    answer: "Yes, we provide comprehensive automotive locksmith services including car lockouts, key replacement, transponder key programming, and ignition repairs. We work with all vehicle makes and models. Learn more about <a href='/blog/car-lockout-solutions-prevention-emergency' className='text-blue-600 hover:text-blue-700 underline'>car lockout solutions and prevention</a>.",
    category: "Automotive"
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(index);
    }
  };



  return (
    <section 
      className="py-16 bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            id="faq-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get quick answers to common questions about our locksmith services. Can&apos;t find what you&apos;re looking for? Call us anytime for immediate assistance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map(({ question, answer }, index) => {
            const isOpen = openItems.has(index);
            const itemId = `faq-item-${index}`;
            const contentId = `faq-content-${index}`;
            
            return (
              <div 
                key={index}
                className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                role="region"
                aria-labelledby={itemId}
              >
                <button
                  id={itemId}
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:bg-blue-50 rounded-xl transition-all duration-200"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  aria-describedby={`faq-description-${index}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {question}
                    </span>
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center transition-all duration-200 group-hover:bg-blue-100">
                      {isOpen ? (
                        <ChevronUpIcon 
                          className="h-5 w-5 text-blue-600 transition-transform duration-200" 
                          aria-hidden="true"
                          aria-label="Collapse answer"
                        />
                      ) : (
                        <ChevronDownIcon 
                          className="h-5 w-5 text-blue-600 transition-transform duration-200" 
                          aria-hidden="true"
                          aria-label="Expand answer"
                        />
                      )}
                    </div>
                  </div>
                  <p 
                    id={`faq-description-${index}`}
                    className="sr-only"
                  >
                    Click to {isOpen ? 'hide' : 'show'} the answer to this question
                  </p>
                </button>
                
                {isOpen && (
                  <div 
                    id={contentId}
                    className="px-6 pb-6 animate-slideDown"
                    role="region"
                    aria-labelledby={itemId}
                  >
                    <div className="pt-2">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-4"></div>
                                                 <div 
                             className="text-gray-700 leading-relaxed text-base prose prose-sm max-w-none"
                             dangerouslySetInnerHTML={{ __html: answer }}
                           />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-gray-700 mb-6 text-lg font-medium">
              Still have questions? We&apos;re here to help 24/7
            </p>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_EMERGENCY_PHONE || '0800-123-4567'}`}
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              aria-label="Call emergency locksmith service"
            >
              Call Now for Help
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
