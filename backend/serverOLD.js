// Import required modules
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors'); // Allows cross-origin requests for frontend-backend communication

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Sample API route
app.get('/', (req, res) => {
    res.send('Hello from the backend server!');
});

// API route for data
app.get('/api/data', (req, res) => {
    res.json({ message: 'data from the backend message = data.message' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
