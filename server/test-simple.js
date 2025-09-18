const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

console.log('Starting SafeMint Server...');

// Serve static assets for React app
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));

// Serve the logo file for React app
app.get('/safemint-logo.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/safemint-logo.png'));
});

// Landing page (root route)
app.get('/', (req, res) => {
  const landingPath = path.join(__dirname, 'safemint/index.html');
  console.log('Serving landing page from:', landingPath);
  if (fs.existsSync(landingPath)) {
    res.sendFile(landingPath);
  } else {
    res.status(404).send('Landing page not found at: ' + landingPath);
  }
});

// React app route
app.get('/app', (req, res) => {
  const reactPath = path.join(__dirname, 'dist/index.html');
  console.log('Serving React app from:', reactPath);
  if (fs.existsSync(reactPath)) {
    res.sendFile(reactPath);
  } else {
    res.status(404).send('React app not found at: ' + reactPath);
  }
});

// React app SPA routing
app.get('/app/*', (req, res) => {
  const reactPath = path.join(__dirname, 'dist/index.html');
  console.log('Serving React SPA route from:', reactPath);
  if (fs.existsSync(reactPath)) {
    res.sendFile(reactPath);
  } else {
    res.status(404).send('React app not found at: ' + reactPath);
  }
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 SafeMint Server Started!');
  console.log(`🌐 Server: http://localhost:${PORT}`);
  console.log(`🏠 Landing Page: http://localhost:${PORT}/`);
  console.log(`📱 React App: http://localhost:${PORT}/app`);
  
  // Check files
  const distPath = path.join(__dirname, 'dist');
  const safemintPath = path.join(__dirname, 'safemint');
  const reactIndexPath = path.join(__dirname, 'dist/index.html');
  const landingIndexPath = path.join(__dirname, 'safemint/index.html');
  
  console.log('\n📁 File Check:');
  console.log('dist folder exists:', fs.existsSync(distPath));
  console.log('safemint folder exists:', fs.existsSync(safemintPath));
  console.log('React index.html exists:', fs.existsSync(reactIndexPath));
  console.log('Landing index.html exists:', fs.existsSync(landingIndexPath));
});
