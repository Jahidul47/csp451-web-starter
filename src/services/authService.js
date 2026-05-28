function isValidEmail(email) {
  return typeof email === "string" && email.includes("@") && email.includes(".");
}

function validateLogin(email, password) {
  const errors = [];

  if (!isValidEmail(email)) {
    errors.push("Email must be valid.");
  }

  if (!password || password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

function authenticateUser(email, password) {
  const validation = validateLogin(email, password);

  if (!validation.valid) {
    return {
      success: false,
      errors: validation.errors,
    };
  }

  return {
    success: true,
    user: {
      email,
      role: "student",
    },
  };
}

module.exports = {
  isValidEmail,
  validateLogin,
  authenticateUser,
};