const config = {
  url: process.env.DB_URL || "memory://local",
  poolSize: Number(process.env.DB_POOL || 4),
  environment: process.env.NODE_ENV || "development",
};

function connect() {
  return {
    connected: true,
    driver: "memory",
    config,
  };
}

module.exports = {
  connect,
  config,
};
