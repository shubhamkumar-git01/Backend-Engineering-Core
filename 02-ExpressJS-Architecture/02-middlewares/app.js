// Topic: Middlewares
// Notes: Functions that execute during the request-response cycle. They can modify req/res or end the cycle.

const express = require('express');
const app = express();

// Custom Logger Middleware
const logger = (req, res, next) => {
    console.log([${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // IMPORTANT: Pass control to the next middleware/route handler
};

// Global usage
app.use(logger);

app.get('/', (req, res) => {
    res.send('Check your console!');
});

// app.listen(3000);
