export const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export const methodNotAllowed = (allow) =>
  new Response('Method Not Allowed', {
    status: 405,
    headers: { Allow: allow },
  });

export const unauthorized = () =>
  new Response('Unauthorized', { status: 401 });
