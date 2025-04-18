const analyzePhishing = async (req, res) => {
  const { email, subject, content } = req.body;

  if (!email || !subject || !content) {
    return res.status(400).json({ message: "Missing input fields" });
  }

  // Placeholder logic — here you’ll use Google Safe Browsing API
  const isPhishing = subject.toLowerCase().includes("password") || content.toLowerCase().includes("click here");

  res.json({ email, subject, content, isPhishing });
};

module.exports = { analyzePhishing };
