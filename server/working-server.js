const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Serve static assets for React app from multiple paths
app.use('/assets', express.static(path.join(__dirname, 'dist/assets')));
app.use('/app/assets', express.static(path.join(__dirname, 'dist/assets')));

// Serve the logo file for React app
app.get('/safemint-logo.png', (req, res) => {
  const logoPath = path.join(__dirname, 'dist/safemint-logo.png');
  if (fs.existsSync(logoPath)) {
    res.sendFile(logoPath);
  } else {
    res.status(404).send('Logo not found');
  }
});

// Serve static files for landing page
app.use('/static', express.static(path.join(__dirname, 'safemint')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    routes: {
      landing: 'http://localhost:' + PORT + '/',
      app: 'http://localhost:' + PORT + '/app'
    }
  });
});

// Landing page (root route)
app.get('/', (req, res) => {
  const landingPath = path.join(__dirname, 'safemint/index.html');
  console.log('📄 Serving landing page from:', landingPath);
  
  if (fs.existsSync(landingPath)) {
    res.sendFile(landingPath);
  } else {
    res.status(404).send(`
      <h1>Landing page not found</h1>
      <p>Expected at: ${landingPath}</p>
      <p><a href="/app">Try React App</a></p>
    `);
  }
});

// React app route
app.get('/app', (req, res) => {
  const reactPath = path.join(__dirname, 'dist/index.html');
  console.log('⚛️  Serving React app from:', reactPath);
  
  if (fs.existsSync(reactPath)) {
    res.sendFile(reactPath);
  } else {
    res.status(404).send(`
      <h1>React app not found</h1>
      <p>Expected at: ${reactPath}</p>
      <p><a href="/">Back to Landing</a></p>
    `);
  }
});

// React app SPA routing - handle all /app/* routes
app.get('/app/*', (req, res) => {
  const reactPath = path.join(__dirname, 'dist/index.html');
  console.log('🔄 Serving React SPA route:', req.url, 'from:', reactPath);
  
  if (fs.existsSync(reactPath)) {
    res.sendFile(reactPath);
  } else {
    res.status(404).send(`
      <h1>React app not found</h1>
      <p>Expected at: ${reactPath}</p>
      <p><a href="/">Back to Landing</a></p>
    `);
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(PORT, () => {
  console.log('🚀 SafeMint Server Started Successfully!');
  console.log('================================');
  console.log(`🌐 Server running on: http://localhost:${PORT}`);
  console.log(`🏠 Landing Page: http://localhost:${PORT}/`);
  console.log(`📱 React App: http://localhost:${PORT}/app`);
  console.log(`💚 Health Check: http://localhost:${PORT}/api/health`);
  console.log('================================');
  
  // File system check
  const distPath = path.join(__dirname, 'dist');
  const safemintPath = path.join(__dirname, 'safemint');
  const reactIndexPath = path.join(__dirname, 'dist/index.html');
  const landingIndexPath = path.join(__dirname, 'safemint/index.html');
  
  console.log('\n📁 File System Check:');
  console.log(`✅ dist folder: ${fs.existsSync(distPath) ? 'EXISTS' : '❌ MISSING'}`);
  console.log(`✅ safemint folder: ${fs.existsSync(safemintPath) ? 'EXISTS' : '❌ MISSING'}`);
  console.log(`✅ React index.html: ${fs.existsSync(reactIndexPath) ? 'EXISTS' : '❌ MISSING'}`);
  console.log(`✅ Landing index.html: ${fs.existsSync(landingIndexPath) ? 'EXISTS' : '❌ MISSING'}`);
  
  if (fs.existsSync(distPath)) {
    const assetsPath = path.join(distPath, 'assets');
    console.log(`✅ React assets: ${fs.existsSync(assetsPath) ? 'EXISTS' : '❌ MISSING'}`);
  }
  
  console.log('\n🎯 Ready to serve requests!');
});
