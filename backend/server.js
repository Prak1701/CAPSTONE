const express = require('express');
const cors = require('cors');
const multer = require('multer');
const connectDB = require('./db');
const emailRoutes = require('./routes/emailRoutes');
const authRoutes = require('./routes/authRoutes');
const analyzeRoute = require('./routes/analyze');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Multer setup
const upload = multer({ storage: multer.memoryStorage() });
app.use(upload.single('attachment')); // allow file uploads

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/email', emailRoutes); // 🚀 handles email-related stuff (where we will fix)
app.use('/api/auth', authRoutes);   // signup/login
app.use('/api/analyze', analyzeRoute); // analyze email

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
