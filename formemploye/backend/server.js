// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const employeeRoutes = require('./routes/employeeRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all domains
app.use(express.json()); // Enable JSON parsing for requests

// Connect to MongoDB
connectDB();

// Define the routes
app.use('/api/employees', employeeRoutes);

// Default route (root)
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
