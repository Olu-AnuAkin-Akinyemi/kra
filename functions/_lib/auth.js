const COOKIE_NAME = 'kra_admin';
const MAX_AGE_SECONDS = 60 * 60 * 12;

export function parseCookie(header, name) {
  if (!header) return null;
  const parts = header.split(/;\s*/);
  for (const part of parts) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    if (part.slice(0, eq) === name) {
      return decodeURIComponent(part.slice(eq + 1));
    }
  }
  return null;
}

export function isAuthed(request, secret) {
  if (!secret) return false;
  const token = parseCookie(request.headers.get('Cookie'), COOKIE_NAME);
  return token === secret;
}

function buildCookieAttributes(request, maxAge) {
  const isSecure = new URL(request.url).protocol === 'https:';
  const attrs = ['Path=/', 'HttpOnly', 'SameSite=Strict', `Max-Age=${maxAge}`];
  if (isSecure) attrs.push('Secure');
  return attrs.join('; ');
}

export function buildSessionSetCookie(request, value) {
  const encoded = encodeURIComponent(value);
  return `${COOKIE_NAME}=${encoded}; ${buildCookieAttributes(request, MAX_AGE_SECONDS)}`;
}

export function buildSessionClearCookie(request) {
  return `${COOKIE_NAME}=; ${buildCookieAttributes(request, 0)}`;
}
