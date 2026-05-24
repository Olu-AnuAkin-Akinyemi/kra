export async function insertSubmission(db, { type, name, email, role, message }) {
  await db
    .prepare(
      'INSERT INTO submissions (type, name, email, role, message) VALUES (?, ?, ?, ?, ?)'
    )
    .bind(type, name, email, role, message)
    .run();
}

export async function listSubmissions(db, limit = 500) {
  const { results } = await db
    .prepare(
      'SELECT id, type, name, email, role, message, status, created_at FROM submissions ORDER BY created_at DESC LIMIT ?'
    )
    .bind(limit)
    .all();
  return results;
}

export async function deleteSubmissions(db, ids) {
  const clean = [...new Set(ids.map(Number).filter((n) => Number.isInteger(n) && n > 0))];
  if (clean.length === 0) return 0;
  const placeholders = clean.map(() => '?').join(', ');
  const { meta } = await db
    .prepare(`DELETE FROM submissions WHERE id IN (${placeholders})`)
    .bind(...clean)
    .run();
  return meta?.changes ?? 0;
}
