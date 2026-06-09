const db = require("../db");

const TABLE = "users";

function createUser(email, name) {
  const user = { id: db.query(TABLE).length + 1, email, name };
  return db.insert(TABLE, user);
}

function findByEmail(email) {
  const matches = db.query(TABLE, (user) => user.email === email);
  return matches[0] || null;
}

function listUsers() {
  return db.query(TABLE);
}

module.exports = { createUser, findByEmail, listUsers };
