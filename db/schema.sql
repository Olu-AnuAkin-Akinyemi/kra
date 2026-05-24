CREATE TABLE IF NOT EXISTS submissions (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  type        TEXT NOT NULL CHECK (type IN ('teacher', 'circle')),
  name        TEXT NOT NULL,
  email       TEXT NOT NULL,
  role        TEXT,
  message     TEXT,
  status      TEXT NOT NULL DEFAULT 'new',
  created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_submissions_type_created
  ON submissions (type, created_at DESC);
