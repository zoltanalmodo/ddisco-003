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

    // Ensure the order data contains the necessary fields (optional)
    if (!orderData.username || !orderData.email) {
        return res.status(400).json({ error: 'Username and email are required' });
    }

    try {
        // Find and update the order counter (or create one if it doesn't exist)
        let counter = await OrderCounter.findOne();
        if (!counter) {
            counter = new OrderCounter(); // Initialize the counter if it doesn't exist
            await counter.save();
        }

        // Increment the order count and generate the orderId (e.g., 'order-001')
        counter.count += 1;
        const orderId = `order-${String(counter.count).padStart(3, '0')}`;
        await counter.save();

        // Format createdAt timestamp to remove seconds and adjust format
        const createdAt = new Date().toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:mm
        const formattedCreatedAt = `Date: ${createdAt.slice(0, 10)} / Time: ${createdAt.slice(11)}`;

        // Create a new order document with the generated orderId
        const newOrder = new Order({ ...orderData, orderId, createdAt: formattedCreatedAt });

        // Save the new order to the database
        await newOrder.save();

        console.log('New order submitted:', newOrder); // Optionally log the order

        // Reformat the response before sending it back to the client
        const responseOrder = {
            order_number: newOrder.orderId, // `order_number` first
            username: newOrder.username,
            email: newOrder.email,
            createdAt: newOrder.createdAt,
            order_id: newOrder._id.toString() // `order_id` last and renamed
        };

        // Respond with the formatted order data
        res.status(201).json(responseOrder);
    } catch (err) {
        console.error('Error saving order:', err);
        res.status(500).json({ error: 'Failed to save order' });
    }
});

// ** New Route: API route to fetch all orders **
app.get('/api/orders', async (req, res) => {
    try {
        // Fetch all orders from the database
        const orders = await Order.find().sort({ createdAt: -1 }); // Sort by latest orders

        // Reformat the orders before sending them back to the client
        const formattedOrders = orders.map(order => ({
            order_number: order.orderId,
            username: order.username,
            email: order.email,
            createdAt: order.createdAt,
            order_id: order._id.toString()
        }));

        res.status(200).json(formattedOrders); // Respond with all orders in JSON format
    } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
