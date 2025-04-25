// models/Email.js
const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  senderEmail: { type: String, required: true },
  subject: { type: String, required: true },
  content: { type: String, required: true },
  attachment: { type: String, default: null },
  phishingResult: { type: String, required: true },  // To store phishing result
  createdAt: { type: Date, default: Date.now },
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
