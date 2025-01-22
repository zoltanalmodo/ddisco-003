const mongoose = require('mongoose');
require('dotenv').config();  // Ensure dotenv is loaded to access environment variables

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => {
        console.log('Error connecting to MongoDB Atlas:', err);
        process.exit(1); // Exit process if DB connection fails
    });
