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
