function isValidEmail(email) {
  if (typeof email !== "string") {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateCredentials(email, password) {
  if (!isValidEmail(email)) {
    return { valid: false, message: "A valid email is required." };
  }
  if (typeof password !== "string" || password.length < 6) {
    return { valid: false, message: "Password must be at least 6 characters." };
  }
  return { valid: true, message: "Credentials look valid." };
}

module.exports = { isValidEmail, validateCredentials };
