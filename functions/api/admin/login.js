import { json, methodNotAllowed } from '../../_lib/response.js';
import { buildSessionSetCookie } from '../../_lib/auth.js';

export async function onRequestPost({ request, env }) {
  if (!env.ADMIN_SECRET) {
    return json({ ok: false, error: 'Admin not configured' }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400);
  }

  const password = typeof body?.password === 'string' ? body.password : '';
  if (password !== env.ADMIN_SECRET) {
    return json({ ok: false, error: 'Invalid credentials' }, 401);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': buildSessionSetCookie(request, password),
    },
  });
}

export const onRequest = () => methodNotAllowed('POST');
