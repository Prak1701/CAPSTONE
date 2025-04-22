const axios = require('axios');
const { checkSenderReputation } = require('../utils/senderReputation');
const { checkUrls } = require('../utils/urlChecker');

exports.analyzeEmail = async (req, res) => {
  const { email, subject, content } = req.body;

  try {
    const foundUrls = content.match(/https?:\/\/[^\s]+/g) || [];
    const { unsafeUrls, suspiciousUrls } = await checkUrls(foundUrls);
    const senderReputation = checkSenderReputation(email);

    // 🔥 Call ML Flask API
    const mlResponse = await axios.post("http://localhost:5001/analyze", {
      text: `${subject} ${content}`
    });
    const { result: mlResult, label, score: mlScore } = mlResponse.data;

    let score = 0;
    if (unsafeUrls.length > 0) score += 2;
    else if (suspiciousUrls.length > 0) score += 1;

    if (senderReputation === 'bad') score += 2;
    else if (senderReputation === 'unknown') score += 1;

    if (mlResult === 'dangerous') score += 2;
    else if (mlResult === 'suspicious') score += 1;

    let finalResult = 'safe';
    if (score >= 5) finalResult = 'dangerous';
    else if (score >= 3) finalResult = 'suspicious';

    res.json({
      result: finalResult,
      score,
      unsafeUrls,
      suspiciousUrls,
      senderReputation,
      mlResult,
      mlConfidence: mlScore
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error during analysis' });
  }
};
