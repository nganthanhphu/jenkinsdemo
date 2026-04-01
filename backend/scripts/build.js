'use strict';

const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'build-info.txt'), `built-at=${new Date().toISOString()}\n`,'utf-8');
console.log('Build completed successfully.', path.join(dist, 'build-info.txt'));