/**
 * Database module (starter stub).
 *
 * Feature branch: feature/database-connection should implement:
 * - connect()
 * - a config pattern using environment variables
 * - a simple query function OR a client getter
 *
 * You may use:
 * - a "fake" in-memory database for the checkpoint, OR
 * - SQLite, OR
 * - MongoDB/Postgres (optional) — keep setup simple
 */

const config = {
  url: process.env.DB_URL || "memory://local",
  pool: Number(process.env.DB_POOL || 4),
};

const store = new Map();

function connect() {
  return { connected: true, driver: "memory", config };
}

function query(table, predicate) {
  const rows = store.get(table) || [];
  if (typeof predicate !== "function") {
    return rows.slice();
  }
  return rows.filter(predicate);
}

function insert(table, row) {
  if (!store.has(table)) {
    store.set(table, []);
  }
  store.get(table).push(row);
  return row;
}

function reset() {
  store.clear();
}

module.exports = { connect, query, insert, reset, config };
