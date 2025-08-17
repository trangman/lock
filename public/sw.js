const CACHE_NAME = 'locksmith-yorkshire-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';
const IMAGE_CACHE = 'images-v2';

// Static assets to cache immediately
const STATIC_URLS = [
  '/',
  '/locksmith',
  '/blog',
  '/locksmith-yorkshire400.png',
  '/headers/default.webp',
  '/manifest.json',
  '/favicon.ico',
];

// Dynamic routes to cache on first visit
const DYNAMIC_ROUTES = [
  '/locksmith/leeds',
  '/locksmith/sheffield',
  '/locksmith/bradford',
  '/locksmith/hull',
  '/locksmith/york',
  '/blog/emergency-lockout-what-to-do',
  '/blog/choosing-right-security-locks-home',
  '/blog/car-lockout-solutions-prevention-emergency',
];

// Image patterns to cache
const IMAGE_PATTERNS = [
  /\/headers\/.*\.(webp|jpg|jpeg|png)$/,
  /\/locksmith-yorkshire.*\.(png|jpg|jpeg|webp)$/,
];

// Install event - cache static resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('Opened static cache');
        return cache.addAll(STATIC_URLS);
      }),
      caches.open(DYNAMIC_CACHE).then((cache) => {
        console.log('Opened dynamic cache');
        return cache.addAll(DYNAMIC_ROUTES);
      }),
      caches.open(IMAGE_CACHE).then((cache) => {
        console.log('Opened image cache');
        return cache.addAll([
          '/headers/default.webp',
          '/locksmith-yorkshire400.png',
        ]);
      }),
    ])
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (isImageRequest(request)) {
    event.respondWith(handleImageRequest(request));
  } else if (isStaticRequest(request)) {
    event.respondWith(handleStaticRequest(request));
  } else if (isDynamicRequest(request)) {
    event.respondWith(handleDynamicRequest(request));
  } else {
    event.respondWith(handleApiRequest(request));
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE].includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/locksmith-yorkshire400.png',
      badge: '/locksmith-yorkshire400.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1,
      },
      actions: [
        {
          action: 'explore',
          title: 'View Services',
          icon: '/locksmith-yorkshire400.png',
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/locksmith-yorkshire400.png',
        },
      ],
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Helper functions
function isImageRequest(request) {
  return request.destination === 'image' || 
         IMAGE_PATTERNS.some(pattern => pattern.test(request.url));
}

function isStaticRequest(request) {
  return STATIC_URLS.includes(url.pathname) || 
         request.destination === 'document' && STATIC_URLS.includes(url.pathname);
}

function isDynamicRequest(request) {
  return DYNAMIC_ROUTES.includes(url.pathname) ||
         url.pathname.startsWith('/locksmith/') ||
         url.pathname.startsWith('/blog/');
}

async function handleImageRequest(request) {
  const cache = await caches.open(IMAGE_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a fallback image if available
    const fallbackResponse = await cache.match('/headers/default.webp');
    if (fallbackResponse) {
      return fallbackResponse;
    }
    throw error;
  }
}

async function handleStaticRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return offline page for static requests
    const offlineResponse = await cache.match('/');
    if (offlineResponse) {
      return offlineResponse;
    }
    throw error;
  }
}

async function handleDynamicRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    // Return cached version immediately, then update in background
    event.waitUntil(updateCache(request, cache));
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a generic page for dynamic requests
    const fallbackResponse = await cache.match('/locksmith');
    if (fallbackResponse) {
      return fallbackResponse;
    }
    throw error;
  }
}

async function handleApiRequest(request) {
  try {
    const networkResponse = await fetch(request);
    return networkResponse;
  } catch (error) {
    // For API requests, just fail gracefully
    throw error;
  }
}

async function updateCache(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse);
    }
  } catch (error) {
    console.log('Failed to update cache for:', request.url);
  }
}

async function doBackgroundSync() {
  // Handle offline form submissions
  try {
    const offlineData = await getOfflineData();
    if (offlineData.length > 0) {
      await processOfflineData(offlineData);
      await clearOfflineData();
    }
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

async function getOfflineData() {
  // Implementation for getting stored offline data
  return [];
}

async function processOfflineData(data) {
  // Implementation for processing offline data
  return Promise.resolve();
}

async function clearOfflineData() {
  // Implementation for clearing processed offline data
  return Promise.resolve();
}
