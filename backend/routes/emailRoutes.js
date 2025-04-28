// routes/emailRoutes.js
const express = require('express');
const router = express.Router();
const analyzeController = require('../controllers/analyzeController');
const Email = require('../models/Email'); // 🛠 Import Email model

// POST /api/email/analyze - handle email analysis
router.post('/analyze', analyzeController.analyzeEmail);

// GET /api/email - fetch all analyzed emails for history
router.get('/', async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 }); // latest first
    res.status(200).json(emails);
  } catch (error) {
    console.error('Failed to fetch emails:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
