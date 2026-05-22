import { describe, it, expect } from 'vitest';
import { generateStarProps } from './starLogic.js';

describe('generateStarProps', () => {
  it('returns an array of exactly the requested count', () => {
    expect(generateStarProps(10)).toHaveLength(10);
    expect(generateStarProps(1)).toHaveLength(1);
  });

  it('defaults to 120 stars', () => {
    expect(generateStarProps()).toHaveLength(120);
  });

  it('returns an empty array when count is 0', () => {
    expect(generateStarProps(0)).toHaveLength(0);
  });

  it('each star has all required property keys', () => {
    const [star] = generateStarProps(1);
    const keys = ['size', 'top', 'left', 'dur', 'delay', 'lo', 'hi'];
    keys.forEach((key) => expect(star).toHaveProperty(key));
  });

  describe('property ranges — verified across the full default output', () => {
    const stars = generateStarProps(120);

    it('size is in [0.5, 2.5]', () => {
      stars.forEach(({ size }) => {
        expect(size).toBeGreaterThanOrEqual(0.5);
        expect(size).toBeLessThanOrEqual(2.5);
      });
    });

    it('top is in [0, 100]', () => {
      stars.forEach(({ top }) => {
        expect(top).toBeGreaterThanOrEqual(0);
        expect(top).toBeLessThanOrEqual(100);
      });
    });

    it('left is in [0, 100]', () => {
      stars.forEach(({ left }) => {
        expect(left).toBeGreaterThanOrEqual(0);
        expect(left).toBeLessThanOrEqual(100);
      });
    });

    it('dur is in [2, 6]', () => {
      stars.forEach(({ dur }) => {
        expect(dur).toBeGreaterThanOrEqual(2);
        expect(dur).toBeLessThanOrEqual(6);
      });
    });

    it('delay is in [0, 4]', () => {
      stars.forEach(({ delay }) => {
        expect(delay).toBeGreaterThanOrEqual(0);
        expect(delay).toBeLessThanOrEqual(4);
      });
    });

    it('lo is in [0.05, 0.15]', () => {
      stars.forEach(({ lo }) => {
        expect(lo).toBeGreaterThanOrEqual(0.05);
        expect(lo).toBeLessThanOrEqual(0.15);
      });
    });

    it('hi is in [0.4, 0.9]', () => {
      stars.forEach(({ hi }) => {
        expect(hi).toBeGreaterThanOrEqual(0.4);
        expect(hi).toBeLessThanOrEqual(0.9);
      });
    });
  });

  it('each call produces independent arrays (no shared reference)', () => {
    const a = generateStarProps(5);
    const b = generateStarProps(5);
    expect(a).not.toBe(b);
  });
});
