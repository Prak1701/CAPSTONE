// controllers/analyzeController.js
const Email = require('../models/Email');

// Example phishing detection logic
const detectPhishing = (content) => {
  if (content.includes("urgent") || content.includes("password")) {
    return "dangerous";
  }
  if (content.includes("offer") || content.includes("click here")) {
    return "suspicious";
  }
  return "safe";
};

exports.analyzeEmail = async (req, res) => {
  try {
    const { senderEmail, subject, content, attachment } = req.body;

    // Perform phishing detection on email content
    const phishingResult = detectPhishing(content);

    // Save email data along with phishing result
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
