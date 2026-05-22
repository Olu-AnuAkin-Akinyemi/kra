import { describe, it, expect } from 'vitest';
import { shouldShowScrollToTop, SCROLL_TOP_THRESHOLD } from './scrollLogic.js';

describe('SCROLL_TOP_THRESHOLD', () => {
  it('is 300', () => {
    expect(SCROLL_TOP_THRESHOLD).toBe(300);
  });
});

describe('shouldShowScrollToTop', () => {
  it('returns false at scroll position 0', () => {
    expect(shouldShowScrollToTop(0)).toBe(false);
  });

  it('returns false exactly at the threshold (not strictly greater)', () => {
    expect(shouldShowScrollToTop(300)).toBe(false);
  });

  it('returns true one pixel past the threshold', () => {
    expect(shouldShowScrollToTop(301)).toBe(true);
  });

  it('returns true well past the threshold', () => {
    expect(shouldShowScrollToTop(2000)).toBe(true);
  });

  it('accepts a custom threshold', () => {
    expect(shouldShowScrollToTop(100, 100)).toBe(false);
    expect(shouldShowScrollToTop(101, 100)).toBe(true);
  });
});
