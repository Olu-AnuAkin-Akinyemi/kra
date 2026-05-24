import { methodNotAllowed } from '../../_lib/response.js';
import { buildSessionClearCookie } from '../../_lib/auth.js';

export async function onRequestPost({ request }) {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': buildSessionClearCookie(request),
    },
  });
}

export const onRequest = () => methodNotAllowed('POST');
