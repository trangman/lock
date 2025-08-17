# Accessibility Testing Guide - Locksmith Yorkshire

This guide provides comprehensive testing procedures to ensure our website maintains WCAG 2.1 AA compliance and provides an excellent user experience for all users, including those with disabilities.

## 🎯 **WCAG 2.1 AA Compliance Checklist**

### **Perceivable**
- [ ] **Text Alternatives**: All images have descriptive alt text
- [ ] **Time-based Media**: Captions and transcripts for audio/video content
- [ ] **Adaptable**: Content can be presented in different ways without losing information
- [ ] **Distinguishable**: Text and images are easily distinguishable from background

### **Operable**
- [ ] **Keyboard Accessible**: All functionality available via keyboard
- [ ] **Enough Time**: Users have enough time to read and use content
- [ ] **Seizures**: Content doesn't cause seizures or physical reactions
- [ ] **Navigable**: Users can navigate and find content easily

### **Understandable**
- [ ] **Readable**: Text is readable and understandable
- [ ] **Predictable**: Pages operate in predictable ways
- [ ] **Input Assistance**: Users are helped to avoid and correct mistakes

### **Robust**
- [ ] **Compatible**: Content is compatible with current and future user tools

## 🧪 **Testing Procedures**

### **1. Automated Testing**

#### **Tools to Use:**
- **axe DevTools**: Browser extension for automated accessibility testing
- **WAVE**: Web Accessibility Evaluation Tool
- **Lighthouse**: Chrome DevTools accessibility audit
- **pa11y**: Command-line accessibility testing

#### **Automated Test Commands:**
```bash
# Install pa11y globally
npm install -g pa11y

# Test homepage
pa11y https://www.locksmithyorkshire.co.uk/

# Test with specific standards
pa11y --standard WCAG2AA https://www.locksmithyorkshire.co.uk/
```

### **2. Manual Testing**

#### **Keyboard Navigation Testing:**
1. **Tab Order**: Press Tab to navigate through all interactive elements
2. **Focus Indicators**: Ensure focus is clearly visible on all elements
3. **Skip Links**: Test skip-to-main-content functionality
4. **Menu Navigation**: Navigate dropdown menus with arrow keys
5. **Form Interaction**: Complete forms using only keyboard

#### **Screen Reader Testing:**
1. **NVDA (Windows)**: Free screen reader for Windows
2. **VoiceOver (Mac)**: Built-in screen reader for macOS
3. **JAWS**: Professional screen reader (if available)

#### **Test with Screen Readers:**
- Navigate through page headings (H1, H2, H3)
- Read form labels and error messages
- Test image descriptions
- Verify link purposes are clear

### **3. Visual Testing**

#### **Color Contrast:**
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **Tools**: WebAIM Contrast Checker, Stark Contrast Checker

#### **Focus Indicators:**
- All interactive elements must have visible focus
- Focus should be distinct from hover states
- Minimum 3:1 contrast ratio for focus indicators

#### **Text Size:**
- Test with browser zoom (200% minimum)
- Ensure text remains readable at all zoom levels
- Check for horizontal scrolling issues

### **4. Mobile Accessibility Testing**

#### **Touch Targets:**
- Minimum 44x44px touch targets
- Adequate spacing between interactive elements
- Test with different device sizes

#### **Orientation:**
- Test in both portrait and landscape modes
- Ensure content is accessible in both orientations

#### **Gesture Alternatives:**
- Provide alternatives to complex gestures
- Test with accessibility features enabled

## 🔍 **Common Issues to Check**

### **Images and Media:**
- [ ] All images have meaningful alt text
- [ ] Decorative images have empty alt="" or aria-hidden="true"
- [ ] Complex images have detailed descriptions
- [ ] Video content has captions or transcripts

### **Forms:**
- [ ] All form fields have associated labels
- [ ] Required fields are clearly marked
- [ ] Error messages are descriptive and helpful
- [ ] Form validation provides clear feedback

