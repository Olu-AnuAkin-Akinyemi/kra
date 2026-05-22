/**
 * Star field UI
 * Renders star dots into #stars using props from core/starLogic
 */

import { generateStarProps } from '../core/starLogic.js';

/**
 * Initialize the star field animation in the hero section
 * @returns {void}
 */
export function initializeStarField() {
  const container = document.getElementById('stars');
  if (!container) return;

  const stars = generateStarProps(120);

  stars.forEach(({ size, top, left, dur, delay, lo, hi }) => {
    const dot = document.createElement('div');
    dot.className = 'star-dot';
    dot.style.cssText = `
      width:${size}px;
      height:${size}px;
      top:${top}%;
      left:${left}%;
      --dur:${dur}s;
      --delay:${delay}s;
      --lo:${lo};
      --hi:${hi};
    `;
    container.appendChild(dot);
  });
}
