const express = require("express");

const router = express.Router();

const items = [];

function validateItem(body) {
  const errors = [];

  if (!body.name || body.name.trim().length < 2) {
    errors.push("Item name must be at least 2 characters.");
  }

  if (!body.category || body.category.trim().length < 2) {
    errors.push("Category must be at least 2 characters.");
  }

  return errors;
}

router.get("/items", (req, res) => {
  res.json({
    count: items.length,
    items,
  });
});

router.post("/items", (req, res) => {
  const errors = validateItem(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  const item = {
    id: items.length + 1,
    name: req.body.name.trim(),
    category: req.body.category.trim(),
  };

  items.push(item);

  return res.status(201).json({
    success: true,
    item,
  });
});

module.exports = { router };
