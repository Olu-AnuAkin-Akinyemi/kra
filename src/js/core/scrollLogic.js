/**
 * Scroll-to-top pure logic
 * Determines button visibility from scroll position — no DOM, no side effects
 */

/** Scroll depth in px at which the scroll-to-top button becomes visible */
export const SCROLL_TOP_THRESHOLD = 300;

/**
 * Determine whether the scroll-to-top button should be visible
 * @param {number} scrollY              - Current window.scrollY value
 * @param {number} [threshold=SCROLL_TOP_THRESHOLD] - Pixel depth to trigger visibility
 * @returns {boolean}
 */
export function shouldShowScrollToTop(scrollY, threshold = SCROLL_TOP_THRESHOLD) {
  return scrollY > threshold;
}
