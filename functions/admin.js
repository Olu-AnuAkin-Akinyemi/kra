export async function onRequestGet({ request, env }) {
  const url = new URL('/admin.html', request.url);
  return env.ASSETS.fetch(new Request(url, request));
}
