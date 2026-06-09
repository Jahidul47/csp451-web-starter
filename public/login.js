/**
 * Login behavior for feature/user-authentication.
 *
 * Implements:
 * - inline validation with per-field error feedback
 * - UI feedback states (loading, success, failure)
 * - a call to the POST /api/auth/login endpoint
 */
const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = form.querySelector("button[type='submit']");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setMessage(text, state) {
  message.textContent = text;
  message.dataset.state = state || "";
}

function markField(input, isValid) {
  input.classList.toggle("invalid", !isValid);
  input.setAttribute("aria-invalid", String(!isValid));
}

function validate(email, password) {
  const errors = [];

  const emailValid = EMAIL_PATTERN.test(email);
  markField(emailInput, emailValid);
  if (!emailValid) {
    errors.push("Enter a valid email address.");
  }

  const passwordValid = password.length >= 6;
  markField(passwordInput, passwordValid);
  if (!passwordValid) {
    errors.push("Password must be at least 6 characters.");
  }

  return errors;
}

async function submitLogin(email, password) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

function setLoading(isLoading) {
  submitButton.disabled = isLoading;
  submitButton.textContent = isLoading ? "Signing in..." : "Sign in";
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  const errors = validate(email, password);
  if (errors.length > 0) {
    setMessage(errors.join(" "), "error");
    return;
  }

  setLoading(true);
  setMessage("Signing in...", "loading");

  try {
    const data = await submitLogin(email, password);
    if (data.error) {
      setMessage(data.error, "error");
      return;
    }
    setMessage("Signed in successfully.", "success");
    form.reset();
    markField(emailInput, true);
    markField(passwordInput, true);
  } catch (err) {
    setMessage("Network error. Please try again.", "error");
  } finally {
    setLoading(false);
  }
});