// api/models.js
const mongoose = require('mongoose');

// Define the Order Schema
const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
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
  createdAt: { type: String, required: true }
});

// Define a schema to track the order counter
const orderCounterSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});

// Only create the model if it doesn't exist already (prevents model overwrite errors)
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
const OrderCounter = mongoose.models.OrderCounter || mongoose.model('OrderCounter', orderCounterSchema);

module.exports = {
  Order,
  OrderCounter
};