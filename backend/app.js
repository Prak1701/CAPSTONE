const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const analyzeRoute = require('./routes/analyze');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/analyze', analyzeRoute);

module.exports = app;
