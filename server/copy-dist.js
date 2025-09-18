const fs = require('fs');
const path = require('path');

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
  const parentDistPath = path.join(__dirname, '..', 'dist');
  const serverDistPath = path.join(__dirname, 'dist');
  const parentSafemintPath = path.join(__dirname, '..', 'dist', 'safemint');
  const serverSafemintPath = path.join(__dirname, 'safemint');

  console.log('📁 Copying files...');
  console.log(`   React app from: ${parentDistPath}`);
  console.log(`   React app to: ${serverDistPath}`);
  console.log(`   Landing page from: ${parentSafemintPath}`);
  console.log(`   Landing page to: ${serverSafemintPath}`);

  if (!fs.existsSync(parentDistPath)) {
    console.error('❌ Error: Parent dist folder not found!');
    console.error('   Please run "npm run build" in the parent directory first.');
    process.exit(1);
  }

  try {
    // Remove existing folders if they exist
    if (fs.existsSync(serverDistPath)) {
      fs.rmSync(serverDistPath, { recursive: true, force: true });
    }
    if (fs.existsSync(serverSafemintPath)) {
      fs.rmSync(serverSafemintPath, { recursive: true, force: true });
    }

    // Copy the React app (excluding safemint folder)
    fs.mkdirSync(serverDistPath, { recursive: true });
    const entries = fs.readdirSync(parentDistPath, { withFileTypes: true });

    for (let entry of entries) {
      if (entry.name === 'safemint') continue; // Skip safemint folder

      const srcPath = path.join(parentDistPath, entry.name);
      const destPath = path.join(serverDistPath, entry.name);

      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }

    // Copy the safemint folder separately
    if (fs.existsSync(parentSafemintPath)) {
      copyDir(parentSafemintPath, serverSafemintPath);
      console.log('✅ Successfully copied landing page!');
    }

    console.log('✅ Successfully copied React app!');
    console.log('🚀 You can now run "npm start" to start the server.');
  } catch (error) {
    console.error('❌ Error copying files:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { copyDir };
