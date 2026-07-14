// Launcher script for the Antigravity AI Gecko Browser (macOS)
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Target paths
const profilePath = path.join(__dirname, 'profile');
const extensionPath = path.join(__dirname, 'extension');

// Standard Firefox binary locations on macOS
const firefoxPaths = [
  '/Applications/Firefox.app/Contents/MacOS/firefox-bin',
  '/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox-bin',
  '/Applications/Firefox Nightly.app/Contents/MacOS/firefox-bin',
  '/Applications/Firefox.app/Contents/MacOS/firefox'
];

function findFirefox() {
  for (const binPath of firefoxPaths) {
    if (fs.existsSync(binPath)) {
      return binPath;
    }
  }
  return null;
}

const firefoxBin = findFirefox();

if (!firefoxBin) {
  console.error('\x1b[31m[ERROR] Firefox not found in /Applications. Please install Firefox on macOS to proceed.\x1b[0m');
  process.exit(1);
}

console.log(`\x1b[36m[LAUNCHER] Found Gecko core: ${firefoxBin}\x1b[0m`);
console.log(`\x1b[36m[LAUNCHER] Custom secure profile: ${profilePath}\x1b[0m`);
console.log(`\x1b[36m[LAUNCHER] Loading AI Extension: ${extensionPath}\x1b[0m`);

// Prepare command-line arguments
// -profile: specifies our isolated profile folder
// -no-remote: keeps this browser window isolated from other running Firefox instances
// -install-extension: pre-installs our AI WebExtension on startup
const args = [
  '-profile', profilePath,
  '-no-remote',
  '-install-extension', extensionPath,
  '-purgecaches' // ensures custom CSS updates reload instantly
];

console.log(`\x1b[32m[LAUNCHER] Spawning custom Gecko instance...\x1b[0m`);

const child = spawn(firefoxBin, args, {
  detached: true,
  stdio: 'ignore'
});

child.unref();

console.log(`\x1b[32m[SUCCESS] Gecko browser spawned successfully (PID: ${child.pid}).\x1b[0m`);
console.log(`\x1b[33m[NOTE] The browser window layout is customized using the userChrome.css stylesheet.\x1b[0m`);
console.log(`\x1b[33m[NOTE] The AI Copilot is located in the browser's side panel.\x1b[0m`);
process.exit(0);
