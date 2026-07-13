// Topic: Modules (CommonJS vs ES6)
// Notes:
// - CommonJS (default in Node): requires module.exports and equire()
// - ES6 Modules (modern): requires export and import (needs "type": "module" in package.json)

// --- CommonJS Example ---
const math = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

module.exports = math;

// In another file: 
// const math = require('./math');
// console.log(math.add(5, 3));
