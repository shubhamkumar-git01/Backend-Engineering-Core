// Topic: Path, OS, and Event Modules
const path = require('path');
const os = require('os');
const EventEmitter = require('events');

// --- Path ---
console.log('Normalized Path:', path.normalize('/test//sub/../dir')); // \test\dir
console.log('Base name:', path.basename(__filename));

// --- OS ---
console.log('Free Memory (MB):', os.freemem() / 1024 / 1024);
console.log('CPU Cores:', os.cpus().length);

// --- Events (The core of Node's async architecture) ---
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('An event occurred!');
});

myEmitter.emit('event');
