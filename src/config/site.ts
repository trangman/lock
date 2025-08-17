export const siteConfig = {
  // Company Information
  company: {
    name: "Locksmith Yorkshire",
    fullName: "Locksmith Yorkshire Professional Locksmith Services",
    tagline: "Professional locksmith services available 24/7 for all your security needs.",
    description: "Professional locksmith services in the UK. 24/7 emergency locksmith, residential and commercial security solutions. Fast, reliable, and trusted locksmith services.",
    founded: "2009",
    experience: "15+",
    customers: "1000+",
    responseTime: "15min",
  },

  // Contact Information
  contact: {
    emergency: {
      phone: "0800-123-4567",
      display: "0800-123-4567",
      label: "Emergency Hotline",
    },
    general: {
      phone: "020-1234-5678",
      email: "info@locksmithyorkshire.co.uk",
      website: "https://www.locksmithyorkshire.co.uk",
    },
    service: {
      hours: "24/7 Emergency Service",
      area: "North, East and West Yorkshire",
      responseTime: "15-minute response time",
    },
  },

  // Social Media
  social: {
    facebook: "https://facebook.com/locksmithyorkshire",
    twitter: "https://twitter.com/locksmithyorkshire",
    instagram: "https://instagram.com/locksmithyorkshire",
    linkedin: "https://linkedin.com/company/locksmithyorkshire",
  },

  // Services
  services: {
    emergency: {
      name: "Emergency Locksmith",
      description: "24/7 emergency locksmith services for lockouts, broken keys, and urgent security needs.",
      features: [
        "Locked out of home or car",
        "Broken key extraction", 
        "Emergency lock replacement",
        "15-minute response time"
      ],
      icon: "PhoneIcon",
      color: "red"
    },
    residential: {
      name: "Residential Locksmith",
      description: "Complete home security solutions including lock installation, repair, and upgrades.",
      features: [
        "Door lock installation",
        "Window lock fitting",
        "Security system upgrades",
        "Key duplication"
      ],
      icon: "HomeIcon",
      color: "blue"
    },
    commercial: {
      name: "Commercial Locksmith", 
      description: "Professional security solutions for businesses, offices, and commercial properties.",
      features: [
        "Access control systems",
        "Master key systems",
        "Security audits",
        "CCTV integration"
      ],
      icon: "BuildingOfficeIcon",
      color: "green"
    },
    installation: {
      name: "Lock Installation",
      description: "Professional installation of high-security locks and security systems.",
      features: [
        "High-security locks",
        "Smart locks",
        "Deadbolts",
        "Multi-point locks"
      ],
      icon: "LockClosedIcon",
      color: "purple"
    },
    keyCutting: {
      name: "Key Cutting",
      description: "Precision key cutting services for all types of keys and locks.",
      features: [
        "House keys",
        "Car keys", 
        "Office keys",
        "Transponder keys"
      ],
      icon: "KeyIcon",
      color: "yellow"
    },
    consultation: {
      name: "Security Consultation",
      description: "Expert security assessments and recommendations for your property.",
      features: [
        "Security audits",
        "Risk assessment",
        "Upgrade recommendations",
        "Maintenance plans"
      ],
      icon: "ShieldCheckIcon",
      color: "indigo"
    }
  },

  // Trust & Credentials
  trust: {
    badges: [
      {
        title: "Licensed & Insured",
        description: "Fully certified locksmiths",
        icon: "ShieldCheckIcon",
        color: "green"
      },
      {
        title: "15-Minute Response", 
        description: "Emergency service guarantee",
        icon: "ClockIcon",
        color: "blue"
      },
      {
        title: "4.9/5 Rating",
        description: "From 1000+ customers", 
        icon: "StarIcon",
        color: "yellow"
      },
      {
        title: "24/7 Available",
        description: "Always here when you need us",
        icon: "CheckBadgeIcon", 
        color: "purple"
      }
    ],
    professionalStandards: [
      "Professional Service",
      "Quality Assured", 
      "Customer Focused",
      "Reliable Service"
    ],
    testimonials: [
      {
        name: "Sarah M.",
        type: "Residential Customer",
        rating: 5,
        text: "Amazing service! They arrived within 10 minutes and fixed my lockout quickly. Very professional and reasonably priced."
      },
      {
        name: "David R.",
        type: "Commercial Customer", 
        rating: 5,
        text: "Used them for our office security upgrade. Excellent work, great communication, and competitive pricing. Highly recommend!"
      },
      {
        name: "Michael T.",
        type: "Emergency Customer",
        rating: 5, 
        text: "Emergency call at 2 AM and they were here in 12 minutes! Professional, courteous, and fixed everything perfectly."
      }
    ]
  },

  // SEO & Meta
  seo: {
    title: "Locksmith Yorkshire - Professional Locksmith Services",
    description: "Professional locksmith services in the UK. 24/7 emergency locksmith, residential and commercial security solutions. Fast, reliable, and trusted locksmith services.",
    keywords: "locksmith, emergency locksmith, residential locksmith, commercial locksmith, security, locks, keys",
    author: "Locksmith Yorkshire",
    ogTitle: "Locksmith Yorkshire - Professional Locksmith Services",
    ogDescription: "Professional locksmith services in the UK. 24/7 emergency locksmith, residential and commercial security solutions.",
    ogType: "website" as const
  },

  // Lead Generation
  leadGen: {
    exitIntent: {
      title: "Wait! Get Your Free Quote",
      subtitle: "Don't leave without getting a competitive quote for your locksmith needs",
      offer: "🎁 LIMITED TIME: Free security consultation + 10% off your first service"
    },
    chat: {
      welcomeMessage: "Hello! Welcome to Locksmith Yorkshire. How can we help you today?",
      responseMessage: "Thank you for your message. Our team will respond shortly. For urgent emergencies, please call us at 0800-123-4567."
    },
    advertise: {
      enabled: true,
      headline: "Advertise your locksmith business here",
      subheadline: "Own this city page or feature your business to get exclusive local leads.",
      pricingNote: "City sponsorship from £199/mo. Featured listings from £79/mo.",
      benefits: [
        "Exclusive or shared leads from high-intent local visitors",
        "Call tracking and form delivery to your CRM or WhatsApp",
        "Cancel anytime, transparent monthly reporting"
      ],
      gumroad: {
        citySponsorshipUrl: "https://gum.co/your-city-sponsorship", // Replace with your Gumroad product
        featuredListingUrl: "https://gum.co/your-featured-listing"   // Replace with your Gumroad product
      }
    }
  }
};

// Helper function to get contact info
export const getContactInfo = () => siteConfig.contact;

// Helper function to get company info  
export const getCompanyInfo = () => siteConfig.company;

// Helper function to get services
export const getServices = () => siteConfig.services;

// Helper function to get trust info
export const getTrustInfo = () => siteConfig.trust; 