export async function onRequestGet({ request, env }) {
  const url = new URL('/admin-page', request.url);
  const resp = await env.ASSETS.fetch(new Request(url, request));
  const headers = new Headers(resp.headers);
  headers.set('Content-Type', 'text/html; charset=utf-8');
  return new Response(resp.body, { status: resp.status, headers });
}
