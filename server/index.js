const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 1736;

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve static assets from dist folder for React app (both from root and /app path)
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use('/app/assets', express.static(path.join(__dirname, 'dist/assets')));

// Serve the logo file for React app
app.get('/safemint-logo.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/safemint-logo.png'));
});

// Serve static files from safemint folder for landing page
app.use('/static', express.static(path.join(__dirname, 'safemint')));

// Route for static SafeMint landing page (root route)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'safemint/index.html'));
});

// Route for React app
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Route for React app assets and SPA routing
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// API health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    server: 'SafeMint Server',
    version: '1.0.0'
  });
});

// API to check available routes
app.get('/api/routes', (req, res) => {
  res.json({
    routes: {
      'Landing Page': 'http://localhost:' + PORT + '/',
      'React App': 'http://localhost:' + PORT + '/app',
      'Health Check': 'http://localhost:' + PORT + '/api/health',
      'Routes Info': 'http://localhost:' + PORT + '/api/routes'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(PORT, () => {
  console.log('🚀 SafeMint Server Started!');
  console.log('================================');
  console.log(`🌐 Server running on: http://localhost:${PORT}`);
  console.log('');
  console.log('📱 Available Routes:');
  console.log(`   🏠 Landing Page: http://localhost:${PORT}/`);
  console.log(`   📱 React App: http://localhost:${PORT}/app`);
  console.log(`   💚 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`   📋 Routes Info: http://localhost:${PORT}/api/routes`);
  console.log('');
  console.log(`📁 Landing files: ${path.join(__dirname, 'safemint')}`);
  console.log(`📁 React app files: ${path.join(__dirname, 'dist')}`);
  console.log('================================');

  // Check if dist folder exists
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    console.warn('⚠️  Warning: dist folder not found!');
    console.warn('   Run "npm run copy-dist" to copy from parent directory');
  } else {
    console.log('✅ dist folder found');
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});
