console.log('Starting test server...');

try {
  const express = require('express');
  console.log('Express loaded successfully');
  
  const app = express();
  const PORT = 3000;
  
  app.get('/', (req, res) => {
    res.send('Hello from SafeMint Server!');
  });
  
  app.listen(PORT, () => {
    console.log(`Test server running on http://localhost:${PORT}`);
  });
  
} catch (error) {
  console.error('Error starting server:', error);
}
