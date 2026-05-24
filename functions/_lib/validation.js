const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 2000;
const FORM_TYPES = ['teacher', 'circle'];

export function clean(value) {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, MAX_FIELD);
}

export const isValidEmail = (email) =>
  typeof email === 'string' && EMAIL_RE.test(email);

export const isValidFormType = (type) => FORM_TYPES.includes(type);

export function parseSubmission(body) {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Invalid payload' };
  }

  const type = clean(body.type);
  const name = clean(body.name);
  const email = clean(body.email);
  const role = clean(body.role);
  const message = clean(body.message);

  if (!isValidFormType(type)) return { ok: false, error: 'Invalid form type' };
  if (!name || !email) return { ok: false, error: 'Name and email are required' };
  if (!isValidEmail(email)) return { ok: false, error: 'Invalid email address' };

  return {
    ok: true,
    data: { type, name, email: email.toLowerCase(), role, message },
  };
}
