
/**
 * Main JavaScript file for the OtstapkiBG theme
 *
 * This file contains JavaScript functionality for the theme,
 * including animations, interactivity and enhancements.
 */

(function() {
  'use strict';
  
  /**
   * Initialize theme functionality when DOM is ready
   */
  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initAnimations();
    enhanceAccessibility();
  });

  /**
   * Initialize mobile menu functionality
   */
  function initMobileMenu() {
    // Mobile menu functionality will go here if needed
    // Most of the navigation is already handled by the CSS
  }

  /**
   * Initialize smooth scrolling for anchor links
   */
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip empty links or javascript: links
        if (href === '#' || href.startsWith('javascript:')) return;
        
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          
          window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Initialize animations for elements
   */
  function initAnimations() {
    // Add animation when elements come into view
    const animatedElements = document.querySelectorAll('.card, .animate-on-scroll');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      animatedElements.forEach(el => {
        observer.observe(el);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      animatedElements.forEach(el => {
        el.classList.add('animated');
      });
    }
  }

  /**
   * Enhance accessibility features
   */
  function enhanceAccessibility() {
    // Add aria attributes to elements that need them
    const menuItems = document.querySelectorAll('#primary-navigation a, #mobile-navigation a');
    
    menuItems.forEach(item => {
      // If this is the current page, add aria-current
      if (window.location.href.includes(item.getAttribute('href'))) {
        item.setAttribute('aria-current', 'page');
      }
    });

    // Make sure all interactive elements are keyboard accessible
    document.querySelectorAll('.card').forEach(card => {
      const link = card.querySelector('a');
      if (link) {
        card.addEventListener('keyup', function(e) {
          if (e.key === 'Enter') {
            link.click();
          }
        });
        card.setAttribute('tabindex', '0');
      }
    });
  }
})();
