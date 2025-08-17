'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Track Core Web Vitals
    const trackWebVitals = () => {
      // LCP (Largest Contentful Paint)
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              const lcp = lastEntry.startTime;
              console.log('LCP:', lcp);
              
              // Send to analytics service here
              if (typeof gtag !== 'undefined') {
                gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'LCP',
                  value: Math.round(lcp),
                  non_interaction: true,
                });
              }
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.warn('LCP tracking failed:', e);
        }

        // FID (First Input Delay)
        try {
          const fidObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry: any) => {
              const fid = entry.processingStart - entry.startTime;
              console.log('FID:', fid);
              
              if (typeof gtag !== 'undefined') {
                gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'FID',
                  value: Math.round(fid),
                  non_interaction: true,
                });
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.warn('FID tracking failed:', e);
        }

        // CLS (Cumulative Layout Shift)
        try {
          const clsObserver = new PerformanceObserver((entryList) => {
            let clsValue = 0;
            const entries = entryList.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log('CLS:', clsValue);
            
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000) / 1000,
                non_interaction: true,
              });
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS tracking failed:', e);
        }

        // INP (Interaction to Next Paint) - New Core Web Vital
        try {
          const inpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry: any) => {
              const inp = entry.processingEnd - entry.startTime;
              console.log('INP:', inp);
              
              if (typeof gtag !== 'undefined') {
                gtag('event', 'web_vitals', {
                  event_category: 'Web Vitals',
                  event_label: 'INP',
                  value: Math.round(inp),
                  non_interaction: true,
                });
              }
            });
          });
          inpObserver.observe({ entryTypes: ['interaction'] });
        } catch (e) {
          console.warn('INP tracking failed:', e);
        }
      }
    };

    // Track page load performance
    const trackPageLoad = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const metrics = {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            ttfb: navigation.responseStart - navigation.requestStart,
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
            loadComplete: navigation.loadEventEnd - navigation.navigationStart,
            firstPaint: 0,
            firstContentfulPaint: 0,
          };
          
          // Get paint timing
          const paintEntries = performance.getEntriesByType('paint');
          paintEntries.forEach((entry) => {
            if (entry.name === 'first-paint') {
              metrics.firstPaint = entry.startTime;
            }
            if (entry.name === 'first-contentful-paint') {
              metrics.firstContentfulPaint = entry.startTime;
            }
          });
          
          console.log('Page Load Metrics:', metrics);
          
          // Send to analytics service here
          if (typeof gtag !== 'undefined') {
            gtag('event', 'page_load_metrics', {
              event_category: 'Performance',
              event_label: 'Page Load',
              value: Math.round(metrics.loadComplete),
              custom_parameters: {
                dns: Math.round(metrics.dns),
                tcp: Math.round(metrics.tcp),
                ttfb: Math.round(metrics.ttfb),
                fcp: Math.round(metrics.firstContentfulPaint),
              },
            });
          }
        }
      }
    };

    // Track resource loading performance
    const trackResources = () => {
      if ('performance' in window) {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter((resource: any) => resource.duration > 1000);
        
        if (slowResources.length > 0) {
          console.log('Slow Resources:', slowResources);
          
          // Send to analytics service here
          if (typeof gtag !== 'undefined') {
            gtag('event', 'slow_resources', {
              event_category: 'Performance',
              event_label: 'Slow Resources',
              value: slowResources.length,
              custom_parameters: {
                resources: slowResources.map((r: any) => r.name).join(','),
              },
            });
          }
        }

        // Track resource types
        const resourceTypes = resources.reduce((acc: any, resource: any) => {
          const type = resource.initiatorType || 'other';
          acc[type] = (acc[type] || 0) + 1;
          return acc;
        }, {});

        console.log('Resource Types:', resourceTypes);
      }
    };

    // Track memory usage (if available)
    const trackMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryInfo = {
          usedJSHeapSize: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
          totalJSHeapSize: Math.round(memory.totalJSHeapSize / 1024 / 1024), // MB
          jsHeapSizeLimit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024), // MB
        };
        
        console.log('Memory Usage:', memoryInfo);
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'memory_usage', {
            event_category: 'Performance',
            event_label: 'Memory',
            value: memoryInfo.usedJSHeapSize,
            custom_parameters: {
              total: memoryInfo.totalJSHeapSize,
              limit: memoryInfo.jsHeapSizeLimit,
            },
          });
        }
      }
    };

    // Track user interactions and engagement
    const trackEngagement = () => {
      let interactionCount = 0;
      let scrollDepth = 0;
      let timeOnPage = 0;
      const startTime = Date.now();

      const trackInteraction = () => {
        interactionCount++;
        if (interactionCount === 1) {
          console.log('First Interaction Detected');
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'first_interaction', {
              event_category: 'Engagement',
              event_label: 'First Interaction',
              value: Date.now() - startTime,
            });
          }
        }
      };

      const trackScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);
        
        if (scrollPercent > scrollDepth) {
          scrollDepth = scrollPercent;
          
          // Track scroll milestones
          if ([25, 50, 75, 90].includes(scrollPercent)) {
            console.log(`Scroll Depth: ${scrollPercent}%`);
            
            if (typeof gtag !== 'undefined') {
              gtag('event', 'scroll_depth', {
                event_category: 'Engagement',
                event_label: `Scroll ${scrollPercent}%`,
                value: scrollPercent,
              });
            }
          }
        }
      };

      // Track time on page
      const trackTimeOnPage = () => {
        timeOnPage = Date.now() - startTime;
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'time_on_page', {
            event_category: 'Engagement',
            event_label: 'Time on Page',
            value: Math.round(timeOnPage / 1000), // seconds
          });
        }
      };

      // Set up event listeners
      document.addEventListener('click', trackInteraction, { passive: true });
      document.addEventListener('keydown', trackInteraction, { passive: true });
      document.addEventListener('scroll', trackScroll, { passive: true });

      // Track time on page before user leaves
      window.addEventListener('beforeunload', trackTimeOnPage);
      window.addEventListener('pagehide', trackTimeOnPage);

      // Cleanup
      return () => {
        document.removeEventListener('click', trackInteraction);
        document.removeEventListener('keydown', trackInteraction);
        document.removeEventListener('scroll', trackScroll);
        window.removeEventListener('beforeunload', trackTimeOnPage);
        window.removeEventListener('pagehide', trackTimeOnPage);
      };
    };

    // Initialize tracking
    trackWebVitals();
    
    // Track page load when ready
    if (document.readyState === 'complete') {
      trackPageLoad();
      trackResources();
      trackMemory();
    } else {
      window.addEventListener('load', () => {
        trackPageLoad();
        trackResources();
        trackMemory();
      });
    }

    // Track engagement
    const cleanupEngagement = trackEngagement();

    // Cleanup
    return () => {
      cleanupEngagement();
    };
  }, []);

  // This component doesn't render anything
  return null;
}
