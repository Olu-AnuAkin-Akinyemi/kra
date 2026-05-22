/**
 * Star field pure logic
 * Generates randomized CSS property data for star dots — no DOM, no side effects
 */

/**
 * @typedef {Object} StarProps
 * @property {number} size   - Diameter in px (0.5–2.5)
 * @property {number} top    - Vertical position as % (0–100)
 * @property {number} left   - Horizontal position as % (0–100)
 * @property {number} dur    - Twinkle animation duration in seconds (2–6)
 * @property {number} delay  - Twinkle animation delay in seconds (0–4)
 * @property {number} lo     - Minimum opacity (0.05–0.15)
 * @property {number} hi     - Maximum opacity (0.4–0.9)
 */

/**
 * Generate randomized properties for a star field
 * @param {number} [count=120] - Number of stars to generate
 * @returns {StarProps[]}
 */
export function generateStarProps(count = 120) {
  return Array.from({ length: count }, () => ({
    size:  Math.random() * 2 + 0.5,
    top:   Math.random() * 100,
    left:  Math.random() * 100,
    dur:   2 + Math.random() * 4,
    delay: Math.random() * 4,
    lo:    0.05 + Math.random() * 0.1,
    hi:    0.4  + Math.random() * 0.5,
  }));
}
