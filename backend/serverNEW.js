// Import required modules
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors'); // Allows cross-origin requests for frontend-backend communication

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// Initialize an empty orders array to store order data
let orders = [];

// Sample API route
app.get('/', (req, res) => {
    res.send('Hello from the backend server!');
});

// API route to handle form submissions and store the order in the orders array
app.post('/api/orders', (req, res) => {
    const orderData = req.body; // Get the order data from the request body

    // Ensure the order data contains the necessary fields (optional)
    if (!orderData.username || !orderData.email) {
        return res.status(400).json({ error: 'Username and email are required' });
    }

    // Push the new order into the orders array
    orders.push(orderData);

    console.log('New order submitted:', orderData); // Optionally log the order

    // Respond with the new order data
    res.status(201).json(orderData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// +++++++++++++++++++++++++++++++ SERVER WITH MONGODB connection NEWEST +++++++++++++++++++++++++++++++ //

// Import required modules
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors'); // Allows cross-origin requests for frontend-backend communication
const mongoose = require('mongoose'); // Import mongoose to connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

// Define the Order Schema
const orderSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create the Order model based on the schema
const Order = mongoose.model('Order', orderSchema);

// Sample API route
app.get('/', (req, res) => {
    res.send('Hello from the backend server!');
});

// API route to handle form submissions and store the order in the database
app.post('/api/orders', async (req, res) => {
    const orderData = req.body; // Get the order data from the request body

    // Ensure the order data contains the necessary fields (optional)
    if (!orderData.username || !orderData.email) {
        return res.status(400).json({ error: 'Username and email are required' });
    }

    // Create a new order document and save it to the MongoDB database
    try {
        const newOrder = new Order(orderData);
        await newOrder.save();

        console.log('New order submitted:', newOrder); // Optionally log the order

        // Respond with the new order data
        res.status(201).json(newOrder);
    } catch (err) {
        console.error('Error saving order:', err);
        res.status(500).json({ error: 'Failed to save order' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
