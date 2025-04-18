const express = require("express");
const router = express.Router();
const { analyzePhishing } = require("../controllers/phishingController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/analyze", authMiddleware, analyzePhishing);

module.exports = router;
