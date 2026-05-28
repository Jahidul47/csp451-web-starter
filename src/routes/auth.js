const express = require("express");
const { authenticateUser } = require("../services/authService");

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const result = authenticateUser(email, password);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.errors,
    });
  }

  return res.json({
    success: true,
    message: "Login accepted for checkpoint demo.",
    user: result.user,
  });
});

module.exports = { router };
