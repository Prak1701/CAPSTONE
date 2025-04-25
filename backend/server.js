// server.js
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db'); // Import DB connection
const emailRoutes = require('./routes/emailRoutes'); // Import email routes

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS

// Connect to MongoDB
connectDB();

// Use email analysis routes
app.use('/api', emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
