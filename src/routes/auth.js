const express = require("express");
const { validateCredentials } = require("../services/authService");

const router = express.Router();

router.post("/login", (req, res) => {
  const body = req.body || {};
  const result = validateCredentials(body.email, body.password);
  if (!result.valid) {
    return res.status(400).json({ error: result.message });
  }
  return res.json({ status: "ok", user: { email: body.email } });
});

module.exports = { router };