const config = {
  url: process.env.DB_URL || "memory://local",
  poolSize: Number(process.env.DB_POOL || 4),
  environment: process.env.NODE_ENV || "development",
};

const store = new Map();

function connect() {
  return {
    connected: true,
    driver: "memory",
    config,
  };
}

function insert(table, row) {
  if (!store.has(table)) {
    store.set(table, []);
  }

  const savedRow = {
    id: Date.now(),
    ...row,
  };

  store.get(table).push(savedRow);
  return savedRow;
}

function query(table, predicate = () => true) {
  const rows = store.get(table) || [];
  return rows.filter(predicate);
}

module.exports = {
  connect,
  query,
  insert,
  config,
};
