'use client';
import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, UserIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  urgency: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function LeadCapture() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    urgency: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.location) {
      newErrors.location = 'Please select your location';
    }

    if (!formData.urgency) {
      newErrors.urgency = 'Please select urgency level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your API
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        location: '',
        urgency: '',
        message: ''
      });
      setErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.target instanceof HTMLElement) {
      const form = e.target.closest('form');
      if (form) {
        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton instanceof HTMLButtonElement) {
          submitButton.focus();
        }
      }
    }
  };

  return (
    <section 
      className="py-16 bg-white"
      aria-labelledby="lead-capture-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            id="lead-capture-heading"
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Get Your Free Quote Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Need a locksmith? Fill out the form below and we&apos;ll get back to you within 15 minutes with a competitive quote.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div 
                className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md"
                role="alert"
                aria-live="polite"
              >
                <p className="font-medium">Thank you! We&apos;ve received your request and will contact you within 15 minutes.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div 
                className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md"
                role="alert"
                aria-live="polite"
              >
                <p className="font-medium">Sorry, there was an error submitting your request. Please try again or call us directly.</p>
              </div>
            )}

            {/* Name and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`pl-10 pr-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                    required
                  />
                </div>
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`pl-10 pr-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    aria-invalid={!!errors.phone}
                    required
                  />
                </div>
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address <span className="text-gray-500">(Optional)</span>
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`pl-10 pr-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-invalid={!!errors.email}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Service and Location Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  htmlFor="service" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Needed <span className="text-red-500" aria-label="required">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.service ? 'border-red-300' : 'border-gray-300'
                  }`}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  aria-invalid={!!errors.service}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="emergency">Emergency Lockout</option>
                  <option value="residential">Residential Locksmith</option>
                  <option value="commercial">Commercial Locksmith</option>
                  <option value="automotive">Automotive Locksmith</option>
                  <option value="security">Security Systems</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label 
                  htmlFor="location" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Location <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`pl-10 pr-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.location ? 'border-red-300' : 'border-gray-300'
                    }`}
                    aria-describedby={errors.location ? 'location-error' : undefined}
                    aria-invalid={!!errors.location}
                    required
                  >
                    <option value="">Select your location</option>
                    <option value="leeds">Leeds</option>
                    <option value="sheffield">Sheffield</option>
                    <option value="bradford">Bradford</option>
                    <option value="hull">Hull</option>
                    <option value="york">York</option>
                    <option value="wakefield">Wakefield</option>
                    <option value="halifax">Halifax</option>
                    <option value="huddersfield">Huddersfield</option>
                    <option value="doncaster">Doncaster</option>
                    <option value="rotherham">Rotherham</option>
                    <option value="barnsley">Barnsley</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {errors.location && (
                  <p id="location-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.location}
                  </p>
                )}
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label 
                htmlFor="urgency" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Urgency Level <span className="text-red-500" aria-label="required">*</span>
              </label>
              <div className="relative">
                <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={(e) => handleInputChange('urgency', e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={`pl-10 pr-4 py-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.urgency ? 'border-red-300' : 'border-gray-300'
                  }`}
                  aria-describedby={errors.urgency ? 'urgency-error' : undefined}
                  aria-invalid={!!errors.urgency}
                  required
                >
                  <option value="">Select urgency level</option>
                  <option value="emergency">Emergency - Need help now</option>
                  <option value="urgent">Urgent - Within 2 hours</option>
                  <option value="today">Today - Flexible timing</option>
                  <option value="this-week">This week</option>
                  <option value="planning">Planning ahead</option>
                </select>
              </div>
              {errors.urgency && (
                <p id="urgency-error" className="mt-1 text-sm text-red-600" role="alert">
                  {errors.urgency}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label 
                htmlFor="message" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Additional Details <span className="text-gray-500">(Optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                onKeyDown={handleKeyDown}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us more about your locksmith needs..."
                aria-describedby="message-help"
              />
              <p id="message-help" className="mt-1 text-sm text-gray-500">
                Provide any additional information that might help us give you a better quote.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                <span className="text-red-500" aria-label="required">*</span> Required fields
              </p>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
                aria-describedby={isSubmitting ? 'submitting-status' : undefined}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Get Free Quote'
                )}
              </button>
            </div>

            {isSubmitting && (
              <p id="submitting-status" className="text-sm text-gray-600 text-center" aria-live="polite">
                Submitting your request...
              </p>
            )}

            {/* Privacy Notice */}
            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our{' '}
              <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </a>
              . We&apos;ll never share your information with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
} 