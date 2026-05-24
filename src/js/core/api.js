/**
 * POST a submission to the backend.
 * Returns { ok, error? } — never throws.
 */
export async function submitFormData(payload) {
  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || !json.ok) {
      return { ok: false, error: json.error || `Request failed (${res.status})` };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: 'Network error — please try again' };
  }
}
