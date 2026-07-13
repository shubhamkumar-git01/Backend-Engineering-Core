// Topic: Streams and Buffers
// Notes: Useful for handling massive files (like video processing) without eating up all RAM.

const fs = require('fs');

// Create a readable stream (Reads in chunks, not all at once)
// const readStream = fs.createReadStream('./hugeFile.txt', 'utf8');

// readStream.on('data', (chunk) => {
//    console.log('--- NEW CHUNK RECEIVED ---');
//    console.log(chunk);
// });

console.log('Check comments for Stream implementations');
