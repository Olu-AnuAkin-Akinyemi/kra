import { json, methodNotAllowed } from '../_lib/response.js';
import { isAuthed } from '../_lib/auth.js';
import { listSubmissions } from '../_lib/submissions.js';

export async function onRequestGet({ request, env }) {
  if (!env.ADMIN_SECRET) {
    return json({ ok: false, error: 'Admin not configured' }, 500);
  }
  if (!isAuthed(request, env.ADMIN_SECRET)) {
    return json({ ok: false, error: 'Unauthorized' }, 401);
  }

  try {
    const results = await listSubmissions(env.DB);
    return json({ ok: true, count: results.length, submissions: results });
  } catch (err) {
    console.error('admin query failed:', err?.message, err?.stack, 'DB bound:', !!env.DB);
    return json({ ok: false, error: 'Query failed' }, 500);
  }
}

export const onRequest = () => methodNotAllowed('GET');
