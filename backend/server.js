// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // DB connection
const emailRoutes = require('./routes/emailRoutes'); // Email routes
const authRoutes = require('./routes/authRoutes'); // Auth routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB(); // MAKE SURE THIS IS CALLED!

// Routes
app.use('/api/email', emailRoutes);
app.use('/api/auth', authRoutes); // 👈 /api/auth/signup etc

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
