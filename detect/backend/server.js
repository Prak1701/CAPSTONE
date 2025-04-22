const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
  const { email, subject, content } = req.body;

  try {
    const fullText = `${email} ${subject} ${content}`;
    const response = await axios.post('http://localhost:5001/analyze', {
      text: fullText
    });

    res.json({ result: response.data.result });
  } catch (err) {
    console.error('ML API error:', err.message);
    res.status(500).json({ result: 'Error analyzing email. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
