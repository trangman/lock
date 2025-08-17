import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Locksmith Yorkshire - Professional Locksmith Services',
    short_name: 'Locksmith Yorkshire',
    description: '24/7 emergency locksmith services across Yorkshire. Professional, licensed, and insured locksmiths.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1e3a8a',
    theme_color: '#1e3a8a',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['business', 'professional', 'security', 'utilities'],
    display_override: ['standalone', 'minimal-ui'],
    
    icons: [
      {
        src: '/locksmith-yorkshire400.png',
        sizes: '400x48',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/locksmith-yorkshire400.png',
        sizes: '400x48',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    
    screenshots: [
      {
        src: '/screenshots/homepage.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Homepage of Locksmith Yorkshire',
      },
      {
        src: '/screenshots/mobile-homepage.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Mobile Homepage of Locksmith Yorkshire',
      },
    ],
    
    shortcuts: [
      {
        name: 'Emergency Call',
        short_name: 'Emergency',
        description: 'Call emergency locksmith services',
        url: '/?emergency=true',
        icons: [
          {
            src: '/icons/emergency.png',
            sizes: '96x96',
          },
        ],
      },
      {
        name: 'Book Service',
        short_name: 'Book',
        description: 'Book a locksmith service',
        url: '/?service=booking',
        icons: [
          {
            src: '/icons/booking.png',
            sizes: '96x96',
          },
        ],
      },
      {
        name: 'Find Locations',
        short_name: 'Locations',
        description: 'Find locksmith services near you',
        url: '/locksmith',
        icons: [
          {
            src: '/icons/location.png',
            sizes: '96x96',
          },
        ],
      },
    ],
    
    related_applications: [],
    prefer_related_applications: false,
    
    // Additional PWA features
    edge_side_panel: {
      preferred_width: 400,
    },
    
    // File handlers for PWA
    file_handlers: [
      {
        action: '/open-file',
        accept: {
          'text/plain': ['.txt'],
          'application/pdf': ['.pdf'],
        },
      },
    ],
    
    // Protocol handlers
    protocol_handlers: [
      {
        protocol: 'tel',
        url: '/call?number=%s',
      },
      {
        protocol: 'mailto',
        url: '/contact?email=%s',
      },
    ],
    
    // Share target for PWA
    share_target: {
      action: '/share',
      method: 'POST',
      enctype: 'multipart/form-data',
      params: {
        title: 'title',
        text: 'text',
        url: 'url',
        files: [
          {
            name: 'files',
            accept: ['image/*', 'text/*'],
          },
        ],
      },
    },
    
    // Launch handler for better app-like experience
    launch_handler: {
      client_mode: 'navigate-existing',
    },
    
    // Handle links for better navigation
    handle_links: 'preferred',
    
    // Capture links for better PWA experience
    capture_links: 'new-client',
    
    // Better app experience
    prefer_related_applications: false,
    
    // Additional metadata
    iarc_rating_id: 'e84b072d-71b3-4d3e-86ae-31a8ce4e53b7',
    
    // Better mobile experience
    mobile_web_app_capable: true,
    mobile_web_app_status_bar_style: 'default',
    
    // Apple specific
    apple_mobile_web_app_capable: true,
    apple_mobile_web_app_status_bar_style: 'default',
    apple_mobile_web_app_title: 'Locksmith Yorkshire',
    
    // Microsoft specific
    msapplication_TileColor: '#1e3a8a',
    msapplication_TileImage: '/icons/icon-144x144.png',
    msapplication_config: '/browserconfig.xml',
  };
}