### **Navigation:**
- [ ] Skip links are functional and visible on focus
- [ ] Navigation menus are keyboard accessible
- [ ] Current page is clearly indicated
- [ ] Breadcrumbs are properly structured

### **Content Structure:**
- [ ] Heading hierarchy is logical (H1 → H2 → H3)
- [ ] Lists are properly marked up
- [ ] Tables have proper headers and captions
- [ ] Links have clear, descriptive text

## 📱 **Testing Checklist by Page Type**

### **Homepage:**
- [ ] Hero section has proper heading structure
- [ ] Call-to-action buttons are accessible
- [ ] Service cards are keyboard navigable
- [ ] Emergency contact information is prominent

### **Service Pages:**
- [ ] Service descriptions are clear and readable
- [ ] Contact forms are fully accessible
- [ ] Service areas are clearly defined
- [ ] Pricing information is accessible

### **Blog Pages:**
- [ ] Article headings follow proper hierarchy
- [ ] Content is readable and well-structured
- [ ] Navigation between articles is accessible
- [ ] Search functionality works with screen readers

### **Contact Pages:**
- [ ] All contact methods are accessible
- [ ] Forms have proper validation and error handling
- [ ] Contact information is clearly presented
- [ ] Emergency contact is prominently displayed

## 🛠️ **Development Best Practices**

### **HTML Structure:**
```html
<!-- Use semantic HTML elements -->
<main id="main-content" role="main">
  <section aria-labelledby="section-heading">
    <h2 id="section-heading">Section Title</h2>
    <!-- Content -->
  </section>
</main>

<!-- Proper form labeling -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required>

<!-- ARIA labels when needed -->
<button aria-label="Close menu" aria-expanded="false">
  <span class="sr-only">Close navigation menu</span>
</button>
```

### **CSS Considerations:**
```css
/* Focus indicators */
.focusable:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* High contrast focus */
.focusable:focus {
  outline: 2px solid #000;
  outline-offset: 2px;
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### **JavaScript Accessibility:**
```javascript
// Keyboard event handling
element.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    // Handle action
  }
});

// ARIA state management
const toggleButton = document.getElementById('menu-toggle');
toggleButton.setAttribute('aria-expanded', isExpanded);

// Focus management
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  // Focus management logic
}
```

## 📊 **Testing Schedule**

### **Weekly:**
- Automated testing with axe DevTools
- Quick keyboard navigation check
- Focus indicator verification

### **Monthly:**
- Full manual accessibility audit
- Screen reader testing
- Mobile accessibility review
- Color contrast verification

### **Quarterly:**
- Comprehensive accessibility review
- User testing with assistive technologies
- Accessibility training for team members
- Policy and procedure updates

## 🚨 **Critical Issues (Fix Immediately)**

1. **Missing alt text** on important images
2. **Keyboard navigation** not working
3. **Focus indicators** not visible
4. **Form labels** missing or incorrect
5. **Color contrast** below minimum requirements
6. **Screen reader** compatibility issues

## 📚 **Resources and Tools**

### **Testing Tools:**
- [axe DevTools](https://www.deque.com/axe/browser-extensions/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [pa11y](https://pa11y.org/)

### **Guidelines:**
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11Y Project](https://www.a11yproject.com/)

### **Training:**
- [Web Accessibility Initiative](https://www.w3.org/WAI/)
- [Deque University](https://dequeuniversity.com/)
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)

## 📝 **Reporting Issues**

When accessibility issues are found:

1. **Document the issue** with screenshots/videos
2. **Specify the page** and element affected
3. **Describe the impact** on users
4. **Suggest solutions** if possible
5. **Prioritize** based on severity and user impact

## 🎉 **Success Metrics**

- **100% WCAG 2.1 AA compliance**
- **Zero critical accessibility issues**
- **All pages pass automated testing**
- **Positive user feedback** from accessibility testing
- **Regular accessibility training** completed by team

---

**Remember**: Accessibility is not a one-time task but an ongoing commitment to ensuring our website is usable by everyone, regardless of their abilities or the technology they use.
