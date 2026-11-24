import fs from 'node:fs';
import path from 'node:path';

// Hostycare / cPanel "Setup Node.js App" default startup entrypoint
const prodEntry = path.resolve(process.cwd(), 'dist', 'server.cjs');

if (!fs.existsSync(prodEntry)) {
  console.error(
    'Production build not found (dist/server.cjs missing). Please run "npm run build" before starting the production server.'
  );
  process.exit(1);
}

await import('./dist/server.cjs');
