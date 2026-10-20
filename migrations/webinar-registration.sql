CREATE TABLE IF NOT EXISTS webinar_registrations (
  id TEXT PRIMARY KEY,
  registered_at TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  consent_version TEXT NOT NULL,
  source TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS webinar_registered_at ON webinar_registrations(registered_at);
