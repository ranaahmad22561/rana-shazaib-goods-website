import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const assets = [
  ['public', join('.next', 'standalone', 'public')],
  [join('.next', 'static'), join('.next', 'standalone', '.next', 'static')],
];

for (const [source, destination] of assets) {
  if (!existsSync(source)) {
    throw new Error(`Required standalone build asset directory is missing: ${source}`);
  }

  mkdirSync(dirname(destination), { recursive: true });
  cpSync(source, destination, { recursive: true, force: true });
}
