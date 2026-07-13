// Topic: Global Error Handling
// Notes: A centralized place to catch all errors instead of using try/catch everywhere.

const express = require('express');
const app = express();

app.get('/break', (req, res, next) => {
    const err = new Error("Something went horribly wrong!");
    err.statusCode = 500;
    next(err); // Passes the error to the global handler
});

// Global Error Handling Middleware (Must have 4 arguments!)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        status: 'error',
        message: err.message
    });
});

// app.listen(3000);
