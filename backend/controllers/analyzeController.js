// controllers/analyzeController.js
const Email = require('../models/Email');

// Stronger keyword + heuristic detection
const detectPhishing = (content) => {
  const dangerousKeywords = [
    "urgent", "verify", "account suspended", "password reset", "update account",
    "click here", "confirm", "login", "security alert", "unusual activity",
    "reset your password", "payment failure", "your package", "claim your prize",
    "restricted access", "limited time", "confirm your identity"
  ];
  const suspiciousLinks = /(http:\/\/|https:\/\/)[\w.-]+/g; // detect links

  const contentLower = content.toLowerCase();
  let dangerScore = 0;

  dangerousKeywords.forEach(keyword => {
    if (contentLower.includes(keyword)) {
      dangerScore += 1;
    }
  });

  if (suspiciousLinks.test(contentLower)) {
    dangerScore += 1;
  }

  if (dangerScore >= 3) {
    return "dangerous";
  } else if (dangerScore === 1 || dangerScore === 2) {
    return "suspicious";
  } else {
    return "safe";
  }
};

exports.analyzeEmail = async (req, res) => {
  try {
    const { senderEmail, subject, content, attachment } = req.body;

    const phishingResult = detectPhishing(content);

    const newEmail = new Email({
      senderEmail,
      subject,
      content,
      attachment,
      phishingResult,
    });

    await newEmail.save();

    res.status(200).json({
      message: 'Email analyzed and stored successfully',
      email: newEmail,
      phishingResult,
    });
  } catch (error) {
    console.error('Error analyzing email:', error);
    res.status(500).json({ message: 'Error analyzing email', error });
  }
};
