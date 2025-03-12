// api/index.js
module.exports = (req, res) => {
  res.status(200).json({ 
    message: 'API is running', 
    timestamp: new Date().toISOString() 
  });
};