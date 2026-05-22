/**
 * KRA Main Entry Point
 * Orchestrates all initialization on page load
 */

import { initializeStarField } from './ui/starField.js';
import { initializeScrollReveal } from './ui/scrollReveal.js';
import { handleFormSubmission } from './ui/formHandler.js';
import { setupNavHighlight } from './ui/navHighlight.js';
import { initializeScrollToTop } from './ui/scrollToTop.js';

/**
 * Initialize all KRA modules on DOMContentLoaded
 */
function initialize() {
  initializeStarField();
  initializeScrollReveal();
  handleFormSubmission();
  setupNavHighlight();
  initializeScrollToTop();
}

// Run on page load
document.addEventListener('DOMContentLoaded', initialize);
