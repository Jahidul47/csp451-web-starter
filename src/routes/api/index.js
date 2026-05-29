const express = require("express");
const { router: healthRouter } = require("./health");

const router = express.Router();

const { router: itemsRouter } = require("./items");
router.use("/", itemsRouter);

router.use("/", healthRouter);

module.exports = { router };
