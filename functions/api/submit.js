import { json, methodNotAllowed } from '../_lib/response.js';
import { parseSubmission } from '../_lib/validation.js';
import { insertSubmission } from '../_lib/submissions.js';

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400);
  }

  const result = parseSubmission(body);
  if (!result.ok) return json({ ok: false, error: result.error }, 400);

  try {
    await insertSubmission(env.DB, result.data);
    return json({ ok: true });
  } catch {
    return json({ ok: false, error: 'Submission failed' }, 500);
  }
}

export const onRequest = () => methodNotAllowed('POST');
