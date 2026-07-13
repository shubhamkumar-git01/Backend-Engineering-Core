// Topic: Web Security Best Practices
// Modules: helmet, cors, express-rate-limit

const express = require('express');
const app = express();

/*
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

// 1. Set Security HTTP Headers
app.use(helmet());

// 2. Enable CORS (Cross-Origin Resource Sharing)
app.use(cors()); // Allow all by default, or configure specific origins

// 3. Rate Limiting (Prevent brute-force and DOS attacks)
const limiter = rateLimit({
    max: 100, // Limit each IP to 100 requests per `window`
    windowMs: 60 * 60 * 1000, // 1 hour
    message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);
*/

console.log('Check comments for Security middleware implementations.');
