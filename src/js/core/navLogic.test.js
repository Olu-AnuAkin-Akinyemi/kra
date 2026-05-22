import { describe, it, expect } from 'vitest';
import { getActiveSection, NAV_OFFSET } from './navLogic.js';

describe('NAV_OFFSET', () => {
  it('is 140', () => {
    expect(NAV_OFFSET).toBe(140);
  });
});

describe('getActiveSection', () => {
  const sections = [
    { id: 'gates',      offsetTop: 0    },
    { id: 'courtyard',  offsetTop: 800  },
    { id: 'halls',      offsetTop: 1600 },
    { id: 'enrollment', offsetTop: 4000 },
  ];

  it('returns empty string when sections array is empty', () => {
    expect(getActiveSection(0, [])).toBe('');
  });

  it('returns empty string when no section threshold is reached', () => {
    // gates starts at 0 — with 140px offset, activates at scrollY >= -140
    // so at 0 gates IS active. Test with sections that start deeper.
    const deep = [{ id: 'deep', offsetTop: 500 }];
    expect(getActiveSection(0, deep)).toBe('');
  });

  it('returns the first section when at the very top', () => {
    // gates.offsetTop(0) - NAV_OFFSET(140) = -140; scrollY(0) >= -140 is true
    expect(getActiveSection(0, sections)).toBe('gates');
  });

  it('returns gates when scrollY is just before courtyard activates', () => {
    // courtyard activates at 800 - 140 = 660
    expect(getActiveSection(659, sections)).toBe('gates');
  });

  it('returns courtyard when scrollY meets its activation point', () => {
    expect(getActiveSection(660, sections)).toBe('courtyard');
  });

  it('returns halls when scrolled past its activation point', () => {
    // halls activates at 1600 - 140 = 1460
    expect(getActiveSection(1460, sections)).toBe('halls');
  });

  it('returns the last qualifying section — later sections override earlier ones', () => {
    // Scroll deep enough to pass all four sections
    expect(getActiveSection(5000, sections)).toBe('enrollment');
  });

  it('accepts a custom offset and applies it correctly', () => {
    // With offset 0, courtyard activates exactly at scrollY 800
    expect(getActiveSection(799, sections, 0)).toBe('gates');
    expect(getActiveSection(800, sections, 0)).toBe('courtyard');
  });
});
