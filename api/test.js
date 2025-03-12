// api/test.js
module.exports = (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  
    // Handle OPTIONS request (preflight)
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    // Just a simple response to confirm it works
    return res.status(200).json({ 
      message: 'API test endpoint is working!',
      timestamp: new Date().toISOString(),
      env: {
        nodeEnv: process.env.NODE_ENV,
        hasMongoUri: !!process.env.MONGODB_URI
      }
    });
  };