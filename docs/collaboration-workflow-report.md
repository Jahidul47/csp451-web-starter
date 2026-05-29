# Collaboration Workflow Report

## 1) Issues Created

I created three GitHub issues for the required feature work. The first issue was "[Feature] User authentication validation". This issue requested better login form validation, a new auth service, and a POST /api/auth/login route. The second issue was "[Feature] API endpoint expansion". This issue requested a cleaner API route structure and a new POST endpoint with input validation. The third issue was "[Feature] Database connection module". This issue requested a database module that reads configuration from environment variables and provides connect, query, and insert functions.

## 2) PR Summary (3 PRs)

PR #1 was titled "[Feature] User authentication validation" and was linked to the authentication issue. It added the auth service, the auth route, and improved public/login.js. Screenshot included: Yes.

PR #2 was titled "[Feature] API endpoint expansion" and was linked to the API issue. It split the API routes into smaller modules and added item endpoints with validation. Screenshot included: Yes.

PR #3 was titled "[Feature] Database connection module" and was linked to the database issue. It implemented src/db/index.js with config, connect, query, and insert support. Screenshot included: Yes.

## 3) Review Simulation Evidence

I used self-review comments on the pull requests to simulate a team review process. For the authentication PR, I commented that the login form gave clearer feedback, and I also added a critical comment saying the password validation message should be clearer. I fixed that by making a follow-up commit with the message "fix(auth): clarify password length validation".

For the API PR, I reviewed the route structure and checked that POST /api/items rejected invalid input. For the database PR, I reviewed the exported functions and confirmed that connect was still available for the smoke test.

Before merging each PR, I ran npm test, npm run lint, and npm run format:check to confirm the project was working.

## 4) Merge Strategy

I used Squash and merge for the pull requests. This kept the main branch history cleaner because each feature became one clear commit on main. It also made the final commit graph easier to read and easier to understand.
