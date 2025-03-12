// api/orders/index.js
const connectToDatabase = require('../db');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  // Handle OPTIONS request (preflight)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Connect to the database
    await connectToDatabase();
    const { Order, OrderCounter } = require('../models');

    if (req.method === 'GET') {
      // Get all orders
      const orders = await Order.find().sort({ createdAt: -1 });
      const formattedOrders = orders.map(order => ({
        order_number: order.orderNumber,
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

      return res.status(200).json(formattedOrders);
    } 
    else if (req.method === 'POST') {
      // Create new order
      const orderData = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

      if (!orderData.username || !orderData.email) {
        return res.status(400).json({ error: 'Username and email are required' });
      }

      let counter = await OrderCounter.findOne();
      if (!counter) {
        counter = new OrderCounter();
        await counter.save();
      }

      counter.count += 1;
      const orderNumber = `order-${String(counter.count).padStart(3, '0')}`;
      await counter.save();

      const createdAt = new Date().toISOString().slice(0, 16);
      const formattedCreatedAt = `Date: ${createdAt.slice(0, 10)} / Time: ${createdAt.slice(11)}`;

      const newOrder = new Order({ ...orderData, orderNumber, createdAt: formattedCreatedAt });
      await newOrder.save();

      const responseOrder = {
        order_number: newOrder.orderNumber,
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

      return res.status(201).json(responseOrder);
    } 
    else if (req.method === 'DELETE') {
      // Delete all orders
      await Order.deleteMany({});
      return res.status(200).json({ message: 'All orders have been deleted' });
    } 
    else {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in API route:', error.message);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};