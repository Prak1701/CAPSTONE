const express = require('express');
const fetch = require('node-fetch'); // make sure to install this: npm install node-fetch
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/analyze', async (req, res) => {
  const { email, subject, content } = req.body;

  const fullText = `${email}\n${subject}\n${content}`;

  try {
    const response = await fetch('http://localhost:5001/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: fullText })
    });

    const data = await response.json();
    res.json({ result: data.result });
  } catch (error) {
    console.error('Error calling ML API:', error);
    res.status(500).json({ result: 'Error analyzing email' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
