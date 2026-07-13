// Topic: File System (fs module)
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

// --- Asynchronous (Non-blocking) --- Best Practice!
fs.writeFile(filePath, 'Hello Node.js!', (err) => {
    if (err) throw err;
    console.log('File written successfully.');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:', data);
    });
});

// Note: Always prefer async methods to avoid blocking the main thread!
