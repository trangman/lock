'use client';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
  keywords: string[];
}

const faqData: FAQItem[] = [
  {
    question: "How quickly can you respond to an emergency lockout?",
    answer: "We guarantee a 15-minute response time for emergency lockouts across Yorkshire. Our locksmiths are strategically located throughout the region to provide rapid emergency service.",
    keywords: ["emergency lockout", "quick response", "15 minute response", "emergency locksmith"]
  },
  {
    question: "What areas do you cover in Yorkshire?",
    answer: "We provide locksmith services across all of Yorkshire including Leeds, Sheffield, Bradford, Hull, York, Wakefield, Halifax, Huddersfield, Doncaster, Rotherham, Barnsley, Scarborough, Harrogate, and all surrounding areas.",
    keywords: ["locksmith yorkshire", "service areas", "leeds locksmith", "sheffield locksmith", "bradford locksmith"]
  },
  {
    question: "Are your locksmiths licensed and insured?",
    answer: "Yes, all our locksmiths are fully licensed, insured, and DBS checked. We maintain the highest professional standards and are members of recognized locksmith associations.",
    keywords: ["licensed locksmith", "insured locksmith", "DBS checked", "professional locksmith"]
  },
  {
    question: "What services do you offer?",
    answer: "We provide comprehensive locksmith services including emergency lockouts, residential and commercial security, lock installation and repair, key cutting, car locksmith services, and security consultations.",
    keywords: ["locksmith services", "emergency locksmith", "residential locksmith", "commercial locksmith", "car locksmith"]
  },
  {
    question: "Do you work 24/7?",
    answer: "Yes, we provide 24/7 emergency locksmith services. Whether you're locked out at 2 AM or need assistance on weekends, we're always available to help.",
    keywords: ["24 hour locksmith", "24/7 locksmith", "emergency locksmith", "overnight locksmith"]
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is competitive and transparent. Emergency callouts start from £45, with additional costs depending on the service required. We'll always provide a clear quote before starting any work.",
    keywords: ["locksmith prices", "locksmith cost", "emergency locksmith cost", "locksmith rates"]
  },
  {
    question: "Can you help with car lockouts?",
    answer: "Absolutely! We specialize in car lockouts and automotive locksmith services. We can help with locked keys in car, broken car keys, car key replacement, and all types of vehicle security issues.",
    keywords: ["car locksmith", "car lockout", "locked keys in car", "automotive locksmith", "car key replacement"]
  },
  {
    question: "What types of locks do you work with?",
    answer: "We work with all types of locks including traditional mortise locks, modern euro cylinders, smart locks, multi-point locks, padlocks, and high-security locks. We're experts in both residential and commercial security systems.",
    keywords: ["lock types", "mortise locks", "euro cylinders", "smart locks", "high security locks", "commercial locks"]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-gray-900 mb-4 fluid-section-title">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto fluid-subtitle">
            Get answers to the most common questions about our locksmith services
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
              >
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? Contact us directly for immediate assistance.
          </p>
          <a 
            href="tel:0800-123-4567" 
            className="inline-flex bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call Now: 0800-123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
