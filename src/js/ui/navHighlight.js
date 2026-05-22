/**
 * Navigation highlight UI
 * Updates active nav link color based on scroll position
 * Delegates section detection to core/navLogic
 */

import { getActiveSection } from '../core/navLogic.js';

/**
 * Setup active section highlighting in the navigation bar
 * @returns {void}
 */
export function setupNavHighlight() {
  const sectionEls = document.querySelectorAll('section[id]');
  const navLinks   = document.querySelectorAll('.nav-links a');
  if (!sectionEls.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    // Build lightweight section descriptors from live DOM reads
    const sections = Array.from(sectionEls).map((s) => ({
      id:        s.id,
      offsetTop: s.offsetTop,
    }));

    const activeId = getActiveSection(window.scrollY, sections);

    navLinks.forEach((link) => {
      link.style.color =
        link.getAttribute('href') === `#${activeId}`
          ? 'var(--ember-lt)'
          : 'var(--parch-dk)';
    });
  });
}
