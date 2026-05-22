/**
 * Scroll-to-top UI
 * Shows/hides the #scroll-to-top button and handles click-to-scroll
 * Delegates visibility logic to core/scrollLogic
 */

import { shouldShowScrollToTop } from '../core/scrollLogic.js';

/**
 * Initialize the scroll-to-top button
 * Button appears after scrolling past the threshold defined in core/scrollLogic
 * @returns {void}
 */
export function initializeScrollToTop() {
  const button = document.getElementById('scroll-to-top');
  if (!button) return;

  window.addEventListener('scroll', () => {
    if (shouldShowScrollToTop(window.scrollY)) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
