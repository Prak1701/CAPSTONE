// routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const analyzeController = require('../controllers/analyzeController');

// POST route to handle email submission and analysis
router.post('/analyze', analyzeController.analyzeEmail);

module.exports = router;
