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
    answer: "First, don't panic. Check if you have any spare keys with neighbors or family. If not, call our emergency locksmith service immediately. We'll be there within 15 minutes to help you get back inside safely and professionally.",
    category: "Emergency"
  },
  {
    question: "How quickly can you respond to emergency calls?",
    answer: "We guarantee a 15-minute response time for emergency lockout situations across Yorkshire. Our team is available 24/7 and will prioritize your emergency to get you back inside as quickly as possible.",
    category: "Emergency"
  },
  {
    question: "Are your locksmiths licensed and insured?",
    answer: "Yes, all our locksmiths are fully licensed, insured, and DBS checked. We're members of the Guild of Professional Locksmiths and maintain the highest standards of professionalism and security.",
    category: "Professional"
  },
  {
    question: "What areas do you cover in Yorkshire?",
    answer: "We cover all major cities and towns across Yorkshire including Leeds, Sheffield, Bradford, Hull, York, Wakefield, Halifax, Huddersfield, Doncaster, Rotherham, and Barnsley. We operate within a 50-mile radius of Leeds city centre.",
    category: "Service Area"
  },
  {
    question: "Do you offer 24/7 emergency services?",
    answer: "Absolutely! Our emergency locksmith service is available 24 hours a day, 7 days a week, including weekends and bank holidays. We understand that lockouts don't wait for business hours.",
    category: "Emergency"
  },
  {
    question: "What types of locks can you work with?",
    answer: "We're experts in all types of locks including mortise locks, cylinder locks, padlocks, smart locks, automotive locks, and high-security locks. We can install, repair, replace, or upgrade any lock system.",
    category: "Services"
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is transparent and competitive. Emergency callouts start from £45, residential services from £35, and commercial services from £55. We'll always provide a clear quote before starting any work.",
    category: "Pricing"
  },
  {
    question: "Can you help with car lockouts?",
    answer: "Yes, we provide comprehensive automotive locksmith services including car lockouts, key replacement, transponder key programming, and ignition repairs. We work with all vehicle makes and models.",
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

  const groupedFAQs = faqData.reduce((acc, item, index) => {
    const category = item.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ ...item, index });
    return acc;
  }, {} as Record<string, (FAQItem & { index: number })[]>);

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

        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(groupedFAQs).map(([category, items]) => (
            <div key={category} className="bg-white rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-900 px-6 py-4 border-b bg-gray-50 rounded-t-lg">
                {category} Questions
              </h3>
              <div className="divide-y divide-gray-200">
                {items.map(({ question, answer, index }) => {
                  const isOpen = openItems.has(index);
                  const itemId = `faq-item-${index}`;
                  const contentId = `faq-content-${index}`;
                  
                  return (
                    <div 
                      key={index}
                      className="relative"
                      role="region"
                      aria-labelledby={itemId}
                    >
                      <button
                        id={itemId}
                        onClick={() => toggleItem(index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset focus:bg-blue-50"
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        aria-describedby={`faq-description-${index}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-medium text-gray-900">
                            {question}
                          </span>
                          <span className="ml-6 flex-shrink-0">
                            {isOpen ? (
                              <ChevronUpIcon 
                                className="h-5 w-5 text-blue-600" 
                                aria-hidden="true"
                                aria-label="Collapse answer"
                              />
                            ) : (
                              <ChevronDownIcon 
                                className="h-5 w-5 text-gray-400" 
                                aria-hidden="true"
                                aria-label="Expand answer"
                              />
                            )}
                          </span>
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
                          className="px-6 pb-4"
                          role="region"
                          aria-labelledby={itemId}
                        >
                          <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed">
                              {answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help 24/7
          </p>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_EMERGENCY_PHONE || '0800-123-4567'}`}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            aria-label="Call emergency locksmith service"
          >
            Call Now for Help
          </a>
        </div>
      </div>
    </section>
  );
}
