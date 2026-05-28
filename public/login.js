const form = document.getElementById("loginForm");
const message = document.getElementById("message");
const submitButton = form.querySelector("button");

function showMessage(text, isError = false) {
  message.textContent = text;
  message.style.color = isError ? "red" : "green";
}

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!isValidEmail(email)) {
    showMessage("Please enter a valid email address.", true);
    return;
  }

  if (password.length < 6) {
    showMessage("Password must be at least 6 characters.", true);
    return;
  }

  try {
    submitButton.disabled = true;
    submitButton.textContent = "Signing in...";
    showMessage("Checking login details...");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (!response.ok) {
      const errorMessage = result.errors
        ? result.errors.join(" ")
        : "Login failed.";
      showMessage(errorMessage, true);
      return;
    }

    showMessage("Login successful. Welcome " + result.user.email + ".");
  } catch (error) {
    showMessage("Something went wrong. Please try again.", true);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Sign in";
  }
});
