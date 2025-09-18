const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Serve static assets for React app (both from root and /app path)
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use('/app/assets', express.static(path.join(__dirname, 'dist/assets')));

// Serve the logo file for React app
app.get('/safemint-logo.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/safemint-logo.png'));
});

// Serve static files for landing page
app.use('/static', express.static(path.join(__dirname, 'safemint')));

// Landing page (root route)
app.get('/', (req, res) => {
  const landingPath = path.join(__dirname, 'safemint/index.html');
  if (fs.existsSync(landingPath)) {
    res.sendFile(landingPath);
  } else {
    res.status(404).send('Landing page not found');
  }
});

// React app route
app.get('/app', (req, res) => {
  const reactPath = path.join(__dirname, 'dist/index.html');
  if (fs.existsSync(reactPath)) {
    res.sendFile(reactPath);
  } else {
    res.status(404).send('React app not found. Please run "npm run copy-dist" first.');
  }
});

// React app SPA routing
app.get('/app/*', (req, res) => {
  const reactPath = path.join(__dirname, 'dist/index.html');
  if (fs.existsSync(reactPath)) {
    res.sendFile(reactPath);
  } else {
    res.status(404).send('React app not found. Please run "npm run copy-dist" first.');
  }
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 SafeMint Server Started!');
  console.log('================================');
  console.log(`🌐 Server: http://localhost:${PORT}`);
  console.log(`🏠 Landing Page: http://localhost:${PORT}/`);
  console.log(`📱 React App: http://localhost:${PORT}/app`);
  console.log(`💚 Health: http://localhost:${PORT}/api/health`);
  console.log('================================');
  
  // Check dist folder
  const distPath = path.join(__dirname, 'dist');
  if (fs.existsSync(distPath)) {
    console.log('✅ dist folder found');
  } else {
    console.warn('⚠️  dist folder not found - run "npm run copy-dist"');
  }
});
