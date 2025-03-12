// api/db.js
const mongoose = require('mongoose');

let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    // Add connection options compatible with Mongoose 8.x
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    
    console.log('MongoDB Connected Successfully');
    cachedConnection = connection;
    return connection;
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    throw error;
  }
}

module.exports = connectToDatabase;