/**
 * Mobile Navigation
 * Hamburger-triggered slide-in drawer with focus trap and keyboard handling.
 * Follows KRA ui/ layer conventions — DOM manipulation only, no core logic.
 */

export function initMobileNav() {
  const btn = document.querySelector('.nav-menu-btn');
  const panel = document.getElementById('mobile-nav');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = panel?.querySelector('.mobile-nav-close');

  if (!btn || !panel || !backdrop) return;

  function getFocusableEls() {
    return Array.from(
      panel.querySelectorAll('a[href], button:not([disabled])')
    );
  }

  function open() {
    panel.classList.add('open');
    backdrop.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    panel.classList.remove('open');
    backdrop.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    btn.focus();
  }

  btn.addEventListener('click', () => {
    btn.getAttribute('aria-expanded') === 'true' ? close() : open();
  });

  backdrop.addEventListener('click', close);

  if (closeBtn) closeBtn.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) close();
  });

  // Close drawer when a nav link is clicked (smooth scroll takes over)
  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));

  // Focus trap
  panel.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = getFocusableEls();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}
