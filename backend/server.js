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
    orderId: { type: String, required: true, unique: true }, // Unique order ID
    username: { type: String, required: true },
    email: { type: String, required: true },
    currentIndex_001: { type: Number, required: false },
    currentIndex_002: { type: Number, required: false },
    currentIndex_003: { type: Number, required: false },
    degree_001: { type: Number, required: false },
    degree_002: { type: Number, required: false },
    degree_003: { type: Number, required: false },
    color: { type: String, required: false },
    colorValue: { type: String, required: false },
    selectedSize: { type: String, required: false },
    createdAt: { type: String, required: true } // ISO string without seconds
});

// Create the Order model based on the schema
const Order = mongoose.model('Order', orderSchema);

// Define a schema to track the order counter
const orderCounterSchema = new mongoose.Schema({
    count: { type: Number, default: 0 }
});

// Create the OrderCounter model based on the schema
const OrderCounter = mongoose.model('OrderCounter', orderCounterSchema);

// Sample API route
app.get('/', (req, res) => {
    res.send('Hello from the backend server!');
});

// API route to handle form submissions and store the order in the database
app.post('/api/orders', async (req, res) => {
    const orderData = req.body; // Get the order data from the request body

    if (!orderData.username || !orderData.email) {
        return res.status(400).json({ error: 'Username and email are required' });
    }

    try {
        let counter = await OrderCounter.findOne();
        if (!counter) {
            counter = new OrderCounter();
            await counter.save();
        }

        counter.count += 1;
        const orderId = `order-${String(counter.count).padStart(3, '0')}`;
        await counter.save();

        const createdAt = new Date().toISOString().slice(0, 16);
        const formattedCreatedAt = `Date: ${createdAt.slice(0, 10)} / Time: ${createdAt.slice(11)}`;

        const newOrder = new Order({ ...orderData, orderId, createdAt: formattedCreatedAt });
        await newOrder.save();

        const responseOrder = {
            order_number: newOrder.orderId,
            username: newOrder.username,
            email: newOrder.email,
            currentIndex_001: newOrder.currentIndex_001,
            currentIndex_002: newOrder.currentIndex_002,
            currentIndex_003: newOrder.currentIndex_003,
            degree_001: newOrder.degree_001,
            degree_002: newOrder.degree_002,
            degree_003: newOrder.degree_003,
            color: newOrder.color,
            colorValue: newOrder.colorValue,
            selectedSize: newOrder.selectedSize,
            createdAt: newOrder.createdAt,
            order_id: newOrder._id.toString()
        };

        res.status(201).json(responseOrder);
    } catch (err) {
        console.error('Error saving order:', err);
        res.status(500).json({ error: 'Failed to save order' });
    }
});

// Add a GET /api/orders route to retrieve all orders in descending order
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        const formattedOrders = orders.map(order => ({
            order_number: order.orderId,
            username: order.username,
            email: order.email,
            currentIndex_001: order.currentIndex_001,
            currentIndex_002: order.currentIndex_002,
            currentIndex_003: order.currentIndex_003,
            degree_001: order.degree_001,
            degree_002: order.degree_002,
            degree_003: order.degree_003,
            color: order.color,
            colorValue: order.colorValue,
            selectedSize: order.selectedSize,
            createdAt: order.createdAt,
            order_id: order._id.toString()
        }));

        res.status(200).json(formattedOrders); // Respond with the formatted orders
    } catch (err) {
        console.error('Error retrieving orders:', err);
        res.status(500).json({ error: 'Failed to retrieve orders' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
