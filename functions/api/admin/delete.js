import { json, methodNotAllowed } from '../../_lib/response.js';
import { isAuthed } from '../../_lib/auth.js';
import { deleteSubmissions } from '../../_lib/submissions.js';

const MAX_BATCH = 1000;

export async function onRequestPost({ request, env }) {
  if (!env.ADMIN_SECRET) {
    return json({ ok: false, error: 'Admin not configured' }, 500);
  }
  if (!isAuthed(request, env.ADMIN_SECRET)) {
    return json({ ok: false, error: 'Unauthorized' }, 401);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400);
  }

  if (!body || !Array.isArray(body.ids) || body.ids.length === 0) {
    return json({ ok: false, error: 'ids must be a non-empty array' }, 400);
  }
  if (body.ids.length > MAX_BATCH) {
    return json({ ok: false, error: `Too many ids (max ${MAX_BATCH})` }, 400);
  }

  try {
    const deleted = await deleteSubmissions(env.DB, body.ids);
    return json({ ok: true, deleted });
  } catch (err) {
    console.error('delete failed:', err?.message, err?.stack, 'DB bound:', !!env.DB);
    return json({ ok: false, error: 'Delete failed' }, 500);
  }
}

export const onRequest = () => methodNotAllowed('POST');
