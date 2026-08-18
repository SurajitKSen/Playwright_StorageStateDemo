import fs from 'fs';
import path from 'path';

const authDir = path.join(__dirname, 'auth');

/**
 * Runs once before every test run (any npx/npm command) and wipes
 * previously stored sessions so each run always generates fresh ones.
 */
export default function globalSetup() {
  if (fs.existsSync(authDir)) {
    fs.rmSync(authDir, { recursive: true, force: true });
  }
  fs.mkdirSync(authDir, { recursive: true });
}
