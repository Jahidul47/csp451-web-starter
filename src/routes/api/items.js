const express = require("express");

const router = express.Router();

const items = [];

function validateItem(body) {
  const errors = [];
  if (!body || typeof body.name !== "string" || body.name.trim() === "") {
    errors.push("name is required");
  }
  if (body && body.price !== undefined && typeof body.price !== "number") {
    errors.push("price must be a number");
  }
  return errors;
}

router.get("/", (req, res) => {
  res.json({ items });
});

router.post("/", (req, res) => {
  const errors = validateItem(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  const item = { id: items.length + 1, name: req.body.name, price: req.body.price || 0 };
  items.push(item);
  return res.status(201).json({ item });
});

module.exports = router;
