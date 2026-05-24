import { describe, it, expect } from 'vitest';
import {
  clean,
  isValidEmail,
  isValidFormType,
  parseSubmission,
} from './validation.js';

describe('clean', () => {
  it('trims surrounding whitespace', () => {
    expect(clean('  hello  ')).toBe('hello');
  });

  it('returns null for empty string', () => {
    expect(clean('')).toBeNull();
  });

  it('returns null for whitespace-only string', () => {
    expect(clean('   ')).toBeNull();
  });

  it('returns null for non-string inputs', () => {
    expect(clean(undefined)).toBeNull();
    expect(clean(null)).toBeNull();
    expect(clean(42)).toBeNull();
    expect(clean({})).toBeNull();
    expect(clean([])).toBeNull();
  });

  it('caps length at MAX_FIELD (2000 chars)', () => {
    const long = 'a'.repeat(3000);
    expect(clean(long).length).toBe(2000);
  });
});

describe('isValidEmail', () => {
  it('accepts standard email shapes', () => {
    expect(isValidEmail('foo@bar.com')).toBe(true);
    expect(isValidEmail('a.b+tag@sub.example.co')).toBe(true);
    expect(isValidEmail('user_name@domain.io')).toBe(true);
  });

  it('rejects malformed addresses', () => {
    expect(isValidEmail('foo')).toBe(false);
    expect(isValidEmail('foo@')).toBe(false);
    expect(isValidEmail('@bar.com')).toBe(false);
    expect(isValidEmail('foo @bar.com')).toBe(false);
    expect(isValidEmail('foo@bar')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });

  it('rejects non-string inputs', () => {
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
    expect(isValidEmail(42)).toBe(false);
  });
});

describe('isValidFormType', () => {
  it('accepts teacher and circle', () => {
    expect(isValidFormType('teacher')).toBe(true);
    expect(isValidFormType('circle')).toBe(true);
  });

  it('rejects unknown types', () => {
    expect(isValidFormType('admin')).toBe(false);
    expect(isValidFormType('Teacher')).toBe(false);
    expect(isValidFormType('')).toBe(false);
    expect(isValidFormType(null)).toBe(false);
    expect(isValidFormType(undefined)).toBe(false);
  });
});

describe('parseSubmission', () => {
  const validTeacher = {
    type: 'teacher',
    name: 'Jane Scholar',
    email: 'jane@example.com',
    role: 'Classroom Teacher',
  };

  const validCircle = {
    type: 'circle',
    name: 'Alex Curious',
    email: 'alex@example.com',
    role: 'Parent / Guardian',
    message: 'I want my kids to learn this way',
  };

  it('accepts a valid teacher submission and nulls absent fields', () => {
    const r = parseSubmission(validTeacher);
    expect(r.ok).toBe(true);
    expect(r.data).toEqual({
      type: 'teacher',
      name: 'Jane Scholar',
      email: 'jane@example.com',
      role: 'Classroom Teacher',
      message: null,
    });
  });

  it('accepts a valid circle submission with message', () => {
    const r = parseSubmission(validCircle);
    expect(r.ok).toBe(true);
    expect(r.data.message).toBe('I want my kids to learn this way');
  });

  it('lowercases the email before persisting', () => {
    const r = parseSubmission({ ...validTeacher, email: 'Jane@Example.COM' });
    expect(r.data.email).toBe('jane@example.com');
  });

  it('rejects an invalid form type', () => {
    const r = parseSubmission({ ...validTeacher, type: 'admin' });
    expect(r).toEqual({ ok: false, error: 'Invalid form type' });
  });

  it('rejects a missing name', () => {
    const r = parseSubmission({ ...validTeacher, name: '' });
    expect(r).toEqual({ ok: false, error: 'Name and email are required' });
  });

  it('rejects whitespace-only name as missing', () => {
    const r = parseSubmission({ ...validTeacher, name: '   ' });
    expect(r).toEqual({ ok: false, error: 'Name and email are required' });
  });

  it('rejects a missing email', () => {
    const r = parseSubmission({ ...validTeacher, email: undefined });
    expect(r).toEqual({ ok: false, error: 'Name and email are required' });
  });

  it('rejects a malformed email', () => {
    const r = parseSubmission({ ...validTeacher, email: 'not-an-email' });
    expect(r).toEqual({ ok: false, error: 'Invalid email address' });
  });

  it('rejects null and non-object bodies', () => {
    expect(parseSubmission(null).ok).toBe(false);
    expect(parseSubmission(undefined).ok).toBe(false);
    expect(parseSubmission('string').ok).toBe(false);
  });
});
