// Topic: HTTP Status Codes & JSend Format
// Notes: 
// 2xx = Success (200 OK, 201 Created, 204 No Content)
// 4xx = Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
// 5xx = Server Error (500 Internal Server Error)

const express = require('express');
const app = express();

app.get('/success', (req, res) => {
    res.status(200).json({ status: 'success', data: { message: 'All good!' } });
});

app.get('/fail', (req, res) => {
    // Client sent bad data
    res.status(400).json({ status: 'fail', data: { email: 'Email is required' } });
});

app.get('/error', (req, res) => {
    // Database crashed
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
});
