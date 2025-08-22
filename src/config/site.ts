export const siteConfig = {
  company: {
    name: 'Locksmith Yorkshire',
    fullName: 'Locksmith Yorkshire - Professional Locksmith Services',
    tagline: '24/7 Emergency Locksmith Services Across Yorkshire',
    description: 'Professional, licensed, and insured locksmith services available 24/7 across Yorkshire. Emergency lockout, residential, commercial, and automotive locksmith services.',
    founded: '2010',
    employees: '25+',
    certifications: ['DBS Checked', 'Licensed', 'Insured', 'Guild of Professional Locksmiths'],
    awards: ['Best Locksmith Yorkshire 2023', 'Customer Service Excellence'],
  },

  contact: {
    general: {
      phone: '0800-123-4567',
      email: 'info@locksmithyorkshire.co.uk',
      website: 'https://www.locksmithyorkshire.co.uk',
    },
    emergency: {
      phone: '0800-123-4567',
      available: '24/7',
      response: '15 minutes',
    },
    address: {
      street: '123 Security Street',
      city: 'Leeds',
      county: 'Yorkshire',
      postcode: 'LS1 1AA',
      country: 'United Kingdom',
    },
    hours: {
      emergency: '24/7',
      business: 'Monday - Friday: 8:00 AM - 6:00 PM',
      weekend: 'Saturday - Sunday: 9:00 AM - 5:00 PM',
    },
  },

  services: {
    emergency: {
      name: 'Emergency Locksmith',
      description: '24/7 emergency lockout services for homes, businesses, and vehicles',
      response: '15 minutes',
      available: '24/7',
      price: 'From £45',
    },
    residential: {
      name: 'Residential Locksmith',
      description: 'Complete home security solutions including lock installation and repair',
      response: '30 minutes',
      available: '8:00 AM - 6:00 PM',
      price: 'From £35',
    },
    commercial: {
      name: 'Commercial Locksmith',
      description: 'Professional security solutions for businesses and commercial properties',
      response: '1 hour',
      available: '8:00 AM - 6:00 PM',
      price: 'From £55',
    },
    automotive: {
      name: 'Automotive Locksmith',
      description: 'Car lockout services, key replacement, and automotive security',
      response: '20 minutes',
      available: '24/7',
      price: 'From £40',
    },
    security: {
      name: 'Security Systems',
      description: 'Advanced security systems, CCTV, and access control',
      response: '2 hours',
      available: '8:00 AM - 6:00 PM',
      price: 'From £150',
    },
    keycutting: {
      name: 'Key Cutting Services',
      description: 'Professional key cutting, duplication, and replacement services',
      response: '30 minutes',
      available: '8:00 AM - 6:00 PM',
      price: 'From £3',
    },
  },

  areas: {
    primary: ['Leeds', 'Sheffield', 'Bradford', 'Hull', 'York'],
    secondary: ['Wakefield', 'Halifax', 'Huddersfield', 'Doncaster', 'Rotherham'],
    coverage: '50-mile radius from Leeds city centre',
    counties: ['West Yorkshire', 'South Yorkshire', 'North Yorkshire', 'East Riding of Yorkshire'],
  },

  social: {
    facebook: 'https://www.facebook.com/locksmithyorkshire',
    twitter: 'https://www.twitter.com/locksmithyorks',
    instagram: 'https://www.instagram.com/locksmithyorkshire',
    linkedin: 'https://www.linkedin.com/company/locksmith-yorkshire',
    youtube: 'https://www.youtube.com/channel/locksmithyorkshire',
    google: 'https://www.google.com/maps/place/locksmith-yorkshire',
  },

  professionalStandards: [
    'DBS Checked Staff',
    'Licensed & Insured',
    'Guild of Professional Locksmiths Member',
    'ISO 9001 Quality Management',
    '24/7 Emergency Response',
    '15-Minute Response Time',
    '1000+ Happy Customers',
    '5-Star Rated Service',
  ],

  leadGen: {
    primary: 'Emergency lockout services',
    secondary: 'Security system installation',
    tertiary: 'Lock repair and replacement',
    form: {
      fields: ['name', 'phone', 'email', 'service', 'location', 'urgency'],
      required: ['name', 'phone', 'service', 'location'],
    },
  },

  // Enhanced SEO & Meta
  seo: {
    title: "Emergency Locksmith Near Me Yorkshire - 24 Hour Locksmith Leeds West Yorkshire",
    description: "Emergency locksmith near me Yorkshire ✓ 24 hour locksmith Leeds West Yorkshire ✓ Car lockout service Sheffield ✓ UPVC door lock repair ✓ Yale lock installation Wakefield ✓ Commercial locksmith Hull ✓ Landlord lock change service ✓ Smart lock fitting York. Licensed, insured, 15min response.",
    keywords: "emergency locksmith near me yorkshire, 24 hour locksmith leeds west yorkshire, car lockout service sheffield yorkshire, upvc door lock repair yorkshire, lock change service bradford yorkshire, yale lock installation wakefield yorkshire, broken key extraction doncaster yorkshire, commercial locksmith services hull yorkshire, smart lock fitting york north yorkshire, landlord lock change service yorkshire, emergency locksmith yorkshire, locksmith leeds, locksmith sheffield, locksmith bradford, locksmith hull, locksmith york, emergency lockout service, car locksmith, house lockout, locksmith near me, residential locksmith, commercial locksmith, automotive locksmith, security systems, lock repair, key replacement, yorkshire locksmith, professional locksmith, licensed locksmith, insured locksmith, dbs checked locksmith",
    author: "Locksmith Yorkshire",
    ogTitle: "Emergency Locksmith Yorkshire - 24/7 Lockout Service",
    ogDescription: "24/7 emergency locksmith services across Yorkshire. Locked out? We'll be there in 15 minutes! Professional, licensed, insured locksmith services.",
    ogType: "website" as const,
    twitterTitle: "Emergency Locksmith Yorkshire - 24/7 Lockout Service",
    twitterDescription: "24/7 emergency locksmith services across Yorkshire. Professional, licensed, insured locksmith services.",
    canonical: "https://www.locksmithyorkshire.co.uk/",
    alternateLanguages: {
      'en-GB': 'https://www.locksmithyorkshire.co.uk/',
    },
    structuredData: {
      organization: {
        type: 'Organization',
        name: 'Locksmith Yorkshire',
        url: 'https://www.locksmithyorkshire.co.uk/',
        logo: 'https://www.locksmithyorkshire.co.uk/locksmith-yorkshire400.png',
        contactPoint: {
          type: 'ContactPoint',
          telephone: '0800-123-4567',
          contactType: 'customer service',
          areaServed: 'GB',
          availableLanguage: 'English',
        },
      },
      localBusiness: {
        type: 'LocalBusiness',
        name: 'Locksmith Yorkshire',
        alternateName: 'Locksmith Yorkshire',
        url: 'https://www.locksmithyorkshire.co.uk/',
        telephone: '0800-123-4567',
        email: 'info@locksmithyorkshire.co.uk',
        address: {
          type: 'PostalAddress',
          addressRegion: 'Yorkshire',
          addressCountry: 'UK',
          addressLocality: 'Yorkshire',
        },
        geo: {
          type: 'GeoCoordinates',
          latitude: 53.8008,
          longitude: -1.5491,
        },
        areaServed: [
          'Leeds', 'Sheffield', 'Bradford', 'Hull', 'York', 'Wakefield', 
          'Halifax', 'Huddersfield', 'Doncaster', 'Rotherham', 'Barnsley'
        ],
        serviceArea: {
          type: 'GeoCircle',
          geoMidpoint: {
            type: 'GeoCoordinates',
            latitude: 53.8008,
            longitude: -1.5491,
          },
          geoRadius: '50000',
        },
        openingHours: ['Mo-Su 00:00-23:59'],
        priceRange: '££',
        paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
      },
    },
  },

  // Performance & Analytics
  analytics: {
    googleAnalytics: 'GTM-PHCW4M2L', // GTM ID (GA will be configured through GTM)
    googleTagManager: 'GTM-PHCW4M2L', // Your actual GTM ID
    facebookPixel: '', // Add if you have a Facebook Pixel ID
    hotjar: '', // Add if you have a Hotjar ID
    // Note: Individual tracking codes are configured through Google Tag Manager
  },

  // Content Strategy
  content: {
    blog: {
      frequency: 'weekly',
      categories: ['Emergency Services', 'Home Security', 'Automotive', 'Commercial Security', 'Tips & Advice'],
      targetKeywords: ['locksmith tips', 'home security advice', 'emergency procedures', 'lock maintenance'],
    },
    localSEO: {
      cities: ['Leeds', 'Sheffield', 'Bradford', 'Hull', 'York', 'Wakefield', 'Halifax', 'Huddersfield', 'Doncaster', 'Rotherham', 'Barnsley'],
      services: ['emergency locksmith', 'residential locksmith', 'commercial locksmith', 'automotive locksmith', 'security systems', 'key cutting services'],
      keywords: ['locksmith near me', 'emergency locksmith leeds', 'locksmith sheffield', 'locksmith bradford'],
    },
  },

  // Technical SEO
  technical: {
    sitemap: 'https://www.locksmithyorkshire.co.uk/sitemap.xml',
    robots: 'https://www.locksmithyorkshire.co.uk/robots.txt',
    manifest: 'https://www.locksmithyorkshire.co.uk/manifest.json',
    serviceWorker: 'https://www.locksmithyorkshire.co.uk/sw.js',
    canonical: 'https://www.locksmithyorkshire.co.uk/',
    hreflang: {
      'en-GB': 'https://www.locksmithyorkshire.co.uk/',
    },
    structuredData: true,
    schemaMarkup: true,
    openGraph: true,
    twitterCards: true,
  },
};

// Helper function to get contact info
export const getContactInfo = () => siteConfig.contact;

// Helper function to get company info  
export const getCompanyInfo = () => siteConfig.company;

// Helper function to get services
export const getServices = () => siteConfig.services;

// Helper function to get professional standards
export const getProfessionalStandards = () => siteConfig.professionalStandards; 