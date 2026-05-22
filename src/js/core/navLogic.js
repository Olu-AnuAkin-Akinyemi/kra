/**
 * Navigation highlight pure logic
 * Determines the active section from scroll position — no DOM, no side effects
 */

/** Pixel offset above section top to begin considering it active */
export const NAV_OFFSET = 140;

/**
 * @typedef {Object} SectionRef
 * @property {string} id         - Section element ID
 * @property {number} offsetTop  - Distance from top of document in px
 */

/**
 * Determine which section is currently active based on scroll position
 * @param {number}       scrollY   - Current window.scrollY value
 * @param {SectionRef[]} sections  - Array of {id, offsetTop} section descriptors
 * @param {number}       [offset=NAV_OFFSET] - Pixel offset to apply above section top
 * @returns {string} Active section ID, or empty string if none reached
 */
export function getActiveSection(scrollY, sections, offset = NAV_OFFSET) {
  let active = '';
  sections.forEach(({ id, offsetTop }) => {
    if (scrollY >= offsetTop - offset) active = id;
  });
  return active;
}
