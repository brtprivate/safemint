const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function copyDir(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read the source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  console.log('🚀 Building SafeMint for Server...');
  console.log('================================');

  try {
    // Step 1: Build the React app (will go to server/dist)
    console.log('📦 Building React app...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ React app built successfully!');

    // Step 2: Copy landing page to server/safemint
    const publicSafemintPath = path.join(__dirname, 'public', 'safemint');
    const serverSafemintPath = path.join(__dirname, 'server', 'safemint');

    if (fs.existsSync(publicSafemintPath)) {
      console.log('📄 Copying landing page...');
      
      // Remove existing safemint folder if it exists
      if (fs.existsSync(serverSafemintPath)) {
        fs.rmSync(serverSafemintPath, { recursive: true, force: true });
      }

      // Copy the safemint folder
      copyDir(publicSafemintPath, serverSafemintPath);
      console.log('✅ Landing page copied successfully!');
    } else {
      console.log('⚠️  No landing page found in public/safemint');
    }

    // Step 3: Check if server dependencies are installed
    const serverPackageJsonPath = path.join(__dirname, 'server', 'package.json');
    const serverNodeModulesPath = path.join(__dirname, 'server', 'node_modules');

    if (fs.existsSync(serverPackageJsonPath) && !fs.existsSync(serverNodeModulesPath)) {
      console.log('📦 Installing server dependencies...');
      execSync('cd server && npm install', { stdio: 'inherit' });
      console.log('✅ Server dependencies installed!');
    }

    console.log('');
    console.log('🎉 Build Complete!');
    console.log('================================');
    console.log('📁 Files ready in server/ directory:');
    console.log('   📱 React app: server/dist/');
    console.log('   🏠 Landing page: server/safemint/');
    console.log('');
    console.log('🚀 To start the server:');
    console.log('   cd server');
    console.log('   npm start');
    console.log('   # or');
    console.log('   node working-server.js');
    console.log('');
    console.log('🌐 Server will be available at:');
    console.log('   Landing: http://localhost:3000/');
    console.log('   React App: http://localhost:3000/app');

  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { copyDir };
